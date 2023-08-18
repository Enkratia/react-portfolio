import * as React from "react";
import type { SVGProps } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.293 1.543a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1-1.414 1.414L13 4.664V17.25a1 1 0 1 1-2 0V4.664L8.207 7.457a1 1 0 0 1-1.414-1.414l4.5-4.5ZM2.25 14a1 1 0 0 1 1 1v3.75a2 2 0 0 0 2 2h13.5a2 2 0 0 0 2-2V15a1 1 0 1 1 2 0v3.75a4 4 0 0 1-4 4H5.25a4 4 0 0 1-4-4V15a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpload;
