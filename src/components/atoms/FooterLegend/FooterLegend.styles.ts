import { StyleSheet } from "react-native";

import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 16,
    width: "100%",
  },
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white.default,
    textAlign: "center",
  },
});
