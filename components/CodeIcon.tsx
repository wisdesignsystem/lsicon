import type { SVGProps } from "react";
const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12 10.5L14.5 8L12 5.5M6 13L10 3M4 10.5L1.5 8L4 5.5"
      />
    </g>
  </svg>
);
export default CodeIcon;
