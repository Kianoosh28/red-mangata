import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMember from "@/components/about/TeamMember";
import FinalCTA from "@/components/home/FinalCTA";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Red Mångata brings together experienced game artists and dedicated project representation to help studios create characters, environments and visual identities for games.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Small Team. Serious Game Art."
        description="Red Mångata brings together experienced game artists and dedicated project representation to help studios create characters, environments and visual identities for games."
      />

      <section className="border-t border-border py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="The Team" title="Red Mångata" />

          <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
