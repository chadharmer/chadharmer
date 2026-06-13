import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Architecture } from "@/components/ui/Architecture";
import { DiscoveryTimeline } from "@/components/ryger/DiscoveryTimeline";
import { ryger, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ryger — Case Study",
  description:
    "How Ryger evolved from a recruiting matching tool into a recruiter-owned talent network — a sequence of discoveries in product discovery, workflow design, AI trust, and marketplace thinking.",
  openGraph: {
    title: "Ryger — Case Study · Chad Harmer",
    description:
      "From matching engine to talent network: the discovery sequence behind Ryger.",
  },
};

export default function RygerCaseStudy() {
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
            <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,139,255,0.16),_transparent_70%)] blur-3xl" />
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
                    style={{ color: "rgb(139,139,255)" }}
                  >
                    R
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                    {ryger.status}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-gradient sm:text-6xl">
                  {ryger.positioning}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                  {ryger.intro}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 rounded-2xl border border-line bg-surface/50 p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">
                    The short version
                  </p>
                  <p className="mt-2.5 text-balance text-base leading-relaxed text-fg/90">
                    {ryger.tldr}
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Discovery sequence */}
        <section className="border-t border-line py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  The Discovery Sequence
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                Seven discoveries, one direction.
              </h2>
            </Reveal>

            <div className="mt-16 max-w-4xl">
              <DiscoveryTimeline />
            </div>
          </Container>
        </section>

        {/* The pivot */}
        <section className="relative overflow-hidden border-y border-line py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_50%,_rgba(139,139,255,0.09),_transparent_70%)]"
          />
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  The Pivot
                </span>
                <blockquote className="mt-6 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-gradient-accent sm:text-5xl">
                  &ldquo;{ryger.pivot}&rdquo;
                </blockquote>
                <p className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-muted">
                  {ryger.evolution.intro}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* What it became */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <div className="max-w-md">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    What it became
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                    A recruiter-owned talent network.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    Instead of helping a recruiter fill one role, Ryger helps
                    them build an asset that compounds with every search.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {ryger.evolution.capabilities.map((cap, i) => (
                  <Reveal
                    key={cap}
                    delay={(i % 2) * 0.06}
                    className={
                      "bg-surface/60 " +
                      (i === ryger.evolution.capabilities.length - 1 &&
                      ryger.evolution.capabilities.length % 2 === 1
                        ? "sm:col-span-2"
                        : "")
                    }
                  >
                    <div className="flex items-center gap-3 p-5 sm:p-6">
                      <span className="font-mono text-xs text-accent/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-fg">{cap}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Growth & integrity — layers that fell out of the thesis */}
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {ryger.evolution.layers.map((layer, i) => (
                <Reveal key={layer.title} delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-surface/50 p-6 sm:p-7">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <h3 className="text-base font-semibold tracking-tight text-fg">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-sm leading-relaxed text-muted">
                      {layer.body}
                    </p>
                  </div>
                </Reveal>
              ))}
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
                    Every architecture decision served the product strategy —
                    the network thesis, evidence-backed matching, and signal
                    integrity. The stack supports the story; it isn&apos;t the
                    story.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
                  <Architecture groups={ryger.architecture} />
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
                  {ryger.lesson}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* What this demonstrates */}
        <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_100%,_rgba(139,139,255,0.06),_transparent_70%)]"
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
                {ryger.demonstrates.map((tag) => (
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
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
                >
                  Talk products with me
                </a>
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
