import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";
export function EventCard({ id, poster, start, name, description, price }) {
  console.log(id);
  return (
    <Link to={`/events/:eventId/${id}`}>
      <article className={styles.container}>
        <div className={styles.containerCard}>
          <img src={poster} alt="" className={styles.imagen} />
          <p>Id: {id}</p>
          <p>Start: {start.toLocaleDateString()}</p>
          <p>
            Price List
            {price?.map((el) => (
              <div key={el.id}>
                <p>{el.id}</p>
                <p>{el.type}</p>
                <p>{el.price}</p>
              </div>
            ))}
          </p>
          <p>Name: {name}</p>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}
