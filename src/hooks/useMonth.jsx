import { useEffect, useContext } from "react";
import Calendarcontext from "../context/calendarContext.jsx";

import createMatrix from "../services/createMatrix.jsx";

export default function useMonth() {
  const { daysMatrix, setDaysMatrix, searchDate } = useContext(Calendarcontext);

  const matrix = createMatrix({ date: searchDate, rows: 5, cols: 7 });

  useEffect(() => {
    setDaysMatrix(matrix);
  }, [setDaysMatrix, searchDate]);

  return { daysMatrix };
}
