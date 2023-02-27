import { useEffect, useContext } from "react";
import Calendarcontext from "../context/calendarContext.jsx";
import SmallCalendarContext from "../context/smallCalendarContext.jsx";

import createMatrix from "../services/createMatrix.jsx";

export default function useMonthSmall() {
  const { searchDate } = useContext(Calendarcontext);
  const { smallMatrix, setSmallMatrix, searchSmallDate, setSmallSearchDate } =
    useContext(SmallCalendarContext);

  const matrix = createMatrix({ date: searchSmallDate, rows: 6, cols: 7 });

  useEffect(() => {
    setSmallMatrix(matrix);
  }, [setSmallMatrix, searchSmallDate, setSmallSearchDate]);

  return { smallMatrix };
}
