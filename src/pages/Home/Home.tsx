import React from "react";
import { View, Text } from "react-native";
import { REACT_APP_BASE_URL } from "@env";

export function Home(): React.JSX.Element {
  
  return (
    <View>
      <Text>Home works!</Text>
      <Text>Url: {REACT_APP_BASE_URL}</Text> 
    </View>
  );
}
