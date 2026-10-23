// ── Site-wide copy, pricing data, and service descriptions ──

export const SITE = {
  name: "Next Dynamics",
  domain: "NextDynamics.tech",
  tagline: "Ultra-Premium Creative Engineering Studio",
  email: "hello@nextdynamics.tech",
  hero: {
    eyebrow: "CREATIVE ENGINEERING STUDIO",
    headlineTop: "We Engineer Digital",
    headlineBottom: "Dominance.",
    description:
      "Bespoke web platforms for visionary brands. Sub-second speed. Jaw-dropping motion. Zero commodity tools. Every pixel engineered from first principles.",
    telemetry: [
      { label: "Core Web Vitals", value: "99" },
      { label: "FPS", value: "60" },
      { label: "TTFB", value: "< 400ms" },
    ],
  },
};

export const ANTI_COMMODITY = {
  heading: "The Anti-Commodity Standard",
  points: [
    "Zero page builders. Zero plugin bloat. Zero template lock-in.",
    "Every pixel engineered from first principles.",
    "Sub-second load times. 98+ Lighthouse. 60 FPS motion.",
    "Your digital presence as a strategic weapon, not a checkbox.",
  ],
  eliminated: [
    "WordPress Themes",
    "Elementor / Divi",
    "Wix / Squarespace",
    "Generic Templates",
  ],
};

export const SPECIALIZATIONS = [
  {
    icon: "Layers",
    title: "Creative Web Experiences & GSAP Motion",
    description:
      "Bespoke Next.js experiences with physics-driven GSAP animations, ScrollTrigger narratives, and WebGL canvas interactions.",
  },
  {
    icon: "Database",
    title: "Headless CMS & Decoupled Architecture",
    description:
      "Headless WordPress (WPGraphQL), Sanity, or Strapi paired with blazing Next.js frontends — editorial ease, zero bloat.",
  },
  {
    icon: "Container",
    title: "Enterprise Platforms & API Automation",
    description:
      "Complex custom platforms, 1688 API sourcing pipelines, e-commerce engines, and automated logistics workflows.",
  },
  {
    icon: "BrainCircuit",
    title: "Applied AI & Autonomous Agents",
    description:
      "Custom LLM integrations, Vercel AI SDK, LangChain, streaming interfaces, and conversational AI assistants.",
  },
  {
    icon: "Gauge",
    title: "Performance Engineering & SEO",
    description:
      "Sub-second optimization, Lighthouse 98+ scores, Core Web Vitals mastery, GA4, and technical SEO architecture.",
  },
  {
    icon: "Shield",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Azure VPS, Vercel Enterprise, Docker containerization, GitHub Actions CI/CD, and Linux-optimized environments.",
  },
];

export const PROOF_OF_CRAFT = {
  generic: {
    label: "Generic Page Builder",
    loadTime: "4.2s",
    bundleSize: "2.4 MB",
    lighthouse: 38,
    fps: 12,
  },
  nextDynamics: {
    label: "Next Dynamics Engine",
    loadTime: "0.3s",
    bundleSize: "187 KB",
    lighthouse: 99,
    fps: 60,
  },
};

export const PRICING_TIERS = [
  {
    name: "Signature Digital Experience",
    tier: "Tier 1",
    price: "$6,000 – $12,000",
    priceNum: 6000,
    target:
      "High-growth startups, luxury brands, and flagship product launches.",
    timeline: "3–5 weeks",
    deliverables: [
      "Bespoke 5–8 page architecture",
      "Custom GSAP motion narrative & micro-interactions",
      "Responsive 12-column grid system",
      "Sub-second performance (Lighthouse 95+)",
      "Headless content setup & SEO optimization",
      "Analytics configuration (GA4)",
    ],
    accent: "sapphire",
    featured: false,
  },
  {
    name: "Full-Stack Growth Platform",
    tier: "Tier 2",
    price: "$15,000 – $30,000",
    priceNum: 15000,
    target:
      "Scaling digital brands, modern publications, and SaaS companies.",
    timeline: "6–8 weeks",
    deliverables: [
      "Complete full-stack Next.js web application",
      "Headless CMS integration (WPGraphQL/Sanity)",
      "Dynamic routing & advanced filtering",
      "Custom authentication & user dashboards",
      "Third-party API pipelines",
      "Interactive motion design & enterprise security",
    ],
    accent: "gradient",
    featured: true,
  },
  {
    name: "Enterprise Bespoke Platform",
    tier: "Tier 3",
    price: "$40,000 – $80,000+",
    priceNum: 40000,
    target:
      "Large enterprises, global supply chain operators, and multi-sided platforms.",
    timeline: "10–14+ weeks",
    deliverables: [
      "End-to-end custom platform engineering",
      "Automated sourcing & inventory APIs (1688 engine)",
      "Custom warehouse/shipping management",
      "High-volume database architecture (PostgreSQL/MongoDB)",
      "Automated CI/CD deployment & dedicated SLA",
      "Full documentation & team training",
    ],
    accent: "cyan",
    featured: false,
  },
];

export const RETAINERS = [
  {
    name: "Performance & Evolution Retainer",
    price: "$2,500/month",
    description:
      "Continuous UI/UX refinements, GSAP motion enhancements, monthly security & performance audits, priority support.",
  },
  {
    name: "Dedicated Full-Stack Engineering Retainer",
    price: "$5,000/month",
    description:
      "Dedicated bi-weekly sprint capacity, custom feature development, API maintenance, performance monitoring, and architecture advisory.",
  },
];

export const PROCESS_PHASES = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description:
      "Define goals, technical requirements, content models, and performance KPIs.",
    icon: "Search",
  },
  {
    number: "02",
    title: "UI/UX & Interactive Prototyping",
    description:
      "Component libraries, layout grids, and motion prototypes in Figma.",
    icon: "Figma",
  },
  {
    number: "03",
    title: "Bespoke Engineering & Motion",
    description:
      "Full-stack Next.js + Tailwind + GSAP implementation with physics-driven animation.",
    icon: "Code",
  },
  {
    number: "04",
    title: "QA, Security & Performance Audit",
    description:
      "Cross-device testing, accessibility, Lighthouse 98+ tuning.",
    icon: "ShieldCheck",
  },
  {
    number: "05",
    title: "White-Glove Deployment & Training",
    description:
      "DNS cutover, SSL, asset handover, and team training sessions.",
    icon: "Rocket",
  },
];

export const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Proof of Craft", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
