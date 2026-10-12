import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTint } from "@/components/ui/PhotoTint";
import { FaqList } from "@/components/fellowship/FaqList";
import {
  cohort,
  doesNotSuit,
  faqs,
  fellowshipSteps,
  membershipIncludes,
  suits,
  weeks,
  workstreams,
} from "@/data/fellowship";

export const metadata: Metadata = {
  title: "The Fellowship | P36 Ventures",
  description:
    "A six-week, cohort-based fellowship in private markets. Models, memoranda and diligence on live files, reviewed by the P36 core team.",
};

const sectionTitle =
  "heading-serif text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]";

export default function FellowshipPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="The P36 Fellowship"
        title="Six weeks on live files."
        lead="A cohort-based programme in private markets. Models, memoranda and diligence on real companies, reviewed by the core team."
      >
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <Link href="/opportunities/fellowship/apply" className="cta-link">
            Apply →
          </Link>
          <p className="text-[13px] leading-[1.6] text-ink-faint">
            Unpaid. {cohort.name} begins {cohort.startDate}.{" "}
            {cohort.places} places.
          </p>
        </div>
      </PageHero>

      {/* How it runs */}
      <section className="section-v2">
        <div className="wrap">
          <p className="label-v2 mb-5">How it runs</p>
          <div className="flex flex-col">
            {fellowshipSteps.map((step, i) => (
              <div
                key={step.rn}
                className={`grid grid-cols-[40px_1fr] gap-5 border-t border-line py-5 md:grid-cols-[70px_1fr_2fr] ${
                  i === fellowshipSteps.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="heading-serif text-lg italic text-ink-faint">
                  {step.rn}
                </span>
                <h2 className="heading-serif text-xl font-normal">
                  {step.title}
                </h2>
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
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className={`${sectionTitle} max-w-[24rem]`}>
              Four streams of work.
            </h2>
            <p className="max-w-[340px] text-[13.5px] leading-[1.65] text-ink-soft lg:text-right">
              Each fellow is assigned one for the cohort. Every output is
              reviewed before it moves.
            </p>
          </div>
          <ul className="flex flex-col">
            {workstreams.map((ws, i) => (
              <li
                key={ws.id}
                id={ws.id}
                className={`scroll-mt-28 grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[9rem_1fr_1.4fr] md:gap-8 ${
                  i === workstreams.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <p className="label-v2 pt-1">{ws.skill}</p>
                <div>
                  <h3 className="heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light">
                    {ws.title}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[14.5px] leading-[1.7] text-ink-soft">
                    {ws.desc}
                  </p>
                </div>
                <div className="md:pt-1">
                  <p className="label-v2 mb-2">Example output</p>
                  <p className="max-w-[400px] text-[14px] leading-[1.7] text-ink-soft">
                    {ws.output}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership includes */}
      <section className="relative z-[1] border-t border-line">
        <div className="wrap grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <PhotoTint
            src="/photos/fields/capital.jpg"
            alt="A bright workspace looking out onto the city"
            tint="green"
            revealOnHover={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="order-2 aspect-[16/11] w-full lg:order-1 lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          />
          <div className="order-1 py-16 lg:order-2 lg:py-20 lg:pl-16">
            <p className="label-v2 mb-5">Membership</p>
            <h2 className={`${sectionTitle} max-w-[20ch]`}>
              What the membership includes.
            </h2>
            <ul className="mt-8 flex flex-col">
              {membershipIncludes.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-line py-4 last:border-b"
                >
                  <h3 className="heading-serif text-lg font-normal">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.65] text-ink-soft">
                    {item.desc}
                  </p>
                  {"small" in item ? (
                    <p className="mt-1 text-[12px] leading-[1.6] text-ink-faint">
                      {item.small}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13.5px] leading-[1.65] text-ink-soft">
              Activated on selection. Reimbursed in full if you are invited
              to join a desk.
            </p>
            <Link
              href="/opportunities/fellowship/membership"
              className="cta-link mt-6"
            >
              How membership works →
            </Link>
          </div>
        </div>
      </section>

      {/* Week by week */}
      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="label-v2 mb-8">Week by week</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {weeks.map((w) => (
              <div key={w.window} className="border-t border-line pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                  {w.window}
                </p>
                <h3 className="heading-serif mt-3 text-xl font-normal">
                  {w.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervision + who it suits */}
      <section className="section-v2 border-t border-line">
        <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-v2 mb-5">Supervision</p>
            <p className="heading-serif max-w-[24ch] text-[clamp(1.375rem,2.4vw,1.75rem)] font-light leading-[1.3]">
              All work is reviewed by the core team before it leaves the firm.{" "}
              <span className="text-ink-soft">
                Fellows do not deal with clients directly.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="label-v2 mb-4">It suits</p>
              <ul className="flex flex-col">
                {suits.map((s) => (
                  <li
                    key={s}
                    className="border-t border-line py-3 text-[14px] leading-[1.6] text-ink-soft last:border-b"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-v2 mb-4">It does not suit</p>
              <ul className="flex flex-col">
                {doesNotSuit.map((s) => (
                  <li
                    key={s}
                    className="border-t border-line py-3 text-[14px] leading-[1.6] text-ink-soft last:border-b"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After the Fellowship — kept deliberately brief */}
      <section className="border-t border-line py-12">
        <div className="wrap grid grid-cols-1 gap-4 md:grid-cols-[9rem_1fr] md:gap-8">
          <p className="label-v2 pt-1">Afterwards</p>
          <div>
            <p className="max-w-[40rem] text-[14.5px] leading-[1.75] text-ink-soft">
              P36&rsquo;s commission-based desks are filled by referral or
              offered to exceptional candidates. A fellow who stands out in the
              cohort may be invited to one, with their membership reimbursed in
              full.
            </p>
            <Link href="/opportunities" className="cta-link mt-5">
              Desk roles →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-v2 scroll-mt-24 border-t border-line">
        <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label-v2 mb-5">Questions</p>
            <h2 className={`${sectionTitle} max-w-[14ch]`}>
              Before you apply.
            </h2>
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
            <p className="heading-serif max-w-[28rem] text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.3]">
              Applications for {cohort.name} close {cohort.closeDate}.{" "}
              <span className="text-ink-soft">
                We keep the cohort small.
              </span>
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
            className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          />
        </div>
      </section>
    </main>
  );
}
