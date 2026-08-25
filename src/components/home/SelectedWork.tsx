import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import ImageReveal from "@/components/ui/ImageReveal";
import FullWidthCover from "./FullWidthCover";
import PairedCoverRow from "./PairedCoverRow";
import { getProjectBySlugOrThrow } from "@/content/projects";
import { withCover } from "@/lib/projectMedia";

/**
 * Hand-curated homepage sequence — not auto-generated from project order
 * or aspect ratio. Row shape (full-width vs paired) is an art-direction
 * decision; see FullWidthCover / PairedCoverRow for the sizing rules.
 */
const CURATED_SLUGS = [
  "ario",
  "rolet",
  "buster-ranger",
  "zombie-craft",
  "honeyland",
  "cyberpunk-rider",
  "sepahsalar",
] as const;

export default async function SelectedWork() {
  const [ario, rolet, busterRanger, zombieCraft, honeyland, cyberpunkRider, sepahsalar] =
    await Promise.all(
      CURATED_SLUGS.map((slug) => withCover(getProjectBySlugOrThrow(slug)))
    );

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Characters, environments and worlds developed for games across different genres and visual styles."
        />

        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
          <ImageReveal>
            <FullWidthCover project={ario} />
          </ImageReveal>

          <ImageReveal>
            <PairedCoverRow left={rolet} right={busterRanger} />
          </ImageReveal>

          <ImageReveal>
            <FullWidthCover project={zombieCraft} />
          </ImageReveal>

          <ImageReveal>
            <PairedCoverRow left={honeyland} right={cyberpunkRider} />
          </ImageReveal>

          <ImageReveal>
            <FullWidthCover project={sepahsalar} />
          </ImageReveal>
        </div>

        <div className="mt-20 flex justify-center sm:mt-28">
          <CTAButton href="/work" variant="secondary">
            View All Work
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
