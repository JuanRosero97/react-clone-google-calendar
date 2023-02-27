import React, { useState } from "react";
// import moment from "moment/dist/moment";
// import es from "moment/dist/locale/es";
// moment.locale("es", es);

const ContextEvents = React.createContext();

export function EventsContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [actualEvent, setActualEvent] = useState([]);

  return (
    <ContextEvents.Provider
      value={{
        events,
        setEvents,
        showModalEvent,
        setShowModalEvent,
        actualEvent,
        setActualEvent,
      }}
    >
      {children}
    </ContextEvents.Provider>
  );
}

export default ContextEvents;
