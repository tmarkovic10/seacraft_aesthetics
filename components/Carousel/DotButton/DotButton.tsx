import React, { ComponentPropsWithRef } from "react";

type DotButtonProps = ComponentPropsWithRef<"button">;

const DotButton: React.FC<DotButtonProps> = ({ children, ...restProps }) => {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export default DotButton;
