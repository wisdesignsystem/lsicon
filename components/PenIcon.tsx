import type { SVGProps } from "react";
const PenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g id="theme=outline">
      <path
        id="Vector"
        stroke="currentColor"
        d="M2.5 13.5L6.5 9.5M2.5 13.5L11 12.5L12.5 8.5M2.5 13.5L3.5 5L7.5 3.5M12.5 8.5L7.5 3.5M12.5 8.5L14.5 6.5L9.5 1.5L7.5 3.5M7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8Z"
      />
    </g>
  </svg>
);
export default PenIcon;
