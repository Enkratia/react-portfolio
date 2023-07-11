import * as React from "react";
import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 17"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M8.666 4.833a.667.667 0 0 0-1.333 0v3.666c0 .177.07.347.195.472l2 2a.667.667 0 0 0 .943-.943L8.666 8.223v-3.39Z" />
    <path
      d="M8 1.166a7.333 7.333 0 1 0 0 14.667A7.333 7.333 0 0 0 8 1.166ZM2 8.499a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
