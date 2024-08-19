import React, { FC, SVGProps } from "react";

const Mail: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="250"
    height="250"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Mail;
