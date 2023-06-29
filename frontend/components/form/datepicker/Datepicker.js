import { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { format } from "date-fns";

import Month from "./Month";
import NavButton from "./NavButton";
import DatepickerContext from "./formDatepickerContext";

import styles from "../../../styles/form/Datepicker.module.scss";
import { figtree } from "../../../styles/fonts";

function Datepicker() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  const dateIsBlockedFn = (date) => {
    const today = new Date();
    const formattedToday = format(today, "yyyy-MM-dd");
    const formattedDate = format(date, "yyyy-MM-dd");
    return formattedDate < formattedToday;
  };

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
  });

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked: dateIsBlockedFn,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      {/* <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div> */}
      {console.log(state.startDate, state.endDate)}

      <div className={styles["datepicker-wrapper"]}>
        <div className={styles["nav-buttons-wrapper"]}>
          <NavButton onClick={goToPreviousMonthsByOneMonth}>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696698C10.4645 0.403805 9.98959 0.403805 9.6967 0.696698C9.40381 0.989592 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM6.55671e-08 6.75L15 6.75L15 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z" />
            </svg>
          </NavButton>
          <NavButton onClick={goToNextMonthsByOneMonth}>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696698C10.4645 0.403805 9.98959 0.403805 9.6967 0.696698C9.40381 0.989592 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM6.55671e-08 6.75L15 6.75L15 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z" />
            </svg>
          </NavButton>
        </div>
      </div>
      <div className={styles["months-container"]}>
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
