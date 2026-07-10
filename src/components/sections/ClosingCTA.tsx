import { Reveal } from "@/components/Reveal";

export function ClosingCTA() {
  return (
    <section id="contact" className="section-v2 relative z-[1] bg-pop text-paper">
      <div className="wrap text-left">
        <Reveal>
          <p className="label-v2 mb-[26px] !text-paper/55">Next step</p>
        </Reveal>
        <Reveal>
          <h2 className="heading-serif max-w-[900px] text-[clamp(2.125rem,5.6vw,4.125rem)] font-light leading-[1.1] text-paper">
            Bring us the idea,{" "}
            <em className="font-light italic text-accent">
              or bring us the round.
            </em>{" "}
            Either way, we start with the same conversation.
          </h2>
        </Reveal>
        <Reveal>
          <a href="mailto:hello@p36ventures.com" className="cta-link-light mt-11">
            hello@p36ventures.com →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
