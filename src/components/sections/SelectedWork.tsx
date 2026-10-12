import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { WorkCard } from "@/components/work/WorkCard";
import { selectedWork, works } from "@/lib/content";

/**
 * Four compact introductions. The depth — discovery, architecture, evaluation —
 * lives one click away on each case study, so this section stays a scan.
 */
export function SelectedWork() {
  return (
    <section id="work" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          label={selectedWork.label}
          title={selectedWork.title}
          description={selectedWork.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {works.map((work, i) => (
            <Reveal key={work.slug} delay={(i % 2) * 0.06} className="h-full">
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
            >
              All work and how it maps to capabilities
              <Arrow className="group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
