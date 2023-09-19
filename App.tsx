import { QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./src/pages/Home/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { queryClient } from "@/lib/react-query/react-query";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Home />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
