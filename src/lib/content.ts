/**
 * Single source of truth for site content.
 * Keeping copy out of components makes it trivial to iterate on
 * messaging without touching layout or styling.
 */

export const site = {
  name: "Chad Harmer",
  role: "Product Leader · Founder · Builder",
  email: "chad@ryger.app",
  linkedin: "https://www.linkedin.com/in/chadharmer",
} as const;

export const nav = [
  { label: "Products", href: "/#products" },
  { label: "AI Work", href: "/#ai-work" },
  { label: "How I Build", href: "/#how-i-build" },
  { label: "Experience", href: "/#experience" },
] as const;

export const hero = {
  eyebrow: "Product · Systems · AI",
  titleLines: ["Product Leader.", "Founder.", "Builder."],
  subtitle:
    "I turn ambiguous problems into real software — designing AI workflows, marketplaces, and recruiting technology that compound over time.",
  focusAreas: [
    "AI workflow design",
    "RAG & retrieval",
    "Model evaluation",
    "Model comparison & routing",
    "Human-in-the-loop",
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
  accent: string; // tailwind-ish rgba used for the card glow
  /** Render as a full-width flagship card instead of a grid cell. */
  featured?: boolean;
  highlights?: string[]; // short capability chips
  architecture?: ArchGroup[]; // grouped tech-stack categories
  /** Real CTA links. Only ever points to live, useful destinations. */
  actions?: {
    label: string;
    href: string;
    external?: boolean;
    /** Visual weight on flagship cards. Defaults to secondary. */
    variant?: "primary" | "secondary" | "subtle";
  }[];
  /** Non-clickable status text, used when no live destination exists yet. */
  availability?: string;
};

export type ArchGroup = {
  label: string;
  items: string[];
};

export const products: Product[] = [
  {
    name: "VeraTeach",
    featured: true,
    tagline:
      "A production AI teaching workspace that carries a lesson from standards through Google Classroom to returned grades.",
    status: "Live",
    problem:
      "A teacher's week is spread across disconnected tools: one place to plan, another to look up standards, another to build the quiz, Google Classroom to hand it out, a spreadsheet to grade it, and a blank document whenever last year's material needs adapting. Each handoff is manual re-entry. Most AI education tools generate a lesson and stop there, dropping a plausible document into the middle of a workflow they don't participate in.",
    why: "The workflow became the product. Lesson generation is one capability inside a system that spans the whole arc: a lesson is grounded in a 100,000-record standards corpus through retrieval rather than recollection, shaped by guidance the teacher writes before generation runs, extended into quizzes, worksheets, study guides and exit tickets, published to a class as a native Google Form where that fits, and graded in a workspace that scores the objective questions automatically and proposes — never applies — scores for written answers. Grades go back to Classroom. Teachers can also import material they already have rather than starting from a blank page. One orchestration layer coordinates every AI stage, and every AI write is previewed before it counts.",
    lesson:
      "The engineering that matters lives in the coordination: hybrid standards retrieval that filters, ranks by vector similarity, then reranks; immutable, trigger-written version history that makes every change reversible; copy-on-write scheduled instances so one lesson runs in many classes without collisions; cost- and stakes-based model routing; idempotent publishing into Google Classroom; and a grading path that keeps the teacher as the one who decides. AI earns its place by being orchestrated into real work and keeping the teacher accountable — not by making the call on its own.",
    accent: "120, 200, 255",
    actions: [
      {
        label: "Visit VeraTeach",
        href: "https://verateach.com",
        external: true,
        variant: "primary",
      },
      { label: "Read Case Study", href: "/verateach", variant: "secondary" },
    ],
    // Fallback status if the live link is ever pulled. Kept positive, never "broken".
    availability: "Live at verateach.com",
    highlights: [
      "Plan through grading, one workspace",
      "100k+ standards, semantically retrieved",
      "Native Google Forms quizzes",
      "AI suggests scores, teachers decide",
      "Grades returned to Classroom",
      "Live, self-serve, billed",
    ],
    architecture: [
      {
        label: "Stack",
        items: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Supabase / Postgres",
          "Vercel",
        ],
      },
      {
        label: "Data & standards",
        items: [
          "pgvector",
          "Multi-state standards",
          "Authoritative ingest",
          "Immutable trigger-based versioning",
        ],
      },
      {
        label: "AI orchestration",
        items: [
          "One orchestration layer across all AI stages",
          "Model-agnostic routing via AI Gateway",
          "Cost / stakes-based model routing",
          "Retrieval where correctness matters",
          "Preview-first, teacher-approved writes",
        ],
      },
      {
        label: "Google Classroom",
        items: [
          "Verified OAuth with encrypted tokens",
          "Persistent period → course mapping",
          "Native Google Forms quiz creation",
          "Publishing as Docs · Forms · live links",
          "Idempotent re-publish",
          "Grades returned to Classroom",
        ],
      },
      {
        label: "Production",
        items: [
          "Stripe subscriptions",
          "Usage entitlements",
          "Authentication & account recovery",
          "Error monitoring",
        ],
      },
      {
        label: "Key Systems",
        items: [
          "Hybrid standards retrieval (filter + vector + rerank)",
          "AI orchestration across stages",
          "Instructional material generation",
          "Assessment → publish → grade → return loop",
          "Automatic objective scoring",
          "AI-assisted free-response suggestions",
          "Lesson import from existing material",
          "Copy-on-write scheduled instances",
          "Destination-abstracted publishing",
        ],
      },
    ],
  },
  {
    name: "Resume",
    tagline: "Resumes grounded in your whole career, not just one role",
    status: "Live · Web",
    problem:
      "Resumes are built for a single role, so experience that doesn't match the current application quietly gets cut. Most tools make it worse — optimizing for keywords, or inventing accomplishments that no longer sound like you.",
    why: "Built to tell a more complete career story. Resume pairs a traditional resume with a deeper career narrative, then reads a job description against both — surfacing the most relevant real experience first, always grounded in your actual work history.",
    lesson:
      "Trust is the product. Every resume has to stay truthful, free of invented metrics, and still sound like the person behind it — even though a model does the drafting.",
    accent: "109, 139, 255",
    // Landing page is live at www.ryger.app/resume — link directly to it.
    actions: [
      { label: "Visit Resume", href: "https://www.ryger.app/resume", external: true },
    ],
    // Fallback status if the live link is ever pulled. Kept positive, never "broken".
    availability: "Available by request",
    highlights: ["Career-story grounded", "JD-aware prioritization", "Truthful by design"],
    architecture: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Vercel"] },
      { label: "Platform", items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "SES"] },
      { label: "AI", items: ["OpenAI"] },
      { label: "Identity", items: ["Custom authentication"] },
      {
        label: "Key Systems",
        items: [
          "Career story engine",
          "Resume generation workflows",
          "Grounded content generation",
          "Job alignment workflows",
          "Truth-preservation controls",
        ],
      },
    ],
  },
  {
    name: "ReadMyStrip",
    tagline: "AI-Powered Water Test Strip Reader for iPhone",
    status: "Live · App Store",
    problem:
      "Testing pool, spa, or aquarium water means reading a strip of subtle color pads against a reference chart — slow, subjective, and easy to get wrong. Results shift with lighting, eyesight, and guesswork, right when accuracy matters most.",
    why: "ReadMyStrip turns that into a single photo. I led the product from concept through production release — product strategy, UX, AI workflow design, engineering, backend architecture, and App Store launch — so anyone can point their iPhone at a used test strip and get reliable, interpreted results in seconds.",
    lesson:
      "Reliability is the product. A technically complex image-analysis workflow has to land as one trustworthy tap — onboarding, edge cases, subscriptions, and Apple's review process all handled so the user never has to think about them.",
    accent: "72, 202, 178",
    // Live App Store listing — link directly to it.
    actions: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/readmystrip/id6785080076",
        external: true,
      },
    ],
    // Fallback status if the live link is ever pulled. Kept positive, never "broken".
    availability: "Live on the Apple App Store",
    highlights: [
      "Shipped end-to-end",
      "AI photo analysis",
      "iOS · Expo React Native",
      "Simple over complex",
    ],
    architecture: [
      { label: "App", items: ["Expo", "React Native", "TypeScript", "iOS"] },
      {
        label: "AI",
        items: ["Image analysis workflow", "Test strip interpretation"],
      },
      {
        label: "Platform",
        items: ["Authentication", "Backend APIs", "Cloud storage"],
      },
      { label: "Payments", items: ["RevenueCat", "Subscription management"] },
      {
        label: "Key Systems",
        items: [
          "Single-photo capture flow",
          "AI water-chemistry interpretation",
          "End-to-end onboarding to results",
          "Subscription management",
          "App Store production release",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  AI product competencies — named skills, backed by real evidence    */
/* ------------------------------------------------------------------ */

export type Competency = {
  name: string;
  summary: string;
  /** Concrete proof, tagged to the product it comes from. */
  evidence: { product: string; detail: string }[];
};

export const competencies: Competency[] = [
  {
    name: "Retrieval-Augmented Generation (RAG)",
    summary:
      "Ground generation in authoritative sources instead of model memory, so outputs are correct and defensible.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Hybrid retrieval over authoritative academic standards — a hard metadata filter, then vector similarity, then an AI reranker — feeds the model a bounded, correct candidate set.",
      },
      {
        product: "Ryger",
        detail:
          "Evidence pulled from a candidate's real history and attached to each job requirement, so a match is reasoned over retrieved proof rather than recalled.",
      },
    ],
  },
  {
    name: "Vector Search",
    summary:
      "Search by meaning, not keywords — with guardrails so relevance never overrides correctness.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "pgvector embeddings rank standards by semantic similarity, but only within a hard-filtered set, so meaning-based search can't return an out-of-jurisdiction result.",
      },
      {
        product: "Ryger",
        detail:
          "Moved matching past keyword presence — a resume listing “Agile” never proved the experience — toward relevance judged on demonstrated work.",
      },
    ],
  },
  {
    name: "Model Evaluation",
    summary:
      "Measure output quality with rubrics and repeatable checks instead of eyeballing a few good demos.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Rubric-based, evidence-grounded evaluation scores lessons against explicit criteria; a regression harness of scripted checks guards quality as prompts and models change.",
      },
      {
        product: "Ryger",
        detail:
          "Match quality judged at the requirement level with supporting evidence, not a single opaque score.",
      },
    ],
  },
  {
    name: "Model Comparison & Routing",
    summary:
      "Pick the right model per task by weighing quality, latency, and cost — not defaulting to the biggest one.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Policy-driven, model-agnostic routing across Claude Sonnet, Claude Haiku, and GPT tiers — cheap models for low-stakes materials, stronger models reserved for summative tests.",
      },
      {
        product: "ReadMyStrip",
        detail:
          "Chose a vision-capable model for on-device-quality strip reading, balanced against latency and per-call cost for a consumer app.",
      },
    ],
  },
  {
    name: "Structured Outputs",
    summary:
      "Constrain generation to typed schemas so downstream systems get reliable data, not free text.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Every production AI call returns schema-validated output; the model can't emit free-form text or pick a value outside the allowed set (it can't invent a standard).",
      },
      {
        product: "ReadMyStrip",
        detail:
          "Water-chemistry readings returned as structured, typed results the app can render and act on directly.",
      },
    ],
  },
  {
    name: "Prompt Orchestration",
    summary:
      "Coordinate many AI steps into one reliable workflow rather than one brittle mega-prompt.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "A single orchestration layer sequences retrieval, generation, review, adaptation, evaluation, material creation, and publishing — each a discrete, testable step.",
      },
      {
        product: "Ryger",
        detail:
          "Multi-step match-reasoning workflows chained behind a single recruiter action.",
      },
    ],
  },
  {
    name: "Grounding",
    summary:
      "Tie every AI claim to real evidence to reduce hallucination and keep outputs trustworthy.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Standards suggestions are constrained to retrieved candidates — the model cannot fabricate a standard that doesn't exist.",
      },
      {
        product: "Resume",
        detail:
          "Truth-preservation controls keep resumes free of invented metrics and grounded in real work history.",
      },
      {
        product: "Ryger",
        detail:
          "Every match recommendation carries the evidence that supports it, per requirement.",
      },
    ],
  },
  {
    name: "Human-in-the-loop",
    summary:
      "Keep AI assistive — the human reviews and approves before anything counts.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Preview-first: AI engines persist nothing; teachers review, edit, and approve before any write, with full version history behind them.",
      },
      {
        product: "Ryger",
        detail:
          "AI clears the obvious matches and misses; the recruiter keeps the nuanced calls where judgment adds value.",
      },
    ],
  },
  {
    name: "AI Reliability",
    summary:
      "Make AI dependable in production — retries, timeouts, validation, and reversibility.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "A centralized execution seam wraps every call with retry, timeout, and schema validation; immutable, trigger-written version history makes every AI change reversible.",
      },
      {
        product: "ReadMyStrip",
        detail:
          "A technically complex image-analysis workflow made dependable enough for one-tap consumer use and App Store review.",
      },
    ],
  },
  {
    name: "Cost Optimization",
    summary:
      "Control the unit economics of AI features without sacrificing quality where it matters.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "Low-stakes materials routed to a model at roughly a third of the cost; premium models spent only where correctness is critical. Cached standards suggestions avoid repeat embedding and rerank cost.",
      },
    ],
  },
  {
    name: "Workflow Design",
    summary:
      "Start from how the work actually flows, then fit software and AI into it.",
    evidence: [
      {
        product: "VeraTeach",
        detail:
          "The product follows a teacher's real arc — planning through classroom delivery — instead of dropping a generated document into a vacuum.",
      },
      {
        product: "Ryger",
        detail:
          "Redesigned candidate review to end the constant context-switching between a job description and a resume.",
      },
      {
        product: "Resume",
        detail:
          "Reads a job description against a full career narrative to surface the most relevant real experience first.",
      },
    ],
  },
  {
    name: "Product Discovery",
    summary:
      "Find the real problem through research and use before building — and let it reshape the product.",
    evidence: [
      {
        product: "Ryger",
        detail:
          "A seven-discovery sequence turned a matching tool into a recruiter-owned talent network.",
      },
      {
        product: "VeraTeach",
        detail:
          "Discovered teachers don't need lessons generated so much as lessons that adapt — reshaping the product around adaptation.",
      },
      {
        product: "ReadMyStrip",
        detail:
          "Reduced a fiddly, error-prone testing routine to a single photo.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Ryger — dedicated case study                                       */
/* ------------------------------------------------------------------ */

export type Discovery = {
  index: string;
  label: string;
  saw: string; // the tension — "what I saw"
  led: string; // the response — "what it led to"
};

export const ryger = {
  name: "Ryger",
  status: "Founder · Case Study",
  positioning:
    "A recruiter-owned talent network, discovered one workflow problem at a time.",
  intro:
    "Ryger didn't start as a recruiting product. It started as a question I kept running into during my own job search — and every answer changed what it should be. What follows is the sequence of discoveries that turned a matching tool into a network.",
  tldr: "Each discovery moved Ryger further from “build a better match” and closer to “build the asset recruiters actually keep.” The matching engine was never the point. The network was.",

  discoveries: [
    {
      index: "01",
      label: "Initial Observation",
      saw: "I was getting recruiter outreach for roles nowhere near my experience — and at the same time watching qualified people struggle to get seen despite searching hard. Mass layoffs, hundreds of applications each, signal getting buried. It wasn't just bad outreach. Both sides were working hard and still missing each other.",
      led: "That mismatch is what pulled me in. If effort this high on both sides still ended in misses, the problem probably wasn't effort. It was something in how recruiting itself works.",
    },
    {
      index: "02",
      label: "Research",
      saw: "Digging into ATS platforms, sourcing workflows, and recruiter behavior, one pattern kept surfacing: recruiters repeatedly rebuild value they already created. Candidates, relationships, and recruiting effort get trapped across ATS systems, LinkedIn, spreadsheets, inboxes, and personal files.",
      led: "Recruiting effort almost never compounds. Each role tends to start over, and the work from the last search rarely carries into the next. The bottleneck wasn't technology — it was value leaking out of the system between roles.",
    },
    {
      index: "03",
      label: "Workflow Discovery",
      saw: "Evaluating candidates myself, I was constantly moving back and forth between the job description and the resume, holding both in my head. The workflow just felt inefficient. The friction wasn't the decision — it was all the context-switching around it.",
      led: "That realization came before any feature. Once the problem was friction, the design followed: structured review that keeps the requirements and the evidence in one place, so the recruiter isn't reassembling context on every candidate.",
    },
    {
      index: "04",
      label: "AI Trust Discovery",
      saw: "As I evaluated candidates, I kept moving between the job description and the resume to validate why someone was considered a fit. I also kept hitting the limits of keywords: a resume might list Agile, Scrum, or product management, but the words being present never proved the experience behind them. The real question was always “what evidence supports this?” — and no recruiter should have to reconstruct that by hand, candidate after candidate.",
      led: "So evidence had to travel with the recommendation. Matching became requirement-level reasoning — the support for a fit attached directly to each requirement, judged on demonstrated experience rather than keyword presence — so recruiters can make fast, confident decisions without constant re-checking.",
    },
    {
      index: "05",
      label: "Recruiting Nuance Discovery",
      saw: "Most recruiting products seem to assume fit can be fully determined through matching, search, or a score. But the hard hiring decisions rarely work that way — they turn on trajectory, adjacent experience, transferable skills, hiring-manager context, and recruiter judgment.",
      led: "So the goal was never to automate judgment. It was to clear the obvious matches and obvious misses automatically, and focus a recruiter's expertise on the nuanced calls in between — where it actually adds value.",
    },
    {
      index: "06",
      label: "Marketplace Discovery",
      saw: "Almost all the recruiting technology I looked at was built to help recruiters search ever-larger pools of passive candidates. Meanwhile I was watching the opposite problem play out in real time: large numbers of active job seekers, searching hard, and still invisible.",
      led: "It left me with a question, not a conclusion: are we solving the wrong problem? If qualified people who are actively searching still can't get seen, maybe the gap isn't sourcing at all. Maybe it's visibility and signal.",
    },
    {
      index: "07",
      label: "Network Discovery",
      saw: "Research consistently showed the same thing: recruiters rebuilding searches, rediscovering candidates they'd already found, and losing relationships scattered across ATS systems, LinkedIn, spreadsheets, inboxes, and hard drives. Matching was useful — but it was never the durable value. The durable value was the network itself.",
      led: "This was the moment the product thesis changed. Ryger stopped being a better way to match and became a way to own and grow a talent network — recruiter landing pages, owned candidate ecosystems, reusable talent pools, and continuous accumulation — with matching repositioned as activation rather than the product. The pattern underneath every discovery was the same: technology was rarely the bottleneck. Workflow, trust, signal, and compounding value were.",
    },
  ] satisfies Discovery[],

  pivot: "The matching engine wasn't the asset. The network was.",

  evolution: {
    intro:
      "That reframe moved Ryger's center of gravity from a single transaction to a compounding asset. Instead of helping a recruiter fill one role, it helps them build a talent network that gets more valuable with every search.",
    capabilities: [
      "Recruiter landing pages",
      "Recruiter-owned candidate ecosystems",
      "Reusable talent pools",
      "Continuous candidate accumulation",
      "Matching as activation, not the product",
    ],
    layers: [
      {
        title: "Growth — how the network compounds",
        body: "A recruiter-owned network is only as valuable as its ability to grow. If recruiters have to manually source every candidate forever, the asset stays small. So recruiter landing pages and public candidate intake became core — a way to continuously grow the talent pool while the recruiter keeps ownership of every relationship. Not a marketing feature; a direct consequence of a network thesis that needed a mechanism to compound over time.",
      },
      {
        title: "Integrity — growth without losing signal",
        body: "Public intake raised an obvious risk. Recruiting is increasingly flooded with automated applications, mass-apply workflows, and bot-assisted submissions — and a recruiter-owned network only works if recruiters trust the quality of the pool. That led to deliberate controls around candidate ingestion, designed to discourage automated submissions and preserve signal. Growth matters; trust and integrity matter just as much.",
      },
    ],
  },

  architecture: [
    { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Vercel"] },
    {
      label: "Platform",
      items: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "S3",
        "ECS",
        "CloudFront",
        "SES",
      ],
    },
    {
      label: "AI & Intelligence",
      items: [
        "OpenAI",
        "Requirement-level evaluation",
        "Evidence-backed reasoning",
        "Match reasoning workflows",
      ],
    },
    { label: "Identity & Billing", items: ["Clerk", "Stripe"] },
    {
      label: "Integrations",
      items: ["Google Maps API", "Geocoding", "Location proximity"],
    },
    {
      label: "Key Systems",
      items: [
        "Recruiter-owned talent networks",
        "Candidate ingestion pipelines",
        "Recruiter landing pages",
        "Resume intelligence",
        "Match reasoning engine",
        "Slate management workflows",
        "Signal integrity controls",
      ],
    },
  ] satisfies ArchGroup[],

  lesson:
    "The biggest lesson from Ryger is that technology alone rarely solves workflow problems. The most valuable opportunities show up somewhere quieter — in how people actually work, where trust breaks down, where information gets lost, and where systems fail to compound value over time. Find those, and the product almost designs itself.",

  demonstrates: [
    "Product discovery",
    "User research",
    "Workflow design",
    "Marketplace thinking",
    "AI trust & explainability",
    "Systems thinking",
    "Strategic evolution",
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  VeraTeach — dedicated case study                                 */
/* ------------------------------------------------------------------ */

export const verateach = {
  name: "VeraTeach",
  status: "Live · verateach.com",
  positioning:
    "An AI teaching workspace that carries a lesson from standards through Google Classroom to returned grades.",
  intro:
    "I designed and built VeraTeach end to end — the product strategy, the AI architecture, and the systems underneath. It started as lesson generation and became something larger: an integrated workspace spanning planning, standards alignment, assessment creation, classroom publishing, and grading, with the teacher in control at every step.",
  tldr: "Generating a lesson is one step. The product is the workflow around it — grounding, materials, publishing, and grading — collapsed into one workspace, with AI doing the drafting and the teacher keeping the decisions.",

  workflow: [
    {
      index: "01",
      stage: "Planning",
      decision:
        "A lesson starts inside real structure — course, class, standards — not a blank prompt box. Teachers can write guidance that shapes generation before it runs, or import material they already have.",
    },
    {
      index: "02",
      stage: "Grounding in standards",
      decision:
        "Hybrid retrieval grounds the lesson in a 100,000-record corpus of state standards, so alignment is verifiable rather than asserted.",
    },
    {
      index: "03",
      stage: "Review & adaptation",
      decision:
        "Standards-aware review checks the lesson before it's taught, and one lesson adapts — shortened block, substitute, ELL — without losing its objective.",
    },
    {
      index: "04",
      stage: "Materials",
      decision:
        "Quizzes, tests, worksheets, study guides, exit tickets and handouts generate from the lesson as editable assets the teacher can rewrite.",
    },
    {
      index: "05",
      stage: "Publishing",
      decision:
        "A material publishes into Google Classroom — as a native Google Form where it's an assessment, or as a Doc or live link where it isn't.",
    },
    {
      index: "06",
      stage: "Grading",
      decision:
        "Submissions come back into a grading workspace. Objective questions score automatically; written answers get AI-drafted suggestions the teacher accepts, edits, or ignores.",
    },
    {
      index: "07",
      stage: "Returning grades",
      decision:
        "Approved scores go back to Google Classroom, closing the loop inside the tool the school already runs on.",
    },
  ],

  systems: [
    {
      title: "One orchestration layer",
      body: "Every AI capability — retrieval, generation, review, adaptation, material creation, grading suggestions — runs through a single execution seam with retry, timeout, and validation. That seam is where model routing, cost accounting, and evaluation hooks live, so the system improves in one place instead of feature by feature.",
    },
    {
      title: "A standards corpus worth retrieving from",
      body: "Alignment is only as good as what you can search. I built and maintain the corpus itself — 144 frameworks across 13 states, 103,934 records, with all 94,036 coded standards embedded for semantic retrieval — from authoritative state sources, each with its own document format and its own parsing failures. Retrieval then filters hard on jurisdiction and grade, ranks by vector similarity, and reranks, so the model reasons over candidates it cannot cross-contaminate across states.",
    },
    {
      title: "Assessment as a round trip, not an export",
      body: "Publishing a quiz means creating a real Google Form in the teacher's own Classroom, mapping every question so responses can be read back, matching submissions to students, and returning grades. Getting that loop to close — rather than stopping at 'export to Google' — is most of what separates a demo from a tool a teacher uses on a Tuesday.",
    },
    {
      title: "Structured, teacher-approved outputs",
      body: "Every call returns schema-validated output the rest of the system can trust, and every AI change is preview-first — engines persist nothing until a teacher approves. Immutable, trigger-written version history makes each change reversible and attributable.",
    },
  ],

  evaluation: {
    intro:
      "Evaluation is the part most AI products skip and the part I lean on hardest. Shipping AI teachers can trust means measuring quality deliberately — not eyeballing a few good demos.",
    points: [
      {
        label: "Rubric evaluation",
        body: "Lessons are scored against explicit, evidence-grounded criteria, so \u201cis this good?\u201d has a repeatable answer.",
      },
      {
        label: "Regression harness",
        body: "A library of scripted checks runs against real models, catching quality regressions when a prompt or model changes.",
      },
      {
        label: "Model comparison",
        body: "Model and prompt variants are compared on quality, latency, and cost — and the results drive the routing policy. One migration cut a workflow from 74s to 18s by measuring rather than assuming.",
      },
      {
        label: "Corpus verification",
        body: "Every standards framework is gated by coverage checks before teachers see it — counts, grade spans, and sampled text read back from the database against the source.",
      },
    ],
  },

  decisions: [
    {
      title: "AI suggests the grade; the teacher gives it",
      body: "Objective questions score themselves. For written work the model drafts a score and a rationale, and stops there — the teacher accepts, edits, or ignores it. Grading is a professional judgment a teacher answers for, so automating the judgment would move accountability to something that cannot hold it.",
    },
    {
      title: "AI as orchestration, not autonomy",
      body: "The model drafts; the teacher decides. Preview-first isn't a UX nicety — it's how the product keeps professional accountability with the human who owns the classroom.",
    },
    {
      title: "Correctness over coverage",
      body: "Retrieval is bounded to a filtered candidate set even though a broader search would surface more. In a standards-aligned product, a confidently wrong suggestion is worse than a narrower right one.",
    },
    {
      title: "Own the corpus rather than the integration",
      body: "Licensing a standards API would have been faster. Building the ingestion meant meeting each state's own PDFs, spreadsheets and quirks — but it means alignment is verifiable, additions cost days rather than negotiations, and no vendor sits between a teacher and whether their lesson is correct.",
    },
  ],

  production: {
    intro:
      "VeraTeach is a deployed product, not a prototype. A teacher can sign up, subscribe, and use it without talking to me.",
    points: [
      "Authentication with self-serve account recovery",
      "Stripe subscriptions and usage entitlements",
      "Managed Postgres with pgvector, migrations, and row-level security",
      "Google OAuth verified for production use",
      "Error monitoring and coverage checks over the standards corpus",
    ],
  },

  lesson:
    "Generating a lesson was never the hard part; a model does that in seconds. The product is everything around it — the standards corpus, the assessment loop, the grading round trip — orchestrated so AI stays useful and the teacher stays accountable.",

  demonstrates: [
    "AI workflow design",
    "RAG & retrieval",
    "Model evaluation",
    "Model comparison & routing",
    "Structured outputs",
    "Human-in-the-loop",
    "Third-party API integration",
    "Cost optimization",
    "Product discovery",
    "Systems thinking",
    "Production SaaS",
  ],
} as const;

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

export const experience = {
  intro:
    "Over the last 15+ years I've worked across customer service, team leadership, process improvement, process management, enterprise risk, data governance, and product management — inside banking, risk, operations, and product organizations.",
  connection:
    "The same problems kept recurring: workflow design, operational efficiency, stakeholder alignment, governance, and reducing friction in complex processes. Many of the themes in my projects — trust, reducing context switching, preserving valuable work, and building systems that scale — originated long before I started building software.",
  themes: [
    "Workflow design",
    "Process optimization",
    "Operational efficiency",
    "Stakeholder alignment",
    "Governance",
    "Scaling systems",
    "Reducing friction",
  ],
  roles: [
    {
      company: "Capital One",
      context: "Product Management & Enterprise Risk",
      focus:
        "Built and managed products supporting governance, compliance, risk management, enterprise data workflows, and operational decision-making — focused on product strategy, roadmap development, stakeholder alignment, and large-scale enterprise initiatives.",
    },
    {
      company: "PNC Bank",
      context: "Process Improvement Consulting",
      focus:
        "Partnered with business leaders and operational teams to identify inefficiencies, improve workflows, coach teams, and drive continuous-improvement initiatives.",
    },
    {
      company: "TD Bank",
      context: "Process Management & Operational Leadership",
      focus:
        "Progressed from frontline leadership into business process management and enterprise process improvement — leading large-scale process optimization, data analysis, operational redesign, and organizational improvement programs.",
    },
  ] satisfies Role[],
  closing: {
    lead: "The projects demonstrate what I build.",
    trail: "My experience explains why I think about problems the way I do.",
  },
} as const;

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
    title: "Lessons from building four products in a year",
    blurb:
      "What actually transferred between Ryger, Resume, ReadMyStrip, and VeraTeach — and what didn't.",
    status: "Coming soon",
  },
];
