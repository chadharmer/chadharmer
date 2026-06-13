"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
          },
        },
      };

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Backdrop layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid, masked to fade out */}
        <div
          className="absolute inset-0 bg-grid opacity-60"
          style={{
            maskImage:
              "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 75%)",
          }}
        />
        {/* Accent glow */}
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,139,255,0.18),_transparent_70%)] blur-3xl" />
        <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(120,160,255,0.16),_transparent_70%)] blur-3xl" />
        {/* Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
            {hero.titleLines.map((line, i) => (
              <motion.span
                key={line}
                variants={item}
                className={
                  "block " +
                  (i === hero.titleLines.length - 1
                    ? "text-gradient-accent"
                    : "text-gradient")
                }
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              See what I&apos;ve built
              <svg
                width="14"
                height="14"
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
            </a>
            <a
              href="#how-i-build"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40"
            >
              How I build
            </a>
          </motion.div>

          {/* Focus areas */}
          <motion.div variants={item} className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Focus areas
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hero.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-md border border-line bg-surface/60 px-3 py-1.5 text-sm text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
