import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { competencies, type Competency } from "@/lib/content";

export function AICompetencies() {
  return (
    <section id="ai-work" className="relative scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="AI Product Work"
          title="Where I've actually done this."
          description="Recurring patterns across the products I've designed and built — not a skills list. Each competency names the work, then points to where it shows up, so it's clear these are habits, not one-off implementations. Every one is something I can walk through in detail, tradeoffs and all."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {competencies.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 0.06} className="h-full">
              <CompetencyCard competency={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CompetencyCard({ competency }: { competency: Competency }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong">
      <h3 className="text-base font-semibold tracking-tight text-fg">
        {competency.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {competency.summary}
      </p>

      <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
        {competency.evidence.map((e) => (
          <li key={e.product} className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 rounded border border-line bg-base/50 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-accent/80">
              {e.product}
            </span>
            <span className="text-[13px] leading-relaxed text-muted">
              {e.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
