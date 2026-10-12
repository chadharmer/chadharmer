import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities, capabilityThemes, type CapabilityTheme } from "@/lib/content";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          label={capabilities.label}
          title={capabilities.title}
          description={capabilities.description}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {capabilityThemes.map((theme, i) => (
            <Reveal key={theme.key} delay={(i % 2) * 0.06} className="h-full">
              <ThemeCard theme={theme} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ThemeCard({ theme }: { theme: CapabilityTheme }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent/80">{theme.key}</span>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{theme.name}</h3>
      </div>
      <p className="mt-1.5 pl-[1.6rem] font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
        {theme.covers}
      </p>

      <ul className="mt-5 space-y-3 border-t border-line pt-5">
        {theme.evidence.map((e) => (
          <li key={e.detail} className="flex flex-col gap-1.5 sm:flex-row sm:gap-3">
            <span className="flex h-fit w-fit shrink-0 items-center justify-center whitespace-nowrap rounded border border-line bg-base/50 px-1.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-accent/80 sm:w-28">
              {e.source}
            </span>
            <span className="text-[13px] leading-relaxed text-muted">{e.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
