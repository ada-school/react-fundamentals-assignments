import styles from "./EventCard.module.css";
export function EventCard({ id, poster, start, name, description, prices }) {
  return (
    <article className={styles.container}>
      <div className={styles.containerCard}>
        <img src={poster} alt="" className={styles.imagen} />
        <span>{id}</span>
        <span>{start}</span>
        <div key={id}>
          {Array.isArray(prices) &&
            prices?.map((el) => (
              <div key={el.id}>
                <p>{el.id}</p>
                <p>{el.type}</p>
                <p>{el.price}</p>
              </div>
            ))}
        </div>
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </article>
  );
}
