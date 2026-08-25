import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you're building a new world, developing characters or expanding your internal art capacity, we'd like to hear what you're working on.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell Us About Your Game"
        description="Whether you're building a new world, developing characters or expanding your internal art capacity, we'd like to hear what you're working on."
      />

      <section className="pb-24 sm:pb-32">
        <Container width="text">
          <ContactForm />

          <p className="text-body mt-14 border-t border-border pt-8 text-text-muted">
            Prefer email? Reach us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-text hover:text-accent">
              {siteConfig.email}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
