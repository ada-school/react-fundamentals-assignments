import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import { sendPaymentLink } from "../services/paymentsService";

export function TicketPaymentPage() {
  const { eventId, priceId } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleOnclickEvents = async () => {
    navigate("/events/:eventId");
  };
  const handleOnclickTickets = async () => {
    sendPaymentLink(navigate("/tickets/:priceId"));
  };
  return (
    <main>
      <button onClick={handleOnclickEvents}>Events</button>
      <button onClick={handleOnclickTickets}>Ticket</button>
    </main>
  );
}

/* const navigate = useNavigate();

  const handleOnclickTickets = async () => {
    navigate("/tickets/:priceId");
  };
  const handleOnclickEvents = async () => {
    navigate("/events/:eventId");
  };
  <button onClick={() => handleOnclickEvents(true)}>Events</button> */
