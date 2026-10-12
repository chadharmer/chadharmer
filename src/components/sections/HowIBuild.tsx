import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { principles, principlesIntro } from "@/lib/content";

export function HowIBuild() {
  return (
    <section
      id="how-i-work"
      className="relative scroll-mt-20 border-y border-line py-24 sm:py-32"
    >
      {/* Subtle section tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,_rgba(139,139,255,0.05),_transparent_70%)]"
      />

      <Container>
        <SectionHeading
          label={principlesIntro.label}
          title={principlesIntro.title}
          description={principlesIntro.description}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              key={p.index}
              delay={(i % 2) * 0.06}
              className={
                "bg-surface/60 " +
                // Make the 5th (odd, last) card span both columns on sm+
                (i === principles.length - 1 ? "sm:col-span-2" : "")
              }
            >
              <div className="group h-full p-7 transition-colors hover:bg-elevated/60 sm:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-faint transition-colors group-hover:text-accent">
                    {p.index}
                  </span>
                  <div>
                    <h3 className="text-balance text-lg font-medium tracking-tight text-fg">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent/70">
                      {p.sources}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
