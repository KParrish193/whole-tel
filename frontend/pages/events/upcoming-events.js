import styles from "../../styles/pages/UpcomingEvents.module.scss";
import { figtree, soehne } from "../../styles/fonts";
import EventsGrid from "../../components/sanity-content-layouts/events-grid";

const UpcomingEvents = () => {
  return (
    <section className={styles["upcoming-events-page-wrapper"]}>
      <h1>Upcoming Events</h1>
      <EventsGrid />
    </section>
  );
};

export default UpcomingEvents;
