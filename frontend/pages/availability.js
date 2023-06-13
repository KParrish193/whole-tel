import dynamic from "next/dynamic";

const DynamicCalendarGrid = dynamic(() => import("../components/calendars/CalendarGrid"), {
  ssr: false,
});

// useEffect to fetch?
// GROQ query to determine which location to display, and availability array

export default function Availability() {


    return (
        <div className="availability-container">
            <h2>Availability</h2>
            <DynamicCalendarGrid 
            // pass in location and availability props
            />
        </div>
    );
}
