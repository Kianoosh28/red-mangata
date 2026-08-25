import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/services";

export default function ProcessSection() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Process" title="From Brief to Final Art" />

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 border-t border-accent/70 pt-6 lg:border-r lg:border-t-0 lg:pl-10 lg:pt-0 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-display text-3xl text-accent">{step.number}</span>
              <h3 className="text-project-title">{step.title}</h3>
              <p className="text-body max-w-xs text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
