import { useMonth } from "@datepicker-react/hooks";
import Day from "./Day";

import styles from "../../../styles/form/Datepicker.module.scss";
import { figtree } from "../../../styles/fonts";

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek: 0,
  });

  return (
    <div className={styles['datepicker-month-wrapper']}>
        <div className={styles['month-heading']} style={figtree.style}>
            <h4>{monthLabel}</h4>
        </div>
        <div className={styles['day-headings']}>
            {weekdayLabels.map((dayLabel) => (
            <div key={dayLabel} style={figtree.style}>
                {dayLabel}
            </div>
            ))}
        </div>
        <div className={styles['datepicker-calendar-grid']}>
            {days.map((day, index) => {
                if (typeof day === "object") {
                    return (
                    <Day
                        date={day.date}
                        key={day.date.toString()}
                        dayLabel={day.dayLabel}
                    />
                    );
                }

            return <div key={index} />;
            })}
        </div>
    </div>
  );
}

export default Month;
