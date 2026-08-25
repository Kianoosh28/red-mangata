import Image from "next/image";
import PlaceholderArt from "./PlaceholderArt";
import type { ImageAsset } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectMediaProps = {
  image?: ImageAsset;
  fallbackLabel?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Bias the crop — most cover art is portrait-oriented with the subject's face/head near the top. */
  objectPosition?: string;
};

/** Renders the real project image when available, otherwise the placeholder — so pages never need an if/else for missing art. */
export default function ProjectMedia({
  image,
  fallbackLabel,
  className,
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
}: ProjectMediaProps) {
  if (!image) {
    return <PlaceholderArt label={fallbackLabel} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
