import { Link } from "react-router-dom";
import { getEvents } from "../services/eventsService";
import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";

export function EventListPage() {
  const [events, setEvents] = useState();

  useEffect(() => {
    getEvents().then((eventos) => setEvents(eventos));
  }, []);
  return (
    <main>
      {events?.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          name={event.name}
          start={event.start}
          poster={event.poster}
        />
      ))}
      {/* <Link to={"/events/:eventId"}>Event list page</Link> */}
    </main>
  );
}
