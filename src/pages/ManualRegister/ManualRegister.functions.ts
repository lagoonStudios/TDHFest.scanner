import { query, collection, where, getDocs, updateDoc } from "firebase/firestore";

import { Collections } from "@/lib/firebase/functions";
import { firestore } from "@/lib/firebase/firebaseConfig";

import { Ticket } from "@/models/app.models";

export function manualRegister(
  document: string
): Promise<{ message: string; name: string; type: string }> {
  return new Promise(async (resolve, reject) => {
    const ticketsRef = collection(firestore, Collections.Tickets);
    const q = query(ticketsRef, where("identificationDoc", "==", document));
    const docsSnapshot = await getDocs(q);
    const docsRef = docsSnapshot.docs.map((doc) => (doc.exists() ? doc : undefined));
    if (docsRef[0]) {
      let ticket = docsRef[0].data() as Ticket;
      if (!ticket.attendance) {
        updateDoc(docsRef[0].ref, { attendance: true }).then(
          () => {
            // Alert.alert("Exitoso", "Registro exitoso");
            resolve({ message: "Registro exitoso", name: "Leo", type: "VIP" });
          },
          (error) => {
            reject({ message: "Error al registrar", type: "Error" });
          }
        );
      } else {
        reject({ message: "El ticket ya fué registrado", type: "Info" });
      }
    } else {
      reject({ message: "Registro no existente", type: "Error" });
    }
  });
}
