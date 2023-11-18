import { ImageBackground, StyleSheet } from "react-native";

export function BackgroundImg({ children }: { children: React.JSX.Element }): React.JSX.Element {
  return (
    <ImageBackground
      source={require("@/assets/background.png")}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
