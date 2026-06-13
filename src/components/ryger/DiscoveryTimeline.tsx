import { Reveal } from "@/components/ui/Reveal";
import { ryger } from "@/lib/content";

/**
 * The narrative spine of the Ryger case study: a vertical timeline of
 * discoveries, each split into "what I saw" (the tension) and "what it
 * led to" (the design response). A connecting line threads the nodes.
 */
export function DiscoveryTimeline() {
  return (
    <ol className="relative">
      {/* Connecting line */}
      <div
        aria-hidden
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-line-strong via-line to-transparent sm:left-[19px]"
      />

      {ryger.discoveries.map((d, i) => {
        const isPivot = i === ryger.discoveries.length - 1;
        return (
          <li key={d.index} className="relative pb-12 last:pb-0">
            <Reveal>
              <div className="grid grid-cols-[32px_1fr] gap-x-5 sm:grid-cols-[40px_1fr] sm:gap-x-7">
                {/* Node */}
                <div className="relative z-10 flex justify-center">
                  <span
                    className={
                      "grid h-8 w-8 place-items-center rounded-full border font-mono text-xs sm:h-10 sm:w-10 sm:text-sm " +
                      (isPivot
                        ? "border-accent/50 bg-accent/10 text-accent"
                        : "border-line-strong bg-elevated text-muted")
                    }
                  >
                    {d.index}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className={
                        "text-lg font-semibold tracking-tight sm:text-xl " +
                        (isPivot ? "text-gradient-accent" : "text-fg")
                      }
                    >
                      {d.label}
                    </h3>
                    {isPivot ? (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        The turning point
                      </span>
                    ) : null}
                  </div>

                  <div
                    className={
                      isPivot
                        ? "mt-4 rounded-2xl border border-accent/25 bg-accent/[0.05] p-4 sm:p-5"
                        : ""
                    }
                  >
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                      <Block kicker="What I saw" body={d.saw} />
                      <Block kicker="What it led to" body={d.led} accent />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

function Block({
  kicker,
  body,
  accent,
}: {
  kicker: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "rounded-xl border border-line p-4 sm:p-5 " +
        (accent ? "bg-accent/[0.04]" : "bg-surface/40")
      }
    >
      <p
        className={
          "font-mono text-[10px] uppercase tracking-[0.14em] " +
          (accent ? "text-accent/80" : "text-faint")
        }
      >
        {kicker}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
