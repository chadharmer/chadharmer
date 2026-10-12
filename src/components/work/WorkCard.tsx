import Link from "next/link";
import type { Work } from "@/lib/content";
import { ProductMark } from "./ProductMark";
import { Arrow } from "@/components/ui/Arrow";

/**
 * A product introduced, not explained: what it is, what it demonstrates, one
 * decision that shows judgment, one signal that shows it worked — then the
 * case study for everything else. Used on the homepage and the /work index.
 */
export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7">
      {/* Hover glow, tinted to the product accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(480px circle at 50% 0%, rgba(${work.accent}, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <ProductMark work={work} size="sm" />
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              {work.name}
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {work.status}
            </p>
          </div>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-fg/90">{work.oneLiner}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Demonstrates">
          {work.demonstrates.map((d) => (
            <li
              key={d}
              className="rounded-md border border-line bg-base/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-faint"
            >
              {d}
            </li>
          ))}
        </ul>

        <dl className="mt-6 space-y-4 border-t border-line pt-5">
          <Row label="Key decision" value={work.decision} />
          {work.signal ? (
            <Row label="Signal" value={work.signal} accent={work.accent} />
          ) : null}
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <Link
            href={`/work/${work.slug}`}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Read case study
            <Arrow className="group-hover/cta:translate-x-0.5" />
          </Link>
          <a
            href={work.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-faint transition-colors hover:text-fg"
          >
            {work.live.label} ↗
          </a>
        </div>
      </div>
    </article>
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
