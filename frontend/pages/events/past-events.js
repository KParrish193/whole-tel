import styles from "../../styles/pages/PastEvents.module.scss";
import { figtree, metal2 } from "../../styles/fonts";
import EventsGrid from "../../components/sanity-content-layouts/events-grid";

// case studies parent wrapper

// groq query for events in the past (can i even do that?), maybe make it selectable?

const PastEvents = () => {
  return (
    <section>
      <h1>Past Events</h1>
      <EventsGrid />
    </section>
  );
};

export default PastEvents;
