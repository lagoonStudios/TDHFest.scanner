import { StyleSheet } from "react-native";

import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    borderRadius: 10,
    backgroundColor: Colors.yellow.default,
    padding: 15,
    shadowColor: Colors.black.default,
  },
  shadowBtn: {
    position: "absolute",
    bottom: -8,
    right: -6,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.black.default,
    zIndex: 0,
    borderRadius:10
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    color: Colors.black.default,
  },
});
