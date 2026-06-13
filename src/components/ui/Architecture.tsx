import { cn } from "@/lib/cn";
import type { ArchGroup } from "@/lib/content";

/**
 * Grouped tech-stack display: a category label beside its
 * middot-separated items. Compact variant tightens it for product cards;
 * the default reads comfortably in a full case-study section.
 */
export function Architecture({
  groups,
  compact = false,
  className,
}: {
  groups: readonly ArchGroup[];
  compact?: boolean;
  className?: string;
}) {
  return (
    <dl className={cn(compact ? "space-y-2.5" : "space-y-4", className)}>
      {groups.map((group) => (
        <div
          key={group.label}
          className={cn(
            "grid gap-1 sm:gap-4",
            compact ? "sm:grid-cols-[96px_1fr]" : "sm:grid-cols-[150px_1fr]"
          )}
        >
          <dt className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            {group.label}
          </dt>
          <dd
            className={cn(
              "leading-relaxed text-muted",
              compact ? "text-[13px]" : "text-sm"
            )}
          >
            {group.items.map((item, i) => (
              <span key={item}>
                {i > 0 && (
                  <span aria-hidden className="px-1.5 text-faint/60">
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
