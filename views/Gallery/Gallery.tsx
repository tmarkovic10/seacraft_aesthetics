import React from "react";

import Container from "@/components/Container";

import styles from "./Gallery.module.scss";
import Typography from "@/components/Typography";

const Gallery = () => {
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h1">Gallery</Typography>
      </div>
    </Container>
  );
};

export default Gallery;
