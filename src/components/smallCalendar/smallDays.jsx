import React, { useContext } from "react";
import getCurrentDayClass from "../../services/currentDay.class.jsx";
import SmallCalendarcontext from "../../context/smallCalendarContext.jsx";
import CalendarContext from "../../context/calendarContext.jsx";

export default function SmallDay({ day, rowIdx }) {
  const { clickSmallDate, setClickSmallDate, setSmallSearchDate } =
    useContext(SmallCalendarcontext);

  const { setSearchDate, actualDate } = useContext(CalendarContext);

  function clickDate(day) {
    if (day.format("M") !== clickSmallDate.format("M")) {
      setSmallSearchDate(day);
      setSearchDate(day);
    }
    setClickSmallDate(day);
  }

  function sawDays(day) {
    return (
      <button
        className={`m-auto py-0.5 flex justify-center align-middle ${getCurrentDayClass(
          day,
          2
        )}`}
        onClick={(e) => clickDate(day)}
      >
        <span
          className={` text-[10px] my-auto text-center hover:cursor-pointer`}
        >
          {day.format("D")}
        </span>
      </button>
    );
  }
  return (
    <>
      {rowIdx === 0 ? (
        <div key={rowIdx} className="flex flex-col mt-3">
          <span className="text-[10px] py-1 text-center uppercase">
            {day.format("dd").replace(".", "").charAt(0)}
          </span>
          {sawDays(day)}
        </div>
      ) : (
        sawDays(day)
      )}
    </>
  );
}
