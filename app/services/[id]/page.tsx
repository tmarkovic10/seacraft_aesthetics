import React from "react";
import { notFound } from "next/navigation";

import DetailsSection from "@/views/Services/ServiceDetails/DetailsSection";
import Layout from "@/components/Layout";
import services from "@/config/services";

const ServiceDetailsPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return notFound();
  }

  return (
    <Layout>
      <DetailsSection service={service} />
    </Layout>
  );
};

export default ServiceDetailsPage;
