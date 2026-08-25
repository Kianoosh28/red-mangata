import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-text hover:bg-accent-hover border border-accent hover:border-accent-hover",
  secondary:
    "bg-transparent text-text border border-border hover:border-text/40",
  ghost: "bg-transparent text-text underline underline-offset-4 decoration-border hover:decoration-accent",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-label inline-flex min-h-11 items-center justify-center px-7 py-3 transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
