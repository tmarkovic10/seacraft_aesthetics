import React from "react";

import HeroSection from "@/views/AboutUs/HeroSection";
import SliderSection from "@/views/AboutUs/SliderSection";
import Layout from "@/components/Layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <HeroSection />
      <SliderSection />
    </Layout>
  );
};

export default AboutUsPage;
