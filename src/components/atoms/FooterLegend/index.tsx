import { View, Text } from "react-native";

import { styles } from "./FooterLegend.styles";
import { FooterLegendProps } from "./FooterLegent.constants";

export function FooterLegend(props: FooterLegendProps) {
  const { children } = props;
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        {children}
        <Text style={styles.text}>Powered by Lagoon Studio</Text>
      </View>
    </View>
  );
}
