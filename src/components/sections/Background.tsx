import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { background } from "@/lib/content";

/**
 * The bridge between the career and the products. Deliberately short: the
 * enterprise background and the hands-on AI work are one continuous story,
 * and a long explanation would make it read like a justification.
 */
export function Background() {
  return (
    <section id="background" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading label={background.label} title={background.title} />

          <div className="space-y-5 lg:pt-9">
            {background.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="text-base leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.14}>
              <p className="border-l-2 border-accent/60 pl-5 text-lg font-medium leading-relaxed tracking-tight text-fg">
                {background.thread}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
