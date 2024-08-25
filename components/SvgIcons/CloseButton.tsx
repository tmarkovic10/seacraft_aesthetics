import React, { FC, SVGProps } from "react";

const CloseButton: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      stroke="#023449"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseButton;
