import React from "react";

import { EmblaOptionsType } from "embla-carousel";

import { Services } from "@/config/services";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import Carousel from "@/components/Carousel";

import styles from "./DetailsSection.module.scss";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface DetailsSectionProps {
  service: Services;
}

const DetailsSection = ({ service }: DetailsSectionProps) => {
  const { title, carouselImages } = service;

  return (
    <Container className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.sliderContainer}>
        <Carousel slides={carouselImages} options={OPTIONS} />
      </div>
    </Container>
  );
};

export default DetailsSection;
