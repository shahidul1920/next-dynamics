"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Quote, TrendingUp } from "lucide-react";
import LiveBrowserPreview from "./LiveBrowserPreview";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECTS = [
  {
    index: "01",
    title: "Freebirds Digest",
    italicSubtitle: "Digital Publication",
    url: "https://www.freebirdsdigest.com/",
    category: "Digital Media / Editorial Platform",
    status: "Live Production",
    description:
      "Full digital publication built with Next.js and dynamic routing. Optimized for sub-second page loads, clean reader typography, and fast editorial updates.",
    tech: ["Next.js", "Tailwind CSS", "Edge CDN", "Dynamic Routing"],
    accentGradient: "from-blue-950/60 via-midnight to-surface",
    metric: "99 Lighthouse / Sub-second Paint",
    featured: true,
  },
  {
    index: "02",
    title: "Redmun Digitech",
    italicSubtitle: "Agency Platform",
    url: "https://www.redmundigitech.com/",
    category: "Digital Agency / Web Platform",
    status: "Live Production",
    description:
      "Modern agency platform engineered for fast conversion, interactive storytelling, and client onboarding with zero template bloat.",
    tech: ["React", "Interactive UI", "GSAP Motion", "Tailwind"],
    accentGradient: "from-cyan-950/50 via-midnight to-surface",
    metric: "60 FPS / 0.3s FCP",
    featured: false,
  },
  {
    index: "03",
    title: "Central Barge",
    italicSubtitle: "Maritime Logistics",
    url: "https://www.centralbarge.com/",
    category: "Industrial Logistics / Web App",
    status: "Live Production",
    description:
      "Industrial logistics platform providing fleet visibility, operational asset management, and rapid commercial inquiry routing.",
    tech: ["Next.js", "Enterprise APIs", "Responsive Grid", "Cloud VPS"],
    accentGradient: "from-amber-950/40 via-midnight to-surface",
    metric: "100% Uptime / Zero Layout Shift",
    featured: false,
  },
  {
    index: "04",
    title: "Astha Creatives",
    italicSubtitle: "Design Studio",
    url: "https://www.asthacreatives.com/",
    category: "Design Studio / Portfolio",
    status: "Live Production",
    description:
      "Design portfolio site featuring custom typography systems, grid layouts, and interactive client presentation workflows.",
    tech: ["React", "Typography System", "Tailwind", "Vercel Edge"],
    accentGradient: "from-purple-950/40 via-midnight to-surface",
    metric: "98+ Performance / Lean Code",
    featured: true,
  },
  {
    index: "05",
    title: "Cell Repair Store",
    italicSubtitle: "Commercial Service",
    url: "https://www.cellrepairstore.com/",
    category: "E-Commerce / Booking Engine",
    status: "Live Production",
    description:
      "Repair service catalog and booking platform with instant quoting workflows, local search architecture, and customer intake.",
    tech: ["Next.js", "Booking Engine", "Local SEO", "High Concurrency"],
    accentGradient: "from-emerald-950/40 via-midnight to-surface",
    metric: "Fast Checkout / High Conversion",
    featured: false,
  },
  {
    index: "06",
    title: "Redmun",
    italicSubtitle: "Technology Hub",
    url: "https://www.redmun.com/",
    category: "Corporate Platform / Tech Hub",
    status: "Live Production",
    description:
      "Corporate technology platform engineered with modular architecture, cloud scalability, and unified brand infrastructure.",
    tech: ["React", "Cloud Scale", "Modern Web", "API Integration"],
    accentGradient: "from-slate-900/60 via-midnight to-surface",
    metric: "Sub-400ms TTFB / Fast Delivery",
    featured: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Before working with Next Dynamics, our old portfolio was sluggish and prospective clients kept dropping off before seeing our work. They rebuilt everything from scratch—now pages pop up instantly on phones and the animations feel incredibly smooth and premium. We started getting twice as many project inquiries within the first month.",
    author: "Redwanul Haque",
    role: "Founder",
    company: "Astha Creatives",
    url: "https://www.asthacreatives.com/",
    metric: "+114% Client Inquiries",
    impact: "Instant Load · Mobile Fast",
    initials: "RH",
  },
  {
    quote:
      "In commercial shipping, our clients need to check fleet availability quickly without running into broken forms or endless loading spinners. Next Dynamics delivered a site that feels instant, looks world-class, and works without a single hitch. Our commercial inquiries increased noticeably and the whole project was delivered right on schedule.",
    author: "Emiel de Barbanson",
    role: "Operations Director",
    company: "Central Barge",
    url: "https://www.centralbarge.com/",
    metric: "100% System Reliability",
    impact: "Instant Fleet Lookup · Zero Lag",
    initials: "EB",
  },
  {
    quote:
      "Our readers used to complain about articles taking forever to load on mobile. Next Dynamics completely revamped the experience—stories now open the split-second you tap them, and readers are actually sticking around to read multiple pieces. It looks beautiful, reads like a luxury print magazine, and just works.",
    author: "Evelyn Reed",
    role: "Managing Editor",
    company: "Freebirds Digest",
    url: "https://www.freebirdsdigest.com/",
    metric: "-38% Reader Drop-Off",
    impact: "Instant Reading · High Retention",
    initials: "ER",
  },
];

