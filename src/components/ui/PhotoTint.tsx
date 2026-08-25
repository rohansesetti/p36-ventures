import Image from "next/image";
import type { ReactNode } from "react";

export type PhotoTintColor = "gold" | "green";

type PhotoTintProps = {
  src: string;
  alt: string;
  tint?: PhotoTintColor;
  /** When true, hover/focus lifts the wash so the photograph’s own colour appears. */
  revealOnHover?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
};

export function PhotoTint({
  src,
  alt,
  tint = "gold",
  revealOnHover = true,
  sizes = "(min-width: 1024px) 25vw, 80vw",
  priority = false,
  className = "",
  children,
}: PhotoTintProps) {
  return (
    <div
      className={`photo-tint ${revealOnHover ? "photo-tint--reveal" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="photo-tint__img"
      />
      <div
        className={`photo-tint__wash photo-tint__wash--${tint}`}
        aria-hidden
      />
      {children ? (
        <div className="photo-tint__content">{children}</div>
      ) : null}
    </div>
  );
}
