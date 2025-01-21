import * as React from "react";
import type { SVGProps } from "react";
const BulbFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g id="theme=filled">
      <g id="Subtract">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8 1C5.23858 1 3 3.23858 3 6V6.60611L5 11.1061V13H11V11.1061L13 6.60611V6C13 3.23858 10.7614 1 8 1ZM7.25 7.66667L6.1 9.2L6.9 9.8L7.25 9.33333L7.5 9.66667V12H8.5V9.66667L8.75 9.33333L9.1 9.8L9.9 9.2L8.75 7.66667L8 8.66667L7.25 7.66667Z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M11 15V14H5V15H11Z" />
      </g>
    </g>
  </svg>
);
export default BulbFilledIcon;