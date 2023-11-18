import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {

  },
  contentView: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  formContainer: {
    display: "flex",
    gap: 20,
    width: "70%",
  },
  errorText: {
    color: Colors.red.default,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "600",
  },
  errorSpace: {
    height: 22,
  },
});
