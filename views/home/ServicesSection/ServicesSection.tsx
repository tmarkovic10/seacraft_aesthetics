import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import Typography from "@/components/Typography";
import { Services } from "@/config/services";

import styles from "./ServiceSection.module.scss";
import ArrowRight from "@/components/SvgIcons/ArrowRight";

const ServicesSection = () => {
  const t = useTranslations("HomePage");

  return (
    <Container component="section" id="services" className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h1" component="h2" className={styles.title}>
          {t("serviceSectionTitle")}
        </Typography>
        <div className={styles.serviceWrapper}>
          {t
            .raw("services")
            .slice(0, 4)
            .map((item: Services) => (
              <ServiceCard
                id={item.id}
                key={item.title}
                title={item.title}
                image={item.image}
              />
            ))}
        </div>
        <Link href="/services" className={styles.seeMore}>
          <Typography variant="body2">{t("seeMoreLink")}</Typography>
          <ArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default ServicesSection;
