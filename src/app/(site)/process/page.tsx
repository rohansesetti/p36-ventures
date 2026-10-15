import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Process | P36 Ventures",
  description:
    "How a P36 engagement runs: diagnose, structure, operate, scale — with the deliverables attached to each stage.",
};

const stages = [
  {
    rn: "I",
    title: "Diagnose",
    window: "Weeks 1–2",
    summary:
      "We find the legal and financial gaps holding back the valuation.",
    body: "Before anything is built or raised, we audit what already exists — the cap table, the contracts, the model, the reporting. Most companies are carrying at least one structural problem that will surface in diligence. It is far cheaper to find it now than in week six of a process.",
    outputs: [
      "Capital structure and cap table audit",
      "Financial model review and rebuild",
      "Diligence gap analysis with severity ranking",
      "Written recommendation and scope of work",
    ],
  },
  {
    rn: "II",
    title: "Structure",
    window: "Weeks 2–6",
    summary:
      "We put together the right mix of equity, debt and non-dilutive funding for the stage.",
    body: "Not every company should raise equity, and almost none should raise only equity. We design the stack around the actual shape of the business — grants and credits where they fit, debt where the cash flows support it, equity where it buys something you cannot get otherwise.",
    outputs: [
      "Capital structure design and scenario modeling",
      "Investor narrative and information memorandum",
      "Data room build, populated and diligence-ready",
      "Target investor list with routes to introduction",
    ],
  },
  {
    rn: "III",
    title: "Operate",
    window: "Ongoing",
    summary:
      "We step in as fractional leadership and keep the company moving while the team grows.",
    body: "This is where most advisory relationships stop and ours does not. We hold a seat — fractional CFO, COO, or CEO depending on the company — running the finance function, the board cadence, and the operating rhythm until the company can carry it internally.",
    outputs: [
      "Fractional CFO, COO, or CEO leadership",
      "Board reporting and investor updates",
      "Budgeting, forecasting, and burn management",
      "Hiring plan and compensation structure",
    ],
  },
  {
    rn: "IV",
    title: "Scale",
    window: "As the company grows",
    summary:
      "We build the governance and reporting that let the company keep raising and growing.",
    body: "Growth puts new weight on a company: more investors, more reporting, a bigger board. We put governance, financial controls, and a current data room in place so each next round, partnership, or acquisition conversation is a formality rather than a scramble.",
    outputs: [
      "Governance and board structure review",
      "Financial controls and reporting upgrade",
      "Data room kept current between rounds",
      "Support on follow-on rounds and strategic deals",
    ],
  },
] as const;

const commitments = [
  {
    title: "Named deliverables",
    desc: "Each stage ends with something concrete leaving our desk — a model, a memorandum, a data room, a structure. No retainers against vague availability.",
  },
  {
    title: "The people you meet lead the work",
    desc: "We work with a small number of companies on purpose. A partner reviews and signs off every piece of analysis you receive.",
  },
  {
    title: "You can stop between stages",
    desc: "Engagements are scoped stage by stage. If the diagnosis says you do not need us yet, we will tell you that and hand back the work.",
  },
] as const;

export default function ProcessPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="How an engagement runs"
        title={
          <>
            Four stages, each with a{" "}
            <em className="font-light italic">deliverable</em> attached.
          </>
        }
        lead="Every engagement follows the same spine, whether it is a studio build or a capital raise. What changes is the depth of each stage — not the order."
      />

      <section className="section-v2">
        <div className="wrap">
          {stages.map((stage, i) => (
            <div
              key={stage.rn}
              className={`grid grid-cols-1 gap-8 py-12 lg:grid-cols-[auto_1fr_1fr] lg:gap-16 ${
                i > 0 ? "border-t border-line" : "pt-0"
              }`}
            >
              <div className="lg:w-[90px]">
                <span className="heading-serif text-2xl italic text-ink-faint">
                  {stage.rn}
                </span>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                  {stage.window}
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.15]">
                  {stage.title}
                </h2>
                <p className="mt-4 max-w-[420px] text-[16px] font-light leading-[1.6] text-ink">
                  {stage.summary}
                </p>
                <p className="mt-5 max-w-[440px] text-[14.5px] leading-[1.75] text-ink-soft">
                  {stage.body}
                </p>
              </div>

              <div>
                <p className="label-v2 mb-4">What you receive</p>
                <ul className="flex flex-col">
                  {stage.outputs.map((out) => (
                    <li
                      key={out}
                      className="border-t border-line py-3.5 text-[14px] leading-[1.6] text-ink-soft last:border-b"
                    >
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="label-v2 mb-5">What you can hold us to</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {commitments.map((c) => (
              <div key={c.title}>
                <h3 className="heading-serif text-xl font-normal">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <h2 className="heading-serif max-w-[22ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              Most engagements start with a diagnosis.
            </h2>
            <Link href="/contact" className="cta-link mt-6">
              Book the first conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
