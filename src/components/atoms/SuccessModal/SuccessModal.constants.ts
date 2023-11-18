import { ModalProps as RNModalProps } from "react-native";

export interface ModalProps extends RNModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  infoText: string;
  name: string;
  type: string;
}
