import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            label="Experience"
            title="Enterprise depth behind the building."
            description="Years inside large, regulated organizations — where the bar for clarity, reliability, and judgment is high. It informs the work; it isn't the story."
          />

          <div className="lg:pt-2">
            <ul className="divide-y divide-line border-y border-line">
              {experience.map((role, i) => (
                <Reveal as="li" key={role.company} delay={i * 0.06}>
                  <div className="group flex items-start justify-between gap-6 py-6 transition-colors">
                    <div>
                      <h3 className="text-base font-medium tracking-tight text-fg">
                        {role.company}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {role.focus}
                      </p>
                    </div>
                    <span className="shrink-0 pt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                      {role.context}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
