import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Disciplines() {
  return (
    <section id="disciplines" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-[26px]">What we do</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[70px] lg:grid-cols-2 lg:gap-[100px]">
          <Reveal>
            <div>
              <h3 className="heading-serif mb-5 flex items-center gap-3.5 text-[clamp(1.625rem,3vw,2.25rem)] font-light">
                <span className="dot-studio" aria-hidden />
                Studio
              </h3>
              <p className="mb-[26px] max-w-[400px] text-[15px] leading-[1.75] text-ink-soft">
                For ideas that need an operator before they need a term sheet. We
                co-found, build the first version, and stay through the first
                institutional round.
              </p>
              <Link href="/contact" className="cta-link">
                Pitch us an idea →
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="heading-serif mb-5 flex items-center gap-3.5 text-[clamp(1.625rem,3vw,2.25rem)] font-light">
                <span className="dot-capital" aria-hidden />
                Capital
              </h3>
              <p className="mb-[26px] max-w-[400px] text-[15px] leading-[1.75] text-ink-soft">
                For founders with traction who need the stack engineered properly —
                the right mix of equity, debt, and non-dilutive funding, placed
                with the right investors.
              </p>
              <Link href="/contact" className="cta-link">
                Raise with us →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
