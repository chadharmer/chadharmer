import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { writing } from "@/lib/content";

export function Writing() {
  return (
    <section
      id="writing"
      className="relative scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          label="Writing & Thinking"
          title="Working notes, soon."
          description="Essays on the problems I keep returning to — marketplaces, AI workflows, and what building products actually teaches you. Publishing here shortly."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {writing.map((essay, i) => (
            <Reveal key={essay.title} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-strong">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    {essay.category}
                  </span>
                  <span className="rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                    {essay.status}
                  </span>
                </div>

                <h3 className="mt-5 text-balance text-base font-medium leading-snug tracking-tight text-fg">
                  {essay.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {essay.blurb}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-sm text-faint">
                  Read soon
                  <span className="h-1 w-1 rounded-full bg-faint" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
