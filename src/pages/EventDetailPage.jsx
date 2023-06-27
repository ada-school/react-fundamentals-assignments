import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";
import styles from "./EventDetailPage.module.css";

export function EventDetailPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventById(eventId).then((loadedEvents) => setEvent(loadedEvents));
  }, [eventId]);

  if (!event) {
    return "loading...";
  }
  return (
    <main>
      <p>Componente de detalles EventDetailPage</p>
      <img className={styles.img} src={event.poster} alt="poster" />
      <div key={event.id}>
        <p>{event.id}</p>
        <p>{event.name}</p>
        <p>{event.start.toLocaleDateString()}</p>
        <p>{event.description}</p>
        <div key={event.id}>
          <p>
            {event.prices?.map((el) => (
              <div key={el.id}>
                <p>{el.id}</p>
                <p>{el.type}</p>
                <p>{el.price}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
}
