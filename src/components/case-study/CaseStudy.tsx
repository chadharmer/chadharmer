import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { Architecture } from "@/components/ui/Architecture";
import { ProductMark } from "@/components/work/ProductMark";
import {
  methodNote,
  works,
  type ArchGroup,
  type Glance,
  type Step,
  type TitledBody,
  type Work,
  type WorkSlug,
} from "@/lib/content";

/*
 * The building blocks every case study shares, in the order the template
 * uses them: hero + at a glance → problem → discovery → decisions → system →
 * evaluation → production → what changed → next maturity step → other work.
 *
 * Pages compose these rather than repeating markup, so the four case studies
 * read as one body of work and a fix to one section lands on all of them.
 */

/* ------------------------------------------------------------------ */
/*  Hero + at a glance                                                 */
/* ------------------------------------------------------------------ */

export function CaseHero({
  work,
  positioning,
  intro,
  tldr,
  glance,
}: {
  work: Work;
  positioning: string;
  intro: string;
  tldr: string;
  glance: Glance;
}) {
  const accent = work.accent;

  return (
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
        <div
          className="absolute left-1/2 top-[-10rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at center, rgba(${accent},0.16), transparent 70%)`,
          }}
        />
      </div>

      <Container>
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-faint transition-colors hover:text-fg"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M11 7H3M6.5 3.5L3 7l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All work
          </Link>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <ProductMark work={work} size="lg" />
              <div>
                <p className="text-lg font-semibold tracking-tight text-fg">{work.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {work.status}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-gradient sm:text-6xl">
              {positioning}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 rounded-2xl border border-line bg-surface/50 p-5 sm:p-6">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.16em]"
                style={{ color: `rgba(${accent},0.85)` }}
              >
                The short version
              </p>
              <p className="mt-2.5 text-balance text-base leading-relaxed text-fg/90">{tldr}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <AtAGlance work={work} glance={glance} />
        </Reveal>
      </Container>
    </section>
  );
}

