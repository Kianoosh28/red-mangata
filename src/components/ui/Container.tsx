import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** "content" = wide layout (max 1440px), "text" = narrower reading measure (max 1160px). */
  width?: "content" | "text";
  as?: keyof React.JSX.IntrinsicElements;
};

export default function Container({
  children,
  className,
  width = "content",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20",
        width === "content" ? "max-w-[1440px]" : "max-w-[1160px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
