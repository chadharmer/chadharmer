/**
 * Single source of truth for site content.
 * Keeping copy out of components makes it trivial to iterate on
 * messaging without touching layout or styling.
 *
 * EVERY NUMBER HERE IS TRACED TO THE PRODUCT'S OWN REPOSITORY — code, tests,
 * benchmark baselines, commit history or docs — and was re-verified in
 * October 2026. Precision is only what the source supports: where a figure
 * moves between releases it is stated as a floor ("400,000+") rather than a
 * snapshot that will quietly go stale.
 */

export const site = {
  name: "Chad Harmer",
  role: "Product leader · AI & platform products",
  email: "chadharmer@mac.com",
  linkedin: "https://www.linkedin.com/in/chad-harmer-231a0531",
  /**
   * Public résumé PDF. Held back (null) until the updated résumé matching this
   * site's career story is ready — every résumé link and button keys off this,
   * so publishing it is a one-line change plus the file in /public.
   */
  resume: null as string | null,
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
] as const;

/** One sentence, used verbatim wherever the "did he build it?" question is answered. */
export const methodNote =
  "I use AI-assisted development to work directly in the implementation layer, while owning the product decisions, architecture, evaluation criteria and production validation.";

/* ------------------------------------------------------------------ */
/*  Homepage                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Chad Harmer · Product leadership",
  titleLines: ["Product leadership", "where workflows, data and AI meet."],
  subtitle:
    "Fifteen years of product, platform and process work at Capital One, PNC and TD Bank. Since 2025, I’ve also taken production AI products from discovery through architecture, evaluation, launch and iteration myself — close enough to the implementation to know how these systems actually behave.",
  /* Ordered as a set: breadth → scale → measured quality → real-world use.
     Career outcomes (57 → 2, ~$2.5M) live in Experience, where they have context. */
  proof: [
    {
      value: "Web + iOS",
      label: "four production AI products across recruiting, education and consumer apps",
    },
    {
      value: "110K+",
      label: "standards records across 185 frameworks in 17 states, grounding retrieval · VeraTeach",
    },
    {
      value: "74s → 19s",
      label: "rubric evaluation after a measured model change, ~2.1× cheaper with scores held · VeraTeach",
    },
    {
      value: "Paying customers",
      label: "consumer subscription products",
    },
  ],
} as const;

export const background = {
  label: "Background",
  title: "From the front line to the implementation layer.",
  paragraphs: [
    "I started in customer-facing roles at TD Bank and moved into team leadership — close enough to the work to see where it broke down, for customers and for the people doing it. From there I documented processes across the phone channel, then into retail-banking process management at TD and continuous-improvement consulting at PNC.",
    "At Capital One I owned enterprise data-management processes — Data Usage and Data Provisioning Agreements, Authoritative Source Declarations, High Priority Usage — redesigning them for clearer accountability, building the measurement they lacked, and working across enterprise teams. That led to product management: owning strategy and delivery for VaaS, a platform that moved complex data-management validation and control requirements into software.",
    "Through Yellow Labs Products I’ve gone deeper into the implementation layer, taking production AI products through discovery, architecture, implementation, evaluation, launch and iteration.",
  ],
  closing:
    "The progression has been consistent: understand how work actually happens, improve the system around it, and increasingly build the technology that makes it better.",
} as const;

/* ------------------------------------------------------------------ */
/*  Selected work — the four products, as homepage / index cards       */
/* ------------------------------------------------------------------ */

export type WorkSlug = "verateach" | "grocery-sidekick" | "ryger" | "readmystrip";

export type Work = {
  slug: WorkSlug;
  name: string;
  status: string;
  oneLiner: string;
  demonstrates: string[];
  decision: string;
  /** Optional: a card shows no signal rather than a weak one. */
  signal?: string;
  accent: string; // "r, g, b" used for glows and markers
  /**
   * Real shipped App Store artwork, served from /public. Only genuine artwork
   * belongs here — a product without an icon keeps the monogram rather than
   * being handed a stand-in for the sake of symmetry.
   */
  icon?: string;
  live: { label: string; href: string };
};

export const works: Work[] = [
  {
    slug: "verateach",
    name: "VeraTeach",
    status: "Live · Web · K–12",
    oneLiner:
      "An AI teaching workspace that carries a lesson from state standards through Google Classroom to returned grades.",
    demonstrates: [
      "Multi-stage AI orchestration",
      "Retrieval over 110,000+ standards",
      "Evaluation and model routing",
      "Human-in-the-loop grading",
    ],
    decision:
      "AI drafts grading suggestions; only teacher-approved scores go back to Classroom.",
    signal:
      "Rubric evaluation went from 74s to 19s at ~2.1× lower cost, with near-identical scores.",
    accent: "120, 200, 255",
    live: { label: "verateach.com", href: "https://verateach.com" },
  },
  {
    slug: "grocery-sidekick",
    name: "Grocery Sidekick",
    status: "Live · iOS",
    oneLiner:
      "Scan a grocery product and see which of the allergens and ingredients you watch for it contains — answered from a normalized catalog of 400,000+ foods that works with no signal.",
    demonstrates: [
      "Large-scale data normalization",
      "Ingredient resolution",
      "Deterministic classification",
      "Benchmarks and audits",
    ],
    decision:
      "Turn messy source data into a reliable product layer: inconsistent label records normalized into stable product identities across 430,000+ barcodes, ingredients resolved against a curated dictionary, and classifications computed deterministically at build time.",
    signal:
      "400,000+ foods and 430,000+ barcodes bundled on the phone, so lookups work with no signal.",
    accent: "247, 197, 51",
    icon: "/grocery-sidekick-icon.png",
    live: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/grocery-sidekick/id6807912507",
    },
  },
  {
    slug: "ryger",
    name: "Ryger",
    status: "Live · Web",
    oneLiner:
      "Recruiting intelligence with evidence as the boundary: it structures candidate experience, matches it against role requirements, and generates targeted resumes limited to what the candidate can actually support.",
    demonstrates: [
      "Requirement-level matching",
      "Evidence-grounded resume generation",
      "Vector retrieval, structured evidence",
      "Discovery that reshaped the thesis",
    ],
    decision:
      "Evidence is the boundary. Each requirement is Met, Review or Missed with its supporting evidence, and a generated resume line whose numbers, dates or employers aren’t in the source is removed rather than trusted.",
    accent: "139, 139, 255",
    live: { label: "ryger.app", href: "https://www.ryger.app" },
  },
  {
    slug: "readmystrip",
    name: "ReadMyStrip",
    status: "Live · iOS · Paying customers",
    oneLiner:
      "Photograph a pool or spa test strip next to your own bottle’s chart and get every reading in seconds.",
    demonstrates: [
      "Vision-model pipeline for real-world photos",
      "Deterministic validation of model output",
      "Subscription monetization",
      "Iteration from production feedback",
    ],
    decision:
      "The model only perceives; code decides. A reading that isn’t printed on your chart becomes “unknown,” never a guess.",
    signal:
      "Paying customers — and production feedback led to scan history and notes.",
    accent: "72, 202, 178",
    icon: "/readmystrip-icon.png",
    live: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/readmystrip/id6785080076",
    },
  },
];

