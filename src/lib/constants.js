// ── Site-wide copy, pricing data, and service descriptions ──

export const SITE = {
  name: "Next Dynamics",
  domain: "NextDynamics.tech",
  tagline: "Creative Engineering Studio",
  email: "hello@nextdynamics.tech",
  whatsapp: "+880 1879-539832",
  whatsappUrl: "https://wa.me/8801879539832",
  hero: {
    eyebrow: "CREATIVE FRONTEND STUDIO",
    headlineTop: "We Engineer Digital",
    headlineBottom: "Performance.",
    description:
      "High-converting SaaS marketing websites, headless WordPress architectures, and elevated e-commerce frontends. Sub-second speed and fluid GSAP motion engineered from first principles.",
    telemetry: [
      { label: "Core Web Vitals", value: "99" },
      { label: "FPS", value: "60" },
      { label: "TTFB", value: "< 400ms" },
    ],
  },
};

export const ANTI_COMMODITY = {
  heading: "Clean Engineering Standards",
  points: [
    "Zero clunky page builders. Zero plugin bloat. Zero template lock-in.",
    "Keep your familiar WordPress dashboard with a blazing Next.js frontend.",
    "Sub-second load times. 98+ Lighthouse. 60 FPS motion.",
    "Your digital presence as an engine for real customer conversion.",
  ],
  eliminated: [
    "Elementor & Divi Bloat",
    "Slow WordPress Themes",
    "Generic Shopify Templates",
    "Wix / Squarespace Lock-in",
  ],
};

export const SPECIALIZATIONS = [
  {
    icon: "Layers",
    title: "SaaS Marketing Websites & Product Showcases",
    description:
      "High-converting marketing sites, interactive product tours, and pricing matrices designed to turn visitors into active software users.",
  },
  {
    icon: "Database",
    title: "Headless WordPress & Decoupled CMS",
    description:
      "Keep your WordPress admin dashboard and editorial workflows, but replace slow PHP themes with a lightning-fast Next.js frontend via WPGraphQL.",
  },
  {
    icon: "ShoppingBag",
    title: "Premium Brand Flagships & E-Commerce",
    description:
      "Bespoke digital storefronts, custom Shopify headless frontends, editorial product showcases, and high-conversion checkout flows.",
  },
  {
    icon: "Sparkles",
    title: "Creative GSAP Motion & Micro-Interactions",
    description:
      "Physics-driven animation timelines, kinetic typography, smooth scrolling, and 60 FPS performance without layout shifts.",
  },
  {
    icon: "Gauge",
    title: "Performance Engineering & SEO",
    description:
      "Sub-second page transitions, 99+ Lighthouse scores, edge caching, structured SEO schema, and GA4 conversion tracking.",
  },
  {
    icon: "Shield",
    title: "Design Systems & Component Architecture",
    description:
      "Clean React 19 and Tailwind CSS design tokens, reusable UI component libraries, and strict brand consistency across all viewports.",
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
    name: "Signature Platform",
    tier: "Tier 1",
    price: "$6,000 to $12,000",
    priceNum: 6000,
    target:
      "Modern marketing websites, product launchpads, and high-impact digital presences engineered for conversion and speed.",
    timeline: "3 to 5 weeks",
    deliverables: [
      "Custom 5 to 8 page marketing architecture",
      "Interactive product tour & animated feature previews",
      "High-conversion pricing table & comparison matrix",
      "Fluid GSAP motion & micro-interactions",
      "Sub-second performance (Lighthouse 95+)",
      "Technical SEO & analytics tracking (GA4)",
    ],
    accent: "sapphire",
    featured: false,
  },
  {
    name: "Headless Platform",
    tier: "Tier 2",
    price: "$10,000 to $20,000",
    priceNum: 10000,
    target:
      "Dynamic platforms and headless CMS migrations (Headless WordPress, Sanity) delivering instant page loads with zero plugin bloat.",
    timeline: "5 to 7 weeks",
    deliverables: [
      "Headless CMS setup via WPGraphQL or Sanity",
      "Ultra-fast Next.js 15 decoupled frontend",
      "Familiar admin editing workflows with zero frontend bloat",
      "Instant editorial preview environments & live draft sync",
      "Dynamic routing & edge caching architecture",
      "Automated structured data (Schema) & performance SLA",
    ],
    accent: "gradient",
    featured: true,
  },
  {
    name: "Digital Flagship",
    tier: "Tier 3",
    price: "$18,000 to $35,000+",
    priceNum: 18000,
    target:
      "Premium brand presences, custom e-commerce storefronts, and immersive digital flagships built to lead their category.",
    timeline: "6 to 10 weeks",
    deliverables: [
      "Custom e-commerce frontend & editorial storefront",
      "Tailored brand typography & visual storytelling layouts",
      "Fluid cart drawer & friction-free checkout integrations",
      "Interactive micro-details & 60 FPS GSAP motion",
      "Multi-currency / regional localization architecture",
      "Full repository handover & dedicated staging SLA",
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
      "Continuous UI/UX refinements, GSAP motion enhancements, monthly Core Web Vitals audits, and priority SLA.",
  },
  {
    name: "Dedicated Frontend & Growth Retainer",
    price: "$5,000/month",
    description:
      "Dedicated bi-weekly sprint capacity, custom landing pages, conversion rate optimization, and ongoing architectural improvements.",
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
  { label: "Selected Work", href: "#work" },
  { label: "Proof of Craft", href: "#proof" },
  { label: "The Practice", href: "#practice" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];
