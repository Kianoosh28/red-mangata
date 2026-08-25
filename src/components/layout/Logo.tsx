import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Height/width sizing is the caller's responsibility — there's no default, so it can never silently conflict with an override. */
  className: string;
  /** Set on the header instance — logo is above the fold and part of the LCP. */
  priority?: boolean;
  /** "horizontal" (default) is used everywhere except the footer, which uses the vertical lockup. */
  variant?: "horizontal" | "vertical";
};

const LOGO_ASSET = {
  horizontal: {
    src: "/images/brand/logo-horizontal-darkbg.png",
    width: 7500,
    height: 2902,
  },
  vertical: {
    src: "/images/brand/logo-vertical-darkbg.png",
    width: 5644,
    height: 7270,
  },
} as const;

/**
 * Red Mångata lockup, dark-background versions — every surface in the
 * current design is dark. Swap to the *-lightbg assets if a light section
 * is ever introduced.
 */
export default function Logo({ className, priority = false, variant = "horizontal" }: LogoProps) {
  const asset = LOGO_ASSET[variant];

  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image
        src={asset.src}
        alt="Red Mångata — Home"
        width={asset.width}
        height={asset.height}
        priority={priority}
        className={cn("w-auto", className)}
      />
    </Link>
  );
}
