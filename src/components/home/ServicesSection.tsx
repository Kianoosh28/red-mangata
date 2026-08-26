import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesShowcase from "./ServicesShowcase";
import { getServicesWithArt } from "@/lib/servicePreview";

export default async function ServicesSection() {
  const servicesWithArt = await getServicesWithArt();

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Capabilities" title="What We Do" />

        <div className="mt-14 sm:mt-16">
          <ServicesShowcase services={servicesWithArt} />
        </div>
      </Container>
    </section>
  );
}
