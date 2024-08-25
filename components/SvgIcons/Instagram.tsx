import React, { FC, SVGProps } from "react";

const Instagram: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className="instagramIcon"
    width="40"
    height="40"
    viewBox="0 -0.5 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M15.5 5h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z"
      stroke="#023449"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M12.5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      stroke="#023449"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="15.5"
      y="9"
      width="2"
      height="2"
      rx="1"
      transform="rotate(-90 15.5 9)"
      fill="#000"
    />
    <rect
      x="16"
      y="8.5"
      width="1"
      height="1"
      rx=".5"
      transform="rotate(-90 16 8.5)"
      stroke="#023449"
      strokeLinecap="round"
    />
  </svg>
);

export default Instagram;
