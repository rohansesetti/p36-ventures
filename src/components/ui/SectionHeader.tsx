import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={`${alignClass} ${className}`}>
      <p className="label-v2">{eyebrow}</p>
      <h2 className="heading-serif mt-4 text-4xl font-light sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
