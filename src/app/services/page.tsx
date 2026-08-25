import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import EngagementModels from "@/components/services/EngagementModels";
import FinalCTA from "@/components/home/FinalCTA";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Game Art Services",
  description:
    "From early visual exploration to production-ready concepts, Red Mångata supports game teams across character, environment and visual development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Game Art Built for Production"
        description="From early visual exploration to production-ready concepts, Red Mångata supports game teams across character, environment and visual development."
      />

      {services.map((service, index) => (
        <ServiceDetail key={service.slug} service={service} reversed={index % 2 === 1} />
      ))}

      <EngagementModels />
      <FinalCTA />
    </>
  );
}
