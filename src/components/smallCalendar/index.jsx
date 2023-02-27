import moment from "moment/dist/moment";
import { useContext } from "react";

import SmallMonth from "./smallMonth.jsx";
import SvgA from "../../utilities/svgA.jsx";

import SmallCalendarcontext from "../../context/smallCalendarContext.jsx";

export default function SmallCalendar() {
  const { setSmallSearchDate, searchSmallDate } =
    useContext(SmallCalendarcontext);

  const reduce = (e) => {
    setSmallSearchDate(moment(searchSmallDate).subtract(1, "month"));
  };

  const advance = (e) => {
    setSmallSearchDate(moment(searchSmallDate).add(1, "month"));
  };

  return (
    <div className="mt-5">
      <header className="flex justify-between -mb-1 align-middle items-center">
        <p className="text-gray-500 font-bold capitalize text-sm">
          {moment(searchSmallDate).format("MMMM YYYY")}
        </p>
        <div>
          <button
            className="cursor-pointer text-gray-900 hover:bg-gray-100 rounded-full p-2"
            onClick={(e) => reduce(e)}
          >
            <SvgA props="w-3 h-3" value={["M15.75 19.5L8.25 12l7.5-7.5"]} />
          </button>
          <button
            className="cursor-pointer text-gray-900 hover:bg-gray-100 rounded-full p-2"
            onClick={(e) => advance(e)}
          >
            <SvgA props="w-3 h-3" value={["M8.25 4.5l7.5 7.5-7.5 7.5"]} />
          </button>
        </div>
      </header>
      <SmallMonth />
    </div>
  );
}
