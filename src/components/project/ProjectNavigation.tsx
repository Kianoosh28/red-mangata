import Link from "next/link";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import type { Project } from "@/content/projects";

type ProjectNavigationProps = {
  previous?: Project;
  next?: Project;
};

export default function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <>
      {previous || next ? (
        <section className="border-t border-border">
          <Container className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <ProjectNavLink label="Previous Project" project={previous} align="left" />
            <ProjectNavLink label="Next Project" project={next} align="right" />
          </Container>
        </section>
      ) : null}

      <section className="border-t border-border py-24 text-center sm:py-32">
        <Container>
          <h2 className="text-section-title">Have a project in mind?</h2>
          <div className="mt-8">
            <CTAButton href="/contact">Start a Project</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}

function ProjectNavLink({
  label,
  project,
  align,
}: {
  label: string;
  project?: Project;
  align: "left" | "right";
}) {
  if (!project) {
    return <div className="py-10" />;
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex flex-col gap-2 py-10 ${align === "right" ? "sm:items-end sm:pl-10 sm:text-right" : "sm:pr-10"}`}
    >
      <span className="text-label text-text-muted">{label}</span>
      <span className="text-project-title transition-colors group-hover:text-accent">
        {project.title}
      </span>
    </Link>
  );
}
