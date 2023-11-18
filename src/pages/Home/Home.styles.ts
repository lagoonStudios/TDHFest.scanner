import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 73,
    width: 100,
    resizeMode: "contain",
  },
  sectionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: "90%",
  },
  logoutButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
});
