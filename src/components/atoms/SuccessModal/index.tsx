import { Modal, View, Text, Pressable } from "react-native";
import { styles } from "./SuccessModal.styles";
import { ModalProps } from "./SuccessModal.constants";

export function SuccessModal(props: ModalProps): React.JSX.Element {
  const { isVisible, setIsVisible, onClose, infoText, name, type, ...modalProps } = props;
  const handleClose = () => {
    onClose();
    setIsVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} {...modalProps} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Exitoso</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.infoText}>{infoText}</Text>
            <Text style={styles.ticketText}>
              <Text style={styles.textBold}>Tipo de entrada:</Text>
              <Text>{type}</Text>
            </Text>
            <Text style={styles.ticketText}>
              <Text style={styles.textBold}>Nombre: </Text>
              <Text>{name}</Text>
            </Text>
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
