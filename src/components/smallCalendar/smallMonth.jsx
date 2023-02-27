import React, { useContext } from "react";
import SmallCalendarcontext from "../../context/smallCalendarContext.jsx";
import SmallDay from "./smallDays.jsx";

export default function SmallMonth() {
  const { smallMatrix } = useContext(SmallCalendarcontext);

  return (
    <div className="grid grid-cols-7 grid-rows-none">
      {smallMatrix.map((row, rowId) => {
        return (
          <React.Fragment key={rowId}>
            {row.map((day, dayId) => {
              return <SmallDay key={dayId} day={day} rowIdx={rowId} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
