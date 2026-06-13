/**
 * Single source of truth for site content.
 * Keeping copy out of components makes it trivial to iterate on
 * messaging without touching layout or styling.
 */

export const site = {
  name: "Chad Harmer",
  role: "Product Leader · Founder · Builder",
  email: "chadharmer@mac.com",
  linkedin: "https://www.linkedin.com/in/chadharmer",
} as const;

export const nav = [
  { label: "Products", href: "#products" },
  { label: "How I Build", href: "#how-i-build" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
] as const;

export const hero = {
  eyebrow: "Product · Systems · AI",
  titleLines: ["Product Leader.", "Founder.", "Builder."],
  subtitle:
    "I turn ambiguous problems into real software — designing AI workflows, marketplaces, and recruiting technology that compound over time.",
  focusAreas: [
    "AI workflows",
    "Marketplaces",
    "Recruiting technology",
    "Product strategy",
    "Systems design",
  ],
} as const;

export type Product = {
  name: string;
  tagline: string;
  status: string;
  problem: string;
  why: string;
  lesson: string;
  href: string;
  accent: string; // tailwind-ish rgba used for the card glow
};

export const products: Product[] = [
  {
    name: "Ryger",
    tagline: "A network-native approach to recruiting",
    status: "Founder",
    problem:
      "Hiring still runs on cold outreach and stale databases. The best candidates move through trusted networks that traditional tooling can't see.",
    why: "Built to test whether a marketplace built on real relationships — not resumes — could surface better signal for both sides of a hire.",
    lesson:
      "Liquidity beats features. Solving the cold-start problem for one tight community matters more than breadth on day one.",
    href: "#",
    accent: "139, 139, 255",
  },
  {
    name: "Resume",
    tagline: "AI-assisted resumes that actually read like you",
    status: "Product",
    problem:
      "Most resume tools optimize for keywords and templates, producing documents that are generic and easy to ignore.",
    why: "An experiment in making AI genuinely useful for a high-stakes, personal document — assistive and explainable, never a black box.",
    lesson:
      "AI is most valuable as a thinking partner, not an autopilot. Keep the human in control of voice and judgment.",
    href: "#",
    accent: "109, 139, 255",
  },
  {
    name: "Lesson Plan",
    tagline: "Workflow-first planning for educators",
    status: "Product",
    problem:
      "Teachers spend hours assembling plans from scattered tools and standards. The work is repetitive but rarely templatizable.",
    why: "Built to prove that designing around the real workflow — not the feature list — removes more friction than any single AI feature.",
    lesson:
      "Start with the workflow. The right structure makes the AI feel obvious; the wrong structure makes it feel like a gimmick.",
    href: "#",
    accent: "120, 200, 255",
  },
];

export type Principle = {
  index: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Start with the workflow, not the technology.",
    body: "Understand how the work actually gets done before deciding what to build. The best technology disappears into a better workflow.",
  },
  {
    index: "02",
    title: "Optimize for outcomes, not activity.",
    body: "Shipping features is easy. Moving the metric that matters is the job. I measure progress by the problem getting smaller.",
  },
  {
    index: "03",
    title: "Reduce friction before adding features.",
    body: "Most products are slowed by friction, not missing capability. Removing steps usually beats adding them.",
  },
  {
    index: "04",
    title: "Build systems that compound over time.",
    body: "Favor decisions that get more valuable as they accumulate — data, relationships, and structure that pay off later.",
  },
  {
    index: "05",
    title: "Make AI useful, explainable, and practical.",
    body: "AI should earn trust by being transparent and reliable in real work — not impressive in a demo and fragile in production.",
  },
];

export type Role = {
  company: string;
  context: string;
  focus: string;
};

export const experience: Role[] = [
  {
    company: "Capital One",
    context: "Enterprise product leadership",
    focus: "Leading product at scale across complex, regulated systems.",
  },
  {
    company: "PNC",
    context: "Product & platform",
    focus: "Shaping digital products inside a large financial institution.",
  },
  {
    company: "TD",
    context: "Product strategy",
    focus: "Driving strategy and execution across customer-facing platforms.",
  },
];

export type Essay = {
  category: string;
  title: string;
  blurb: string;
  status: string;
};

export const writing: Essay[] = [
  {
    category: "Marketplaces",
    title: "Why recruiting is a network problem, not a database problem",
    blurb:
      "The structural reason cold outreach keeps failing — and what changes when you build on trust instead of contact lists.",
    status: "Coming soon",
  },
  {
    category: "AI Workflows",
    title: "Designing AI that earns trust in real work",
    blurb:
      "Practical patterns for making AI assistive and explainable instead of a black box people learn to ignore.",
    status: "Coming soon",
  },
  {
    category: "Product Strategy",
    title: "Lessons from building three products in a year",
    blurb:
      "What actually transferred between Ryger, Resume, and Lesson Plan — and what didn't.",
    status: "Coming soon",
  },
];
