import { TouchableHighlight, Text, View } from "react-native";

import { ButtonProps } from "./Button.constants";

import { styles } from "./Button.styles";
import { Colors } from "@/styles/colors";

export function Button(props: ButtonProps) {
  const { disabled, onPress, children, ...buttonProps } = props;

  return (
    <View style={styles.container}>
      <View style={[styles.shadowBtn, disabled ? styles.disabled : null]}></View>
      <TouchableHighlight
        underlayColor={Colors.yellow.opacity}
        style={[styles.button, disabled ? styles.disabled : null]}
        onPress={onPress}
        disabled={disabled}
        {...buttonProps}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableHighlight>
    </View>
  );
}
