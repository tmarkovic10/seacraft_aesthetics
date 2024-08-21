import React from "react";

import AboutSection from "@/views/Home/AboutSection";
import ContactSection from "@/views/Home/ContactSection";
import HeroSection from "@/views/Home/HeroSection";
import ServicesSection from "@/views/Home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection isHome />
    </main>
  );
}
