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
  { label: "Products", href: "/#products" },
  { label: "How I Build", href: "/#how-i-build" },
  { label: "Experience", href: "/#experience" },
  { label: "Writing", href: "/#writing" },
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
  highlights?: string[]; // short capability chips
  architecture?: ArchGroup[]; // grouped tech-stack categories
};

export type ArchGroup = {
  label: string;
  items: string[];
};

export const products: Product[] = [
  {
    name: "Resume",
    tagline: "Resumes grounded in your whole career, not just one role",
    status: "Product",
    problem:
      "Resumes are built for a single role, so experience that doesn't match the current application quietly gets cut. Most tools make it worse — optimizing for keywords, or inventing accomplishments that no longer sound like you.",
    why: "Built to tell a more complete career story. Resume pairs a traditional resume with a deeper career narrative, then reads a job description against both — surfacing the most relevant real experience first, always grounded in your actual work history.",
    lesson:
      "The hard part was never generating content. It was preserving trust — keeping resumes truthful, free of invented metrics, and still sounding like the person behind them.",
    href: "#",
    accent: "109, 139, 255",
    highlights: ["Career-story grounded", "JD-aware prioritization", "Truthful by design"],
    architecture: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Vercel"] },
      { label: "Platform", items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"] },
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
    name: "Lesson Plan",
    tagline: "Adaptive lesson planning, designed around how teachers actually work",
    status: "Product",
    problem:
      "Teachers rarely start from a blank page. They work inside courses, units, standards, lesson sequences, and real classroom constraints. Most AI education tools start with a prompt and ignore all of that structure.",
    why: "Built in partnership with an experienced educator with a PhD in education and instructional design — grounding decisions in how teachers actually plan, not how software imagines they do. The defining discovery: teachers don't just need lessons generated, they need lessons that adapt — a shortened class, a substitute version, ELL or intervention support, more challenge for advanced learners — without losing learning objectives, standards alignment, or instructional flow. Every AI suggestion is preview-first; teachers review, refine, reject, or approve before anything is saved.",
    lesson:
      "The most valuable educational AI augments teacher workflows rather than replacing judgment. And a lesson isn't a static document — it's a reusable instructional asset that has to adapt as classroom realities change.",
    href: "#",
    accent: "120, 200, 255",
    highlights: [
      "Built with a PhD educator",
      "Standards-aware",
      "Adaptive by design",
      "Preview-first & teacher-controlled",
    ],
    architecture: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "Vercel"] },
      { label: "Platform", items: ["PostgreSQL", "Supabase"] },
      { label: "AI", items: ["Anthropic Claude", "Vercel AI SDK"] },
      {
        label: "Key Systems",
        items: [
          "Standards framework",
          "Lesson versioning",
          "Adaptive planning workflows",
          "Lesson evaluation workflows",
          "Preview-first generation",
          "Differentiation & adaptation systems",
        ],
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
    title: "Lessons from building three products in a year",
    blurb:
      "What actually transferred between Ryger, Resume, and Lesson Plan — and what didn't.",
    status: "Coming soon",
  },
];
