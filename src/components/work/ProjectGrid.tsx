import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

/** Uniform responsive grid used on /work. The homepage uses its own editorial layout instead. */
export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-body text-text-muted">No projects match this category yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} aspect="aspect-[4/5]" />
      ))}
    </div>
  );
}
