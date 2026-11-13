// ── Site-wide copy, pricing data, and service descriptions ──

export const SITE = {
  name: "Next Dynamics",
  domain: "NextDynamics.tech",
  tagline: "Creative Engineering Studio",
  email: "hello@nextdynamics.tech",
  whatsapp: "+880 1879-539832",
  whatsappUrl: "https://wa.me/8801879539832",
  linkedin: "https://www.linkedin.com/company/nextdynamics-tech/",
  linkedinHandle: "nextdynamics-tech",
  hero: {
    eyebrow: "CREATIVE FRONTEND STUDIO",
    headlineTop: "High-Performance Web Architecture",
    headlineBottom: "For Brands That Can't Afford To Be Slow.",
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
    name: "The Launchpad",
    tier: "Tier 1",
    price: "Starting from $499",
    priceNum: 499,
    target:
      "A lightning-fast, high-performance landing page custom-engineered with Next.js and subtle motion. Perfect for validating a new idea or replacing an outdated site fast.",
    timeline: "48 to 72 hours",
    deliverables: [
      "Custom-engineered Next.js architecture (zero templates)",
      "Minimal GSAP micro-animations & smooth interactions",
      "Brand color, logo, and copy integration",
      "Sub-second Lighthouse 95+ performance",
      "Mobile-responsive standard layout",
      "Fast 48-72 hour deployment",
    ],
    accent: "sapphire",
    featured: false,
    cta: "Start Project",
  },
  {
    name: "The Growth Engine",
    tier: "Tier 2",
    price: "$1,500 to $3,500",
    priceNum: 1500,
    target:
      "A custom-designed, CMS-powered platform built to convert traffic and scale with your marketing efforts.",
    timeline: "2 to 3 weeks",
    deliverables: [
      "Custom design for Hero and key feature blocks",
      "Headless CMS setup (WPGraphQL or Sanity)",
      "Familiar admin editing workflows",
      "Standard fluid GSAP scroll animations",
      "Technical SEO & analytics tracking (GA4)",
    ],
    accent: "gradient",
    featured: true,
    cta: "Start Project",
  },
  {
    name: "Digital Flagship",
    tier: "Tier 3",
    price: "Custom / Let's Talk",
    priceNum: 5000,
    target:
      "Premium brand presences, custom e-commerce storefronts, and immersive digital platforms engineered from first principles.",
    timeline: "6+ weeks",
    deliverables: [
      "Bespoke engineering and UI/UX design from scratch",
      "Custom E-commerce / Headless Shopify",
      "Complex interactive 3D & advanced GSAP motion",
      "Multi-currency / regional localization architecture",
      "Dedicated performance SLA and full code ownership",
    ],
    accent: "cyan",
    featured: false,
    cta: "Book Discovery Call",
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
