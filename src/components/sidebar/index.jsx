import useMonthSmall from "../../hooks/useMonthSmall.jsx";
import SmallCalendar from "../smallCalendar/index.jsx";
import ButtonCreateEvent from "./buttonCreateEvent.jsx";
import ActiveCalendars from "./activeCalendars.jsx";

export default function Sidebar() {
  const valueHookSmall = useMonthSmall();
  return (
    <div className="border p-5 w-64">
      <ButtonCreateEvent />
      <SmallCalendar />
      <ActiveCalendars />
    </div>
  );
}
