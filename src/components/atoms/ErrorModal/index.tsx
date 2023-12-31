import { Modal, View, Text, Pressable } from "react-native";
import { ModalProps } from "./ErrorModal.constants";
import { styles } from "./ErrorModal.styles";

export function ErrorModal(props: ModalProps): React.JSX.Element {
  const { isVisible, setIsVisible, onClose, infoText, ...modalProps } = props;

  const handleClose = () => {
    onClose();
    setIsVisible(false);
  };
  return (
    <Modal animationType="slide" transparent={true} {...modalProps} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Error</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.infoText}>{infoText ? infoText : " Ocurrió un error"}</Text>
          </View>
          <View>
            <Pressable onPress={handleClose} style={styles.button}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
