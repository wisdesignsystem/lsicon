import * as React from "react";
import type { SVGProps } from "react";
const PathIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M6 11.25H12C13.1046 11.25 14 10.3546 14 9.25C14 8.14543 13.1046 7.25 12 7.25H5C3.89543 7.25 3 6.35457 3 5.25C3 4.14543 3.89543 3.25 5 3.25H8.24219M4.5 10C5.32843 10 6 10.6716 6 11.5C6 12.3284 5.32843 13 4.5 13C3.67157 13 3 12.3284 3 11.5C3 10.6716 3.67157 10 4.5 10ZM10 2C10.8284 2 11.5 2.67157 11.5 3.5C11.5 4.32843 10.8284 5 10 5C9.17157 5 8.5 4.32843 8.5 3.5C8.5 2.67157 9.17157 2 10 2Z"
      />
    </g>
  </svg>
);
export default PathIcon;