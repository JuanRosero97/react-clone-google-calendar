import { useState, useEffect, useContext } from "react";
import moment from "moment";

import { getEvents } from "../services/googleCalendarApi";
import Calendarcontext from "../context/calendarContext.jsx";
import EventsContext from "../context/eventsContext.jsx";

export default function useClientGoogle() {
  //   const [authenticate, setAuthenticate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [valueError, setValueError] = useState(null);

  const { daysMatrix } = useContext(Calendarcontext);
  const { setEvents, setShowModalEvent } = useContext(EventsContext);

  useEffect(
    function () {
      setLoading(true);

      if (daysMatrix.length > 0) {
        getEvents(
          moment(daysMatrix[0][0]).toISOString(),
          moment(daysMatrix[4][6]).toISOString()
        )
          .then((eventos) => {
            setEvents(eventos);
            // console.log(eventos);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setShowModalEvent(false);
            console.log(err);
            setError(true);
            setValueError(err.message);
          });
      }
    },
    [setEvents, daysMatrix]
  );

  return { error, valueError, loading };
}
