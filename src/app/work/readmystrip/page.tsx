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
import { readMyStrip, workBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "ReadMyStrip — Case Study",
  description:
    "How ReadMyStrip reads pool and spa test strips from a single photo — a perception-only vision model, deterministic validation against the user's own chart, and a subscription with paying customers.",
  openGraph: {
    title: "ReadMyStrip — Case Study · Chad Harmer",
    description:
      "The model perceives; code decides. A consumer vision product with paying customers.",
  },
};

export default function ReadMyStripCaseStudy() {
  const work = workBySlug("readmystrip");
  const accent = work.accent;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <CaseHero
          work={work}
          positioning={readMyStrip.positioning}
          intro={readMyStrip.intro}
          tldr={readMyStrip.tldr}
          glance={readMyStrip.glance}
        />

        <CaseSection
          label="Problem"
          title="Subtle colors, bad lighting, and every brand’s chart is different."
          description={readMyStrip.problem}
          accent={accent}
        />

        <CaseSection
          label="Discovery"
          title={readMyStrip.discovery.title}
          description={readMyStrip.discovery.body}
          accent={accent}
        />

        <CaseSection label="Key decisions" title="The tradeoffs I made on purpose." accent={accent}>
          <CardGrid items={readMyStrip.decisions} accent={accent} />
        </CaseSection>

        <CaseSection
          label="System design"
          title="From a messy photo to a reading you can act on."
          accent={accent}
        >
          <StepRail steps={readMyStrip.pipeline} accent={accent} />
          <TechnicalDetail groups={readMyStrip.architecture} accent={accent} />
        </CaseSection>

        <CaseSection
          label="Evaluation & quality"
          title="Quality by constraint."
          description={readMyStrip.evaluation.intro}
          accent={accent}
          tinted
        >
          <CardGrid items={readMyStrip.evaluation.points} accent={accent} label />
        </CaseSection>

        <CaseSection
          label="In production"
          title="Paying customers, and feedback that shipped."
          accent={accent}
        >
          <PointList
            intro={readMyStrip.production.intro}
            points={readMyStrip.production.points}
            accent={accent}
          />
        </CaseSection>

        <CoreLesson text={readMyStrip.lesson} />
        <NextStep items={readMyStrip.next} accent={accent} />
        <OtherWork current="readmystrip" />
      </main>
      <Footer />
    </>
  );
}
