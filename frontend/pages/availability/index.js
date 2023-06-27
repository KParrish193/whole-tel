import styles from "../../styles/pages/Availability.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

import dynamic from "next/dynamic";

// figure out how to dynamically make the slug "availability/location"

// Parent page to display availability for each property

const DynamicCalendarGrid = dynamic(
  () => import("../../components/calendars/CalendarGrid"),
  {
    ssr: false,
  }
);

// useEffect to fetch?
// GROQ query to determine which location to display, and availability array

export default function Availability() {
  return (
    <div className={styles['availability-container']}>
      <h2>Availability</h2>
      <DynamicCalendarGrid
      // pass in location and availability props
      />
    </div>
  );
}
