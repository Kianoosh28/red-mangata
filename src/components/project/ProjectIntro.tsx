import Container from "@/components/ui/Container";
import type { Project } from "@/content/projects";

type ProjectIntroProps = {
  project: Project;
};

type MetaField = { label: string; value: string };

export default function ProjectIntro({ project }: ProjectIntroProps) {
  const fields: MetaField[] = [
    project.projectType || project.personalProject
      ? { label: "Project", value: project.personalProject ? "Personal Project" : project.projectType! }
      : undefined,
    project.client ? { label: "Client", value: project.client } : undefined,
    project.categories.length
      ? { label: "Services", value: project.categories.join(", ") }
      : undefined,
    project.year ? { label: "Year", value: project.year } : undefined,
  ].filter((field): field is MetaField => Boolean(field));

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            {fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <span className="text-label text-text-muted">{field.label}</span>
                <span className="text-body text-text">{field.value}</span>
              </div>
            ))}

            {project.credits ? (
              <div className="flex flex-col gap-1">
                <span className="text-label text-text-muted">Credits</span>
                <span className="text-body text-text">{project.credits}</span>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-8">
            <p className="text-body-lg text-text-muted">
              {project.fullDescription ?? project.shortDescription}
            </p>

            {project.confidentialityNote ? (
              <p className="text-body mt-6 border-l-2 border-accent pl-4 text-text-muted">
                {project.confidentialityNote}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
