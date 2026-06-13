import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Architecture } from "@/components/ui/Architecture";
import { products, ryger, type Product } from "@/lib/content";

export function FeaturedProducts() {
  return (
    <section id="products" className="relative scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Featured Work"
          title="Products as evidence of thinking."
          description="Each of these started as a question about how work should actually flow. They're less a gallery and more a record of how I approach problems."
        />

        {/* Ryger — featured case study */}
        <div className="mt-14">
          <Reveal>
            <RygerFeature />
          </Reveal>
        </div>

        {/* Supporting products */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.08} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RygerFeature() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line-strong bg-surface/60 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-9">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(700px circle at 80% 0%, rgba(139,139,255,0.12), transparent 60%)",
        }}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-elevated font-mono text-lg font-medium"
              style={{ color: "rgb(139,139,255)" }}
            >
              R
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-fg">
                {ryger.name}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {ryger.status}
              </span>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-fg/90">
            {ryger.positioning}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {ryger.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/ryger"
              className="group/cta inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              Read Case Study
              <Arrow className="group-hover/cta:translate-x-0.5" />
            </Link>
            <a
              href="https://www.ryger.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/40"
            >
              Visit Ryger
              <Arrow className="group-hover/cta:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Discovery arc preview */}
        <div className="lg:border-l lg:border-line lg:pl-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            The discovery arc
          </p>
          <ol className="mt-4 space-y-2.5">
            {ryger.discoveries.map((d) => (
              <li key={d.index} className="flex items-center gap-3 text-sm">
                <span className="font-mono text-xs text-accent/70">{d.index}</span>
                <span className="text-muted transition-colors group-hover:text-fg">
                  {d.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong">
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at 50% 0%, rgba(${product.accent}, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center rounded-lg border border-line-strong bg-elevated font-mono text-sm font-medium"
              style={{ color: `rgb(${product.accent})` }}
            >
              {product.name.charAt(0)}
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              {product.name}
            </h3>
          </div>
          <span className="rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
            {product.status}
          </span>
        </div>

        <p className="mt-3 text-sm font-medium text-muted">{product.tagline}</p>

        {/* Detail rows */}
        <dl className="mt-6 space-y-4 border-t border-line pt-5">
          <Row label="Problem" value={product.problem} />
          <Row label="Why I built it" value={product.why} />
          <Row label="Lesson" value={product.lesson} accent={product.accent} />
        </dl>

        {/* Capability chips */}
        {product.highlights ? (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {product.highlights.map((h) => (
              <span
                key={h}
                className="rounded-md border border-line bg-base/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-faint"
              >
                {h}
              </span>
            ))}
          </div>
        ) : null}

        {/* Architecture */}
        {product.architecture ? (
          <div className="mt-6 border-t border-line pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Architecture
            </p>
            <Architecture
              compact
              groups={product.architecture}
              className="mt-4"
            />
          </div>
        ) : null}

        {/* Footer: real CTAs if a live destination exists, else status text */}
        <div className="mt-auto pt-6">
          {product.actions?.length ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {product.actions.map((action) =>
                action.external ? (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {action.label}
                    <Arrow className="group-hover/cta:translate-x-0.5" />
                  </a>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {action.label}
                    <Arrow className="group-hover/cta:translate-x-0.5" />
                  </Link>
                )
              )}
            </div>
          ) : product.availability ? (
            <div className="flex items-center gap-2 text-sm text-faint">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-faint/70" />
              {product.availability}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      className={"transition-transform " + className}
    >
      <path
        d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div>
      <dt
        className="font-mono text-[10px] uppercase tracking-[0.14em]"
        style={accent ? { color: `rgb(${accent})` } : { color: "var(--color-faint)" }}
      >
        {label}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-muted">{value}</dd>
    </div>
  );
}