export const workBySlug = (slug: WorkSlug) => works.find((w) => w.slug === slug)!;

export const selectedWork = {
  label: "Selected Work",
  title: "Production products across recruiting, education and consumer apps.",
  description:
    "Each one surfaced a different problem in designing AI systems people can rely on — from grounding and evaluation to deciding what a model shouldn’t decide at all.",
} as const;

/* ------------------------------------------------------------------ */
/*  Capabilities — four themes, each claim tied to where it happened   */
/* ------------------------------------------------------------------ */

export type CapabilityTheme = {
  key: string;
  name: string;
  covers: string;
  evidence: { source: string; detail: string }[];
};

export const capabilities = {
  label: "Capabilities",
  title: "Where I’ve actually done this.",
  description:
    "Patterns that recur across my work, each tied to where it was applied — at Capital One and in production AI products. Every one is something I can walk through in detail, tradeoffs included.",
} as const;

/*
 * Evidence first, themes second: each line is placed under the capability it
 * genuinely demonstrates, and a product or employer simply has no line under
 * a theme where its evidence is thin. Capital One is deliberately absent from
 * the AI themes.
 */
export const capabilityThemes: CapabilityTheme[] = [
  {
    key: "A",
    name: "AI systems & orchestration",
    covers: "RAG · retrieval · structured outputs · orchestration · model / code boundaries",
    evidence: [
      {
        source: "VeraTeach",
        detail:
          "Standards retrieval filters hard by state, subject and grade, runs vector search over the corpus, then an LLM rerank that can only choose from the retrieved IDs — and abstains when nothing is a strong match.",
      },
      {
        source: "VeraTeach",
        detail:
          "Every generative call — lessons, materials, grading suggestions — runs through one execution layer that enforces a typed schema and a timeout, and records model, latency, tokens and cost.",
      },
      {
        source: "Ryger",
        detail:
          "Job descriptions become typed requirements and candidates are retrieved by vector search; tools and tenure are checked deterministically, and the remaining requirements by a model that may only cite evidence IDs that exist.",
      },
      {
        source: "Ryger",
        detail:
          "Resume generation is constrained to extracted evidence, and code — not the model — checks every number, date and employer against the cited source.",
      },
      {
        source: "ReadMyStrip",
        detail:
          "A vision model does perception only — the closest printed swatch per pad — while code validates each reading against the user’s chart and decides the result.",
      },
    ],
  },
  {
    key: "B",
    name: "Evaluation & reliability",
    covers: "Evals · benchmarks · blind comparison · regression · quality / cost / latency",
    evidence: [
      {
        source: "VeraTeach",
        detail:
          "Blind, order-shuffled A/B comparisons on quality, latency and cost set the model routing. Moving rubric evaluation to a cheaper model cut it from 74s to 19s at ~2.1× lower cost, with a mean score difference of 0.05 on a 0–4 scale.",
      },
      {
        source: "VeraTeach",
        detail:
          "Lessons are scored on an eight-criterion rubric whose cited evidence must appear verbatim in the lesson, with live regression checks run when a prompt or model changes.",
      },
      {
        source: "Grocery Sidekick",
        detail:
          "Allergen detection is gated in the test suite by a frozen benchmark of 9,612 manufacturer-declared allergens, with zero false “not found” results enforced.",
      },
      {
        source: "ReadMyStrip",
        detail:
          "Brightness, glare and sharpness are checked before any model call, and a scan with too many unreadable pads asks for a retake instead of returning a partial result.",
      },
    ],
  },
  {
    key: "C",
    name: "Data & decision systems",
    covers: "Normalization · structured evidence · deterministic logic · classification · matching",
    evidence: [
      {
        source: "Grocery Sidekick",
        detail:
          "USDA label records normalized into a bundled catalog of 400,000+ foods and 430,000+ barcodes, with product identities kept stable across rebuilds and ingredients resolved against a curated dictionary of 1,307 ingredients and 3,791 aliases.",
      },
      {
        source: "Grocery Sidekick",
        detail:
          "Classification is deterministic and precomputed at build time, with a check that re-evaluates a random sample live and fails on any disagreement. Fuzzy matching was measured and rejected after it mapped “sodium citrate” to “sodium nitrate.”",
      },
      {
        source: "VeraTeach",
        detail:
          "Built the standards corpus itself — 110,000+ records across 185 frameworks in 17 states — ingested from each state’s own sources and verified state by state.",
      },
      {
        source: "Ryger",
        detail:
          "Structured candidate evidence and typed role requirements feed deterministic scoring; each requirement’s status is assigned in one place, and rules can only lower the overall assessment, never raise it.",
      },
      {
        source: "Capital One",
        detail:
          "Owned enterprise data-management processes: redesigned Data Usage Agreements into producer-driven Data Provisioning Agreements, and traced low Authoritative Source Declaration completion to a ~4-month approval backlog, then eliminated it.",
      },
    ],
  },
  {
    key: "D",
    name: "Product & workflow design",
    covers: "Discovery · workflow redesign · human-in-the-loop · measurement · shipping and iteration",
    evidence: [
      {
        source: "Capital One",
        detail:
          "Owned strategy and delivery for VaaS, moving data-management validation and control requirements into software; automation cut a manual validation workflow from ~57 user interactions to 2.",
      },
      {
        source: "Capital One",
        detail:
          "Built reporting and KPIs where none existed, and led an Agile delivery team as product manager across engineering, design, data, validators and risk.",
      },
      {
        source: "VeraTeach",
        detail:
          "The workflow became the product — planning through returned grades — with AI drafting and teachers approving every score before it reaches Classroom.",
      },
      {
        source: "Ryger",
        detail:
          "Seven discoveries turned a matching tool into a recruiter-owned talent network.",
      },
      {
        source: "ReadMyStrip",
        detail:
          "Customer feedback in production led to scan history and notes.",
      },
    ],
  },
];

