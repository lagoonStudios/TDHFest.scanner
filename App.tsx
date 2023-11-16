import "@/lib/firebase/firebaseConfig";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query/react-query";

import RootNavigation from "@/navigation";

import Constants from "expo-constants";
import { Colors } from "@/styles/colors";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <View style={styles.appContainer}>
        <RootNavigation />
      </View>

      {/* This must be tha last import */}
      <Toast />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.background,
  },
});
