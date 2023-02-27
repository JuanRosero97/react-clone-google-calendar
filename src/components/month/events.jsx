import moment from "moment/dist/moment";
import { useContext } from "react";
import EventsContext from "../../context/eventsContext.jsx";

let maxEventos = 3;

export default function Events({ day, eventos }) {
  const { setShowModalEvent, setActualEvent } = useContext(EventsContext);

  const eventosFiltrados = eventos.filter((event) => {
    return (
      moment(event.start.dateTime).format("DD/MM/YYYY") ===
      moment(day).format("DD/MM/YYYY")
    );
  });

  function handleClick(e, evento) {
    setActualEvent(evento);
    setShowModalEvent(true);
  }

  function pintarEventos(eventosPintar) {
    let liEvents = [];
    for (let i = 0; i < eventosPintar; i++) {
      let evento = eventosFiltrados[i];
      liEvents.push(
        <li
          key={evento.id}
          className="eventValue mb-1"
          onClick={(e) => handleClick(e, evento)}
        >
          <span className="font-normal">
            {moment(evento.start.dateTime).format("h:mma").replace(":00", "")}
          </span>
          &nbsp;
          <span>{evento.summary ? evento.summary : "(Sin título)"}</span>
        </li>
      );
    }

    /* Pinta un LI extra para indicar cuantos eventos más tiene */
    if (eventosFiltrados.length > eventosPintar) {
      liEvents.push(
        <li key={eventosPintar} className="eventValue mb-1">
          <span>{eventosFiltrados.length - maxEventos} más </span>
        </li>
      );
    }

    return liEvents;
  }

  return eventosFiltrados.length > maxEventos
    ? pintarEventos(maxEventos)
    : pintarEventos(eventosFiltrados.length);
}
