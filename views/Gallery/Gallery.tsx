import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import igGallery from "@/config/igGallery";
import Instagram from "@/components/SvgIcons/Instagram";

import styles from "./Gallery.module.scss";
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("GalleryPage");
  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {t("title")}
      </Typography>
      <div className={styles.grid}>
        {igGallery.map(({ image }, index) => (
          <div className={styles.imageWrapper} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.socialWrapper}>
        <Typography variant="body1">{t("igText")}</Typography>
        <Link
          href="https://www.instagram.com/seacraft.aesthetics?igsh=MTVxdnBwam40M3p1Yw=="
          target="_blank"
          className={styles.igLink}
        >
          <Typography variant="body1">Instagram</Typography>
          <Instagram />
        </Link>
      </div>
    </Container>
  );
};

export default Gallery;
