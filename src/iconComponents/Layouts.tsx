import * as React from "react";
import type { SVGProps } from "react";
const SvgLayouts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M11.553 1.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788l10-5ZM4.236 7 12 10.882 19.764 7 12 3.118 4.236 7Z" />
    <path d="M1.106 11.553a1 1 0 0 1 1.341-.447L12 15.882l9.553-4.776a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.341Z" />
    <path d="M1.106 16.553a1 1 0 0 1 1.341-.447L12 20.882l9.553-4.776a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.341Z" />
  </svg>
);
export default SvgLayouts;
