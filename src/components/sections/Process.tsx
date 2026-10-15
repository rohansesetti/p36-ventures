import { Reveal } from "@/components/Reveal";

const steps = [
  {
    rn: "I",
    title: "Diagnose",
    desc: "We find the legal and financial gaps holding back the valuation.",
  },
  {
    rn: "II",
    title: "Structure",
    desc: "We put together the right mix of equity, debt and non-dilutive funding for the stage.",
  },
  {
    rn: "III",
    title: "Operate",
    desc: "We step in as fractional leadership and keep the company moving while the team grows.",
  },
  {
    rn: "IV",
    title: "Scale",
    desc: "We build the governance and reporting that let the company keep raising and growing.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-5">How an engagement runs</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.rn}
                className={`grid grid-cols-[40px_1fr] gap-5 border-t border-line py-5 md:grid-cols-[70px_1fr_2fr] ${
                  i === steps.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="heading-serif text-lg italic text-ink-faint">
                  {step.rn}
                </span>
                <h4 className="heading-serif text-xl font-normal">{step.title}</h4>
                <p className="max-w-[440px] text-sm leading-[1.65] text-ink-soft md:col-start-3">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
