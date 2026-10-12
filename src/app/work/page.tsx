import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { capabilityMatrix, methodNote, works } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Production AI products across recruiting, education and consumer apps — VeraTeach, Grocery Sidekick, Ryger and ReadMyStrip — and how each maps to grounded AI, evaluation, uncertainty and workflow design.",
};

const columns = [
  { key: "capitalOne", label: "Capital One" },
  ...works.map((w) => ({ key: w.slug, label: w.name })),
] as const;

export default function WorkIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-grid opacity-50"
              style={{
                maskImage: "radial-gradient(120% 70% at 50% 0%, #000 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(120% 70% at 50% 0%, #000 30%, transparent 75%)",
              }}
            />
          </div>
          <Container>
            <div className="max-w-3xl">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Selected Work · Yellow Labs Products · January 2025 – Present
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-gradient sm:text-6xl">
                  Production products across recruiting, education and consumer apps.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                  Each product exposed a different problem in designing AI systems people can
                  rely on: grounding generation in authoritative sources, evaluating quality
                  before it reaches users, deciding what a model should never decide, and turning
                  messy real-world input into answers people act on.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl border-l-2 border-accent/60 pl-5 text-sm leading-relaxed text-muted">
                  {methodNote}
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {works.map((work, i) => (
                <Reveal key={work.slug} delay={(i % 2) * 0.06} className="h-full">
                  <WorkCard work={work} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-line py-20 sm:py-28">
          <Container>
            <SectionHeading
              label="Capabilities by product"
              title="Where each capability shows up."
              description="The four capability themes from the homepage, mapped to the work that evidences them — including the enterprise work at Capital One."
            />

            <Reveal>
              {/* The table scrolls inside its own frame on narrow screens, so
                  the page itself never scrolls sideways. */}
              <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-surface/50">
                <table className="w-full min-w-[860px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-line">
                      <th scope="col" className="w-44 p-4 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-faint">
                        Theme
                      </th>
                      {columns.map((c) => (
                        <th
                          key={c.key}
                          scope="col"
                          className="p-4 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-accent/80"
                        >
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {capabilityMatrix.map((row) => (
                      <tr key={row.theme} className="border-b border-line last:border-b-0">
                        <th scope="row" className="p-4 align-top text-sm font-medium text-fg">
                          {row.theme}
                        </th>
                        {columns.map((c) => {
                          const cell = row.cells[c.key];
                          return (
                            <td key={c.key} className="p-4 align-top text-[13px] leading-relaxed text-muted">
                              {cell ?? <span className="text-faint/60">—</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
