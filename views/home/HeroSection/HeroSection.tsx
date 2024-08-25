"use client";

import React from "react";
import Image from "next/image";

import { useLenis } from "lenis/react";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import LinkButton from "@/components/LinkButton";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const lenis = useLenis();
  const sectionId = "services";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { hash } = e.currentTarget;

    if (hash) {
      const id = hash.substring(1);
      const section = document.getElementById(id);

      if (section && lenis) {
        lenis.scrollTo(section);
      }
    }
  };

  return (
    <Container
      component="section"
      disableGutters={true}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image
          src={"/images/hero.webp"}
          alt="Boat in the water"
          fill
          priority
          sizes="100vw"
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
        <LinkButton
          href={`/#${sectionId}`}
          scrollHandler={scrollToSection}
          text="Saznaj više"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
