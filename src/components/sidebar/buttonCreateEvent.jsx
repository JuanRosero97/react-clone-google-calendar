import SvgA from "../../utilities/svgA";

export default function ButtonCreateEvent() {
  return (
    <button
      className="flex items-center rounded-full 
        shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] border p-1 
        hover:shadow-[0px_4px_4px_0px_rgba(60,64,67,0.3),0px_8px_12px_6px_rgba(60,64,67,0.15)]"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" className="ml-2">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>

      <span className="text-sm pl-3 pr-5 ">Crear</span>

      <SvgA
        props="w-3 h-3 mr-2"
        stroke={2.5}
        value={["M19.5 8.25l-7.5 7.5-7.5-7.5"]}
      />
    </button>
  );
}
