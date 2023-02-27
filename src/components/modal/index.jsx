import React, { useContext } from "react";
import moment from "moment";
import EventsContext from "../../context/eventsContext.jsx";
import SvgA from "../../utilities/svgA.jsx";

export default function EventModal() {
  const { setShowModalEvent, actualEvent } = useContext(EventsContext);

  const closeModal = (e) => {
    e.preventDefault();
    setShowModalEvent(false);
  };

  const filterInvitados = actualEvent.attendees?.filter((invitado) => {
    return invitado.responseStatus === "accepted";
  });

  return (
    <div className="h-auto w-1/4 fixed top-1/3 left-[37%] flex justify-center items-centers">
      <form className="bg-white rounded-xl w-full shadow-2xl  pb-3">
        <header className=" px-4 pt-2 flex justify-end items-center">
          {actualEvent ? (
            <a
              className="cursor-pointer p-2 hover:bg-gray-200 rounded-full w-10 text-center  h-10"
              onClick={(e) => closeModal(e)}
            >
              <SvgA
                stroke={1.5}
                props="w-4 h-6 mx-auto"
                value={[
                  "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125",
                ]}
              />
            </a>
          ) : (
            ""
          )}
          <a
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-full w-10 text-center h-9"
            onClick={(e) => closeModal(e)}
          >
            <SvgA
              props="w-5 h-5 mx-auto"
              stroke={1.5}
              value={["M6 18L18 6M6 6l12 12"]}
            />
          </a>
        </header>
        {/* Items del evento */}
        <div className="px-4 py-2 flex justify-start items-center min-h-[32px] relative pr-1">
          <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
            <SvgA
              props="w-5 h-5 fill-blue-500 stroke-blue-500"
              fill="currentColor"
              value={[
                "M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z",
              ]}
            />
          </div>
          <div className="inline-block break-words w-10/12 ">
            <div className="text-xl font-normal leading-7">
              <span>
                {actualEvent.summary ? actualEvent.summary : "(Sin título)"}
              </span>
            </div>
            <div className="leading-7 text-sm font-normal tracking-wide">
              <span>
                {moment(actualEvent.start.dateTime).format("dddd, d MMMM")}{" "}
                &#183; {moment(actualEvent.start.dateTime).format("hh:mm")} -{" "}
                {moment(actualEvent.end.dateTime).format("hh:mma")}
              </span>
            </div>
          </div>
        </div>
        {/* location del evento */}
        {actualEvent.location ? (
          <div className="px-4 py-1 flex justify-start items-center min-h-[32px] relative pr-1">
            <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
              <SvgA
                props="w-6 h-6"
                stroke={1.5}
                value={[
                  "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                  "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                ]}
              />
            </div>
            <div className="inline-block break-words w-10/12 ">
              <div className="font-normal text-sm leading-7">
                <span>{actualEvent.location}</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* invitados del evento */}
        {actualEvent.attendees ? (
          <div className="px-4 py-1 flex justify-start items-center min-h-[32px] relative pr-1">
            <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
              <SvgA
                props="w-6 h-6"
                stroke={1.5}
                value={[
                  "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                ]}
              />
            </div>
            <div className="inline-block break-words w-10/12 ">
              <div className="font-normal text-sm leading-6">
                <span>{actualEvent.attendees.length} invitados</span>
              </div>
              <div className="font-normal text-xs">
                <span>
                  {filterInvitados.length} sí,{" "}
                  {actualEvent.attendees.length - filterInvitados.length}{" "}
                  pendiente(s)
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* descripcion del evento */}
        {actualEvent.description ? (
          <div className="px-4 py-1 flex justify-start items-center min-h-[32px] relative pr-1">
            <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
              <SvgA
                props="w-6 h-6"
                stroke={1.5}
                value={["M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"]}
              />
            </div>
            <div className="inline-block break-words w-10/12 ">
              <div className="font-normal text-sm leading-6">
                <span>{actualEvent.description}</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="px-4 py-1 flex justify-start items-center min-h-[32px] relative pr-1">
          <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
            <SvgA
              props="w-6 h-6"
              stroke={1.5}
              value={[
                "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z",
              ]}
            />
          </div>
          <div className="inline-block break-words w-10/12 ">
            <div className="font-normal text-sm leading-6">
              <span>{actualEvent.creator.email}</span>
            </div>
          </div>
        </div>

        {/* asistira o no */}
        {actualEvent.transparency ? (
          <div className="px-4 py-1 flex justify-start items-center min-h-[32px] relative pr-1">
            <div className="w-[60px] pl-6 max-h-[36px] flex self-stretch items-center">
              <SvgA
                props="w-6 h-6"
                stroke={1.5}
                value={[
                  "M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002",
                ]}
              />
            </div>
            <div className="inline-block break-words w-10/12 ">
              <div className="font-normal text-sm leading-6">
                <span>Disponible</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
