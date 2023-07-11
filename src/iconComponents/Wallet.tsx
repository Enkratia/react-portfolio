import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.25 2.75a1 1 0 0 0-1 1v1.5h17.5v-1.5a1 1 0 0 0-1-1H3.25Zm16.5 4.5H2.25v2.5h17.5v-2.5Zm0 4.5H2.25v4.5a1 1 0 0 0 1 1h15.5a1 1 0 0 0 1-1v-4.5Zm-19.5-8a3 3 0 0 1 3-3h15.5a3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3H3.25a3 3 0 0 1-3-3V3.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
