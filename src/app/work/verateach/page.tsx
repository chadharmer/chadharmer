import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Shot, ShotAside } from "@/components/ui/Shot";
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
import { verateach, workBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "VeraTeach — Case Study",
  description:
    "How VeraTeach grew from a lesson planner into a standards-to-grades teaching workspace — positioning, scope, pricing and measurement decisions alongside retrieval, evaluation and teacher-approved AI.",
  openGraph: {
    title: "VeraTeach — Case Study · Chad Harmer",
    description:
      "Product strategy, positioning and measurement in a live K–12 AI product — with retrieval, evaluation and teacher-approved outputs underneath.",
  },
};

export default function VeraTeachCaseStudy() {
  const work = workBySlug("verateach");
  const accent = work.accent;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <CaseHero
          work={work}
          positioning={verateach.positioning}
          intro={verateach.intro}
          tldr={verateach.tldr}
          glance={verateach.glance}
        />

        {/* The product, before any description of it. */}
        <section className="pb-20 sm:pb-28">
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

        <CaseSection
          label="Problem"
          title="Every handoff in a teacher’s week is manual re-entry."
          description={verateach.problem}
          accent={accent}
        />

        <CaseSection
          label="Discovery & strategy"
          title={verateach.discovery.title}
          description={verateach.discovery.intro}
          accent={accent}
        >
          <CardGrid items={verateach.discovery.findings} accent={accent} />

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="max-w-md">
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-fg">
                  What the product became
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {verateach.discovery.scope}
                </p>
              </div>
            </Reveal>
            <StepRail steps={verateach.workflow} accent={accent} />
          </div>
        </CaseSection>

        <CaseSection label="Key decisions" title="The tradeoffs I made on purpose." accent={accent}>
          <CardGrid items={verateach.decisions} accent={accent} />
          {/* "AI assists, the teacher decides" is a claim until you can see
              the empty score box next to the suggestion. */}
          <Reveal className="mt-14 block">
            <Shot
              src="/verateach/grading-workspace.png"
              width={2060}
              height={1650}
              alt="The grading workspace: objective questions already scored by percentage, a written question with its expected answer, each student response with an empty score field and a suggest-a-score action."
              caption="Objective questions arrive already scored. For written work the teacher sees the expected answer and each response beside an empty score box — the model proposes, the score stays theirs. The class shown is seeded sample data, not student work."
            />
          </Reveal>
        </CaseSection>

        <CaseSection
          label="System design"
          title="AI as orchestration, not a single call."
          description="The interesting decisions aren’t which model to call. They’re how retrieval, generation, routing and approval fit together so the system stays correct, affordable and accountable at every step."
          accent={accent}
        >
          <CardGrid items={verateach.systems} accent={accent} />

          <div className="mt-14 flex flex-col gap-16">
            <Reveal>
              <Shot
                src="/verateach/standards-suggestions.png"
                width={1544}
                height={600}
                alt="Suggested standards on a lesson, each with its code, framework, a match rating, and the reason it was matched."
                caption="Standards are retrieved from the corpus and proposed with the reason they match — the teacher keeps the ones that fit. Alignment is something the product can show its working for, not a label it asserts."
              />
            </Reveal>
            <Reveal>
              <Shot
                src="/verateach/quiz-answer-key.png"
                width={1600}
                height={1150}
                alt="A generated quiz in teacher view, showing correct answers marked and an explanation beneath a true/false item."
                caption="Generated assessments are structured objects, not prose — every item carries its answer key and rationale, and anything can be rewritten before it goes out."
              />
            </Reveal>
            <ShotAside
              src="/verateach/classroom-publishing.png"
              width={800}
              height={1280}
              alt="A material's Classroom panel showing it published to two class periods, with submission counts and a grading action for each."
              title="The loop closes back inside Classroom"
              body="Publishing creates a real Google Form in the teacher's own Classroom and maps every question, so submissions come back per class and hand off to grading. Re-publishing is idempotent, and only teacher-authored scores are ever returned. That round trip — not the export — is what makes this usable on a Tuesday."
            />
          </div>

          <TechnicalDetail groups={verateach.architecture} accent={accent} />
        </CaseSection>

        <CaseSection
          label="Evaluation & quality"
          title="You can’t ship AI you can’t measure."
          description={verateach.evaluation.intro}
          accent={accent}
          tinted
        >
          <CardGrid items={verateach.evaluation.points} accent={accent} label />
        </CaseSection>

        <CaseSection label="In production" title="Live, self-serve, and measured." accent={accent}>
          <PointList
            intro={verateach.production.intro}
            points={verateach.production.points}
            accent={accent}
          />
        </CaseSection>

        <CaseSection
          label="What changed based on evidence"
          title="Decisions the evidence changed."
          accent={accent}
        >
          <CardGrid items={verateach.evidence} accent={accent} />
        </CaseSection>

        <CoreLesson text={verateach.lesson} />
        <NextStep items={verateach.next} accent={accent} />
        <OtherWork current="verateach" />
      </main>
      <Footer />
    </>
  );
}
