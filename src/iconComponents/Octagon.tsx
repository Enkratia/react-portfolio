import * as React from "react";
import type { SVGProps } from "react";
const SvgOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6.004 2.467A3.3 3.3 0 0 1 8.337 1.5h7.326a3.3 3.3 0 0 1 2.333.967l4.037 4.037A3.3 3.3 0 0 1 23 8.837v7.326a3.3 3.3 0 0 1-.967 2.333l-4.037 4.038a3.3 3.3 0 0 1-2.333.966H8.337a3.3 3.3 0 0 1-2.333-.967l-4.037-4.037A3.3 3.3 0 0 1 1 16.163V8.837a3.3 3.3 0 0 1 .967-2.333l4.037-4.037ZM8.337 3.5a1.3 1.3 0 0 0-.919.38L3.381 7.919a1.3 1.3 0 0 0-.381.92v7.325c0 .345.137.675.38.919l4.038 4.037a1.3 1.3 0 0 0 .92.381h7.325a1.3 1.3 0 0 0 .919-.38l4.037-4.038a1.3 1.3 0 0 0 .381-.92V8.838a1.3 1.3 0 0 0-.38-.919l-4.038-4.037a1.3 1.3 0 0 0-.92-.381H8.338Z"
      clipRule="evenodd"
    />
    <path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path
      fillRule="evenodd"
      d="M12 14.625a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v5.625a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOctagon;
