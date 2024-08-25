import React from "react";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./ErrorPage.module.scss";
import LinkButton from "@/components/LinkButton";

interface ErrorPageProps {
  status: string;
  heading: string;
}

const ErrorPage = ({ status, heading }: ErrorPageProps) => {
  return (
    <Container component="article" className={styles.container}>
      <Typography variant="h1" component="h1" className={styles.status}>
        {status}
      </Typography>
      <Typography variant="h3" component="h2" className={styles.title}>
        {heading}
      </Typography>
      <LinkButton href="/" text="Početna stranica" className={styles.backBtn} />
    </Container>
  );
};

export default ErrorPage;
