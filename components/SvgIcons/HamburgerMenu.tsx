import React, { FC, SVGProps } from "react";

interface HamburgerMenuProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({
  strokeColor = "#023449",
  ...props
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HamburgerMenu;
