export type TeamMember = {
  name: string;
  role: string;
  responsibilities?: string[];
  bio?: string;
  disciplines?: string[];
  selectedExperience?: string[];
  portrait?: { src: string; alt: string };
  /** True while real name/bio is not yet available and a placeholder is shown instead. */
  isPlaceholder?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Kianoosh Kani",
    role: "Studio & Business Lead",
    responsibilities: [
      "Client Relationships",
      "Business Development",
      "Project Coordination",
      "Proposal Development",
      "Production Communication",
      "Commercial Management",
    ],
  },
  {
    name: "Artist Name TBC",
    role: "Senior Concept Artist",
    isPlaceholder: true,
    disciplines: [],
    selectedExperience: [],
  },
  {
    name: "Artist Name TBC",
    role: "Senior Concept Artist",
    isPlaceholder: true,
    disciplines: [],
    selectedExperience: [],
  },
];
