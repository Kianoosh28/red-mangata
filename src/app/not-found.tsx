import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container width="text">
        <span className="text-label text-accent">404</span>
        <h1 className="text-page-title mt-4">Page not found.</h1>
        <p className="text-body-lg mt-6 max-w-lg text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or is no longer available.
        </p>
        <div className="mt-8">
          <CTAButton href="/">Back to Home</CTAButton>
        </div>
      </Container>
    </section>
  );
}
