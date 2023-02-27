import React, { useContext } from "react";
import useMonth from "../../hooks/useMonth.jsx";
import Month from "../../components/month/index.jsx";
import Header from "../../components/header/index.jsx";
import Sidebar from "../../components/sidebar/index.jsx";

import useClientGoogle from "../../hooks/useClientGoogle.jsx";
import EventModal from "../../components/modal/index.jsx";

import EventsContext from "../../context/eventsContext.jsx";

export default function Calendar() {
  const valueHook = useMonth();

  const { loading, error, valueError } = useClientGoogle();
  const { showModalEvent, setShowModalEvent } = useContext(EventsContext);

  const closeModal = (e) => {
    if (showModalEvent) setShowModalEvent(false);
  };
  return (
    <>
      {showModalEvent ? <EventModal /> : ""}
      <div className="h-screen flex flex-col" onClick={(e) => closeModal(e)}>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month />
        </div>
      </div>
    </>
  );
}
