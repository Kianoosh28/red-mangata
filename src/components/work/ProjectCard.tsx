import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectMedia from "@/components/ui/ProjectMedia";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** Tailwind aspect-ratio utility for the image area, e.g. "aspect-[4/5]". */
  aspect?: string;
  priority?: boolean;
  className?: string;
};

export default function ProjectCard({
  project,
  aspect = "aspect-[4/5]",
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className={cn("relative overflow-hidden", aspect)}>
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectMedia
            image={project.heroImage}
            fallbackLabel={project.title}
            className="h-full w-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={priority}
            objectPosition="center 22%"
          />
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4 transition-transform duration-300 ease-out group-hover:translate-x-1">
        <h3 className="text-project-title">{project.title}</h3>
      </div>
      <p className="text-label mt-1 text-text-muted">{project.subtitle}</p>
    </Link>
  );
}
