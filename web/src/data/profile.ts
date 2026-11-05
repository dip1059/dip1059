// Single source of truth for all portfolio content.

export const profile = {
  name: "Dipankar Saha",
  title: "Senior Software Engineer, Backend & Distributed Systems",
  location: "Khulna, Bangladesh",
  email: "dipankarsaha1059@gmail.com",
  links: {
    github: "https://github.com/dip1059",
    linkedin: "https://www.linkedin.com/in/dip1059",
  },
  headline: "I build the backend systems that move money.",
  summary:
    "8+ years architecting secure, high-throughput platforms for crypto exchanges, wallets, payments and SaaS. " +
    "I lead a backend team at Itech Soft Solutions and work directly with 10+ international clients, " +
    "from first requirements to production support.",
};

export const facts = [
  { value: "8+", label: "years in production backend" },
  { value: "10+", label: "international clients" },
  { value: "5", label: "blockchains integrated" },
];

export type Project = {
  name: string;
  kind: string;
  url?: string;
  period: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status?: string;
};

export const projects: Project[] = [
  {
    name: "TradiumPro",
    kind: "White-label crypto exchange",
    url: "https://tradiumpro.com",
    period: "2022 – present",
    role: "Principal backend engineer",
    summary: "A complete exchange product: spot, futures, P2P and staking, sold and customized for exchange operators worldwide.",
    highlights: [
      "Low-latency order matching for spot and perpetual futures",
      "Multi-chain wallets for BTC, EVM, TRON, Solana and Monero with KMS-backed keys",
      "Hybrid deployment, from a single monolith to microservices, sized to each client's budget",
      "Delivered for multiple international clients, including Xoibit",
    ],
    stack: ["NestJS", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "AWS"],
  },
  {
    name: "NexVault",
    kind: "Non-custodial multi-chain wallet",
    url: "https://nexvault.finance",
    period: "2026 – present",
    role: "Sole architect",
    summary: "A self-custody wallet for web, mobile and browser extension, supporting 7 EVM chains.",
    highlights: [
      "MPC key security; keys never leave the user's device",
      "Cross-chain swaps and automated on-chain orders through custom smart contracts",
    ],
    stack: ["NestJS", "Next.js", "React Native", "Solidity", "PostgreSQL", "Redis"],
  },
  {
    name: "VoxaSea",
    kind: "AI voice receptionist SaaS",
    url: "https://voxasea.com",
    period: "2026 – present",
    role: "Lead backend engineer",
    status: "In development",
    summary: "AI voice agents that answer calls, book appointments and recover lost revenue for clinics.",
    highlights: [
      "Billing, multi-tenant administration and security architecture",
      "Directed the response to a security incident",
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "BullMQ", "Stripe"],
  },
  {
    name: "Feedlio",
    kind: "Social media management SaaS",
    url: "https://feedlio.io",
    period: "2024, 2026",
    role: "Backend architect",
    summary: "Scheduling, content and analytics for social media teams, on a 13-service microservice platform.",
    highlights: ["Shared service framework and queue-driven processing behind a GraphQL gateway"],
    stack: ["NestJS", "GraphQL", "PostgreSQL", "Redis"],
  },
];

export const earlier = [
  { name: "Collpay", period: "2020 – 2021", text: "Crypto payment gateway; lead backend and merchant SDKs in Node.js, Go, PHP and Python." },
  { name: "NFT Marketplace", period: "2022 – 2024", text: "Lead backend for minting, trading and smart contract integration." },
  { name: "TradexPro, Bidstore, Ebuy, Gold Store, Wedeli, Medicare", period: "2019 – 2025", text: "Exchange, e-commerce, delivery and healthcare platforms in Go, Laravel and Node.js." },
];

export const experience = [
  {
    role: "Senior Software Engineer (Backend)",
    company: "Itech Soft Solutions",
    period: "Dec 2018 – present",
    duration: "~8 yrs",
    points: [
      "Lead a 3–6 member engineering team: sprint planning, task allocation, code review and mentoring",
      "Technical point of contact for 10+ international clients, from requirements to post-launch support",
      "Define architecture, Git workflow, security and release standards across company products",
    ],
  },
  {
    role: "Software Engineer",
    company: "Automation Services Ltd",
    period: "Feb 2018 – Nov 2018",
    duration: "10 mo",
    points: ["Oracle PL/SQL reporting and system support for the Bangladesh Power Development Board"],
  },
];

export const skills: [string, string[]][] = [
  ["Languages", ["TypeScript", "JavaScript", "Go", "PHP", "Python", "Solidity", "SQL"]],
  ["Backend", ["NestJS", "Node.js", "Laravel", "Gin", "GraphQL", "REST", "gRPC", "WebSockets"]],
  ["Data", ["PostgreSQL", "MySQL", "MongoDB", "Redis", "BullMQ", "Prisma"]],
  ["Blockchain", ["Bitcoin", "EVM", "TRON", "Solana", "Monero", "Smart contracts", "Foundry"]],
  ["Cloud & DevOps", ["AWS", "Docker", "Nginx", "CI/CD", "Cloudflare", "Grafana"]],
  ["Linux & systems", ["Ubuntu Server", "Bash", "systemd", "Networking", "Performance tuning"]],
  ["Security", ["OAuth 2.0", "JWT", "RBAC", "MFA", "AES-256", "AWS KMS", "CrowdSec"]],
  ["AI", ["OpenAI", "Voice AI agents", "RAG", "Vector search"]],
  ["Testing", ["Jest", "Vitest", "Playwright", "Selenium", "JMeter"]],
  ["Ways of working", ["Trello", "ClickUp", "Sprint planning", "Estimation", "Git workflows"]],
];

export const openSource = [
  { name: "@dip1059/safe-math-js", url: "https://github.com/dip1059/safe-math-js", text: "Floating-point-safe math, so 0.1 + 0.2 is 0.3." },
  { name: "@dip1059/bitcoin", url: "https://github.com/dip1059/bitcoin", text: "JSON-RPC client for bitcoind and shared nodes." },
  { name: "@dip1059/bitcoinjs-lib", url: "https://github.com/dip1059/bitcoinjs-lib", text: "bitcoinjs-lib with more BTC-based networks." },
];
