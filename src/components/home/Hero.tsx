import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg">
      <div className="hero-media absolute inset-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Character, creature and environment concept art from Red Mångata's portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Localized darkening only — the artwork itself should read clearly, not sit under one flat dark layer. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-bg/85 via-bg/35 to-transparent sm:h-44"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-bg/90 via-bg/25 to-transparent sm:h-[38%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_18%_100%,rgba(10,10,10,0.55)_0%,transparent_70%)]"
      />

      <Container className="relative pb-20 pt-40 sm:pb-28">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-hover [text-shadow:0_1px_5px_rgba(0,0,0,0.75)] sm:text-base">
            GAME ART & VISUAL DEVELOPMENT
          </span>
          <h1 className="text-hero text-balance">We design worlds worth playing.</h1>
          <p className="text-body-lg max-w-xl text-text-muted">
            Character design, environments, concept art and visual development for games.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <CTAButton href="/work" variant="primary">
              View Our Work
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Start a Project
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
