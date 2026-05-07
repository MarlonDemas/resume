// Single source of truth for all CV/portfolio content.
// Edit this file to update both the portfolio and recruiter CV simultaneously.

export const person = {
  name: "Marlon Demas",
  role: "Senior Full-Stack Engineer",
  location: "Cape Town, SA",
  timezone: "GMT+2",
  email: "demasmarlon@gmail.com",
  github: "github.com/marlondemas",
  githubUrl: "https://github.com/marlondemas",
  linkedin: "linkedin.com/in/marlondemas",
  linkedinUrl: "https://linkedin.com/in/marlondemas",
};

export const stack = {
  Frontend: ["Angular", "Vue 3", "React", "React Native", "Expo", "Skia", "Ionic", "Capacitor", "NgRx", "Zustand", "TanStack Query", "Tailwind", "SASS"],
  Backend: [".NET", "NestJS", "Node", "Express", "Java / Vert.x", "Firebase", "REST", "GraphQL"],
  Blockchain: ["Solidity", "Web3", "NFT contracts"],
  Infrastructure: ["Docker", "Azure", "Firebase", "CI/CD", "Microservices"],
  Testing: ["Jest", "Puppeteer", "Mockito", "Selenium"],
  Tooling: ["Git", "Figma", "Jira", "Xcode", "Android Studio"],
};

export const philosophy = [
  {
    n: "01",
    title: "Understand before solving.",
    desc: "Most failed projects solved the wrong problem confidently. I'd rather spend a week understanding than a quarter rebuilding.",
  },
  {
    n: "02",
    title: "Break it down to the real issue.",
    desc: "The brief is rarely the problem. The work is finding what's actually blocking the user, the team, or the business.",
  },
  {
    n: "03",
    title: "Build what matters.",
    desc: "Technical correctness is table stakes. I optimize for what users feel and what the business needs — not what's clever.",
  },
  {
    n: "04",
    title: "Ask the awkward questions.",
    desc: "If a decision feels off, I'll say so before code is written, not after. Quietly going along is the expensive option.",
  },
  {
    n: "05",
    title: "Push back with reasons.",
    desc: "Strong opinions, loosely held — but only when I can articulate the trade-off. Disagreement without alternatives is just noise.",
  },
  {
    n: "06",
    title: "Ship, then own it.",
    desc: "Code in production is the only code that counts. I stay accountable past launch — through the bugs, the metrics, the iteration.",
  },
];

export const work = [
  {
    id: "raptor",
    client: "Raptor Technologies",
    role: "Software Engineer · Platform",
    year: "2024 — Present",
    via: "via Specno",
    tag: "Platform / SaaS",
    problem: "Scale a school-safety platform across 60,000+ schools and 55 countries while keeping shared microservices stable for multiple product teams.",
    contribution: "Platform engineering on shared services. Cross-team systems, technical direction, code review across squads.",
    stack: ["Vue 3", ".NET", "Docker", "Azure", "Microservices"],
    featured: true,
  },
  {
    id: "mirai",
    client: "Mirai",
    role: "Lead Software Engineer",
    year: "2024 — 2025",
    via: "via Specno",
    tag: "Mobile / AI",
    problem: "Build a goal-setting and habit-tracking app that actually feels rewarding to use, with AI-assisted goal breakdowns and animated progress.",
    contribution: "Led mobile build end-to-end. AI goal suggestions, Skia-driven progress visuals, subscription billing, offline-first state.",
    stack: ["React Native", "Expo", "Skia", "Firebase", "OpenAI"],
    featured: false,
  },
  {
    id: "momint",
    client: "Momint",
    role: "Senior Frontend Engineer",
    year: "2023 — 2024",
    via: undefined,
    tag: "Web3 / Fintech",
    problem: "Make fractional solar-panel investment feel as straightforward as buying a normal product — while everything underneath runs on smart contracts.",
    contribution: "Senior frontend on the marketplace and hybrid mobile app. NFT minting flows, wallet UX, dashboard for energy returns.",
    stack: ["Angular", "Ionic", "NestJS", "Solidity", "Web3"],
    featured: false,
  },
  {
    id: "sba",
    client: "SBA Reading",
    role: "Lead Fullstack Developer",
    year: "2022 — 2023",
    via: undefined,
    tag: "EdTech / PWA",
    problem: "Children's reading PWA in three South African languages, with a coloring-book layer — accessibility-first, low-bandwidth-friendly.",
    contribution: "Architecture, state design, offline behavior, multilingual content pipeline.",
    stack: ["Angular", "NgRx", "Firebase", "PWA"],
    featured: false,
  },
  {
    id: "andthis",
    client: "Old Mutual ANDTHIS",
    role: "Frontend Developer",
    year: "2021 — 2022",
    via: undefined,
    tag: "Consumer / Hybrid",
    problem: "Bring a mall shopping experience into a hybrid app for a major financial services brand.",
    contribution: "Frontend across the consumer app — flows, state, performance work on lower-end Android.",
    stack: ["Angular", "NgRx", "Ionic", "Capacitor"],
    featured: false,
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Specno — An Innovation Agency",
    where: "Cape Town, SA",
    when: "Nov 2021 — Present",
    bullets: [
      "Lead and contribute on flagship client projects: Raptor, Mirai, Momint, SBA Reading, ANDTHIS.",
      "Code review and standards across squads. Mentor junior engineers.",
      "Cross-functional with design, product, QA — sprint planning to release.",
    ],
  },
  {
    role: "Lead Frontend Developer",
    org: "Adept ICT",
    where: "Stellenbosch, SA",
    when: "Mar 2019 — Nov 2021",
    bullets: [
      "Led migration of internal dashboards from legacy Vaadin to Vue 2 + Composition API.",
      "Built client-facing dashboards on Vue, SASS, Bootstrap; backend touches in Java/Vert.x.",
      "Co-organised VueConfSA with Shailen Naidoo (cancelled due to COVID).",
    ],
  },
  {
    role: "Frontend Developer (concurrent)",
    org: "Longbeard",
    where: "Remote · Rome, IT",
    when: "Mar 2021 — Oct 2021",
    bullets: [
      "International client websites on React, Gatsby, GraphQL, WordPress.",
      "Investigation and resolution of complex frontend bugs across the portfolio.",
    ],
  },
];

export const testimonials = [
  {
    quote: "Marlon excels in delivering high-quality work and committing fully to tasks. His strong problem-solving skills and ability to generate advanced scalable solutions significantly contributed to Momint's success.",
    from: "CTO, Momint",
  },
  {
    quote: "The clients were very impressed with the work, saying the team was working hard, delivering well, and doing a great job.",
    from: "Product Owner, Specno · Trulyt",
  },
  {
    quote: "The client was incredibly happy with the product. The team went far above expectations, and the app looked, felt, and functioned well.",
    from: "Product Owner, Specno · iSolveRisk",
  },
  {
    quote: "Marlon went above and beyond supporting the client and product owner, helping bring Mirai back to a level of quality the team could be proud of.",
    from: "Product Owner, Specno · Mirai",
  },
  {
    quote: "Marlon stepped up on technical assessments and brought valuable insights.",
    from: "Senior Developer, Specno",
  },
  {
    quote: "The service provided was high quality, and we were happy with the results.",
    from: "Founder, Mirai",
  },
];
