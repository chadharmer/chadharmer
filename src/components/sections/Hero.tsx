"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { hero, site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  /* Reduced motion still has to land on the visible state: the server renders
     the "hidden" variant (opacity 0) before it can know the preference, so
     empty variants here would leave the hero invisible for those visitors. */
  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
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
          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
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
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              See selected work
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
            {site.resume ? (
              <a
                href={site.resume}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40"
              >
                Résumé (PDF)
              </a>
            ) : (
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40"
              >
                Experience
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Proof strip — outcomes and range, enterprise and AI side by side */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
        >
          {hero.proof.map((p) => (
            <motion.div
              key={p.value}
              variants={item}
              className="flex flex-col-reverse gap-1.5 bg-surface/70 p-5 backdrop-blur sm:p-6"
            >
              <dt className="text-[13px] leading-snug text-muted">{p.label}</dt>
              <dd className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {p.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
