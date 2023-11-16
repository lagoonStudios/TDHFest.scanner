import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";

import { View, Text } from "react-native";
import { AppLogo } from "@/components/atoms/AppLogo";
import { BackButton } from "@/components/atoms/BackButton";
import { FooterLegend } from "@/components/atoms/FooterLegend";
import { BackgroundImg } from "@/components/atoms/BackgroundImg";

import { handleTicketUpdate } from "./Scanner.functions";

import { styles } from "./Scanner.styles";

export function Scanner(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const ticketMutation = useMutation(async (ticketId: string) => {
    setScanned(true);
    handleTicketUpdate(ticketId)
      .then(
        (res) => setScanned(false),
        (err) => setScanned(false)
      )
      .finally(() => !scanned ?? setScanned(false));
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
    <View style={styles.container}>
      <BackgroundImg>
        <BackButton containerStyles={styles.backButton} />
        <AppLogo height={100} width={100} />

        {!scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}></BarCodeScanner>
        )}
        <FooterLegend />
      </BackgroundImg>
    </View>
  );
}
