import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import WorkExplorer from "@/components/work/WorkExplorer";
import { getPublishedProjects } from "@/content/projects";
import { withCover } from "@/lib/projectMedia";

export const metadata: Metadata = {
  title: "Game Art Portfolio",
  description:
    "Selected character, environment, creature and visual-development work for games.",
};

export default async function WorkPage() {
  const projects = await Promise.all(getPublishedProjects().map(withCover));

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work"
        description="Selected character, environment, creature and visual-development work for games."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <WorkExplorer projects={projects} />
        </Container>
      </section>
    </>
  );
}
