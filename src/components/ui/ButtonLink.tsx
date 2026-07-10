import Link from "next/link";
import type { ComponentProps } from "react";

type Variant =
  | "primary"
  | "gold"
  | "navy"
  | "obsidian"
  | "outline-ivory";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  gold: "btn btn-gold",
  navy: "btn btn-navy",
  obsidian: "btn btn-obsidian",
  "outline-ivory": "btn btn-outline-ivory",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${variantClass[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
