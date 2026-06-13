import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-28 sm:py-36">
      {/* Closing glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_50%,_rgba(139,139,255,0.08),_transparent_70%)]"
      />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Contact
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
              Building something interesting?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-muted">
              I&apos;m always glad to trade notes on products, marketplaces, and
              making AI genuinely useful. The best way to reach me is below.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="1.5"
                    y="3"
                    width="13"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M2.5 4.5L8 8.5l5.5-4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.6 5.1A1.3 1.3 0 1 0 3.6 2.5a1.3 1.3 0 0 0 0 2.6ZM2.5 6.1h2.2v7.4H2.5V6.1Zm3.6 0h2.1v1h.03c.3-.55 1-1.13 2.1-1.13 2.25 0 2.66 1.46 2.66 3.36v4.17h-2.2V9.7c0-.8-.02-1.82-1.12-1.82-1.12 0-1.29.86-1.29 1.76v3.86H6.1V6.1Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
