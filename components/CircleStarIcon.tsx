import * as React from "react";
import type { SVGProps } from "react";
const CircleStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g id="theme=outline">
      <g id="Vector">
        <path
          stroke="currentColor"
          d="M8 5L8.95515 6.93535L11.0909 7.24569L9.54547 8.75215L9.9103 10.8793L8 9.875L6.0897 10.8793L6.45453 8.75215L4.90907 7.24569L7.04485 6.93535L8 5Z"
        />
        <path
          stroke="currentColor"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z"
        />
      </g>
    </g>
  </svg>
);
export default CircleStarIcon;
