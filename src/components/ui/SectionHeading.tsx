import { Reveal } from "./Reveal";

/**
 * Consistent section header: a small mono eyebrow label above a
 * large display title, with an optional supporting line.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={
            "flex items-center gap-2.5 " + (centered ? "justify-center" : "")
          }
        >
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
