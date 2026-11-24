import {
  AboutSection,
  ContactSection,
  Hero,
  ProjectsSection,
  ServicesSection,
  WhyUsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
