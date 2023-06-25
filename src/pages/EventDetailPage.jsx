import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";

export function EventDetailPage() {
  const { id } = useParams();
  const [events, setEvents] = useState();
  console.log(id);
  useEffect(() => {
    getEventById(id).then((loaderEvents) => setEvents(loaderEvents));
  }, [id]);

  if (!events) {
    return "loading...";
  }
  return (
    <main>
      <img src={events.poster} />
      <h2>{events.id}</h2>
      <h2>{events.name}</h2>
      <h3>{events.id}</h3>
    </main>
  );
}
