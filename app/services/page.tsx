import React from "react";
import { Metadata } from "next";

import Layout from "@/components/Layout";
import ServicesSection from "@/views/Services/ServicesSection";
import ContactSection from "@/views/home/ContactSection";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
};

export default ServicesPage;
