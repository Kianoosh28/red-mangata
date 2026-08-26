import { services, type Service } from "@/content/services";
import { getProjectBySlugOrThrow, type ImageAsset } from "@/content/projects";
import { getProjectCover, getProjectImageByName } from "@/lib/projectMedia";

export type ServiceWithArt = Service & { image?: ImageAsset; objectPosition?: string };

type PreviewSource =
  | { kind: "cover"; projectSlug: string }
  | { kind: "named"; projectSlug: string; filename: string; objectPosition?: string };

/**
 * Preview art per service — real portfolio assets only, hand-matched to the
 * closest relevant discipline. Single source of truth shared by the homepage
 * Capabilities section and the Services page, so both reference the exact
 * same image per service rather than maintaining separate mappings.
 */
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

export async function getServicesWithArt(): Promise<ServiceWithArt[]> {
  return Promise.all(
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
}
