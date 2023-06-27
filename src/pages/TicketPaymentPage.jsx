import { useNavigate } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import { sendPaymentLink } from "../services/paymentsService";

export function TicketPaymentPage({ eventId, priceId }) {
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate();
  };
  return (
    <main>
      <h2>Paymet details</h2>
      <p>Event ID: {eventId}</p>
      <p>Price ID: {priceId}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </main>
  );
}

/**
 * 
 * 
 * const [event, setEvent] = useState();
  const { eventId, priceId } = useParams();
  const search = useSearchParams();

  useEffect(() => {
    getEvents().then((event) => setEvent(event));
  }, []);

  const handlePayment = async () => {
    try {
      const email = "user@example.com";
      const event = await getEventById(eventId);
      if (!event || !event.prices) {
        throw new Error(`Precio invalido`);
      }
      const price = event.prices.find((price) => price.id === priceId);
      console.log("Price:", price);
      if (!price) {
        throw new Error("invalido");
      }
      const resul = await sendPaymentLink(email, eventId, priceId);
      window.alert(
        `Payment link was sent to ${email} for ${event.name} and price type: ${price.type}. Result: ${resul}`
      );
    } catch (error) {
      console.log("Error en la transacción de pago:", error);
    }
  };
 */
