import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";

/**
 * Mobile and desktop intentionally use different compositions:
 * - Desktop (sm+): full-bleed cinematic background with text overlaid at
 *   the bottom, unchanged from the original design.
 * - Mobile: the artwork (10754x5845, 6 diagonal panels) renders in normal
 *   flow above the text block. The container's aspect ratio is narrower
 *   than the image's own (~7169/5845 vs. 10754/5845, i.e. roughly the
 *   middle 4 of 6 panels), so `object-cover` scales the artwork up until
 *   it fills the container's height, cropping only the two outer panels
 *   at the sides.
 *   The content block below is then pulled up over the tail end of the
 *   artwork with a negative top margin (mobile only, reset to 0 at sm+),
 *   rather than simply following it in flow. Both the image's own aspect
 *   ratio *and* the negative margin are percentage-of-width values, so
 *   they scale together and the overlap stays proportional at any mobile
 *   viewport width. This lets the enlarged artwork's baked-in bottom fade
 *   extend down behind the start of the content block instead of leaving
 *   a gap above it, so the eyebrow line ends up sitting inside the dark
 *   fade rather than below the image on the plain background. No CSS
 *   overlay is needed since the fade is already baked into the artwork.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-20 sm:flex sm:min-h-[100svh] sm:items-end sm:pt-0">
      <div className="hero-media relative aspect-[7169/5845] w-full overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Character, creature and environment concept art from Red Mångata's portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Desktop-only localized darkening — on mobile the text sits on the plain background below the artwork, so no overlay is needed there. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 hidden h-36 bg-gradient-to-b from-bg/85 via-bg/35 to-transparent sm:block sm:h-44"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 hidden h-[42%] bg-gradient-to-t from-bg/90 via-bg/25 to-transparent sm:block sm:h-[38%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-[radial-gradient(ellipse_65%_55%_at_18%_100%,rgba(10,10,10,0.55)_0%,transparent_70%)] sm:block"
      />

      <Container className="relative -mt-[22%] pt-8 pb-20 sm:mt-0 sm:pt-40 sm:pb-28">
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
