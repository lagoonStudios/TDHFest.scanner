import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  formContainer: { margin: 32 },
  errorText: {
    color: Colors.red.default,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "600",
  },
  inputContainer: {
    marginBottom: 16,
  },
  errorSpace: {
    height: 35,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 5,
  },
});
