import React, { useContext } from "react";

import PrincipalDays from "./principalDays.jsx";
import Calendarcontext from "../../context/calendarContext.jsx";

export default function Month() {
  const { daysMatrix } = useContext(Calendarcontext);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {daysMatrix.map((row, rowId) => {
        return (
          <React.Fragment key={rowId}>
            {row.map((day, dayId) => {
              return <PrincipalDays key={dayId} day={day} rowIdx={rowId} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
