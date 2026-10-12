import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
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
import { grocerySidekick, workBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grocery Sidekick — Case Study",
  description:
    "How Grocery Sidekick reads ingredient labels without ever implying an absence it can't support — a deterministic engine over 400,000+ foods, scoped AI, and a frozen allergen benchmark.",
  openGraph: {
    title: "Grocery Sidekick — Case Study · Chad Harmer",
    description:
      "Designing for uncertainty: 99.2% allergen recall from ingredient lists alone, and an app that never says “safe.”",
  },
};

export default function GrocerySidekickCaseStudy() {
  const work = workBySlug("grocery-sidekick");
  const accent = work.accent;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <CaseHero
          work={work}
          positioning={grocerySidekick.positioning}
          intro={grocerySidekick.intro}
          tldr={grocerySidekick.tldr}
          glance={grocerySidekick.glance}
        />

        <CaseSection
          label="Problem"
          title="The answer is on the label — in 6pt type, written for regulators."
          description={grocerySidekick.problem}
          accent={accent}
        />

        <CaseSection
          label="Discovery"
          title={grocerySidekick.discovery.title}
          description={grocerySidekick.discovery.body}
          accent={accent}
        />

        <CaseSection label="Key decisions" title="The tradeoffs I made on purpose." accent={accent}>
          <CardGrid items={grocerySidekick.decisions} accent={accent} />
        </CaseSection>

        <CaseSection
          label="System design"
          title="A deterministic engine, built for the aisle."
          description="From barcode or photo to an answer the shopper can act on — most of it on the phone, and none of the judgment delegated to a model."
          accent={accent}
        >
          <StepRail steps={grocerySidekick.pipeline} accent={accent} />
          <TechnicalDetail groups={grocerySidekick.architecture} accent={accent} />
        </CaseSection>

        <CaseSection
          label="Evaluation & quality"
          title="Recall, measured and held."
          description={grocerySidekick.evaluation.intro}
          accent={accent}
          tinted
        >
          <CardGrid items={grocerySidekick.evaluation.points} accent={accent} label />
        </CaseSection>

        <CaseSection label="In production" title="Live, and built to work offline." accent={accent}>
          <PointList
            intro={grocerySidekick.production.intro}
            points={grocerySidekick.production.points}
            accent={accent}
          />
        </CaseSection>

        <CaseSection
          label="What changed based on evidence"
          title="Decisions the measurements changed."
          accent={accent}
        >
          <CardGrid items={grocerySidekick.evidence} accent={accent} />
        </CaseSection>

        <CoreLesson text={grocerySidekick.lesson} />
        <NextStep items={grocerySidekick.next} accent={accent} />
        <OtherWork current="grocery-sidekick" />
      </main>
      <Footer />
    </>
  );
}
