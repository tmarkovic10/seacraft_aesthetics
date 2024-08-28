import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  const t = useTranslations("HomePage");
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/about-image.jpg"
          alt="cleaning kit"
          sizes="50vw"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <Typography variant="subtitle1" className={styles.description}>
        {t("aboutIntro")}
      </Typography>
    </Container>
  );
};

export default AboutSection;
