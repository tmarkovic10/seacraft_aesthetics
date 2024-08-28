"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

import { Services } from "@/config/services";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import ServiceCard from "@/components/ServiceCard";
import { getRandomItems } from "@/utils/static/getRandomItems";

import styles from "./OtherServicesSection.module.scss";

interface OtherServicesSectionProps {
  services: Services[];
}

const OtherServicesSection = ({ services }: OtherServicesSectionProps) => {
  const [randomServiceCards, setRandomServiceCards] = useState<Services[]>([]);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("ServiceDetailsPage");
  const t2 = useTranslations("HomePage");
  const id = pathname.split("/").pop();
  const serviceItems = t2.raw("services").map((item: Services) => item);

  useEffect(() => {
    if (id) {
      const selectedItems = getRandomItems(serviceItems, Number(id));
      setRandomServiceCards(selectedItems);
    }
  }, [id, locale]);

  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        {t("title")}
      </Typography>
      <div className={styles.servicesWrapper}>
        {randomServiceCards.map((item: Services) => (
          <ServiceCard
            id={item.id}
            key={item.title}
            title={item.title}
            image={item.image}
            fullWidth
          />
        ))}
      </div>
    </Container>
  );
};

export default OtherServicesSection;
