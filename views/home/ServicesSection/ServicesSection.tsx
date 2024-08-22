import React from "react";
import Link from "next/link";

import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import Typography from "@/components/Typography";
import services from "@/config/services";

import styles from "./ServiceSection.module.scss";
import ArrowRight from "@/components/SvgIcons/ArrowRight";

const ServicesSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h1" component="h2" className={styles.title}>
          Što sve nudimo
        </Typography>
        <div className={styles.serviceWrapper}>
          {services.slice(0, 4).map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
        <Link href="/services" className={styles.seeMore}>
          <Typography variant="body2">Pogledaj sve</Typography>
          <ArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default ServicesSection;
