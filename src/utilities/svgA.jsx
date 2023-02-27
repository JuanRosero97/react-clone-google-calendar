export default function SvgA({
  props = "w-4",
  value = ["M5 13l4 4L19 7"],
  stroke = 2.5,
  fill = "none",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke="currentColor"
      className={props}
    >
      {value.map((item, index) => {
        return (
          <path
            key={index}
            strokeLinecap="round"
            strokeLinejoin="round"
            d={item}
          />
        );
      })}
    </svg>
  );
}
