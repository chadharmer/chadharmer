import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Shot, ShotAside } from "@/components/ui/Shot";
import { Architecture } from "@/components/ui/Architecture";
import { products, site, verateach } from "@/lib/content";

const ACCENT = "120, 200, 255";

export const metadata: Metadata = {
  title: "VeraTeach — Case Study",
  description:
    "How VeraTeach became an integrated AI teaching workspace — standards-grounded planning, assessment creation, Google Classroom publishing, and a grading loop that returns scores to Classroom, with the teacher in control throughout.",
  openGraph: {
    title: "VeraTeach — Case Study · Chad Harmer",
    description:
      "An AI-orchestrated classroom workflow platform: retrieval, evaluation, model routing, and teacher-approved outputs.",
  },
};

export default function VeraTeachCaseStudy() {
  const vt = products.find((p) => p.name === "VeraTeach");
  const architecture = vt?.architecture ?? [];
  const visit = vt?.actions?.find((a) => a.label === "Visit VeraTeach");

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-grid opacity-50"
              style={{
                maskImage:
                  "radial-gradient(120% 70% at 50% 0%, #000 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(120% 70% at 50% 0%, #000 30%, transparent 75%)",
              }}
            />
            <div
              className="absolute left-1/2 top-[-10rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle at center, rgba(${ACCENT},0.16), transparent 70%)`,
              }}
            />
          </div>

          <Container>
            <Reveal>
              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-faint transition-colors hover:text-fg"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M11 7H3M6.5 3.5L3 7l3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to {site.name}
              </Link>
            </Reveal>

            <div className="mt-8 max-w-3xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-line-strong bg-elevated font-mono text-xl font-medium"
                    style={{ color: `rgb(${ACCENT})` }}
                  >
                    V
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                    {verateach.status}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-gradient sm:text-6xl">
                  {verateach.positioning}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                  {verateach.intro}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 rounded-2xl border border-line bg-surface/50 p-5 sm:p-6">
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{ color: `rgba(${ACCENT},0.85)` }}
                  >
                    The short version
                  </p>
                  <p className="mt-2.5 text-balance text-base leading-relaxed text-fg/90">
                    {verateach.tldr}
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* The product, before any description of it. A hiring manager
            skimming from a resume link should see the thing itself above the
            fold-and-a-half, not four paragraphs about it. */}
        <section className="pb-4">
          <Container>
            <Reveal>
              <Shot
                src="/verateach/lesson-workspace.png"
                width={2880}
                height={1676}
                priority
                alt="The VeraTeach lesson workspace: a generated biology lesson with its class, readiness checks, and materials rail."
                caption="A lesson is an object in a workspace, not a document in a chat window — it belongs to a class, tracks whether it is ready to teach, and carries the materials made from it."
              />
            </Reveal>
          </Container>
        </section>

        {/* The workflow */}
        <section className="border-t border-line py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: `rgb(${ACCENT})` }}
                />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  The Workflow
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                The workflow became the product.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                Lesson generation is one step. What makes the product is the
                sequence around it — each stage a deliberate decision about where
                AI helps and where the teacher stays in control.
              </p>
            </Reveal>

            <ol className="mt-14 max-w-3xl">
              {verateach.workflow.map((step, i) => (
                <Reveal as="li" key={step.index} delay={i * 0.05}>
                  <div className="relative flex gap-5 pb-8 last:pb-0">
                    {/* Rail */}
                    <div className="flex flex-col items-center">
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-elevated font-mono text-xs font-medium"
                        style={{ color: `rgb(${ACCENT})` }}
                      >
                        {step.index}
                      </span>
                      {i < verateach.workflow.length - 1 ? (
                        <span
                          aria-hidden
                          className="mt-1 w-px flex-1 bg-line"
                        />
                      ) : null}
                    </div>
                    {/* Content */}
                    <div className="pb-1 pt-1">
                      <h3 className="text-base font-semibold tracking-tight text-fg">
                        {step.stage}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {step.decision}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Standards, where the claim about retrieval is actually visible. */}
        <section className="pb-4">
          <Container>
            <Reveal>
              <Shot
                src="/verateach/standards-suggestions.png"
                width={1544}
                height={600}
                alt="Suggested standards on a lesson, each with its code, framework, a match rating, and the reason it was matched."
                caption="Standards are retrieved from the corpus and proposed with the reason they match — the teacher keeps the ones that fit. Alignment is something the product can show its working for, not a label it asserts."
              />
            </Reveal>
          </Container>
        </section>

        {/* AI systems */}
        <section className="border-t border-line py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <div className="max-w-md">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    AI Systems
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                    AI as orchestration, not a single call.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    The interesting decisions aren&apos;t which model to call.
                    They&apos;re how retrieval, generation, routing, and approval
                    fit together so the system stays correct, affordable, and
                    accountable at every step.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {verateach.systems.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 2) * 0.06} className="h-full">
                    <div className="h-full rounded-2xl border border-line bg-surface/50 p-6">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-1 w-1 rounded-full"
                          style={{ background: `rgb(${ACCENT})` }}
                        />
                        <h3 className="text-base font-semibold tracking-tight text-fg">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* What the generation actually produces, and the round trip it enters. */}
        <section className="pb-4">
          <Container>
            <div className="flex flex-col gap-16">
              <Reveal>
                <Shot
                  src="/verateach/quiz-answer-key.png"
                  width={1600}
                  height={1150}
                  alt="A generated quiz in teacher view, showing correct answers marked and an explanation beneath a true/false item."
                  caption="Generated assessments are structured objects, not prose — every item carries its answer key and rationale, the teacher can switch to the student view, and anything here can be rewritten before it goes out."
                />
              </Reveal>

              <ShotAside
                src="/verateach/classroom-publishing.png"
                width={800}
                height={1280}
                alt="A material's Classroom panel showing it published to two class periods, with submission counts and a grading action for each."
                title="The loop closes back inside Classroom"
                body="Publishing creates a real Google Form in the teacher's own Classroom and keeps the link to it, so submissions come back per class and each one hands off to grading on its own. That round trip — not the export — is what makes this usable on a Tuesday."
              />
            </div>
          </Container>
        </section>

        {/* Evaluation & experimentation — given deliberate visual weight */}
        <section className="relative overflow-hidden border-y border-line py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(55% 60% at 50% 0%, rgba(${ACCENT},0.08), transparent 70%)`,
            }}
          />
          <Container>
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Evaluation &amp; Experimentation
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                  You can&apos;t ship AI you can&apos;t measure.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted">
                  {verateach.evaluation.intro}
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
              {verateach.evaluation.points.map((p, i) => (
                <Reveal key={p.label} delay={(i % 2) * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: `rgba(${ACCENT},0.85)` }}
                    >
                      {p.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Product decisions / tradeoffs */}
        <section className="py-24 sm:py-32">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Product Decisions
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                  The tradeoffs I made on purpose.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {verateach.decisions.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-surface/50 p-6 sm:p-7">
                    <h3 className="text-base font-semibold tracking-tight text-fg">
                      {d.title}
                    </h3>
                    <p className="mt-3.5 text-sm leading-relaxed text-muted">
                      {d.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* The decision above, shown. This is the one screenshot the case
            study most needs: "AI assists, the teacher decides" is a claim until
            you can see the empty score box next to the suggestion. */}
        <section className="pb-4">
          <Container>
            <Reveal>
              <Shot
                src="/verateach/grading-workspace.png"
                width={2060}
                height={1650}
                alt="The grading workspace: objective questions already scored by percentage, a written question with its expected answer, each student response with an empty score field and a suggest-a-score action."
                caption="Objective questions arrive already scored. For written work the teacher sees the expected answer and each response with an empty score box beside a suggestion they can ask for — the model proposes, the score field stays theirs to fill. The class shown is seeded sample data, not student work."
              />
            </Reveal>
          </Container>
        </section>

        {/* In production — the claim that separates a shipped product from a demo */}
        <section className="border-t border-line py-24 sm:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    In Production
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                    Shipped, not staged.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                    {verateach.production.intro}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="grid gap-3">
                  {verateach.production.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-surface/50 px-5 py-4"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: `rgb(${ACCENT})` }}
                      />
                      <span className="text-sm leading-relaxed text-muted">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Architecture */}
        <section className="border-t border-line py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <div className="max-w-md">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    Architecture
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                    A real system, built deliberately.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    Every layer serves the product decisions above — grounding,
                    evaluation, and teacher control. The stack supports the story;
                    it isn&apos;t the story.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
                  <Architecture groups={architecture} />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Core lesson */}
        <section className="border-t border-line py-24 sm:py-32">
          <Container>
            <Reveal className="mx-auto max-w-3xl">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Core Lesson
                </span>
                <p className="mt-6 text-balance text-2xl font-medium leading-[1.4] tracking-tight text-fg sm:text-3xl">
                  {verateach.lesson}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* What this demonstrates */}
        <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(60% 50% at 50% 100%, rgba(${ACCENT},0.06), transparent 70%)`,
            }}
          />
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  What this demonstrates
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                  One product, many disciplines.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2.5">
                {verateach.demonstrates.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-strong bg-surface/60 px-4 py-2 text-sm text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                {visit ? (
                  <a
                    href={visit.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
                  >
                    Visit VeraTeach
                  </a>
                ) : null}
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
                >
                  See more work
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
