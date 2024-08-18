import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";

import styles from "./HeroSection.module.scss";
import Typography from "@/components/Typography";

const HeroSection = () => {
  return (
    <Container
      component="section"
      disableGutters={true}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image
          src={"/images/hero.jpg"}
          alt="Boat in the water"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="h1" className={styles.text}>
          Seacraft Aesthetics
        </Typography>
        <Typography variant="body1" className={styles.text}>
          Osvježite svoj brod do savršenstva
        </Typography>
        <Link href="#"></Link>
      </div>
    </Container>
  );
};

export default HeroSection;
