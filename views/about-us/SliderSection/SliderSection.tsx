import React from "react";
import Link from "next/link";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import ArrowRight from "@/components/SvgIcons/ArrowRight";

import styles from "./SliderSection.module.scss";

const SliderSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h3" component="h2" className={styles.title}>
        Od zapuštenog do blistavog
      </Typography>
      <div className={styles.compareSlider}>
        <div className={styles.text}>
          <Typography variant="body1">Prije</Typography>
          <Typography variant="body1">Poslije</Typography>
        </div>
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={
            <ReactCompareSliderImage
              alt="A boat"
              src="/images/aboutUs/slider2.webp"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              alt="A boat"
              src="/images/aboutUs/slider1.webp"
            />
          }
          keyboardIncrement="5%"
          onlyHandleDraggable
          position={50}
          style={{
            flexGrow: 1,
            width: "100%",
          }}
        />
      </div>
      <Link href="/gallery" className={styles.seeMore}>
        <Typography variant="body2">Pogledaj više</Typography>
        <ArrowRight />
      </Link>
    </Container>
  );
};

export default SliderSection;
