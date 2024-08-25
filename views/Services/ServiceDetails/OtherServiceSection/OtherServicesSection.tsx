"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    if (id) {
      const selectedItems = getRandomItems(services, Number(id));
      setRandomServiceCards(selectedItems);
    }
  }, [id]);

  return (
    <Container component="section" className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Pogledajte ostale usluge koje nudimo
      </Typography>
      <div className={styles.servicesWrapper}>
        {randomServiceCards.map((item) => (
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
