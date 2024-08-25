import React from "react";
import Link from "next/link";

import cx from "clsx";

import Typography from "@/components/Typography";
import Instagram from "@/components/SvgIcons/Instagram";

import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
  showIcon?: boolean;
  scrollHandler?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LinkButton = ({
  href,
  text,
  className,
  showIcon,
  scrollHandler,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      onClick={scrollHandler}
      className={cx(styles.container, className)}
    >
      <Typography variant="body1">{text}</Typography>
      {showIcon && <Instagram />}
    </Link>
  );
};

export default LinkButton;
