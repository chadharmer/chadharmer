import Image from "next/image";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/**
 * A product screenshot with the claim it proves.
 *
 * The smallest frame that matches the rest of the page — the same
 * `rounded-2xl border border-line` card the decision and system blocks already
 * use — so a screenshot reads as part of the case study rather than as an
 * attachment to it.
 *
 * THE MOBILE PROBLEM IS THE REASON THIS IS A COMPONENT. A 1440px desktop
 * capture scaled into a 420px column is a grey rectangle: the layout survives
 * and the evidence does not. So on small screens the image keeps a legible
 * intrinsic width and the FRAME scrolls horizontally, which costs one swipe and
 * keeps the screenshot doing its job. From `sm` up it behaves like an ordinary
 * responsive image and the scroll never engages.
 *
 * Captions say why the screenshot matters, not what is in it — "AI proposes
 * scoring while the teacher retains control", not "grading screen".
 */
export function Shot({
  src,
  alt,
  caption,
  width,
  height,
  /** Minimum width the image keeps on small screens before the frame scrolls.
   *  Portrait crops are already legible at column width and pass `null`. */
  minWidth = 760,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  minWidth?: number | null;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50">
        {/* A scrollable region that looks like a static image is a dead end —
            the reader never learns there is more to the right. One fade at the
            edge is the whole affordance, and it is hidden from `md` up, where
            the image fits and there is nothing to scroll to. */}
        {minWidth ? (
          <div
            aria-hidden
            className="from-base via-base/70 pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l to-transparent md:hidden"
          />
        ) : null}
        <div className={cn(minWidth ? "overflow-x-auto" : undefined)}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(min-width: 1024px) 900px, 100vw"
            /* Explicit intrinsic width/height above means the box is reserved
               before the bytes arrive — no layout shift as these load. */
            className="h-auto w-full"
            style={minWidth ? { minWidth: `${minWidth}px` } : undefined}
          />
        </div>
      </div>
      <figcaption className="text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}

/**
 * A tall, narrow screenshot set beside its caption rather than above it.
 *
 * A portrait crop stacked in a reading column pushes everything after it a
 * screen down for no gain; paired with the text it is explaining, the empty
 * half of the row does the work instead.
 */
export function ShotAside({
  src,
  alt,
  width,
  height,
  title,
  body,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  body: string;
}) {
  return (
    <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:gap-12">
      <Reveal>
        <div className="mx-auto max-w-[280px] overflow-hidden rounded-2xl border border-line bg-surface/50 sm:mx-0 sm:max-w-none">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 640px) 380px, 280px"
            className="h-auto w-full"
          />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-fg">{title}</h3>
          <p className="mt-3.5 text-sm leading-relaxed text-muted">{body}</p>
        </div>
      </Reveal>
    </div>
  );
}
