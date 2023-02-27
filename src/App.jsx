import "./App.css";
import Calendar from "./pages/calendar";
import { CalendarContextProvider } from "./context/calendarContext.jsx";
import { SmallCalendarContextProvider } from "./context/smallCalendarContext";
import { EventsContextProvider } from "./context/eventsContext";

function App() {
  return (
    <CalendarContextProvider>
      <SmallCalendarContextProvider>
        <EventsContextProvider>
          <Calendar />
        </EventsContextProvider>
      </SmallCalendarContextProvider>
    </CalendarContextProvider>
  );
}

export default App;
