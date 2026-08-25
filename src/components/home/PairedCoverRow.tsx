import Image from "next/image";
import Link from "next/link";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import type { ImageAsset, Project } from "@/content/projects";
import type { CSSProperties } from "react";

type PairProject = Project & { heroImage?: ImageAsset };

type PairedCoverRowProps = {
  left: PairProject;
  right: PairProject;
};

/**
 * Two projects side by side at equal column widths. The row height is set
 * by whichever cover is proportionally wider at that width (it displays at
 * its full natural size); the other is cropped down to match — never the
 * reverse, and never a predefined ratio like 4:3. On mobile each column
 * reverts to its own natural ratio, stacked full-width (see .pair-media).
 */
export default function PairedCoverRow({ left, right }: PairedCoverRowProps) {
  const leftAspect = imageAspect(left.heroImage);
  const rightAspect = imageAspect(right.heroImage);
  const rowAspect =
    leftAspect && rightAspect ? Math.max(leftAspect, rightAspect) : (leftAspect ?? rightAspect);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-10 lg:gap-12">
      <PairColumn project={left} ownAspect={leftAspect} rowAspect={rowAspect} />
      <PairColumn project={right} ownAspect={rightAspect} rowAspect={rowAspect} />
    </div>
  );
}

function imageAspect(image?: ImageAsset): number | undefined {
  return image?.width && image.height ? image.width / image.height : undefined;
}

function PairColumn({
  project,
  ownAspect,
  rowAspect,
}: {
  project: PairProject;
  ownAspect?: number;
  rowAspect?: number;
}) {
  const image = project.heroImage;
  const style = {
    "--own-aspect": ownAspect ?? rowAspect ?? 4 / 3,
    "--row-aspect": rowAspect ?? ownAspect ?? 4 / 3,
  } as CSSProperties;

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className="pair-media relative w-full overflow-hidden rounded-none bg-surface"
        style={style}
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        ) : (
          <PlaceholderArt label={project.title} className="h-full w-full" />
        )}
      </div>

      <div className="mt-7 sm:mt-8">
        <h3 className="text-project-title">{project.title}</h3>
        <p className="text-label mt-1.5 text-text-muted">{project.subtitle}</p>
      </div>
    </Link>
  );
}
