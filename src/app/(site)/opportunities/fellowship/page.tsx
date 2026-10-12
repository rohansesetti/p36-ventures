import Link from "next/link";
import type { Metadata } from "next";
import { PhotoTint } from "@/components/ui/PhotoTint";
import { FaqList } from "@/components/fellowship/FaqList";
import { LiveFile } from "@/components/fellowship/LiveFile";
import {
  cohort,
  faqs,
  fellowshipSteps,
  membershipIncludes,
  stats,
  suits,
  workstreams,
} from "@/data/fellowship";

export const metadata: Metadata = {
  title: "The Fellowship | P36 Ventures",
  description:
    "Six weeks on live mandates. A cohort-based private markets fellowship, reviewed by the P36 core team.",
};

const sectionTitle =
  "heading-serif text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]";

export default function FellowshipPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <header className="border-b border-line pt-32 pb-14 lg:pt-36 lg:pb-20">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className="label-v2 mb-5">The P36 Fellowship</p>
              <h1 className="heading-serif max-w-[16ch] text-[clamp(2.25rem,5.2vw,4rem)] font-light leading-[1.06]">
                Six weeks on live mandates.
              </h1>
              <p className="mt-6 max-w-[34rem] text-[16px] font-light leading-[1.7] text-ink-soft">
                You draft the work. The core team reviews every line.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:items-end lg:text-right">
              <Link href="/opportunities/fellowship/apply" className="cta-link">
                Apply →
              </Link>
              <p className="text-[13px] leading-[1.6] text-ink-faint">
                {cohort.admissions}.
                <br />
                {cohort.name} closes {cohort.closeDate}.
              </p>
            </div>
          </div>

          {stats.some((s) => s.value) ? (
            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-8">
              {stats
                .filter((s) => s.value)
                .map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-1.5 text-[12.5px] text-ink-faint">{s.label}</dt>
                    <dd className="heading-serif text-[clamp(1.5rem,2.8vw,2.125rem)] font-light">
                      {s.value}
                    </dd>
                  </div>
                ))}
            </dl>
          ) : null}

          <div className="mt-12 lg:mt-16 lg:ml-[8.333%]">
            <LiveFile />
          </div>
        </div>
      </header>

      {/* How it runs */}
      <section className="section-v2">
        <div className="wrap">
          <p className="label-v2 mb-5">How it runs</p>
          <div className="flex flex-col">
            {fellowshipSteps.map((step, i) => (
              <div
                key={step.rn}
                className={`grid grid-cols-[40px_1fr] gap-5 border-t border-line py-5 md:grid-cols-[9rem_1fr_2fr] ${
                  i === fellowshipSteps.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div>
                  <span className="heading-serif text-lg italic text-ink-faint">
                    {step.rn}
                  </span>
                  <p className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint md:block">
                    {step.window}
                  </p>
                </div>
                <div>
                  <h2 className="heading-serif text-xl font-normal">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint md:hidden">
                    {step.window}
                  </p>
                </div>
                <div className="col-start-2 md:col-start-3">
                  <p className="max-w-[440px] text-sm leading-[1.65] text-ink-soft">
                    {step.desc}
                  </p>
                  {"note" in step ? (
                    <p className="mt-2 max-w-[440px] text-[13px] leading-[1.6] text-ink-faint">
                      {step.note}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workstreams */}
      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="label-v2 mb-5">Workstreams</p>
          <ul className="flex flex-col">
            {workstreams.map((ws, i) => (
              <li
                key={ws.id}
                id={ws.id}
                className={`scroll-mt-28 grid grid-cols-1 gap-2 border-t border-line py-6 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-8 ${
                  i === workstreams.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <h2 className="heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light">
                  {ws.title}
                </h2>
                <p className="text-[14.5px] leading-[1.7] text-ink-soft">
                  {ws.output}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership */}
      <section className="relative z-[1] border-t border-line">
        <div className="wrap grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <PhotoTint
            src="/photos/fields/capital.jpg"
            alt="A bright workspace looking out onto the city"
            tint="green"
            revealOnHover={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="order-2 aspect-[16/11] w-full lg:order-1 lg:aspect-auto lg:h-full lg:min-h-[26rem]"
          />
          <div className="order-1 py-16 lg:order-2 lg:py-20 lg:pl-16">
            <p className="label-v2 mb-5">Membership</p>
            <h2 className={`${sectionTitle} max-w-[20ch]`}>What you get.</h2>
            <ul className="mt-8 flex flex-col">
              {membershipIncludes.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-1 gap-1 border-t border-line py-3.5 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-4"
                >
                  <h3 className="text-[14.5px] text-ink">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-ink-soft">
                    {item.desc}
                    {"small" in item ? (
                      <span className="block text-[12px] text-ink-faint">
                        {item.small}
                      </span>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/opportunities/fellowship/membership"
              className="cta-link mt-8"
            >
              How membership works →
            </Link>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="section-v2 border-t border-line">
        <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label-v2 mb-5">Fit</p>
            <h2 className={`${sectionTitle} max-w-[14ch]`}>Who it suits.</h2>
          </div>
          <ul className="flex flex-col lg:col-span-7 lg:col-start-6" aria-label="It suits">
            {suits.map((s) => (
              <li
                key={s}
                className="border-t border-line py-3.5 text-[15px] leading-[1.6] text-ink last:border-b"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-v2 scroll-mt-24 border-t border-line">
        <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label-v2 mb-5">Questions</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-[1] border-t border-line">
        <div className="wrap grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-16 pr-0 lg:py-24 lg:pr-16">
            <p className="heading-serif max-w-[24rem] text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.3]">
              {cohort.name} closes {cohort.closeDate}.
            </p>
            <Link
              href="/opportunities/fellowship/apply"
              className="cta-link mt-8"
            >
              Apply →
            </Link>
          </div>
          <PhotoTint
            src="/photos/fields/studio.jpg"
            alt="A long studio corridor with glass rooms and a dark wall"
            tint="gold"
            revealOnHover={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[24rem]"
          />
        </div>
      </section>
    </main>
  );
}
