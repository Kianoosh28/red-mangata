import Image from "next/image";
import Link from "next/link";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { ImageAsset, Project } from "@/content/projects";

type FullWidthCoverProps = {
  project: Project & { heroImage?: ImageAsset };
};

/**
 * A single project spanning the full portfolio width at its own natural
 * aspect ratio — no crop, no forced ratio. Used for the "statement" rows
 * (Ario, Zombie Craft, Sepahsalar) in the homepage Selected Work sequence.
 */
export default function FullWidthCover({ project }: FullWidthCoverProps) {
  const image = project.heroImage;

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative w-full overflow-hidden rounded-none bg-surface">
        {image?.width && image.height ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1440px) 1280px, 90vw"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <PlaceholderArt label={project.title} className="aspect-[16/9] w-full" />
        )}
      </div>

      <div className="mt-7 sm:mt-8">
        <h3 className="text-project-title">{project.title}</h3>
        <p className="text-label mt-1.5 text-text-muted">{project.subtitle}</p>
      </div>
    </Link>
  );
}
