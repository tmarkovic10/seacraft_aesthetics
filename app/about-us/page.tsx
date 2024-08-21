import React from "react";

import HeroSection from "@/views/AboutUs/HeroSection";
import SliderSection from "@/views/AboutUs/SliderSection";
import Layout from "@/components/Layout";
import ContactSection from "@/views/Home/ContactSection";

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
