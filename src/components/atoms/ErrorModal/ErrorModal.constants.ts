import { ModalProps as RNModalprops } from "react-native";

export interface ModalProps extends RNModalprops {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  infoText?: string;
}
