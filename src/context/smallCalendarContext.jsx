import React, { useState, useContext } from "react";
import Calendarcontext from "./calendarContext.jsx";

const ContextSmall = React.createContext();

export function SmallCalendarContextProvider({ children }) {
  const { searchDate } = useContext(Calendarcontext);
  const [smallMatrix, setSmallMatrix] = useState([]);
  const [searchSmallDate, setSmallSearchDate] = useState(searchDate);
  const [clickSmallDate, setClickSmallDate] = useState(searchDate);

  return (
    <ContextSmall.Provider
      value={{
        smallMatrix,
        setSmallMatrix,
        searchSmallDate,
        setSmallSearchDate,
        clickSmallDate,
        setClickSmallDate,
      }}
    >
      {children}
    </ContextSmall.Provider>
  );
}

export default ContextSmall;
