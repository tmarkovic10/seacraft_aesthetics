import Container from "@/components/Container";
import AboutSection from "@/views/home/AboutSection";
import ContactSection from "@/views/home/ContactSection";
import HeroSection from "@/views/home/HeroSection";
import ServicesSection from "@/views/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
