import React from "react";
import Image from "next/image";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
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
        Mi smo mali mobilni tim koji dolazi na vašu adresu kako bi spremili vaše
        plovilo za sezonu ili suhi vez. Time vas oslobađamo potrebnih radnji
        kako bi ste vaše slobodno vrijeme proveli uživajući u vašem plovilu.
      </Typography>
    </Container>
  );
};

export default AboutSection;
