import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/views/home/HeroSection"));
const AboutSection = dynamic(() => import("@/views/home/AboutSection"));
const ServicesSection = dynamic(() => import("@/views/home/ServicesSection"));
const ContactSection = dynamic(() => import("@/views/home/ContactSection"));

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
