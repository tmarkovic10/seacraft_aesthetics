import React from "react";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import igGallery from "@/config/igGallery";

import styles from "./Gallery.module.scss";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import Instagram from "@/components/SvgIcons/Instagram";

const Gallery = () => {
  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        Gallery
      </Typography>
      <div className={styles.grid}>
        {igGallery.map(({ image }, index) => (
          <div className={styles.imageWrapper} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.socialWrapper}>
        <Typography variant="body1">
          Pogledajte više na našem Instagram profilu
        </Typography>
        <Link
          href="https://www.instagram.com/seacraft.aesthetics?igsh=MTVxdnBwam40M3p1Yw=="
          target="_blank"
          className={styles.igLink}
        >
          <Typography variant="body2">Instagram</Typography>
          <Instagram />
        </Link>
      </div>
    </Container>
  );
};

export default Gallery;
