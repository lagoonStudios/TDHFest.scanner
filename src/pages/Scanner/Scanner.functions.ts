import { Alert } from "react-native";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebaseConfig";
import { Collections, handleFirebaseErrorMessage } from "@/lib/firebase/functions";

import { Ticket } from "@/models/app.models";

export const handleTicketUpdate = async (ticketId: string) => {
  return new Promise(async (resolve, reject) => {
    if (typeof ticketId !== "string") {
      Alert.alert("ERROR", "QR no reconocido");
      reject(null);
      return;
    }
    try {
      const ticketRef = doc(collection(firestore, Collections.Tickets), ticketId);
      const ticketDoc = await getDoc(ticketRef);
      const ticket = ticketDoc.data() as Ticket;
      if (Boolean(ticketDoc.exists())) {
        if (ticket.attendance) {
          Alert.alert("Info", `El ticket ya fué registrado - ${ticket.name || ""}`);
          resolve(null);
        } else {
          updateDoc(ticketRef, { attendance: true }).then(
            async () => {
              Alert.alert("Exitoso", "Registro exitoso");
              resolve(null);
            },
            (err) => {
              const message = handleFirebaseErrorMessage(err.code || "");
              Alert.alert("ERROR", message);
              reject(err);
            }
          );
        }
      } else {
        Alert.alert("ERROR", "Registro no existente");
        reject(null);
      }
    } catch (error) {
      Alert.alert("ERROR", "Ocurrió un error");
      reject(null);
    }
  });
};
