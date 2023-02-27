import React, { useContext } from "react";

import getCurrentDayClass from "../../services/currentDay.class.jsx";
import Events from "./events.jsx";

import EventsContext from "../../context/eventsContext.jsx";
export default function PrincipalDays({ day, rowIdx }) {
  const { events } = useContext(EventsContext);

  return (
    <div className="border border-gray-200 flex flex-col h-full">
      <header className="flex flex-col items-center">
        {rowIdx === 0 ? (
          <p className="text-[11px] mt-1 uppercase">
            {day.format("ddd").replace(".", "")}
          </p>
        ) : (
          ""
        )}
        <p
          className={`text-[12px] my-1 p-1 text-center hover:cursor-pointer ${getCurrentDayClass(
            day,
            1
          )} ${day.format("D") === "1" ? "w-auto" : ""}`}
        >
          {day.format("D") === "1"
            ? day.format("D MMM").replace(".", "")
            : day.format("D")}
        </p>
      </header>

      {events?.data?.items.length > 0 ? (
        <div className="px-1">
          <ul>
            <Events day={day} eventos={events?.data?.items} />
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
