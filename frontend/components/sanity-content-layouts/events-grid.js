import styles from "../../styles/sanity-components/EventsGrid.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const EventsGrid = (events) => {
  return (
    <section>
      {
        events.length > 1
          ? events.map((event) => {
              <div className={styles["event-card-wrapper"]} key={event}></div>;
            })
          : null
        // include empty state?
      }
    </section>
  );
};

export default EventsGrid;
