import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const t = useTranslations("AboutUsPage");
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/service2/item1.webp"
          alt="boat"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="h1" className={styles.title}>
          {t("title")}
        </Typography>
        <Typography variant="body1" className={styles.text}>
          {t("description")}
        </Typography>
      </div>
    </Container>
  );
};

export default HeroSection;
