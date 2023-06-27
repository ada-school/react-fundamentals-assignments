import { getEvents } from "../services/eventsService";
import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { Link } from "react-router-dom";

export function EventListPage({ eventId, priceId }) {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvents().then((eventos) => setEvent(eventos));
    setEvent(event);
  }, []);

  return (
    <main>
      {event?.map((event) => (
        <EventCard
          key={event.id}
          id={
            <div>
              <Link to={`/events/${event.id}`}>
                <button>Detalle</button>
              </Link>
              <Link to={`/events/${eventId}/tickets/${priceId}`}>
                <button>Tickets</button>
              </Link>
            </div>
          }
          name={event.name}
          poster={event.poster}
        />
      ))}
    </main>
  );
}
