import React from "react";

import { EmblaOptionsType } from "embla-carousel";

import { Services } from "@/config/services";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import Carousel from "@/components/Carousel";

import styles from "./DetailsSection.module.scss";
import Feature from "@/components/SvgIcons/Feature";

const OPTIONS: EmblaOptionsType = {};

interface DetailsSectionProps {
  service: Services;
}

const DetailsSection = ({ service }: DetailsSectionProps) => {
  const { title, description, features, carouselImages } = service;

  return (
    <Container className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.serviceWrapper}>
        <div className={styles.serviceDetails}>
          <Typography variant="body1">{description}</Typography>
          <ul className={styles.services}>
            {features.map((item, index) => (
              <li key={index} className={styles.serviceItem}>
                <Feature />
                <Typography variant="body2">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.serviceSlider}>
          <Carousel slides={carouselImages} options={OPTIONS} />
        </div>
      </div>
    </Container>
  );
};

export default DetailsSection;
