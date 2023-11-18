import { TicketType } from "@/models/app.models";
import { createContext } from "react";

export const TicketTypeContext = createContext<TicketType[]>([]);
