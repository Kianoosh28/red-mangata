import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesShowcase from "./ServicesShowcase";
import { services } from "@/content/services";
import { getProjectBySlugOrThrow } from "@/content/projects";
import { getProjectCover, getProjectImageByName } from "@/lib/projectMedia";

type PreviewSource =
  | { kind: "cover"; projectSlug: string }
  | { kind: "named"; projectSlug: string; filename: string; objectPosition?: string };

/** Homepage preview art per service — real portfolio assets only, hand-matched to the closest relevant discipline. */
const SERVICE_PREVIEW: Record<string, PreviewSource> = {
  "concept-art-visual-development": { kind: "cover", projectSlug: "ario" },
  "character-design": { kind: "named", projectSlug: "zombie-craft", filename: "8" },
  "environment-design": { kind: "cover", projectSlug: "honeyland" },
  "creature-enemy-design": {
    kind: "named",
    projectSlug: "sepahsalar",
    filename: "10",
    objectPosition: "center 45%",
  },
  "props-weapons": {
    kind: "named",
    projectSlug: "honeyland",
    filename: "4",
    objectPosition: "center 42%",
  },
  "art-direction-support": { kind: "cover", projectSlug: "hunter-vs-ancient-beast" },
};

export default async function ServicesSection() {
  const servicesWithArt = await Promise.all(
    services.map(async (service) => {
      const source = SERVICE_PREVIEW[service.slug];
      const project = getProjectBySlugOrThrow(source.projectSlug);
      const image =
        source.kind === "cover"
          ? await getProjectCover(project)
          : await getProjectImageByName(project, source.filename);
      return {
        ...service,
        image,
        objectPosition: source.kind === "named" ? source.objectPosition : undefined,
      };
    })
  );

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
