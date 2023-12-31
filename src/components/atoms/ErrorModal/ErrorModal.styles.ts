import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContent: {
    height: 250,
    width: "80%",
    backgroundColor: Colors.white.default,
    borderRadius: 10,
    position: "absolute",
    right: "10%",
    top: "35%",
    paddingVertical: 25,
  },
  titleContainer: {
    backgroundColor: Colors.white.default,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    color: Colors.red.default,
    fontSize: 32,
    fontWeight: "900",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoText: {
    fontSize: 24,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.red.default,
    width: 140,
    height: 46,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white.default,
    fontSize: 16,
    fontWeight: "500",
  },
});
