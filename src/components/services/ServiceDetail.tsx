import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import ImageReveal from "@/components/ui/ImageReveal";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  service: Service;
  reversed?: boolean;
};

export default function ServiceDetail({ service, reversed = false }: ServiceDetailProps) {
  return (
    <section id={service.slug} className="border-t border-border py-20 sm:py-24">
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-6 lg:col-span-5",
              reversed ? "lg:order-2" : "lg:order-1"
            )}
          >
            <span className="font-display text-3xl text-accent">{service.number}</span>
            <h2 className="text-section-title">{service.title}</h2>
            <p className="text-body-lg text-text-muted">{service.shortDescription}</p>

            <ul className="mt-2 flex flex-col gap-3">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="text-body flex items-baseline gap-3 text-text-muted"
                >
                  <span aria-hidden className="h-px w-4 shrink-0 bg-accent" />
                  {capability}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <CTAButton href="/contact" variant="ghost">
                Discuss This Service
              </CTAButton>
            </div>
          </div>

          <ImageReveal
            className={cn("lg:col-span-7", reversed ? "lg:order-1" : "lg:order-2")}
          >
            <div className="relative aspect-[4/3]">
              <PlaceholderArt label={service.title} className="h-full w-full" />
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
