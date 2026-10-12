import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { experience, type Role } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Narrative — the "why" */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  {experience.label}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                {experience.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-base leading-relaxed text-muted">{experience.intro}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  Education &amp; certifications
                </p>
                <ul className="mt-3 space-y-1.5">
                  {experience.credentials.map((c) => (
                    <li key={c} className="text-sm text-muted">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Roles — the "what" */}
          <ol className="border-t border-line">
            {experience.roles.map((role, i) => (
              <Reveal as="li" key={role.company} delay={i * 0.04}>
                <RoleEntry role={role} />
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="border-b border-line py-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-semibold tracking-tight text-fg">{role.company}</h3>
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {role.dates}
        </p>
      </div>

      {role.title ? (
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent/80">
          {role.title}
        </p>
      ) : null}
      {role.summary ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">{role.summary}</p>
      ) : null}

      {role.positions?.map((pos) => (
        <div key={pos.title} className="mt-5">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent/80">
              {pos.title}
            </p>
            <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {pos.dates}
            </p>
          </div>
          <ul className="mt-3 space-y-2">
            {pos.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {role.link ? (
        <Link
          href={role.link.href}
          className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          {role.link.label}
          <Arrow className="group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}
