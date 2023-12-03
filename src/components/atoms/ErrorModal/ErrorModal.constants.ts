import { ModalProps as RNModalProps } from "react-native";

export interface ModalProps extends RNModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  infoText: string;
  name: string;
  identificationDoc: string;
  type: string;
}
