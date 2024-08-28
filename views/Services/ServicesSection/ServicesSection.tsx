import React from "react";
import { useTranslations } from "next-intl";

import { Services } from "@/config/services";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ServiceCard";

import styles from "./Services.module.scss";

const ServicesSection = () => {
  const t = useTranslations("ServicesPage");
  const t2 = useTranslations("HomePage");
  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {t("title")}
      </Typography>
      <Typography variant="h5" component="h2" className={styles.subtitle}>
        {t("subtitle")}
      </Typography>
      <div className={styles.servicesWrapper}>
        {t2.raw("services").map((item: Services) => (
          <ServiceCard
            id={item.id}
            key={item.title}
            title={item.title}
            image={item.image}
          />
        ))}
        <div className={styles.contactCard}>
          <Typography variant="body1"> {t("questionText")}</Typography>
          <Typography variant="body1"> {t("contactText")}</Typography>
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
