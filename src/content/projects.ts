/**
 * Central project data. Every page (homepage, /work, /work/[slug]) reads
 * from this file — nothing project-specific is hard-coded in components.
 *
 * To add a new project: add an entry here, then drop its images into
 * /public/images/projects/<imageFolder>/ using the paths referenced below.
 * No other files need to change.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  /** Intrinsic pixel dimensions, used to render without cropping/distortion and to avoid layout shift. */
  width?: number;
  height?: number;
};

export type GalleryImage = ImageAsset & {
  /** "full" spans both masonry columns (wide banners), "half" sits in a single column. Derived from aspect ratio in src/lib/projectMedia.ts. */
  layout: "full" | "half";
  /** Process label shown as a small caption, e.g. "Silhouette Exploration". Only rendered when explicitly set — never inferred from filenames. */
  label?: string;
};

/** The five buckets used by the /work page filter UI. */
export type WorkFilter =
  | "Characters"
  | "Environments"
  | "Creatures"
  | "Concept Art"
  | "Visual Development";

export type Project = {
  slug: string;
  /** Folder name under /public/images/projects/ — usually equals slug. */
  imageFolder: string;
  title: string;
  /** Short discipline line shown under the title, e.g. "Character Design · Visual Development" */
  subtitle: string;
  year?: string;
  client?: string;
  projectType?: string;
  /** Display categories — free text, shown on project pages and cards. */
  categories: string[];
  /** Which /work filter buttons this project should appear under. */
  filters: WorkFilter[];
  shortDescription: string;
  fullDescription?: string;
  heroImage?: ImageAsset;
  gallery: GalleryImage[];
  featured: boolean;
  sortOrder: number;
  credits?: string;
  confidentialityNote?: string;
  personalProject?: boolean;
  /** Public visibility switch. Set false to hide from listings and disable the route. */
  published: boolean;
};

export const projects: Project[] = [
  {
    slug: "ario",
    imageFolder: "ario",
    title: "Ario",
    subtitle: "Character Design · Visual Development",
    categories: [
      "Character Design",
      "Concept Art",
      "Visual Development",
      "Props & Weapons",
      "Environment Design",
    ],
    filters: ["Characters", "Concept Art", "Visual Development", "Environments"],
    shortDescription:
      "Character and visual-development work exploring costume, silhouette and world-building elements.",
    fullDescription:
      "Design work spanning character exploration, costume variation and supporting environment and prop development, built around a consistent visual language.",
    gallery: [],
    featured: true,
    sortOrder: 1,
    published: true,
  },
  {
    slug: "rolet",
    imageFolder: "rolet",
    title: "Rolet",
    subtitle: "Character Design · Visual Development",
    categories: ["Character Design", "Visual Development"],
    filters: ["Characters", "Visual Development"],
    shortDescription:
      "Character design and visual-development exploration focused on silhouette and personality.",
    gallery: [],
    featured: true,
    sortOrder: 2,
    published: true,
  },
  {
    slug: "buster-ranger",
    imageFolder: "buster-ranger",
    title: "Buster Ranger",
    subtitle: "Creature & Enemy Design",
    categories: ["Creature Design", "Enemy Design", "Concept Art", "Illustration"],
    filters: ["Creatures", "Concept Art"],
    shortDescription:
      "Creature and enemy design work, from early exploration through to finished illustration.",
    gallery: [],
    featured: true,
    sortOrder: 3,
    published: true,
  },
  {
    slug: "honeyland",
    imageFolder: "honeyland",
    title: "Honeyland",
    subtitle: "Environment Design · World Building",
    categories: ["Environment Design", "Concept Art", "World Building"],
    filters: ["Environments", "Concept Art"],
    shortDescription:
      "Environment and world-building concept work developing mood, scale and spatial character.",
    gallery: [],
    featured: true,
    sortOrder: 4,
    published: true,
  },
  {
    slug: "zombie-craft",
    imageFolder: "zombie-craft",
    title: "Zombie Craft",
    subtitle: "Character & Enemy Design",
    categories: ["Character Design", "Enemy Design", "Concept Art", "Props & Weapons"],
    filters: ["Characters", "Creatures", "Concept Art"],
    shortDescription:
      "Character, enemy and prop design work built for fast-paced production needs.",
    gallery: [],
    featured: true,
    sortOrder: 5,
    published: true,
  },
  {
    slug: "sepahsalar",
    imageFolder: "sepahsalar",
    title: "Sepahsalar",
    subtitle: "Character & Creature Design",
    categories: ["Character Design", "Creature Design", "Enemy Design", "Visual Development"],
    filters: ["Characters", "Creatures", "Visual Development"],
    shortDescription:
      "Character and creature visual development, including enemy design and costume exploration.",
    gallery: [],
    featured: true,
    sortOrder: 6,
    published: true,
  },
  {
    slug: "naser-son-of-man",
    imageFolder: "naser",
    title: "Naser: Son of Man",
    subtitle: "Environment Design · Visual Development",
    categories: ["Environment Design", "Concept Art", "Visual Development"],
    filters: ["Environments", "Concept Art", "Visual Development"],
    shortDescription:
      "Environment and visual-development work for a title currently in development.",
    gallery: [],
    featured: true,
    sortOrder: 7,
    confidentialityNote:
      "This project is still in development. Artwork is currently shared for recruitment and portfolio review only and is not cleared for public publication.",
    published: false,
  },
  {
    slug: "kaelor",
    imageFolder: "kaelor",
    title: "Kaelor",
    subtitle: "Character Design · Concept Art",
    categories: ["Character Design", "Concept Art"],
    filters: ["Characters", "Concept Art"],
    shortDescription: "Personal character design and concept art exploration.",
    gallery: [],
    featured: false,
    sortOrder: 8,
    credits: "Selected experience from our artists",
    personalProject: true,
    published: true,
  },
  {
    slug: "hunter-vs-ancient-beast",
    imageFolder: "hunter",
    title: "Hunter vs Ancient Beast",
    subtitle: "Character & Creature Design",
    categories: ["Character Design", "Creature Design", "Illustration"],
    filters: ["Characters", "Creatures"],
    shortDescription: "A personal illustration exploring character and creature design together in a single scene.",
    gallery: [],
    featured: false,
    sortOrder: 9,
    credits: "Selected experience from our artists",
    personalProject: true,
    published: true,
  },
  {
    slug: "cyberpunk-rider",
    imageFolder: "cyberpunk-rider",
    title: "Cyberpunk Rider",
    subtitle: "Character & Costume Design",
    categories: ["Character Design", "Costume Design", "Props & Weapons", "Vehicle Exploration"],
    filters: ["Characters", "Concept Art"],
    shortDescription: "A personal visual-development study combining character, costume and vehicle design.",
    gallery: [],
    featured: false,
    sortOrder: 10,
    credits: "Selected experience from our artists",
    personalProject: true,
    published: true,
  },
];

/** Published projects only, in editorial sort order — use this everywhere public-facing. */
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project?.published ? project : undefined;
}

/** For hand-curated slug lists (e.g. the homepage) where a missing project is a content bug, not a runtime case to handle gracefully. */
export function getProjectBySlugOrThrow(slug: string): Project {
  const project = getProjectBySlug(slug);
  if (!project) {
    throw new Error(`getProjectBySlugOrThrow: no published project with slug "${slug}"`);
  }
  return project;
}

export function getAdjacentProjects(slug: string): { previous?: Project; next?: Project } {
  const published = getPublishedProjects();
  const index = published.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    previous: index > 0 ? published[index - 1] : undefined,
    next: index < published.length - 1 ? published[index + 1] : undefined,
  };
}
