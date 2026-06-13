import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { products, type Product } from "@/lib/content";

export function FeaturedProducts() {
  return (
    <section id="products" className="relative scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Featured Products"
          title="Products as evidence of thinking."
          description="Each of these started as a question about how work should actually flow. They're less a gallery and more a record of how I approach problems."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
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

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-300 hover:border-line-strong hover:bg-surface"
    >
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

        {/* Footer link */}
        <div className="mt-6 flex items-center gap-1.5 pt-2 text-sm font-medium text-muted transition-colors group-hover:text-fg">
          Learn more
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
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
