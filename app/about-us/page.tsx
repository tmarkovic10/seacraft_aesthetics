import React from "react";
import type { Metadata } from "next";

import HeroSection from "@/views/about-us/HeroSection";
import SliderSection from "@/views/about-us/SliderSection";
import Layout from "@/components/Layout";
import ContactSection from "@/views/home/ContactSection";

export const metadata: Metadata = {
  title: "About Us",
};

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
