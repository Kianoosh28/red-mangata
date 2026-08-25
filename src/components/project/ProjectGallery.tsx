import Image from "next/image";
import Container from "@/components/ui/Container";
import ImageReveal from "@/components/ui/ImageReveal";
import type { GalleryImage } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  gallery: GalleryImage[];
};

/**
 * Masonry-style layout that keeps each image's real aspect ratio (no
 * cropping) — necessary because project artwork ranges from tall character
 * portraits to wide panoramic banners. Very wide images span both columns
 * instead of being squeezed into one.
 */
export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  if (gallery.length === 0) {
    return (
      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <p className="text-label text-text-muted">
            Gallery artwork for this project is not available yet.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="columns-1 gap-6 sm:columns-2 sm:gap-8">
          {gallery.map((image, index) => (
            <ImageReveal
              key={image.src}
              delay={0.03 * (index % 4)}
              className={cn(
                "mb-6 break-inside-avoid sm:mb-8",
                image.layout === "full" && "sm:[column-span:all]"
              )}
            >
              <figure>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1600}
                  height={image.height ?? 1000}
                  sizes={image.layout === "full" ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                  className="h-auto w-full bg-surface"
                />
                {image.label ? (
                  <figcaption className="text-label mt-3 text-text-muted">
                    {image.label}
                  </figcaption>
                ) : null}
              </figure>
            </ImageReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
