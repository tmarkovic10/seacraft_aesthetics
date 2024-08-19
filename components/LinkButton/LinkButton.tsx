import React from "react";
import Link from "next/link";

import Typography from "@/components/Typography";

import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton = ({ href, text }: LinkButtonProps) => {
  return (
    <Link href={href} className={styles.container}>
      <Typography variant="body1">{text}</Typography>
    </Link>
  );
};

export default LinkButton;
