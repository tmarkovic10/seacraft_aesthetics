import React from "react";
import Image from "next/image";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/service2/item1.jpg"
          alt="img"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="h1" className={styles.title}>
          O nama
        </Typography>
        <Typography variant="body1" className={styles.text}>
          Seacraft Aesthetics je mali mobilni tim koji nudi profesionalno
          poliranje brodova i uređenje unutarnjih i vanjskih površina plovila.
          Naša strast prema pomorstvu i predanost kvaliteti omogućuju nam da vaš
          brod vratimo u besprijekorno stanje. Specijalizirani smo za poliranje
          brodova te unutarnje i vanjsko uređenje, koristeći najmodernije
          tehnologije i materijale. Bilo da se radi o detaljnom čišćenju, obnovi
          sjaja ili kompletnoj rekonstrukciji interijera, naš stručni tim
          osigurava vrhunsku uslugu i zadovoljstvo naših klijenata. Povjerite
          nam svoje plovilo i uživajte u besprijekornoj ljepoti i
          funkcionalnosti koju pružamo.
        </Typography>
      </div>
    </Container>
  );
};

export default HeroSection;
