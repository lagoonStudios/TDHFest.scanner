import { query, collection, where, getDocs, updateDoc } from "firebase/firestore";

import { Collections } from "@/lib/firebase/functions";
import { firestore } from "@/lib/firebase/firebaseConfig";

import { Ticket, TicketType } from "@/models/app.models";

export function manualRegister(
  document: string,
  ticketTypes: TicketType[],
  scannerId: string
): Promise<{ message: string; name: string; type: string; identificationDoc: string }> {
  return new Promise(async (resolve, reject) => {
    const ticketsRef = collection(firestore, Collections.Tickets);
    const q = query(ticketsRef, where("identificationDoc", "==", document));
    const docsSnapshot = await getDocs(q);
    const docsRef = docsSnapshot.docs.map((doc) => (doc.exists() ? doc : undefined));
    if (docsRef[0]) {
      let ticket = docsRef[0].data() as Ticket;
      if (!ticket.attendance) {
        updateDoc(docsRef[0].ref, { attendance: true, scannerId }).then(
          () => {
            // Alert.alert("Exitoso", "Registro exitoso");
            resolve({
              message: "Registro exitoso",
              name: ticket.name,
              type: getTicketType(ticketTypes, ticket.ticketTypeId),
              identificationDoc: ticket.identificationDoc,
            });
          },
          (error) => {
            reject({ message: "Error al registrar" });
          }
        );
      } else {
        reject({
          message: "El ticket ya fué registrado",
          type: getTicketType(ticketTypes, ticket.ticketTypeId),
          name: ticket.name,
          identificationDoc: ticket.identificationDoc,
        });
      }
    } else {
      reject({ message: "Registro no existente" });
    }
  });
}

function getTicketType(ticketTypes: TicketType[], id: string) {
  const type = ticketTypes.find((type) => type.id === id)?.label || "";
  return type;
}
