import { useRef, useContext } from "react";
import { useDay } from "@datepicker-react/hooks";
import { isToday } from "date-fns";

import DatepickerContext from "./formDatepickerContext";
import getColor from "./utils/getColor";

import styles from "../../../styles/form/Datepicker.module.scss";
import { figtree } from "../../../styles/fonts";

function Day({ dayLabel, date }) {
  const formatDay = (date) => {
    if (date < 10) {
        return date.toString().slice(1);
    }
    return date.toString();
    };

    const dateIsToday = isToday(date)

  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    dateIsToday
  );

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      className={styles["day"]}
      style={{
        color: getColorFn({
          selectedFirstOrLastColor: "#FBF7EF",
          normalColor: "#213559",
          selectedColor: "#FBF7EF",
          rangeHoverColor: "#FBF7EF",
          disabledColor: "#808285",
          todayColor: "#E93B20",
        }),
        background: getColorFn({
          selectedFirstOrLastColor: "#E93B20",
          normalColor: "#FFFFFF",
          selectedColor: "#FF6333",
          rangeHoverColor: "#FF6333",
          disabledColor: "#FFFFFF",
          todayColor: "#F7EFDE",
        }),
      }}
    >
      {formatDay(dayLabel)}
    </button>
  );
}

export default Day;
