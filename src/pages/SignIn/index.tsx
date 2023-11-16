import React from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { useAuthErrorMessage, logIn } from "@/hooks/auth";

import { styles } from "./SignIn.styles";
import { FormValues } from "./SignIn.constants";

import { Button } from "@/components/atoms/Button";
import { AppLogo } from "@/components/atoms/AppLogo";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "@/components/atoms/TextInput";
import { FooterLegend } from "@/components/atoms/FooterLegend";
import { BackgroundImg } from "@/components/atoms/BackgroundImg";

export function SignIn(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const { ...methods } = useForm({ defaultValues: { email: "", password: "" } });

  const loginMutation = useMutation(
    (data: { email: string; password: string }) => logIn(data.email, data.password),
    {
      onError: (error: any) => {
        Toast.show({
          type: "error",
          text1: useAuthErrorMessage(error.message),
        });
      },
    }
  );
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Local state ----------------------------------------------------------------------
  const errors = methods.formState.errors;
  // --- END: Local state ----------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    loginMutation.mutate(data);
  };
  // --- END: Data and handlers ----------------------------------------------------------

  return (
    <View style={styles.container}>
      <BackgroundImg>
        <ScrollView contentContainerStyle={styles.contentView}>
          <AppLogo width={300} height={300} />
          <FormProvider {...methods}>
            <View style={styles.formContainer}>
              <View>
                <TextInput
                  name="email"
                  label="Correo electrónico"
                  inputMode="email"
                  rules={{
                    required: "Email is required!",
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  }}
                  testID="email-input"
                />
                {!errors.email && <View style={styles.errorSpace}></View>}
                {errors.email && errors.email.type === "required" && (
                  <Text style={styles.errorText}>Requerido</Text>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <Text style={styles.errorText}>Email Inválido</Text>
                )}
              </View>

              <View>
                <TextInput
                  name="password"
                  label="Password"
                  secureTextEntry
                  rules={{ required: "Password is required!" }}
                  testID="password-input"
                />
                {!errors.password && <View style={styles.errorSpace}></View>}
                {errors.password && errors.password.type === "required" && (
                  <Text style={styles.errorText}>Requerido</Text>
                )}
              </View>
              <Button
                disabled={loginMutation.isLoading}
                onPress={methods.handleSubmit(onSubmit)}
                testID="submit-login">
                Ingresar
              </Button>
            </View>
          </FormProvider>
        </ScrollView>
      </BackgroundImg>
      <FooterLegend />
    </View>
  );
}
