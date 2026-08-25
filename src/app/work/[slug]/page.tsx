import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectNavigation from "@/components/project/ProjectNavigation";
import { getAdjacentProjects, getProjectBySlug, getPublishedProjects } from "@/content/projects";
import { withMedia } from "@/lib/projectMedia";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const rawProject = getProjectBySlug(slug);

  if (!rawProject) {
    notFound();
  }

  const project = await withMedia(rawProject);
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectIntro project={project} />
      <ProjectGallery gallery={project.gallery} />
      <ProjectNavigation previous={previous} next={next} />
    </>
  );
}
