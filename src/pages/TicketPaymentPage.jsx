import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import { sendPaymentLink } from "../services/paymentsService";

export function TicketPaymentPage() {
  return <main>Ticket payment page</main>;
}
