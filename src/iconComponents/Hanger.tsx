import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <g clipPath="url(#hanger_svg__a)">
      <path d="m15.222 10.74-5.76-3.601a.632.632 0 0 0-.335-.096h-.495v-.269a2.333 2.333 0 0 0 1.697-2.242A2.332 2.332 0 0 0 8 2.203a2.332 2.332 0 0 0-2.33 2.33.632.632 0 0 0 1.265 0 1.066 1.066 0 0 1 2.13 0c0 .586-.478 1.064-1.065 1.064a.632.632 0 0 0-.632.632v.814h-.495a.632.632 0 0 0-.335.096l-5.76 3.6a1.656 1.656 0 0 0 .877 3.057h12.69a1.656 1.656 0 0 0 .877-3.057Zm-.877 1.793H1.655a.39.39 0 0 1-.207-.722l5.607-3.504h1.89l5.607 3.504a.39.39 0 0 1-.207.722Z" />
    </g>
    <defs>
      <clipPath id="hanger_svg__a">
        <rect />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHanger;
