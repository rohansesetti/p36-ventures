import { Reveal } from "@/components/Reveal";

const steps = [
  {
    rn: "I",
    title: "Diagnose",
    desc: "We find the legal and financial gaps quietly capping the valuation.",
  },
  {
    rn: "II",
    title: "Structure",
    desc: "We engineer the right blend of dilutive and non-dilutive capital for this stage.",
  },
  {
    rn: "III",
    title: "Operate",
    desc: "We embed as fractional leadership to drive velocity while the team scales.",
  },
  {
    rn: "IV",
    title: "Exit",
    desc: "We professionalize governance and the data room ahead of a sale.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-[26px]">How a mandate runs</p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.rn}
                className={`grid grid-cols-[40px_1fr] gap-[30px] border-t border-line py-7 md:grid-cols-[70px_1fr_2fr] ${
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
