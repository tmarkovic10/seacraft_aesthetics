/* eslint-disable no-undef */
import { ElementType, HTMLAttributes, forwardRef } from "react";

import clsx from "clsx";

import styles from "./Typography.module.scss";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "body3";

type VariantMapping = {
  [key in TypographyVariant]: keyof JSX.IntrinsicElements;
};

const variantMapping: VariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  subtitle1: "span",
  subtitle2: "span",
  body1: "p",
  body2: "p",
  body3: "p",
};

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  variant?: TypographyVariant;
  component?: ElementType;
}

const Typography = forwardRef<HTMLOrSVGElement, TypographyProps>(
  (
    { variant = "body1", component: Component, className, children, ...rest },
    ref
  ) => {
    const Tag = Component || variantMapping[variant];

    return (
      <Tag
        ref={ref}
        className={clsx(styles.root, styles[variant], className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
