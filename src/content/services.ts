export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "concept-art-visual-development",
    number: "01",
    title: "Concept Art",
    shortDescription: "Exploration of worlds, mood, style and visual direction.",
    capabilities: [
      "Mood and tone exploration",
      "Style frames and visual-language studies",
      "Thumbnail and iteration passes",
      "Reference-driven direction boards",
    ],
  },
  {
    slug: "character-design",
    number: "02",
    title: "Character Design",
    shortDescription:
      "Heroes, NPCs, enemies, costume exploration, silhouettes and production-ready character concepts.",
    capabilities: [
      "Silhouette and shape-language studies",
      "Costume and prop variation",
      "Turnarounds and expression sheets",
      "Production-ready character concepts",
    ],
  },
  {
    slug: "environment-design",
    number: "03",
    title: "Environment Design",
    shortDescription:
      "Locations, architecture, environments, world-building, mood and spatial concepts.",
    capabilities: [
      "Location and biome exploration",
      "Architectural and cultural detailing",
      "Mood and lighting studies",
      "Spatial layout and scale concepts",
    ],
  },
  {
    slug: "creature-enemy-design",
    number: "04",
    title: "Creature & Enemy Design",
    shortDescription: "Creatures, bosses, enemy factions and visual variations.",
    capabilities: [
      "Creature anatomy and silhouette exploration",
      "Boss and set-piece designs",
      "Enemy faction visual systems",
      "Variation and evolution passes",
    ],
  },
  {
    slug: "props-weapons",
    number: "05",
    title: "Props & Weapons",
    shortDescription: "Weapons, equipment, props and production-focused object development.",
    capabilities: [
      "Weapon and equipment design",
      "Functional and material detailing",
      "Prop sets and world objects",
      "Production-focused object sheets",
    ],
  },
  {
    slug: "art-direction-support",
    number: "06",
    title: "Art Direction Support",
    shortDescription:
      "Visual-direction development, style exploration, consistency and external production support.",
    capabilities: [
      "Visual-direction development",
      "Style-guide and consistency support",
      "External art-team coordination",
      "Production pipeline support",
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We align on the game's world, audience, references, production requirements and visual direction.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Our artists develop silhouettes, mood, variations and visual approaches.",
  },
  {
    number: "03",
    title: "Refine",
    description: "Selected directions are developed through feedback and iteration.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Approved designs are prepared for the next stage of the production pipeline.",
  },
];

export type EngagementModel = {
  title: string;
  description: string;
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based",
    description: "For defined visual-development, character or environment scopes.",
  },
  {
    title: "Production Support",
    description: "For studios needing additional art capacity during development.",
  },
  {
    title: "Ongoing Collaboration",
    description: "For recurring concept and visual-development needs.",
  },
];
