import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { engagementModels } from "@/content/services";

export default function EngagementModels() {
  return (
    <section className="border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ways of Working"
          title="Engagement Models"
          description="Red Mångata adapts to how your team already works with external art support."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {engagementModels.map((model, index) => (
            <div key={model.title} className="flex flex-col gap-4 border-t border-border pt-6">
              <span className="font-display text-2xl text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-project-title">{model.title}</h3>
              <p className="text-body text-text-muted">{model.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
