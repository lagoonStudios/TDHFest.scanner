import { useMutation } from "@tanstack/react-query";
import React, { useState, useEffect, useContext } from "react";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";

import { View, Text } from "react-native";
import { AppLogo } from "@/components/atoms/AppLogo";
import { BackButton } from "@/components/atoms/BackButton";
import { FooterLegend } from "@/components/atoms/FooterLegend";
import { BackgroundImg } from "@/components/atoms/BackgroundImg";

import { handleTicketUpdate } from "./Scanner.functions";

import { styles } from "./Scanner.styles";
import { TicketTypeContext } from "@/context/TicketType.context";
import { SuccessModal } from "@/components/atoms/SuccessModal";
import { ErrorModal } from "@/components/atoms/ErrorModal";
import { useAuthentication } from "@/hooks/auth";

export function Scanner(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const ticketTypes = useContext(TicketTypeContext);

  const { user } = useAuthentication();

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const [ticketData, setTicketData] = useState({
    name: "",
    type: "Regular",
    identificationDoc: "",
  });

  const ticketMutation = useMutation(async (ticketId: string) => {
    setScanned(true);
    handleTicketUpdate(ticketId, ticketTypes, user?.uid || "").then(
      ({ message, name, type, identificationDoc }) => {
        setTicketData({ name, type, identificationDoc });
        setSuccessMsg(message);
        setShowSuccess(true);
      },
      ({ message, name, type, identificationDoc }) => {
        setTicketData({ name, type, identificationDoc });
        setErrorMsg(message);
        setShowError(true);
      }
    );
  });
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
      setScanned(false);
    })();
  }, []);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const handleBarCodeScanned = ({ data }: { data: string }) => ticketMutation.mutate(data);
  const onCloseModal = () => {
    setScanned(false);
  };
  // --- END: Data and handlers ----------------------------------------------------------

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Esperando permisos</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Sin acceso a la cámara</Text>
      </View>
    );
  }

  return (
    <BackgroundImg>
      <View style={styles.container}>
        <BackButton containerStyles={styles.backButton} />
        <AppLogo height={100} width={100} />

        {!scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}></BarCodeScanner>
        )}
        <FooterLegend />
        <ErrorModal
          isVisible={showError}
          setIsVisible={setShowError}
          onClose={onCloseModal}
          infoText={errorMsg}
          type={ticketData.type}
          name={ticketData.name}
          identificationDoc={ticketData.identificationDoc}
        />
        <SuccessModal
          isVisible={showSuccess}
          setIsVisible={setShowSuccess}
          onClose={onCloseModal}
          infoText={successMsg}
          name={ticketData.name}
          type={ticketData.type}
          identificationDoc={ticketData.identificationDoc}
        />
      </View>
    </BackgroundImg>
  );
}
