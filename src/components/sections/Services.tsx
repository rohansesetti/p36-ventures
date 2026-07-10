import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

import { GrantMandateCard } from "@/components/sections/GrantMandateCard";

export function Services() {
  return (
    <section id="services" className="bg-navy-900 section-py">
      <Container>
        <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            Full pillar breakdown and deliverables on{" "}
            <span className="text-gold">/services</span>. Below: the developer
            credits program.
          </p>
          <ButtonLink href="/services" variant="gold">
            View services
          </ButtonLink>
        </div>

        <GrantMandateCard />
      </Container>
    </section>
  );
}
