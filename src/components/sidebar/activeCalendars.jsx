import SvgA from "../../utilities/svgA";

export default function ActiveCalendars() {
  return (
    <div className=" w-full mt-6">
      <div className="w-full -ml-2">
        <button
          id="dropdownDefaultButton"
          className="flex justify-between hover:bg-gray-200 font-semibold text-sm px-2 py-1.5 text-center items-center w-full text-gray-500"
          type="button"
        >
          Mis calendarios
          <SvgA value={["M19 9l-7 7-7-7"]} />
        </button>
        <div id="dropdown" className="z-10">
          <ul
            className="px-2  py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <div className="flex items-center">
                <label className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="accent-blue-500 mr-2 w-4 h-4"
                    checked
                    onChange={() => {}}
                  />
                  Mi calendario
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
