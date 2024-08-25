import React from "react";

import HeroSection from "@/views/aboutUs/HeroSection";
import SliderSection from "@/views/aboutUs/SliderSection";
import Layout from "@/components/Layout";
import ContactSection from "@/views/home/ContactSection";

const AboutUsPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SliderSection />
      <ContactSection />
    </Layout>
  );
};

export default AboutUsPage;
