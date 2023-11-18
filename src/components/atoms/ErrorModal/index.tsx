import { Modal as RNModal, View, Text, Pressable } from "react-native";
import { ModalProps } from "./ErrorModal.constants";
import { styles } from "./ErrorModal.styles";

export function ErrorModal(props: ModalProps): React.JSX.Element {
  const { isVisible, setIsVisible, infoText, ...modalProps } = props;

  return (
    <RNModal animationType="slide" transparent={true} {...modalProps} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Error</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text>{infoText ? infoText : " Ocurrió un error"}</Text>
          </View>
          <View>
            <Pressable onPress={() => setIsVisible(false)} style={styles.button}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </RNModal>
  );
}
