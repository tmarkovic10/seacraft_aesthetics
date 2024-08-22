import React from "react";

import Layout from "@/components/Layout";
import ServicesSection from "@/views/Services/ServicesSection/ServicesSection";
import ContactSection from "@/views/Home/ContactSection";

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default ServicesPage;
