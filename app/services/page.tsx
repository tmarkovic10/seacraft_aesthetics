import React from "react";

import Layout from "@/components/Layout";
import ServicesSection from "@/views/services/ServicesSection";
import ContactSection from "@/views/home/ContactSection";

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default ServicesPage;
