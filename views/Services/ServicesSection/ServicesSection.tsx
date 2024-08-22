import React from "react";

import services from "@/config/services";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ServiceCard";

import styles from "./Services.module.scss";

const ServicesSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        Usluge
      </Typography>
      <div className={styles.servicesWrapper}>
        {services.map((item) => (
          <ServiceCard key={item.title} title={item.title} image={item.image} />
        ))}
        <div className={styles.contactCard}>
          <Typography variant="body1">Imate pitanje?</Typography>
          <Typography variant="body1">Kontaktirajte nas</Typography>
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
