import { useState } from "react";
import { View, Text } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { manualRegister } from "./ManualRegister.functions";

import { Button } from "@/components/atoms/Button";
import { AppLogo } from "@/components/atoms/AppLogo";
import { TextInput } from "@/components/atoms/TextInput";
import { BackButton } from "@/components/atoms/BackButton";
import { FooterLegend } from "@/components/atoms/FooterLegend";
import { BackgroundImg } from "@/components/atoms/BackgroundImg";

import { styles } from "./ManualRegister.styles";
import { ErrorModal } from "@/components/atoms/ErrorModal";
import { SuccessModal } from "@/components/atoms/SuccessModal";

export function ManualRegister(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const { ...methods } = useForm({ defaultValues: { document: "" } });

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [ticketData, setTicketData] = useState({ name: "", type: "Regular" });

  const registerMutation = useMutation(
    (data: { document: string }) =>
      manualRegister(data.document).then(({ message, type, name }) => {
        setTicketData({ name, type });
        setSuccessMsg(message);
        setShowSuccess(true);
      }),
    {
      onError: ({ message, type }: { message: string; type: string }) => {
        setErrorMsg(message);
        setShowError(true);
      },
    }
  );
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Local state ----------------------------------------------------------------------
  const errors = methods.formState.errors;
  // --- END: Local state ----------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const onSubmit: SubmitHandler<any> = (data) => {
    registerMutation.mutate(data);
  };
  return (
    // --- END: Data and handlers ----------------------------------------------------------
    <BackgroundImg>
      <View style={styles.container}>
        <BackButton containerStyles={styles.backButton} />
        <AppLogo width={300} height={300} />
        <FormProvider {...methods}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                name="document"
                label="Documento de identidad"
                inputMode="numeric"
                rules={{
                  required: "Requerido",
                  min: 0,
                  max: 99999999,
                }}
                testID="document-input"
              />
              {!errors.document && <View style={styles.errorSpace}></View>}
              {errors.document && errors.document.type === "required" && (
                <Text style={styles.errorText}>Requerido</Text>
              )}
              {errors.document &&
                (errors.document.type === "min" || errors.document.type === "max") && (
                  <Text style={styles.errorText}>Documento inválido</Text>
                )}
            </View>
            <Button
              disabled={registerMutation.isLoading}
              onPress={methods.handleSubmit(onSubmit)}
              testID="submit-login">
              Registrar
            </Button>
          </View>
        </FormProvider>
        <FooterLegend />
        <ErrorModal isVisible={showError} setIsVisible={setShowError} infoText={errorMsg} />
        <SuccessModal
          isVisible={showSuccess}
          setIsVisible={setShowSuccess}
          infoText={successMsg}
          name={ticketData.name}
          type={ticketData.type}
        />
      </View>
    </BackgroundImg>
  );
}
