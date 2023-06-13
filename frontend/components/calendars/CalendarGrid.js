import dayjs from "dayjs";
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default function CalendarGrid(location, availability) {
  if (typeof window !== "undefined") {
    const grid = document.getElementById("calendar-grid");
    console.log("document", grid);
  }

  return (
    <div className="calendar-container">
      <div className="calender-header">
        <button></button>
        <button></button>
      </div>
      <div className="calendar-grid" id="calendar-grid">
        GRIDDY
      </div>
    </div>
  );
}