export default function SelectedWork() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".work-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>02 / SELECTED WORK</span>
          <span>LIVE PRODUCTION SHOWCASE</span>
        </div>

        {/* Header Block */}
        <div className="work-header max-w-3xl mb-16 sm:mb-20">
          <div className="badge-gold mb-4 inline-flex">
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Work we have{" "}
            <em className="font-serif italic font-normal text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]">
              built and shipped
            </em>
          </h2>
          <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            Real production websites and platforms running live in the real world.
            Each one was designed and developed from scratch for fast load times and reliable performance.
          </p>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.title}
              className={`project-card group relative rounded-2xl bg-surface border border-white/[0.08] hover:border-gold-blueprint/40 transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Top Media Presentation Mockup Area */}
              <div
                className={`relative w-full bg-gradient-to-br ${project.accentGradient} p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden border-b border-white/[0.06]`}
              >
                {/* Background grid */}
                <div className="absolute inset-0 blueprint-grid-faint opacity-50 pointer-events-none" />

                {/* Top status bar */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper-muted uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-blueprint" />
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-paper text-[11px]">
                    {project.status}
                  </span>
                </div>

                {/* ── Genuine Live Website Scaled Preview Frame ── */}
                <div className="relative z-10 my-2 w-full">
                  <LiveBrowserPreview
                    url={project.url}
                    title={project.title}
                    category={project.category}
                    isWide={project.featured}
                  />
                </div>

                {/* Bottom telemetry badge */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper-muted mt-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{project.metric}</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-paper group-hover:bg-gold-blueprint group-hover:text-midnight transition-colors duration-300"
                    title={`Open ${project.title} in new tab`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Lower Details Block */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-sm sm:text-base font-serif italic text-paper-muted">
                    / {project.italicSubtitle}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-paper-muted font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 rounded bg-white/[0.03] text-paper-muted border border-white/[0.06] group-hover:border-white/15 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Client Proof / Executive Endorsements ── */}
        <div className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-blueprint uppercase tracking-widest mb-3">
                <Quote className="w-3.5 h-3.5" />
                <span>Executive Endorsements · Measurable Outcomes</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Tested in production.{" "}
                <em className="font-serif italic font-normal text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]">
                  Validated by founders.
                </em>
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-paper-muted font-light leading-relaxed">
              When brands invest in a bespoke digital platform, speed and conversion must be mathematically verified. Here is how our architecture performs in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.company}
                className="group relative rounded-2xl bg-surface/50 hover:bg-surface border border-white/[0.08] hover:border-gold-blueprint/30 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Metric Pill */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.06]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>
                    <span className="text-[11px] font-mono text-paper-muted">
                      {item.impact}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base text-paper/90 font-light leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-paper">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-paper flex items-center gap-2">
                        {item.author}
                      </div>
                      <div className="text-xs text-paper-muted font-light">
                        {item.role}, <span className="text-slate-300">{item.company}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-gold-blueprint hover:text-midnight flex items-center justify-center text-paper-muted transition-colors"
                    title={`Visit ${item.company}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
