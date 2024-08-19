import React from "react";
import Image from "next/image";

import LinkButton from "@/components/LinkButton";
import Typography from "@/components/Typography";
import { Image as ImageType } from "@/types/image";

import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  title: string;
  image: ImageType;
}

const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="subtitle1" component="h3">
          {title}
        </Typography>
      </div>
      <div className={styles.overlay}>
        <LinkButton href="#" text="Learn more" />
      </div>
    </div>
  );
};

export default ServiceCard;
