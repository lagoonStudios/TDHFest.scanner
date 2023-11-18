export enum Collections {
  Users = "Users",
  Tickets = "Tickets",
  TicketTypes = "TicketTypes",
  Events_PaymentTypes = "Events_PaymentTypes",
}

export const eventId = "id6jrKAOPHWG0RBkTAfa";

export const handleFirebaseErrorMessage = (errorCode: string) => {
  const errorMessageMap: { [key: string]: string } = {
    "not-found": "No encontrado",
  };
  const defaultMessage = "Algo salió mal";

  const mappedMessage = Object.keys(errorMessageMap).find((key) => errorCode.includes(key));

  return mappedMessage ? errorMessageMap[mappedMessage] : defaultMessage;
};
