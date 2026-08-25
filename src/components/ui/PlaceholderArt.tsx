import { cn } from "@/lib/utils";

type PlaceholderArtProps = {
  /** Shown as the placeholder's caption — typically the project title. */
  label?: string;
  className?: string;
};

/**
 * Temporary stand-in for artwork that has not been supplied yet.
 * WAITING ON: real Red Mangata project photography/artwork. Replace by
 * adding an image to /public/images/projects/<slug>/ and passing it as
 * `heroImage` / `gallery` in src/content/projects.ts — no component
 * changes required.
 */
export default function PlaceholderArt({ label, className }: PlaceholderArtProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-surface",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-text) 0px, var(--color-text) 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 border border-border"
      />
      {label ? (
        <span className="text-label relative text-text-muted/70">{label}</span>
      ) : null}
    </div>
  );
}
