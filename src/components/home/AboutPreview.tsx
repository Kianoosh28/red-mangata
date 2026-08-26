import Image from "next/image";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import ImageReveal from "@/components/ui/ImageReveal";
import { getProjectBySlugOrThrow } from "@/content/projects";
import { getProjectCover } from "@/lib/projectMedia";

/**
 * No team portraits exist yet (see src/content/team.ts). Until they do,
 * the "this is an art team" statement is made with the Kaelor cover — a
 * single real portfolio piece, not a collage.
 */
export default async function AboutPreview() {
  const primary = await getProjectCover(getProjectBySlugOrThrow("kaelor"));

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:order-2 lg:col-span-6">
            <span className="text-label text-accent">About Red Mångata</span>
            <h2 className="text-section-title max-w-xl">
              A focused team built around game art.
            </h2>
            <p className="text-body-lg max-w-xl text-text-muted">
              Red Mångata brings together experienced game artists and dedicated project
              representation to help studios develop memorable characters, environments and
              visual worlds.
            </p>
            <p className="text-body-lg max-w-xl text-text-muted">
              Our senior concept artists bring more than 13 years of professional experience
              across character design, environment art, visual development, props and game
              production.
            </p>
            <div>
              <CTAButton href="/about" variant="secondary">
                Meet Red Mångata
              </CTAButton>
            </div>
          </div>

          <ImageReveal className="lg:order-1 lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-none bg-surface">
              {primary ? (
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                  style={{ objectPosition: "center 12%" }}
                />
              ) : null}
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
