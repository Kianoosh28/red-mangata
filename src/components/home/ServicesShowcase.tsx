"use client";

import { useState } from "react";
import Image from "next/image";
import type { Service } from "@/content/services";
import type { ImageAsset } from "@/content/projects";
import { cn } from "@/lib/utils";

type ServiceWithArt = Service & { image?: ImageAsset; objectPosition?: string };

type ServicesShowcaseProps = {
  services: ServiceWithArt[];
};

export default function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start lg:gap-16">
      {/* Desktop: compact list, no visible description — the active service's copy lives in the preview panel so hovering never reflows the list. */}
      <ul className="hidden border-t border-border lg:col-span-5 lg:block">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={service.slug} className="border-b border-border">
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group flex w-full cursor-pointer items-center gap-5 py-5 text-left"
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-6 shrink-0 bg-accent transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "font-display text-xl shrink-0 transition-colors duration-200",
                    isActive ? "text-accent" : "text-text-muted"
                  )}
                >
                  {service.number}
                </span>
                <span
                  className={cn(
                    "font-display text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.005em] transition-colors duration-200",
                    isActive ? "text-text" : "text-text-muted"
                  )}
                >
                  {service.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Desktop preview: crossfading artwork + the active service's copy. */}
      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-32 flex flex-col gap-6">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-none bg-surface">
            {services.map((service, index) =>
              service.image ? (
                <Image
                  key={service.slug}
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="45vw"
                  className={cn(
                    "object-cover transition-opacity duration-300 ease-out",
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  )}
                  style={{ objectPosition: service.objectPosition ?? "center 20%" }}
                />
              ) : null
            )}
          </div>
          <p key={active.slug} className="text-body-lg max-w-md text-text-muted">
            {active.shortDescription}
          </p>
        </div>
      </div>

      {/* Mobile: stacked, non-interactive — small thumbnail per service, no hover dependency. */}
      <ul className="flex flex-col border-t border-border lg:hidden">
        {services.map((service) => (
          <li key={service.slug} className="flex gap-5 border-b border-border py-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-none bg-surface">
              {service.image ? (
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                  style={{ objectPosition: service.objectPosition ?? "center 20%" }}
                />
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-display text-lg text-accent">{service.number}</span>
              <h3 className="text-project-title">{service.title}</h3>
              <p className="text-body text-text-muted">{service.shortDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
