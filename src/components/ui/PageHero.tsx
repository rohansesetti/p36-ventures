import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
};

/** Standard opener for inner pages — clears the fixed header on its own. */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <header className="border-b border-line pt-32 pb-12 lg:pt-36 lg:pb-16">
      <div className="wrap">
        <p className="label-v2 mb-5">{eyebrow}</p>
        <h1 className="heading-serif max-w-[16ch] text-[clamp(2.25rem,5.2vw,4rem)] font-light leading-[1.06]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-[46rem] text-[16px] font-light leading-[1.7] text-ink-soft">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
