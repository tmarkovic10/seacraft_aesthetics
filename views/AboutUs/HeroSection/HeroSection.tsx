import React from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div style={{ height: 300, width: 300, backgroundColor: "red" }} />
          <div>
            <Typography variant="h1">O nama</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              accusamus mollitia obcaecati numquam corporis culpa deleniti nam
              in, perferendis fuga, facere aliquam corrupti necessitatibus
              itaque praesentium labore debitis possimus illum.
            </Typography>
          </div>
        </div>
        <div className={styles.compareSlider}>
          <ReactCompareSlider
            boundsPadding={0}
            itemOne={
              <ReactCompareSliderImage
                alt="Image one"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/dark-hedges-landscape-1.jpg"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                alt="Image two"
                src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/dark-hedges-landscape-2.jpg"
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
      </div>
    </Container>
  );
};

export default HeroSection;
