import { ModalProps as RNModalProps } from "react-native";

export interface ModalProps extends RNModalProps {
  isVisible: boolean;
  onClose: () => void;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  infoText: string;
  name: string;
  type: string;
  identificationDoc: string;
}
