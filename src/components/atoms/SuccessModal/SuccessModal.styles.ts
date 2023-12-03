import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContent: {
    height: "auto",
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
    color: Colors.green.default,
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
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  infoText: {
    fontSize: 24,
    textAlign: "center",
  },
  ticketText: {
    paddingHorizontal: 16,
    fontSize: 16,
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green.default,
    width: 140,
    height: 46,
    borderRadius: 8,
    marginBottom: 25,
  },
  buttonText: {
    color: Colors.white.default,
    fontSize: 16,
    fontWeight: "500",
  },
  ticketSubtitle: {
    paddingHorizontal: 16,
    fontSize: 20,
    textAlign: "center",
  },
});
