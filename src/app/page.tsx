import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutPreview from "@/components/home/AboutPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ServicesSection />
      <ProcessSection />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