/** The /work matrix: how each body of work evidences each theme. */
export const capabilityMatrix: {
  theme: string;
  cells: Record<"capitalOne" | WorkSlug, string | null>;
}[] = [
  {
    theme: "AI systems & orchestration",
    cells: {
      capitalOne: null,
      verateach: "Filter → vector search → constrained rerank; one execution layer",
      "grocery-sidekick": null,
      ryger: "Evidence-cited assessment; constrained resume generation",
      readmystrip: "Model perceives, code decides",
    },
  },
  {
    theme: "Evaluation & reliability",
    cells: {
      capitalOne: null,
      verateach: "Blind A/B routing; rubric evaluation",
      "grocery-sidekick": "Frozen allergen benchmark in the test suite",
      ryger: null,
      readmystrip: null,
    },
  },
  {
    theme: "Data & decision systems",
    cells: {
      capitalOne: "Data-management process ownership and redesign",
      verateach: "110K+ record standards corpus",
      "grocery-sidekick": "400K+ foods normalized; deterministic classification",
      ryger: "Structured evidence; rule-based status",
      readmystrip: null,
    },
  },
  {
    theme: "Product & workflow design",
    cells: {
      capitalOne: "VaaS strategy and delivery; 57 → 2; KPIs",
      verateach: "Teacher approves every grade",
      "grocery-sidekick": null,
      ryger: "Seven discoveries → talent network",
      readmystrip: "Features from customer feedback",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  How I make product decisions                                       */
/* ------------------------------------------------------------------ */

export type Principle = {
  index: string;
  title: string;
  body: string;
  sources: string;
};

export const principlesIntro = {
  label: "How I Work",
  title: "Principles, with the decisions behind them.",
  description:
    "How I make product calls — each one anchored to a decision I actually made, not a slide.",
} as const;

export const principles: Principle[] = [
  {
    index: "01",
    title: "Find the bottleneck before building the fix.",
    body: "Low completion looked like an adoption problem. The data showed a four-month approval backlog.",
    sources: "Capital One · Ryger",
  },
  {
    index: "02",
    title: "A confident wrong answer costs more than no answer.",
    body: "“Couldn’t tell,” “Review” and “unknown” are product features. When an evaluation benchmark turned out to reward confident invention over asking a clarifying question, I changed the benchmark.",
    sources: "Grocery Sidekick · Ryger · VeraTeach · ReadMyStrip",
  },
  {
    index: "03",
    title: "AI drafts; accountable people decide.",
    body: "Where someone answers for the outcome, the model suggests and the person decides.",
    sources: "VeraTeach grading · control testing",
  },
  {
    index: "04",
    title: "Remove steps before adding features.",
    body: "Taking a workflow from 57 interactions to 2 did more than any new capability would have.",
    sources: "Capital One",
  },
  {
    index: "05",
    title: "Measure, then decide — including deciding not to ship.",
    body: "Model routing set by blind comparison. Fuzzy matching measured and turned off. KPIs built where none existed.",
    sources: "VeraTeach · Grocery Sidekick · Capital One",
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export type Position = { title: string; dates: string; bullets: string[] };

export type Role = {
  company: string;
  dates: string;
  /** Single-title roles carry their title and a summary paragraph. */
  title?: string;
  summary?: string;
  /** Multi-title roles list each position with its own dates. */
  positions?: Position[];
  link?: { label: string; href: string };
};

export const experience = {
  label: "Experience",
  title: "Fifteen years of systems work. The tools changed.",
  intro:
    "My career has been spent on the workflows, controls and data underneath large organizations — from customer-facing work and team leadership, through process documentation and process management, into enterprise data management and product. The problems stayed consistent: where work gets stuck, what can’t be measured, and what people can’t trust.",
  roles: [
    {
      company: "Yellow Labs Products",
      title: "Founder / AI Product Builder",
      dates: "January 2025 – Present",
      summary:
        "An independent product studio building and operating production AI web and mobile products in recruiting, education and consumer apps. I own the lifecycle from discovery and market research through strategy, experience design, architecture, implementation, launch, measurement and iteration.",
      link: { label: "Selected work", href: "/work" },
    },
    {
      company: "Capital One, Risk Management",
      dates: "October 2018 – September 2023",
      positions: [
        {
          title: "Manager, Product Management",
          dates: "October 2020 – September 2023",
          bullets: [
            "Owned strategy and delivery for VaaS, a platform supporting data-management validations and control testing.",
            "Led an Agile delivery team of engineers, designers and data analysts as product manager, partnering with engineering, validators, risk stakeholders and enterprise teams to turn control and process requirements into technology.",
            "Led the move from a Collibra-based front end to a standalone AWS-hosted application; automation cut a manual validation workflow from ~57 user interactions to 2.",
            "Increased high-priority usage validations completed per quarter by 15%.",
            "Built the roadmap, strategy and vision for a new product with senior leadership, and started cross-team PM collaboration to share features and reduce arbitrary differences between products.",
            "Designed rollout timelines and led training for frontline users.",
          ],
        },
        {
          title: "Manager, Process Management",
          dates: "October 2018 – October 2020",
          bullets: [
            "Redesigned enterprise data governance from a consumer-driven Data Usage Agreement model to a producer-driven Data Provisioning Agreement model, removing duplicate requirements and making accountability scale.",
            "Built reporting and KPIs where none existed; used them to trace low completion of a governance activity to a ~4-month approval backlog, then eliminated the backlog.",
            "Led design and delivery of the Effective Challenge Guidelines, helping first-line users understand data-management requirements.",
            "Subject-matter expert across enterprise projects; mentored newer process managers.",
          ],
        },
      ],
    },
    {
      company: "PNC Bank",
      title: "Process Improvement Consultant",
      dates: "2017 – 2018",
      summary:
        "Coordinated cross-functional problem solving using PDCA, ran root-cause analysis on service metrics, and coached managers on performance huddles built around metrics and continuous improvement.",
    },
    {
      company: "TD Bank",
      title: "Business Process Manager",
      dates: "2008 – 2017",
      summary:
        "Five roles over nearly a decade, from frontline customer service through team leadership, contact-center process documentation and retail-banking process management. Led a Lean Six Sigma Green Belt project on coin reconciliation that contributed to an estimated $2.5M in savings; built a decision-support dashboard modeling TD and competitor operating hours by market; joined TD’s first social-media team and led a group of 10 agents.",
    },
  ] satisfies Role[],
  credentials: [
    "B.A. Psychology, Rutgers University",
    "Certified Scrum Product Owner (CSPO)",
    "AI for Product — Product School",
    "Product Leader Certificate — Product School",
    "Lean Six Sigma Green Belt",
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */

export const contact = {
  label: "Contact",
  title: "Hiring for AI or platform product leadership?",
  body: "I’m looking for Senior and Principal product roles in AI, platform and technical product management — teams where product judgment and a working understanding of AI systems both matter. Email is the fastest way to reach me.",
} as const;

/* ------------------------------------------------------------------ */
/*  Case studies — shared shapes                                       */
/* ------------------------------------------------------------------ */

export type ArchGroup = {
  label: string;
  items: string[];
};

export type TitledBody = { title: string; body: string };

export type Step = { index: string; title: string; body: string };

export type Glance = {
  role: string;
  timeline: string;
  status: string;
  signals: readonly string[];
  capabilities: readonly string[];
};

const YELLOW_LABS_ROLE = "Founder / AI Product Builder, Yellow Labs Products";

/* ------------------------------------------------------------------ */
/*  VeraTeach                                                          */
/* ------------------------------------------------------------------ */

export const verateach = {
  positioning:
    "An AI teaching workspace that carries a lesson from standards through Google Classroom to returned grades.",
  intro:
    "I designed and built VeraTeach end to end — the product strategy, the AI architecture, and the systems underneath. It started as lesson generation and became something larger: an integrated workspace spanning planning, standards alignment, assessment creation, classroom publishing, and grading, with the teacher in control at every step.",
  tldr: "Generating a lesson is one step. The product is the workflow around it — grounding, materials, publishing, and grading — collapsed into one workspace, with AI doing the drafting and the teacher keeping the decisions.",

  glance: {
    role: YELLOW_LABS_ROLE,
    timeline: "2026 – present",
    status: "Live at verateach.com · self-serve · subscription billing",
    signals: [
      "110,000+ standards records across 185 frameworks in 17 states",
      "Rubric evaluation 74s → 19s at ~2.1× lower cost, scores held",
      "Every generative call schema-validated and cost-tracked",
    ],
    capabilities: [
      "AI workflow design",
      "Retrieval & vector search",
      "Evaluation & model routing",
      "Structured outputs",
      "Human-in-the-loop",
      "Third-party integration",
    ],
  } satisfies Glance,

  problem:
    "A teacher’s week is spread across disconnected tools: one place to plan, another to look up standards, another to build the quiz, Google Classroom to hand it out, a spreadsheet to grade it, and a blank document whenever last year’s material needs adapting. Each handoff is manual re-entry. Most AI education tools generate a lesson and stop there, dropping a plausible document into the middle of a workflow they don’t participate in.",

  discovery: {
    title: "The workflow became the product.",
    body: "Teachers didn’t need lessons generated so much as lessons that fit — into their standards, their classes and the tools their school already runs on. Lesson generation became one step in a sequence, each stage a deliberate decision about where AI helps and where the teacher stays in control.",
  },

  workflow: [
    {
      index: "01",
      title: "Planning",
      body: "A lesson starts inside real structure — course, class, standards — not a blank prompt box. Teachers can write guidance that shapes generation before it runs, or import material they already have.",
    },
    {
      index: "02",
      title: "Grounding in standards",
      body: "Retrieval grounds the lesson in a corpus of 110,000+ state standards records, so alignment is verifiable rather than asserted.",
    },
    {
      index: "03",
      title: "Review & adaptation",
      body: "Standards-aware review checks the lesson before it’s taught, and one lesson adapts — shortened block, substitute, ELL — without losing its objective.",
    },
    {
      index: "04",
      title: "Materials",
      body: "Quizzes, tests, worksheets, study guides, exit tickets and handouts generate from the lesson as editable assets the teacher can rewrite.",
    },
    {
      index: "05",
      title: "Publishing",
      body: "A material publishes into Google Classroom — as a native Google Form where it’s an assessment, or as a Doc or live link where it isn’t.",
    },
    {
      index: "06",
      title: "Grading",
      body: "Submissions come back into a grading workspace. Objective questions score automatically; written answers get AI-drafted suggestions the teacher accepts, edits, or ignores.",
    },
    {
      index: "07",
      title: "Returning grades",
      body: "Approved scores go back to Google Classroom, closing the loop inside the tool the school already runs on.",
    },
  ] satisfies Step[],

  decisions: [
    {
      title: "AI suggests the grade; the teacher gives it",
      body: "Objective questions score themselves. For written work the model drafts a score and a rationale, and stops there — it can also decline with “needs teacher judgment,” and it never sees student identity. Grading is a professional judgment a teacher answers for, so automating the judgment would move accountability to something that cannot hold it.",
    },
    {
      title: "Correctness over coverage",
      body: "Retrieval is bounded to a filtered candidate set even though a broader search would surface more, and the model abstains rather than padding the list. In a standards-aligned product, a confidently wrong suggestion is worse than a narrower right one.",
    },
    {
      title: "Own the corpus rather than the integration",
      body: "Licensing a standards API would have been faster. Building the ingestion meant meeting each state’s own PDFs, spreadsheets and quirks — but it means alignment is verifiable, additions cost days rather than negotiations, and no vendor sits between a teacher and whether their lesson is correct.",
    },
    {
      title: "Route by stakes, decided by measurement",
      body: "Summative tests get a stronger model than a worksheet does. Which model, for which workflow, is set by blind comparison on quality, latency and cost — not by defaulting to the largest one.",
    },
  ] satisfies TitledBody[],

  systems: [
    {
      title: "Standards retrieval, step by step",
      body: "A hard metadata filter (state → the frameworks eligible for the course’s subject → grade, deprecated standards excluded), then exact vector similarity over the embedded standards (top 20), then an LLM rerank that can only choose from the retrieved IDs, with a confidence gate that abstains when nothing is a strong match. Results are cached on a key that includes the corpus, model and prompt versions; abstentions are never cached.",
    },
    {
      title: "A corpus worth retrieving from",
      body: "I built and maintain the corpus itself — 185 frameworks across 17 states, 110,000+ records — ingested from authoritative state sources, each with its own document format and its own parsing failures, and verified state by state before teachers see it.",
    },
    {
      title: "One execution layer for every AI call",
      body: "Every generative capability — generation, review, adaptation, materials, grading suggestions — runs through a single seam that enforces a typed schema and a per-attempt timeout, with retry where a workflow opts in. It records model, provider, latency, tokens and estimated cost for every call, including failures, which is where routing and cost decisions get their data.",
    },
    {
      title: "Assessment as a round trip, not an export",
      body: "Publishing a quiz creates a real Google Form in the teacher’s own Classroom, maps every question so responses can be read back, matches submissions to students, and returns grades. Re-publishing is idempotent; returning grades is resumable and sends only teacher-authored scores.",
    },
    {
      title: "Reversible by construction",
      body: "Every AI change is preview-first — engines persist nothing until a teacher approves — and lesson history is append-only and written by database trigger, so changes are reversible and attributable. Scheduled instances are copy-on-write, so one lesson can run in many classes without collisions.",
    },
    {
      title: "Search that mixes meaning and keywords",
      body: "Separately from standards, the public lesson library combines keyword and vector search, fused with Reciprocal Rank Fusion, so a teacher finds a lesson whether they type its title or describe what it teaches.",
    },
  ] satisfies TitledBody[],

  evaluation: {
    intro:
      "Evaluation is the part most AI products skip and the part I lean on hardest. Shipping AI teachers can trust means measuring quality deliberately — not eyeballing a few good demos.",
    points: [
      {
        title: "Rubric evaluation",
        body: "Lessons are scored on eight explicit criteria — from objective clarity to teacher usability — and any evidence quote the evaluator cites must appear verbatim in the lesson, or it is dropped.",
      },
      {
        title: "Live regression checks",
        body: "A library of live checks runs against real models when a prompt or model changes, alongside a baseline matrix that generates and evaluates lessons across K–12 subjects and grades.",
      },
      {
        title: "Blind model comparison",
        body: "Model and prompt variants are compared blind, with output order shuffled, on quality, latency and cost — and the results set the routing policy.",
      },
      {
        title: "Retrieval and corpus checks",
        body: "Retrieval recall is benchmarked against a full-pool baseline, and every standards framework passes coverage checks — counts, grade spans, and sampled text read back against the source — before teachers see it.",
      },
    ] satisfies TitledBody[],
  },

  production: {
    intro:
      "VeraTeach is a deployed product, not a prototype. A teacher can sign up, subscribe, and use it without talking to me.",
    points: [
      "Self-serve signup with account recovery",
      "Stripe subscriptions and usage entitlements",
      "Managed Postgres with pgvector and migrations",
      "Google OAuth for Classroom and Forms",
      "Per-call AI usage and cost telemetry",
      "Error monitoring, funnel alerts and a daily canary",
    ],
  },

  evidence: [
    {
      title: "Evaluation got nearly 4× faster without getting worse",
      body: "Moving rubric evaluation to a cheaper reasoning model cut it from 74s to 19s at ~2.1× lower cost — with a mean score difference of 0.05 on a 0–4 scale across a fixed lesson set.",
    },
    {
      title: "The reranker got 7× faster",
      body: "Standards reranking moved to a faster model: 12.6s to 1.8s, at 6.4× lower cost.",
    },
    {
      title: "Tests routed on a blind comparison",
      body: "A blind three-way comparison on generated tests found equal quality at ~33% lower cost than the previous model, and set the routing for summative assessments.",
    },
    {
      title: "A benchmark that rewarded the wrong thing",
      body: "One evaluation benchmark turned out to reward confident invention over asking a clarifying question. I changed the benchmark before trusting its results.",
    },
    {
      title: "Silent failover, made visible",
      body: "Gateway failover was masking schema rejections from one provider. Adding provider attribution to every call’s log exposed it.",
    },
    {
      title: "Query work measured in production",
      body: "Rewriting the standards vector query to compute distance once cut cold latency from 177ms to 27ms; moving the teacher-facing standards picker to a trigram index fixed searches that had taken 1–7 seconds.",
    },
  ] satisfies TitledBody[],

  lesson:
    "Generating a lesson was never the hard part; a model does that in seconds. The product is everything around it — the standards corpus, the assessment loop, the grading round trip — orchestrated so AI stays useful and the teacher stays accountable.",

  next: [
    "Run the live evaluation suite automatically on every prompt or model change, rather than on demand.",
    "Build an expert-labeled standards gold set, so retrieval recall is measured against teachers’ judgment rather than a full-pool model baseline.",
  ],

  architecture: [
    {
      label: "Stack",
      items: ["Next.js 16", "React 19", "TypeScript", "Supabase / Postgres", "Vercel"],
    },
    {
      label: "Data & standards",
      items: [
        "pgvector (exact cosine)",
        "text-embedding-3-small",
        "185 frameworks · 17 states",
        "Per-state ingestion and verification",
        "Append-only, trigger-written versioning",
      ],
    },
    {
      label: "AI orchestration",
      items: [
        "One execution seam for every generative call",
        "Typed schemas and per-attempt timeouts",
        "Stakes- and cost-based routing via AI Gateway",
        "Preview-first, teacher-approved writes",
      ],
    },
    {
      label: "Google Classroom",
      items: [
        "OAuth with encrypted tokens",
        "Persistent period → course mapping",
        "Native Google Forms quizzes",
        "Idempotent re-publish",
        "Resumable grade return",
      ],
    },
    {
      label: "Production",
      items: [
        "Stripe subscriptions",
        "Usage entitlements",
        "AI usage and cost events",
        "Error monitoring and canaries",
      ],
    },
    {
      label: "Key systems",
      items: [
        "Standards retrieval (filter → vector → constrained rerank)",
        "Library search (keyword + vector, RRF)",
        "Assessment → publish → grade → return loop",
        "AI-suggested free-response scores",
        "Lesson import from existing material",
        "Copy-on-write scheduled instances",
      ],
    },
  ] satisfies ArchGroup[],
} as const;

/* ------------------------------------------------------------------ */
/*  Grocery Sidekick                                                   */
/* ------------------------------------------------------------------ */

export const grocerySidekick = {
  positioning:
    "An ingredient scanner that never says “safe.”",
  intro:
    "I built Grocery Sidekick end to end: the product, the catalog pipeline, the ingredient dictionary and parser, the results engine, the app, and the App Store launch. It reads the label instead of ranking it.",
  tldr: "The product’s hardest job isn’t finding allergens — it’s never implying an absence it can’t support. Most of the system exists to keep “we couldn’t tell” distinct from “not found.”",

  glance: {
    role: YELLOW_LABS_ROLE,
    timeline: "2026 – present",
    status: "Live on the App Store",
    signals: [
      "99.2% allergen recall from ingredient lists alone (9,612 declared allergens)",
      "Zero false “not found” results when the label’s declaration is read",
      "400,000+ foods bundled on the phone for offline use",
    ],
    capabilities: [
      "Data normalization at scale",
      "Deterministic + AI hybrid",
      "Evaluation benchmarks",
      "Designing for uncertainty",
      "On-device OCR",
      "Consumer mobile",
    ],
  } satisfies Glance,

  problem:
    "The answer to “can I eat this?” is printed on the back of the package in 6pt type, written for regulatory compliance rather than for a shopper, and it has to be decoded standing in an aisle holding a cart. Anyone avoiding an allergen, a seed oil, or an additive ends up translating an ingredient list on the spot — and most apps that offer to help hand back a letter grade instead of the facts.",

  discovery: {
    title: "The failure that matters is false reassurance.",
    body: "A shopper with an allergy acts on “not found.” A missed allergen and a cheerful “looks fine” are the same failure from where they stand. So the product is built around what it can honestly say: present, possible, not found — and, often enough to matter, “couldn’t tell.”",
  },

  decisions: [
    {
      title: "Never say “safe”",
      body: "The word is banned in code, in every state. “Not found” is reported only when the label was read cleanly, nothing was truncated, and every ingredient resolved — otherwise the answer is “couldn’t tell.” “May contain” and facility warnings stay distinct from absence rather than collapsing into a clean result.",
    },
    {
      title: "Fuzzy matching, measured and switched off",
      body: "Edit-distance matching added under one point of coverage, and mapped “sodium citrate” to “sodium nitrate” and “vitamin E” to “ascorbic acid.” A coverage gain that quietly misidentifies ingredients isn’t a gain here, so it stays disabled; resolution is exact, alias-based, and repairs known OCR confusions deterministically.",
    },
    {
      title: "A deterministic engine with AI on a short leash",
      body: "What’s in a product is never decided by a model. AI has one runtime job — reading a brand and product name from a photo of the front of the package when a barcode fails — and a validator strips anything else it returns.",
    },
    {
      title: "Bundle the clean source, not the biggest one",
      body: "Bundling Open Food Facts would have added 12.1% more products — and 15.4% of the statements it added failed quality checks. The bundled catalog is USDA Branded Foods; Open Food Facts stays an online fallback.",
    },
    {
      title: "Alternatives clear the same gate",
      body: "A suggested alternative must clear each of the shopper’s allergens and diets under the same evidence gate as the scan. “Possible” or “couldn’t tell” never qualifies.",
    },
  ] satisfies TitledBody[],

  pipeline: [
    {
      index: "01",
      title: "Identify",
      body: "A barcode resolves against a catalog of 400,000+ foods bundled on the phone — so an aisle with no signal still works — with online lookups as fallbacks, and front-of-package identification as the last resort.",
    },
    {
      index: "02",
      title: "Read",
      body: "A photo of the ingredient panel is read on the device by hand-written native modules over Apple Vision and ML Kit. Ingredient-label photos are never uploaded.",
    },
    {
      index: "03",
      title: "Parse and resolve",
      body: "The statement is parsed and each ingredient resolved against a curated dictionary of 1,307 ingredients and 3,791 aliases, drawn from FDA, USDA and public-domain sources.",
    },
    {
      index: "04",
      title: "Judge",
      body: "A results engine assigns each watched item a state — present, possible, not found or couldn’t tell — and names the ingredient responsible. The watch list covers the nine major US allergens (gluten standing in for wheat) plus seed oils, MSG, high-fructose corn syrup and artificial sweeteners.",
    },
    {
      index: "05",
      title: "Precompute",
      body: "Evaluating a complex label live took up to four seconds on a phone, so the catalog carries flags precomputed at build time by the same engine — 2 MB — and a verification step re-evaluates a random sample live and fails on any disagreement.",
    },
  ] satisfies Step[],

  evaluation: {
    intro:
      "Recall on allergens is the number that matters, so it’s measured against a frozen benchmark and held there by the test suite.",
    points: [
      {
        title: "Allergen benchmark",
        body: "9,612 allergen declarations taken from manufacturers’ own CONTAINS statements. With the declaration withheld, the ingredient list alone yields 99.2% recall; with it read, as a real scan does, recall is 100% with zero false “not found” results.",
      },
      {
        title: "A ratchet, not a target",
        body: "Zero false “not found” results is enforced as an absolute in the test suite, and the strict-mode miss count may never rise.",
      },
      {
        title: "MSG and seed-oil benchmark",
        body: "A second frozen gate of 7,780 known-positive rows covers the non-allergen watch items.",
      },
      {
        title: "Release audit",
        body: "An audit of 1,180 “not found” answers on products named for an allergen surfaced 74 false clears, each fixed or downgraded.",
      },
    ] satisfies TitledBody[],
  },

  production: {
    intro:
      "Grocery Sidekick is live on the App Store and built to work where shoppers actually are — in an aisle, often without signal.",
    points: [
      "Offline-first: catalog, saved scans and label reading work without a network",
      "Ingredient labels read entirely on-device",
      "JavaScript and dictionary fixes ship over the air; native changes are gated by runtime version",
      "Stable product IDs preserved across catalog rebuilds",
      "Subscriptions through RevenueCat",
    ],
  },

  evidence: [
    {
      title: "Alternatives that still carried the allergen",
      body: "Before the shared gate, 3.3% of suggested alternatives still carried an active allergen or diet conflict. After it: zero.",
    },
    {
      title: "Fuzzy matching removed",
      body: "Measured, found to cause dangerous mis-mappings for under a point of coverage, and switched off.",
    },
    {
      title: "Precomputation after measuring latency",
      body: "Live evaluation took 851ms for ranch dressing and four seconds for ice cream. Build-time flags made results instant for 2 MB.",
    },
    {
      title: "A bigger catalog rejected",
      body: "+12.1% products wasn’t worth 15.4% of new statements failing quality checks.",
    },
  ] satisfies TitledBody[],

  lesson:
    "Refusing to answer is a feature. The trust a shopper places in “not found” is only deserved if the product is just as willing to say “couldn’t tell.”",

  next: [
    "Precompute catalog flags for high-fructose corn syrup and artificial sweeteners, so alternatives can account for them too.",
    "Run the benchmark gates automatically on every change, not only in the local test suite.",
  ],

  architecture: [
    { label: "App", items: ["Expo", "React Native", "TypeScript", "iOS", "Offline-first"] },
    {
      label: "On-device OCR",
      items: ["Hand-written native modules", "Apple Vision", "ML Kit"],
    },
    {
      label: "Data",
      items: [
        "Bundled SQLite catalog (USDA Branded Foods)",
        "400,000+ foods · 430,000+ barcodes",
        "1,307-ingredient curated dictionary",
        "Build-time precomputed watch flags",
      ],
    },
    {
      label: "Interpretation",
      items: [
        "Ingredient statement parser",
        "Exact and alias resolution with OCR-confusion repair",
        "Evidence-gated absence",
        "Present · possible · not found · couldn’t tell",
      ],
    },
    {
      label: "Scoped AI",
      items: [
        "Front-of-package product identification via a hardened server proxy",
        "Agent-proposed dictionary repairs behind a deterministic safety check and an approval step",
      ],
    },
    { label: "Payments", items: ["RevenueCat", "Subscription management"] },
  ] satisfies ArchGroup[],
} as const;

/* ------------------------------------------------------------------ */
/*  Ryger                                                              */
/* ------------------------------------------------------------------ */

export type Discovery = {
  index: string;
  label: string;
  saw: string; // the tension — "what I saw"
  led: string; // the response — "what it led to"
};

export const ryger = {
  positioning:
    "A recruiter-owned talent network, discovered one workflow problem at a time.",
  intro:
    "Ryger didn’t start as a recruiting product. It started as a question about why both sides of hiring kept missing each other — and every answer changed what it should be. What follows is the sequence of discoveries that turned a matching tool into a network, and the evidence-first assessment system underneath it.",
  tldr: "Each discovery moved Ryger further from “build a better match” and closer to “build the asset recruiters actually keep.” The matching engine was never the point. The network was.",

  glance: {
    role: YELLOW_LABS_ROLE,
    timeline: "2025 – present",
    status: "Live at ryger.app",
    signals: [
      "Per-requirement Met / Review / Missed, each verdict citing real evidence",
      "Every number and date in a generated resume traced to source evidence",
      "Seven discoveries from matching tool to talent network",
    ],
    capabilities: [
      "Product discovery",
      "Workflow design",
      "Vector retrieval",
      "Explainable AI assessment",
      "Evidence-constrained generation",
      "Marketplace thinking",
    ],
  } satisfies Glance,

  problem:
    "Recruiting effort rarely compounds. Candidates, relationships and past searches scatter across ATS systems, LinkedIn, spreadsheets and inboxes, so each role starts over — and the tools meant to help mostly match on keywords, which never proved the experience behind them.",

  discoveries: [
    {
      index: "01",
      label: "Initial Observation",
      saw: "Both sides of the hiring market were working harder than ever and still missing each other — recruiters sending outreach for roles far from a candidate’s experience, while qualified people applied hundreds of times without being seen.",
      led: "That mismatch is what pulled me in. If effort this high on both sides still ended in misses, the problem probably wasn’t effort. It was something in how recruiting itself works.",
    },
    {
      index: "02",
      label: "Research",
      saw: "Digging into ATS platforms, sourcing workflows, and recruiter behavior, one pattern kept surfacing: recruiters repeatedly rebuild value they already created. Candidates, relationships, and recruiting effort get trapped across ATS systems, LinkedIn, spreadsheets, inboxes, and personal files.",
      led: "Recruiting effort almost never compounds. Each role tends to start over, and the work from the last search rarely carries into the next. The bottleneck wasn’t technology — it was value leaking out of the system between roles.",
    },
    {
      index: "03",
      label: "Workflow Discovery",
      saw: "Evaluating candidates, I was constantly moving back and forth between the job description and the resume, holding both in my head. The friction wasn’t the decision — it was all the context-switching around it.",
      led: "That realization came before any feature. Once the problem was friction, the design followed: structured review that keeps the requirements and the evidence in one place, so the recruiter isn’t reassembling context on every candidate.",
    },
    {
      index: "04",
      label: "AI Trust Discovery",
      saw: "I kept hitting the limits of keywords: a resume might list Agile, Scrum, or product management, but the words being present never proved the experience behind them. The real question was always “what evidence supports this?” — and no recruiter should have to reconstruct that by hand, candidate after candidate.",
      led: "So evidence had to travel with the recommendation. Matching became requirement-level reasoning — the support for a fit attached directly to each requirement, judged on demonstrated experience rather than keyword presence — so recruiters can make fast, confident decisions without constant re-checking.",
    },
    {
      index: "05",
      label: "Recruiting Nuance Discovery",
      saw: "Most recruiting products seem to assume fit can be fully determined through matching, search, or a score. But the hard hiring decisions rarely work that way — they turn on trajectory, adjacent experience, transferable skills, hiring-manager context, and recruiter judgment.",
      led: "So the goal was never to automate judgment. It was to clear the obvious matches and obvious misses, and route everything in between to Review — where a recruiter’s expertise actually adds value.",
    },
    {
      index: "06",
      label: "Marketplace Discovery",
      saw: "Almost all the recruiting technology I looked at was built to help recruiters search ever-larger pools of passive candidates. Meanwhile the opposite problem was playing out in plain view: large numbers of active job seekers, searching hard, and still invisible.",
      led: "It left me with a question, not a conclusion: are we solving the wrong problem? If qualified people who are actively searching still can’t get seen, maybe the gap isn’t sourcing at all. Maybe it’s visibility and signal.",
    },
    {
      index: "07",
      label: "Network Discovery",
      saw: "Research consistently showed the same thing: recruiters rebuilding searches, rediscovering candidates they’d already found, and losing relationships scattered across systems. Matching was useful — but it was never the durable value. The durable value was the network itself.",
      led: "This was the moment the product thesis changed. Ryger stopped being a better way to match and became a way to own and grow a talent network — recruiter landing pages, owned candidate pools, and continuous accumulation — with matching repositioned as activation rather than the product.",
    },
  ] satisfies Discovery[],

  pivot: "The matching engine wasn’t the asset. The network was.",

  evolution: {
    intro:
      "That reframe moved Ryger’s center of gravity from a single transaction to a compounding asset. Instead of helping a recruiter fill one role, it helps them build a talent network that gets more valuable with every search.",
    capabilities: [
      "Recruiter landing pages",
      "Recruiter-owned candidate pools",
      "A network for active job seekers",
      "Shareable candidate slates",
      "Matching as activation, not the product",
    ],
    layers: [
      {
        title: "Growth — how the network compounds",
        body: "A recruiter-owned network is only as valuable as its ability to grow. If recruiters have to manually source every candidate forever, the asset stays small. So recruiter landing pages and public candidate intake became core — a way to continuously grow the pool while the recruiter keeps ownership of every relationship.",
      },
      {
        title: "Integrity — growth without losing signal",
        body: "Public intake raised an obvious risk: recruiting is increasingly flooded with automated and mass-apply submissions, and a recruiter-owned network only works if recruiters trust the pool. Intake is protected by a honeypot, bot detection, per-role rate limits, file checks, a model gate that confirms an upload is actually a resume, and duplicate-person resolution.",
      },
    ] satisfies TitledBody[],
  },

  decisions: [
    {
      title: "Review, not a forced yes or no",
      body: "Every requirement resolves to Met, Review or Missed. Partial or unclear evidence goes to Review rather than being rounded to a verdict the evidence can’t support.",
    },
    {
      title: "Keywords never prove experience",
      body: "A keyword-only match is never elevated to Met, and a tool listed on a resume without supporting work history counts as Missed.",
    },
    {
      title: "One place decides",
      body: "Deterministic signals, model judgments and explanation text are kept separate, and a requirement’s status is assigned in exactly one function — so behavior is auditable and changes can be proven not to regress it.",
    },
    {
      title: "The verdict can only be lowered",
      body: "The model’s overall assessment is capped downward by deterministic rules: when more than three-quarters of must-haves are missing it cannot read better than “Stretch,” and an explicit work-authorization conflict forces “Unlikely.”",
    },
  ] satisfies TitledBody[],

  pipeline: [
    {
      index: "01",
      title: "Structure",
      body: "A job description becomes typed requirements — must, should or nice to have; gating or not; minimum years; any-of or all-of — with role duties kept separate and an instruction not to invent qualifications the text doesn’t state.",
    },
    {
      index: "02",
      title: "Retrieve",
      body: "Candidates are embedded and retrieved by vector search across the recruiter’s own pools and the wider network, using separate queries for must-haves, tools and domain.",
    },
    {
      index: "03",
      title: "Rank",
      body: "Deterministic, weighted scoring over exact, partial and related matches produces a fit score and band; semantic similarity adds credit only where there is structured evidence behind it.",
    },
    {
      index: "04",
      title: "Assess",
      body: "Tools and tenure are checked deterministically first. The remaining requirements are assessed by a model in parallel batches, and every verdict must cite evidence IDs that actually exist in the candidate’s evidence pack.",
    },
    {
      index: "05",
      title: "Resolve",
      body: "One function assigns Met, Review or Missed per requirement; the overall assessment is then capped by rules.",
    },
  ] satisfies Step[],

  resume: {
    title: "Evidence-constrained resume generation",
    problem:
      "Resumes are built for a single role, so experience that doesn’t match the current application quietly gets cut. Most tools make it worse — optimizing for keywords, or inventing accomplishments that no longer sound like the person.",
    approach:
      "Ryger’s resume generator reads a job description against the candidate’s whole career and surfaces the most relevant real experience first — under rules that keep it truthful.",
    controls: [
      {
        title: "Evidence is the only input about the candidate",
        body: "The model receives extracted evidence rows, each tied to exactly one role, with verbatim quotes. The job description is explicitly not evidence about the candidate, and a stated goal is not an achieved result.",
      },
      {
        title: "Checks in code, not in the prompt",
        body: "After generation, every bullet must cite evidence from the same role, and every number and year must appear in that evidence. Lines that fail are removed, not repaired by the model.",
      },
      {
        title: "Ungrounded skills are stripped",
        body: "A grounding guard removes skills and certifications that don’t appear in the source material.",
      },
      {
        title: "A limit stated, not hidden",
        body: "The checks are objective — citations, numbers, dates, employer names — so a characterization borrowed from the job description can still slip through. That gap is measured and logged.",
      },
    ] satisfies TitledBody[],
  },

  evaluation: [
    {
      title: "Rules under test",
      body: "The overall-assessment caps are covered by automated tests, and an input-equivalence harness checks that migrations preserve behavior.",
    },
  ] satisfies TitledBody[],

  production: {
    intro: "Ryger is live at ryger.app, with recruiter and candidate workflows.",
    points: [
      "Recruiter landing pages with public candidate intake",
      "Recruiter-owned candidate pools and a network for active job seekers",
      "Requirement-level fit with evidence, per candidate",
      "Shareable candidate slates",
      "Authentication and billing",
    ],
  },

  lesson:
    "The biggest lesson from Ryger is that technology alone rarely solves workflow problems. The most valuable opportunities show up somewhere quieter — in how people actually work, where trust breaks down, where information gets lost, and where systems fail to compound value over time.",

  next: [
    "Build a human-labeled ground-truth set of candidate–requirement pairs, so Met / Review / Missed accuracy is measured directly. Today’s relevance labels are model-authored.",
    "Extend the resume checks beyond objective facts, to catch characterizations borrowed from the job description.",
  ],

  architecture: [
    { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Vercel"] },
    {
      label: "Platform",
      items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "ECS", "CloudFront", "SES"],
    },
    {
      label: "AI & retrieval",
      items: [
        "OpenAI models",
        "text-embedding-3-small",
        "Pinecone vector search",
        "Schema-validated requirement extraction",
        "Evidence-cited requirement assessment",
      ],
    },
    { label: "Identity & billing", items: ["Clerk", "Stripe"] },
    {
      label: "Integrations",
      items: ["Google Maps API", "Geocoding", "Location proximity"],
    },
    {
      label: "Key systems",
      items: [
        "Recruiter-owned talent pools",
        "Candidate ingestion pipelines",
        "Recruiter landing pages",
        "Match and fit reasoning",
        "Evidence-constrained resume generation",
        "Public-intake abuse controls",
      ],
    },
  ] satisfies ArchGroup[],
} as const;

/* ------------------------------------------------------------------ */
/*  ReadMyStrip                                                        */
/* ------------------------------------------------------------------ */

export const readMyStrip = {
  positioning:
    "A test-strip reader where the model perceives and code decides.",
  intro:
    "I took ReadMyStrip from concept through App Store launch — product strategy, capture UX, the vision pipeline, backend, subscriptions and iteration — and it has paying customers.",
  tldr: "Real-world photos are messy, and strip brands differ. The answer was to narrow the model’s job to perception, have code make every decision, and let each user’s own chart define what a valid reading is.",

  glance: {
    role: YELLOW_LABS_ROLE,
    timeline: "2026 – present",
    status: "Live on the App Store · paying customers",
    signals: [
      "Paying customers on a $0.99/month or $9.99/year subscription",
      "Model output validated against the user’s own printed chart",
      "Scan history and notes added from production feedback",
    ],
    capabilities: [
      "Vision-model pipeline",
      "Deterministic validation",
      "Capture UX",
      "Subscription monetization",
      "Iterating from feedback",
    ],
  } satisfies Glance,

  problem:
    "Testing pool, spa, or aquarium water means reading a strip of subtle color pads against a reference chart — slow, subjective, and easy to get wrong. Results shift with lighting, eyesight, and guesswork, and every brand prints its chart differently.",

  discovery: {
    title: "Narrow the model’s job.",
    body: "The first scan architecture leaned on reconstruction — a color-science matcher alongside a model asked to reason about chemistry and decide status. Within days it was replaced: the model now does one thing, picking the closest printed swatch for each pad, and everything after that is deterministic code.",
  },

  decisions: [
    {
      title: "The model perceives; code decides",
      body: "For each pad the model returns only the label of the closest swatch on the chart. Code parses the value and decides low, in range or high. Any label that isn’t actually printed on that pad’s row is rejected as a hallucination and becomes “unknown.”",
    },
    {
      title: "Your chart defines a valid reading",
      body: "Strip brands differ, so each user photographs their own bottle’s chart once. The chart is parsed into rows and ranges, and every later scan is judged against it rather than a generic reference.",
    },
    {
      title: "Ask for a rescan instead of guessing",
      body: "When more than 40% of pads can’t be read confidently, the app asks for another photo rather than presenting a partial result as complete.",
    },
    {
      title: "Pay before the model runs",
      body: "One free scan, then a subscription — enforced on the server before any model call, so unit economics hold and the paywall can’t be bypassed from the client.",
    },
  ] satisfies TitledBody[],

  pipeline: [
    {
      index: "01",
      title: "Capture",
      body: "A camera screen draws measured framing guides for the strip and the chart, and the photo is cropped to the guide before upload. Strip scans are camera-only.",
    },
    {
      index: "02",
      title: "Check the image",
      body: "Brightness, glare and sharpness are measured before any model call; images outside the limits prompt a retake.",
    },
    {
      index: "03",
      title: "Read the chart (once)",
      body: "The chart is cropped into overlapping bands for resolution and parsed into a structured schema of chemicals, units and levels; illegible charts, duplicate rows or suspicious markings are rejected with a retake prompt.",
    },
    {
      index: "04",
      title: "Perceive",
      body: "A vision model compares the strip with the user’s saved chart and returns, per chemical, the closest printed label — nothing else.",
    },
    {
      index: "05",
      title: "Decide",
      body: "Code validates every label against the chart, parses values, and assigns low, in range, high or unknown; too many unknowns trigger a rescan.",
    },
  ] satisfies Step[],

  evaluation: {
    intro:
      "Quality today comes from constraint rather than a measured accuracy figure: the model’s output space is limited to labels printed on the user’s chart, and everything else is validated in code.",
    points: [
      {
        title: "Output validation",
        body: "Every reading is checked against the chart before it is shown; an unrecognized label can only ever become “unknown.”",
      },
      {
        title: "Image quality gates",
        body: "Dark, overexposed, glary or blurry photos are caught before they reach the model.",
      },
      {
        title: "Parser contract tests",
        body: "The chart parser and value/status logic are covered by unit tests.",
      },
      {
        title: "Structured logging",
        body: "Every scan logs timings, tokens, outcomes and per-pad reads, which is how production behavior gets reviewed.",
      },
    ] satisfies TitledBody[],
  },

  production: {
    intro:
      "ReadMyStrip is live on the App Store with paying customers, and production use has already reshaped it.",
    points: [
      "One free scan, then $0.99/month or $9.99/year",
      "Entitlements enforced server-side, synced by RevenueCat webhooks",
      "Scan history with notes — “shocked after rain,” “added chlorine” — added in 1.0.1 from customer feedback",
      "Notes added to the result screen too, after testing found they could only be added from History",
    ],
  },

  lesson:
    "Reliability came from scoping, not from a bigger model. Give the model the narrowest job that still needs it, and make the rest of the system unable to pass along a guess.",

  next: [
    "Build a labeled image set across strip brands and lighting conditions, so reading accuracy is measured directly rather than inferred from constraints.",
    "Pin the scan model version, so accuracy measurements stay comparable over time.",
  ],

  architecture: [
    { label: "App", items: ["Expo", "React Native", "TypeScript", "iOS"] },
    {
      label: "Vision pipeline",
      items: [
        "Guided capture and crop",
        "Image quality gates (brightness, glare, sharpness)",
        "Band-cropped chart parsing",
        "Perception-only vision model call",
        "Structured outputs, validated in code",
      ],
    },
    {
      label: "Platform",
      items: ["Vercel functions", "Supabase", "Row-level security"],
    },
    {
      label: "Payments",
      items: ["RevenueCat", "Server-side entitlement checks", "Webhook sync"],
    },
  ] satisfies ArchGroup[],
} as const;
