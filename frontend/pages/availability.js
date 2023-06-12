// import dynamic from "next/dynamic";

// const CalendarGrid = dynamic(
//   () => import("../components/calendars/CalendarGrid"),
//   { ssr: false }
// );

import CalendarGrid from "../components/calendars/CalendarGrid";

export default function Availability() {
  return (
    <div className="availability-container">
        <h2>Availability</h2>
        <CalendarGrid />
    </div>
  );
}
