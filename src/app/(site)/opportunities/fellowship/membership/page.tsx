import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import {
  membership,
  membershipIncludes,
  reimbursementCriteria,
} from "@/data/fellowship";

export const metadata: Metadata = {
  title: "Fellowship Membership | P36 Ventures",
  description:
    "What the P36 Fellowship Membership covers, what it costs, and how reimbursement works.",
};

const h2 =
  "heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light leading-[1.25]";
const body = "mt-4 text-[15px] leading-[1.75] text-ink-soft";

export default function MembershipPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="The P36 Fellowship"
        title="Membership."
      />

      <section className="section-v2">
        <div className="wrap">
          <div className="max-w-[45rem]">
            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">I</span>
              <div>
                <h2 className={h2}>What it covers</h2>
                <ul className="mt-5 flex flex-col">
                  {membershipIncludes.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-line py-3.5 text-[14.5px] leading-[1.65] text-ink-soft last:border-b"
                    >
                      <span className="text-ink">{item.title}.</span>{" "}
                      {item.desc}
                      {"small" in item ? ` ${item.small}` : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">II</span>
              <div>
                <h2 className={h2}>Cost</h2>
                <p className="heading-serif mt-4 text-[clamp(2rem,4vw,2.75rem)] font-light leading-none">
                  {membership.price}
                  <span className="ml-3 font-sans text-[14px] text-ink-faint">
                    one-time
                  </span>
                </p>
                <p className={body}>
                  Activated after selection. Nothing to pay to apply.
                </p>
              </div>
            </div>

            <div
              id="criteria"
              className="grid scroll-mt-28 grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]"
            >
              <span className="heading-serif text-lg italic text-ink-faint">III</span>
              <div className="min-w-0">
                <h2 className={h2}>Reimbursement</h2>
                <p className={body}>
                  Reimbursed in full if you are offered a P36 analyst role after
                  the Week 6 review.
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-[13.5px] leading-[1.55]">
                    <thead>
                      <tr className="border-b border-line">
                        {["Criterion", "How it is measured", "Threshold", "Assessed by"].map(
                          (h) => (
                            <th
                              key={h}
                              scope="col"
                              className="py-3 pr-4 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint"
                            >
                              {h}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {reimbursementCriteria.map((row) => (
                        <tr key={row.criterion} className="border-b border-line">
                          <th scope="row" className="py-3.5 pr-4 font-normal text-ink">
                            {row.criterion}
                          </th>
                          <td className="py-3.5 pr-4 text-ink-soft">{row.measure}</td>
                          <td className="py-3.5 pr-4 text-ink-soft">{row.threshold}</td>
                          <td className="py-3.5 text-ink-soft">{row.assessor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-[14px] leading-[1.7] text-ink-soft">
                  Meeting the criteria is the minimum. Invitations are rare and
                  not guaranteed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">IV</span>
              <div>
                <h2 className={h2}>Timing</h2>
                <p className={body}>
                  Reimbursed in full within {membership.reimbursementDays} days
                  of joining, to the original payment method.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">V</span>
              <div>
                <h2 className={h2}>If you are not offered a role</h2>
                <p className={body}>
                  You keep the templates and certificate. No reimbursement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">VI</span>
              <div>
                <h2 className={h2}>Cancelling before the cohort starts</h2>
                <p className={body}>[CANCELLATION POLICY]</p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-y border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">VII</span>
              <div>
                <h2 className={h2}>Questions</h2>
                <p className={body}>
                  Write to{" "}
                  <a
                    href={`mailto:${membership.contact}`}
                    className="text-ink underline decoration-line underline-offset-4"
                  >
                    {membership.contact}
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <Link href="/opportunities/fellowship/apply" className="cta-link">
                Apply →
              </Link>
              <Link href="/opportunities/fellowship" className="cta-link">
                About the Fellowship →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
