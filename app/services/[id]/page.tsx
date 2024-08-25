import React from "react";
import { notFound } from "next/navigation";

import DetailsSection from "@/views/Services/ServiceDetails/DetailsSection";
import Layout from "@/components/Layout";
import services from "@/config/services";
import OtherServicesSection from "@/views/Services/ServiceDetails/OtherServiceSection";
import ContactSection from "@/views/home/ContactSection";

const ServiceDetailsPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return notFound();
  }

  return (
    <Layout>
      <DetailsSection service={service} />
      <OtherServicesSection services={services} />
      <ContactSection />
    </Layout>
  );
};

export default ServiceDetailsPage;
