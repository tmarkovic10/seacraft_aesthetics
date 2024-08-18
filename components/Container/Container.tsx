import { ElementType, HTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

import styles from "./Container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  component?: ElementType;
  disableGutters?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      component = "div",
      maxWidth = false,
      disableGutters = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const Component = component;

    return (
      <Component
        ref={ref}
        className={clsx(
          styles.root,
          maxWidth && styles[maxWidth],
          { [styles.noGutters]: disableGutters },
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;
