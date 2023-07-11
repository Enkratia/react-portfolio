import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 17"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M2.861 3.362c.26-.26.683-.26.943 0L8 7.558l4.196-4.196a.667.667 0 0 1 .942.943L8.942 8.5l4.195 4.196a.667.667 0 1 1-.942.942L7.999 9.443l-4.195 4.195a.667.667 0 0 1-.943-.942L7.057 8.5 2.86 4.305a.667.667 0 0 1 0-.943Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCross;
