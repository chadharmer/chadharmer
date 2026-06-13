import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Narrative — the "why" */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Experience
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                Why I approach problems the way I do.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {experience.intro}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {experience.connection}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-2">
                {experience.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-md border border-line bg-surface/60 px-3 py-1.5 text-sm text-muted"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Career highlights — the "what" */}
          <div className="lg:pt-1">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Career highlights
              </p>
            </Reveal>
            <ul className="mt-5 border-t border-line">
              {experience.roles.map((role, i) => (
                <Reveal as="li" key={role.company} delay={i * 0.06}>
                  <div className="border-b border-line py-6">
                    <h3 className="text-base font-medium tracking-tight text-fg">
                      {role.company}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent/80">
                      {role.context}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {role.focus}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing message */}
        <Reveal delay={0.05}>
          <div className="mt-14 border-t border-line pt-10 sm:mt-16">
            <p className="max-w-3xl text-balance text-lg font-medium leading-relaxed tracking-tight sm:text-xl">
              <span className="text-fg">{experience.closing.lead}</span>{" "}
              <span className="text-faint">{experience.closing.trail}</span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
