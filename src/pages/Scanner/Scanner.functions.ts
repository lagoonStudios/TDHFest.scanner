import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebaseConfig";
import { Collections, handleFirebaseErrorMessage } from "@/lib/firebase/functions";

import { Ticket, TicketType } from "@/models/app.models";

export const handleTicketUpdate = async (
  ticketId: string,
  ticketTypes: TicketType[],
  scannerId: string
): Promise<{ message: string; name: string; type: string; identificationDoc: string }> => {
  return new Promise(async (resolve, reject) => {
    if (typeof ticketId !== "string") {
      reject({ message: "QR no reconocido" });
      return;
    }
    try {
      const ticketRef = doc(collection(firestore, Collections.Tickets), ticketId);
      const ticketDoc = await getDoc(ticketRef);
      const ticket = ticketDoc.data() as Ticket;
      if (Boolean(ticketDoc.exists())) {
        if (ticket.attendance) {
          reject({
            message: "El ticket ya fué registrado",
            type: getTicketType(ticketTypes, ticket.ticketTypeId),
            name: ticket.name,
            identificationDoc: ticket.identificationDoc,
          });
          // Alert.alert("Info", `El ticket ya fué registrado - ${ticket.name || ""}`);
          // resolve(null);
        } else {
          updateDoc(ticketRef, { attendance: true, scannerId }).then(
            async () => {
              resolve({
                message: "Registro exitoso",
                name: ticket.name,
                type: getTicketType(ticketTypes, ticket.ticketTypeId),
                identificationDoc: ticket.identificationDoc,
              });
            },
            (err) => {
              const message = handleFirebaseErrorMessage(err.code || "");
              reject({ message });
            }
          );
        }
      } else {
        reject({ message: "Registro no existente" });
      }
    } catch (error: any) {
      const message = handleFirebaseErrorMessage(error.code || "");
      reject({ message });
    }
  });
};

function getTicketType(ticketTypes: TicketType[], id: string) {
  const type = ticketTypes.find((type) => type.id === id)?.label || "";
  return type;
}
