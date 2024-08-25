import React from "react";
import Image from "next/image";

import cx from "clsx";

import LinkButton from "@/components/LinkButton";
import Typography from "@/components/Typography";
import { Image as ImageType } from "@/types/image";

import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  id: number;
  title: string;
  image: ImageType;
  fullWidth?: boolean;
}

const ServiceCard = ({ id, title, image, fullWidth }: ServiceCardProps) => {
  return (
    <div
      className={cx(styles.container, {
        [styles.fullWidthContainer]: fullWidth,
      })}
    >
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="subtitle1" component="h3" className={styles.title}>
          {title}
        </Typography>
      </div>
      <div className={styles.overlay}>
        <LinkButton href={`/services/${id}`} text="Learn more" />
      </div>
    </div>
  );
};

export default ServiceCard;
