import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DiscoveryTimeline } from "@/components/ryger/DiscoveryTimeline";
import {
  CardGrid,
  CaseHero,
  CaseSection,
  CoreLesson,
  NextStep,
  OtherWork,
  PointList,
  StepRail,
  TechnicalDetail,
} from "@/components/case-study/CaseStudy";
import { ryger, workBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ryger — Case Study",
  description:
    "How Ryger evolved from a matching tool into a recruiter-owned talent network — the discovery sequence, requirement-level Met / Review / Missed assessment with cited evidence, and evidence-constrained resume generation.",
  openGraph: {
    title: "Ryger — Case Study · Chad Harmer",
    description:
      "From matching engine to talent network: product discovery and evidence-first AI assessment.",
  },
};

export default function RygerCaseStudy() {
  const work = workBySlug("ryger");
  const accent = work.accent;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <CaseHero
          work={work}
          positioning={ryger.positioning}
          intro={ryger.intro}
          tldr={ryger.tldr}
          glance={ryger.glance}
        />

        <CaseSection
          label="Problem"
          title="Recruiting effort rarely compounds."
          description={ryger.problem}
          accent={accent}
        />

        <CaseSection
          label="Discovery"
          title="Seven discoveries, one direction."
          accent={accent}
        >
          <div className="max-w-4xl">
            <DiscoveryTimeline />
          </div>
        </CaseSection>

        {/* The pivot — what the discoveries changed */}
        <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_50%,_rgba(139,139,255,0.09),_transparent_70%)]"
          />
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  The pivot
                </span>
                <blockquote className="mt-6 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-gradient-accent sm:text-5xl">
                  &ldquo;{ryger.pivot}&rdquo;
                </blockquote>
                <p className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-muted">
                  {ryger.evolution.intro}
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {ryger.evolution.capabilities.map((cap, i) => (
                <Reveal
                  key={cap}
                  delay={(i % 2) * 0.06}
                  className={
                    "bg-surface/60 " +
                    (i === ryger.evolution.capabilities.length - 1 &&
                    ryger.evolution.capabilities.length % 2 === 1
                      ? "sm:col-span-2"
                      : "")
                  }
                >
                  <div className="flex items-center gap-3 p-5 sm:p-6">
                    <span className="font-mono text-xs text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-fg">{cap}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-5">
              <CardGrid items={ryger.evolution.layers} accent={accent} />
            </div>
          </Container>
        </section>

        <CaseSection label="Key decisions" title="The tradeoffs I made on purpose." accent={accent}>
          <CardGrid items={ryger.decisions} accent={accent} />
        </CaseSection>

        <CaseSection
          label="System design"
          title="Requirement-level assessment, evidence attached."
          description="How a job description and a candidate become a verdict a recruiter can check — every stage either deterministic or constrained to evidence that exists."
          accent={accent}
        >
          <StepRail steps={ryger.pipeline} accent={accent} />

          {/* The former standalone Resume product, folded in where it belongs */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="max-w-md">
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-fg">
                  {ryger.resume.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{ryger.resume.problem}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">{ryger.resume.approach}</p>
              </div>
            </Reveal>
            <CardGrid items={ryger.resume.controls} accent={accent} />
          </div>

          <TechnicalDetail groups={ryger.architecture} accent={accent} />
        </CaseSection>

        <CaseSection
          label="Evaluation & quality"
          title="Truthfulness, checked in code."
          accent={accent}
          tinted
        >
          <CardGrid items={ryger.evaluation} accent={accent} label />
        </CaseSection>

        <CaseSection label="In production" title="Live, on both sides of the market." accent={accent}>
          <PointList intro={ryger.production.intro} points={ryger.production.points} accent={accent} />
        </CaseSection>

        <CoreLesson text={ryger.lesson} />
        <NextStep items={ryger.next} accent={accent} />
        <OtherWork current="ryger" />
      </main>
      <Footer />
    </>
  );
}
