import { useContext } from "react";
import Calendarcontext from "../context/calendarContext.jsx";
import SmallCalendarcontext from "../context/smallCalendarContext.jsx";

import moment from "moment/dist/moment";

export default function getCurrentDayClass(day, type) {
  const { actualDate } = useContext(Calendarcontext);
  const { clickSmallDate } = useContext(SmallCalendarcontext);

  if (moment(actualDate).isSame(day, "day")) {
    return "bg-blue-600 text-white rounded-full h-7 w-7 hover:bg-blue-700";
  } else if (type === 2 && moment(clickSmallDate).isSame(day, "day")) {
    return "bg-blue-100 rounded-full w-6 h-6 hover:bg-blue-300 hover:text-blue-700";
  }
  return "rounded-full h-7 w-7 hover:bg-gray-100";
}
