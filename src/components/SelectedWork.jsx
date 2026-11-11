"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import LiveBrowserPreview from "./LiveBrowserPreview";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECTS = [
  {
    index: "01",
    title: "Freebirds Digest",
    italicSubtitle: "Modern Digital Publication",
    url: "https://www.freebirdsdigest.com/",
    category: "Digital Media & Newsroom Engine",
    status: "Live Production",
    description:
      "High-throughput editorial and digital media publication with sub-second page delivery, dynamic article categorization, and custom reader typography.",
    tech: ["Next.js", "Tailwind CSS", "Edge CDN", "Dynamic Routing"],
    accentGradient: "from-blue-950/60 via-midnight to-surface",
    metric: "99 Lighthouse · Sub-second Paint",
    featured: true,
  },
  {
    index: "02",
    title: "Redmun Digitech",
    italicSubtitle: "Growth & Creative Engineering",
    url: "https://www.redmundigitech.com/",
    category: "Full-Stack Creative Agency Platform",
    status: "Live Production",
    description:
      "Flagship creative digital agency platform built for high conversion, responsive interactive storytelling, and enterprise client onboarding.",
    tech: ["React", "Interactive UI", "GSAP Motion", "Tailwind"],
    accentGradient: "from-cyan-950/50 via-midnight to-surface",
    metric: "60 FPS · 0.3s FCP",
    featured: false,
  },
  {
    index: "03",
    title: "Central Barge",
    italicSubtitle: "Enterprise Maritime Infrastructure",
    url: "https://www.centralbarge.com/",
    category: "Industrial Logistics & Maritime",
    status: "Live Production",
    description:
      "Heavy industrial logistics platform delivering real-time fleet visibility, operational asset management, and rapid commercial inquiry routing.",
    tech: ["Next.js", "Enterprise APIs", "Responsive Grid", "Cloud VPS"],
    accentGradient: "from-amber-950/40 via-midnight to-surface",
    metric: "100% Uptime · Zero Layout Shift",
    featured: false,
  },
  {
    index: "04",
    title: "Astha Creatives",
    italicSubtitle: "Brand Identity & Digital Showcase",
    url: "https://www.asthacreatives.com/",
    category: "Bespoke Creative & Brand Studio",
    status: "Live Production",
    description:
      "Artisan digital design showcase with bespoke typography, grid geometry, and seamless interactive client presentation workflows.",
    tech: ["Creative UI", "Typography System", "Tailwind", "Vercel Edge"],
    accentGradient: "from-purple-950/40 via-midnight to-surface",
    metric: "Zero Bloat · 98+ Score",
    featured: true,
  },
  {
    index: "05",
    title: "Cell Repair Store",
    italicSubtitle: "Commercial Service Engine",
    url: "https://www.cellrepairstore.com/",
    category: "E-Commerce & Service Automation",
    status: "Live Production",
    description:
      "Commercial service booking and device repair catalog platform with automated quoting workflows, local SEO architecture, and instant customer intake.",
    tech: ["Next.js", "Booking Engine", "Local SEO", "High Concurrency"],
    accentGradient: "from-emerald-950/40 via-midnight to-surface",
    metric: "Fast Checkout · High Conversion",
    featured: false,
  },
  {
    index: "06",
    title: "Redmun",
    italicSubtitle: "Global Technology Solutions",
    url: "https://www.redmun.com/",
    category: "Enterprise Digital Architecture",
    status: "Live Production",
    description:
      "Global digital architecture and technology hub engineered with clean corporate structure, cloud scalability, and unified brand presence.",
    tech: ["Enterprise Architecture", "Cloud Scale", "Modern Web", "API Integration"],
    accentGradient: "from-slate-900/60 via-midnight to-surface",
    metric: "Sub-400ms TTFB · Enterprise Grade",
    featured: false,
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
            <span>Verified Production Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-paper font-medium tracking-tight mb-6">
            The thinking{" "}
            <em className="font-serif italic font-normal text-slate-300">
              in practice
            </em>
          </h2>
          <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            Direct live streams into real production platforms and bespoke digital ecosystems
            engineered from first principles. Hover to explore or click through to each live domain.
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
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {project.title}{" "}
                    <em className="font-serif italic font-normal text-slate-300 text-lg sm:text-xl">
                      — {project.italicSubtitle}
                    </em>
                  </h3>
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
      </div>
    </section>
  );
}