function AtAGlance({ work, glance }: { work: Work; glance: Glance }) {
  const accent = work.accent;

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-line-strong bg-surface/60">
      <div className="grid gap-px bg-line lg:grid-cols-[1fr_1.4fr]">
        <dl className="space-y-4 bg-surface p-6 sm:p-7">
          <GlanceRow label="Role" value={glance.role} />
          <GlanceRow label="Timeline" value={glance.timeline} />
          <GlanceRow label="Status" value={glance.status} />
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Live
            </dt>
            <dd className="mt-1">
              <a
                href={work.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {work.live.label} ↗
              </a>
            </dd>
          </div>
        </dl>

        <div className="bg-surface p-6 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Key signals
          </p>
          <ul className="mt-3 space-y-2.5">
            {glance.signals.map((s) => (
              <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-fg/90">
                <span
                  aria-hidden
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: `rgb(${accent})` }}
                />
                {s}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Capabilities shown
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {glance.capabilities.map((c) => (
              <li
                key={c}
                className="rounded-md border border-line bg-base/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-line px-6 py-4 text-[13px] leading-relaxed text-muted sm:px-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          How it was built ·{" "}
        </span>
        {methodNote}
      </p>
    </div>
  );
}

function GlanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-fg/90">{value}</dd>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

export function CaseSection({
  label,
  title,
  description,
  accent,
  tinted = false,
  children,
}: {
  label: string;
  title: string;
  description?: string;
  accent: string;
  tinted?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
      {tinted ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(55% 60% at 50% 0%, rgba(${accent},0.07), transparent 70%)`,
          }}
        />
      ) : null}
      <Container>
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="h-1 w-1 rounded-full" style={{ background: `rgb(${accent})` }} />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {label}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
          </Reveal>
        ) : null}
        {children ? <div className="mt-12">{children}</div> : null}
      </Container>
    </section>
  );
}

/** Titled cards in a two-column grid — decisions, systems, evaluation points. */
export function CardGrid({
  items,
  accent,
  label,
}: {
  items: readonly TitledBody[];
  accent: string;
  /** Optional mono label above each title (e.g. the evaluation point name style). */
  label?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 2) * 0.06} className="h-full">
          <div className="h-full rounded-2xl border border-line bg-surface/50 p-6 sm:p-7">
            {label ? (
              <p
                className="font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: `rgba(${accent},0.85)` }}
              >
                {item.title}
              </p>
            ) : (
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-1 w-1 shrink-0 rounded-full"
                  style={{ background: `rgb(${accent})` }}
                />
                <h3 className="text-base font-semibold tracking-tight text-fg">{item.title}</h3>
              </div>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** A numbered vertical rail — a workflow or a pipeline, stage by stage. */
export function StepRail({ steps, accent }: { steps: readonly Step[]; accent: string }) {
  return (
    <ol className="max-w-3xl">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.index} delay={i * 0.04}>
          <div className="relative flex gap-5 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-elevated font-mono text-xs font-medium"
                style={{ color: `rgb(${accent})` }}
              >
                {step.index}
              </span>
              {i < steps.length - 1 ? (
                <span aria-hidden className="mt-1 w-px flex-1 bg-line" />
              ) : null}
            </div>
            <div className="pb-1 pt-1">
              <h3 className="text-base font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** A two-column "claim beside its proof points" layout, used for production. */
export function PointList({
  intro,
  points,
  accent,
}: {
  intro: string;
  points: readonly string[];
  accent: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <Reveal>
        <p className="max-w-md text-base leading-relaxed text-muted">{intro}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <ul className="grid gap-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface/50 px-5 py-4"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: `rgb(${accent})` }}
              />
              <span className="text-sm leading-relaxed text-muted">{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function TechnicalDetail({
  groups,
  accent,
}: {
  groups: readonly ArchGroup[];
  accent: string;
}) {
  return (
    <Reveal>
      <div className="mt-14 rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.16em]"
          style={{ color: `rgba(${accent},0.85)` }}
        >
          For technical readers · Architecture &amp; stack
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          The stack supports the product decisions above; it isn&apos;t the story.
        </p>
        <Architecture groups={groups} className="mt-6" />
      </div>
    </Reveal>
  );
}

export function CoreLesson({ text }: { text: string }) {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Core lesson
            </span>
            <p className="mt-6 text-balance text-2xl font-medium leading-[1.4] tracking-tight text-fg sm:text-3xl">
              {text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Where the product's measurement matures next. Framed as the next step a
 * product leader would take, placed late on the page — evidence of judgment
 * about what isn't measured yet, not an apology for it.
 */
export function NextStep({ items, accent }: { items: readonly string[]; accent: string }) {
  return (
    <CaseSection
      label="Next maturity step"
      title="What I’d measure next."
      description="The product works in production today. These are the next layers of measurement and rigor I’d add as it matures."
      accent={accent}
    >
      <ol className="grid max-w-3xl gap-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 0.06}>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/50 px-5 py-4">
              <span
                className="font-mono text-xs"
                style={{ color: `rgba(${accent},0.85)` }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-muted">{item}</span>
            </div>
          </Reveal>
        ))}
      </ol>
    </CaseSection>
  );
}

export function OtherWork({ current }: { current: WorkSlug }) {
  const others = works.filter((w) => w.slug !== current);
  const accent = works.find((w) => w.slug === current)!.accent;

  return (
    <CaseSection label="Other work" title="More from the same body of work." accent={accent}>
      <div className="grid gap-5 md:grid-cols-3">
        {others.map((w, i) => (
          <Reveal key={w.slug} delay={i * 0.06} className="h-full">
            <Link
              href={`/work/${w.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-strong"
            >
              <div className="flex items-center gap-2.5">
                <ProductMark work={w} size="sm" />
                <span className="text-base font-semibold tracking-tight text-fg">{w.name}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{w.oneLiner}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
                Read case study
                <Arrow className="group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
          >
            All work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </CaseSection>
  );
}
