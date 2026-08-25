import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Red Mångata handles the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="pb-24 sm:pb-32">
        <Container width="text">
          <div className="border border-border bg-surface p-8 sm:p-10">
            <p className="text-body text-text-muted">
              This page is a placeholder. Final, legally reviewed privacy copy — covering what
              information is collected through this site (for example via the contact form),
              how it is used and stored, and how to request its removal — will be added before
              the site is publicly launched.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <p className="text-body text-text-muted">
              In the meantime, contact us directly if you have any questions about information
              you have shared with Red Mångata.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
