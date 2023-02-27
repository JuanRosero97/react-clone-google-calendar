import React, { useState } from "react";
import moment from "moment/dist/moment";
import es from "moment/dist/locale/es";
moment.locale("es", es);

const Context = React.createContext();

export function CalendarContextProvider({ children }) {
  const [daysMatrix, setDaysMatrix] = useState([]);
  const [actualDate, setActualDate] = useState(
    // moment(new Date("2023-02-22 00:00:00"))
    moment(new Date())
  );
  const [searchDate, setSearchDate] = useState(actualDate);

  return (
    <Context.Provider
      value={{
        daysMatrix,
        setDaysMatrix,
        searchDate,
        setSearchDate,
        actualDate,
        setActualDate,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
