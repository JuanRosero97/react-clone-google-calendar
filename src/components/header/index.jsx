import React, { useContext } from "react";
import moment from "moment/dist/moment";

import Calendarcontext from "../../context/calendarContext.jsx";
import SmallCalendarcontext from "../../context/smallCalendarContext.jsx";

import SvgA from "../../utilities/svgA.jsx";

export default function Header() {
  const { searchDate, setSearchDate, actualDate } = useContext(Calendarcontext);
  const { setSmallSearchDate, setClickSmallDate } =
    useContext(SmallCalendarcontext);

  const updateDates = (date) => {
    let mydate = date;
    setSmallSearchDate(mydate);
    setSearchDate(mydate);
  };

  const today = (e) => {
    updateDates(actualDate);
    setClickSmallDate(actualDate);
  };

  const clickReduce = (e) => {
    updateDates(moment(searchDate).subtract(1, "month"));
  };

  const clickAdvance = (e) => {
    updateDates(moment(searchDate).add(1, "month"));
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <img
        src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${actualDate.format(
          "D"
        )}_2x.png`}
        alt="calendar"
        className="mr-2 w-12 h-12"
      />
      <h1 className="mr-10 text-xl text-gray-700">Calendario</h1>
      <button
        className="border rounded py-2 px-4 mr-5 hover:bg-gray-100"
        onClick={(e) => today(e)}
      >
        Hoy
      </button>
      <button
        className="cursor-pointer text-gray-900 ml-2 hover:bg-gray-100 rounded-full p-2"
        onClick={(e) => clickReduce(e)}
      >
        <SvgA value={["M15.75 19.5L8.25 12l7.5-7.5"]} />
      </button>
      <button
        className="cursor-pointer text-gray-900 hover:bg-gray-100 rounded-full p-2"
        onClick={(e) => clickAdvance(e)}
      >
        <SvgA value={["M8.25 4.5l7.5 7.5-7.5 7.5"]} />
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold capitalize">
        {moment(searchDate).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
