import styles from "../../styles/sanity-components/EventsGrid.module.scss";
import { figtree, soehne } from "../../styles/fonts";

const EventsGrid = (events) => {
  return (
    <section className={`${styles["events-grid"]}`}>
      { events.length > 1
          ? events.map((event) => {
              <div className={styles["event-card-wrapper"]} key={event}>
                <div className={styles["event-details-copy"]}>
                  <h4></h4>
                  <p></p>
                </div>
              </div>;
            })
          : <div className={styles["no-events"]}>
            <h3 style={soehne.style}>No Events to Show</h3>
          </div>
        // include empty state?
      }
    </section>
  );
};

export default EventsGrid;
