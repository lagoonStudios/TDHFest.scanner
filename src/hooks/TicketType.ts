import { firestore } from "@/lib/firebase/firebaseConfig";
import { Collections, eventId } from "@/lib/firebase/functions";
import { TicketType } from "@/models/app.models";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useTicketType(): TicketType[] {
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const q = query(collection(firestore, Collections.TicketTypes), where("eventId", "==", eventId));

  useEffect(() => {
    getDocs(q).then((docsRef) => {
      const docs = docsRef.docs.map((doc) => ({ ...(doc.data() as TicketType), id: doc.id }));
      setTicketTypes(docs);
    });
  }, []);

  return ticketTypes;
}
