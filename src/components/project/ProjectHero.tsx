import Container from "@/components/ui/Container";
import ProjectMedia from "@/components/ui/ProjectMedia";
import type { Project } from "@/content/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-24 sm:pt-28">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
        <ProjectMedia
          image={project.heroImage}
          fallbackLabel={project.title}
          className="h-full w-full"
          priority
          objectPosition="center 15%"
        />
      </div>

      <Container className="pt-8">
        <span className="text-label text-accent">{project.categories[0]}</span>
        <h1 className="text-page-title mt-3">{project.title}</h1>
        <p className="text-body-lg mt-3 text-text-muted">{project.subtitle}</p>
      </Container>
    </section>
  );
}
