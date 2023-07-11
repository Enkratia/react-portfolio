import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M8 13.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 17.25a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <path
      d="M9.043 1.543a1 1 0 0 1 .707-.293h6.75a4 4 0 0 1 4 4v13.5a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4V7.5a1 1 0 0 1 .293-.707l5.25-5.25ZM9.5 3.914V7.25H6.164L9.5 3.914Zm-4 5.336v9.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5.25a2 2 0 0 0-2-2h-5v5a1 1 0 0 1-1 1h-5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
