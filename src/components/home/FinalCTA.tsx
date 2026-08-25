import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-28">
      <Container width="text" className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-section-title max-w-2xl">Building a new world?</h2>
        <p className="text-body-lg max-w-lg text-text-muted">
          Tell us what you&apos;re working on and where your art team needs support.
        </p>
        <CTAButton href="/contact" variant="primary">
          Start a Project
        </CTAButton>
        <p className="text-label text-text-muted">
          Available for project-based and ongoing production support.
        </p>
      </Container>
    </section>
  );
}
