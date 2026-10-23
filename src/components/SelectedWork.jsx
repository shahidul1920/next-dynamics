"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Cpu, Layers, Globe2, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECTS = [
  {
    index: "01",
    title: "Tesla",
    italicSubtitle: "3D Digital Showroom",
    category: "WebGL / Interactive 3D",
    status: "Independent Concept",
    description:
      "A real-time WebGL vehicle configurator engineered with Three.js shaders, custom PBR materials, and sub-400ms time-to-interactive.",
    tech: ["Three.js", "WebGL", "GSAP Physics", "Next.js"],
    accentGradient: "from-blue-900/40 via-midnight to-surface",
    metric: "60 FPS · 0.28s FCP",
    previewAspect: "aspect-[16/10]",
  },
  {
    index: "02",
    title: "Apex 1688",
    italicSubtitle: "Autonomous Sourcing Engine",
    category: "Enterprise API / Supply Chain",
    status: "Production Platform",
    description:
      "High-throughput enterprise integration automating multi-currency 1688 product sourcing, live warehouse sync, and automated customs documentation.",
    tech: ["1688 API", "Next.js 15", "PostgreSQL", "Edge Pipelines"],
    accentGradient: "from-cyan-950/40 via-midnight to-surface",
    metric: "120K SKUs · Real-time Sync",
    previewAspect: "aspect-[4/3]",
  },
  {
    index: "03",
    title: "Vela Haute Horlogerie",
    italicSubtitle: "Decoupled Flagship",
    category: "Headless CMS / Luxury Commerce",
    status: "Client Flagship",
    description:
      "Bespoke luxury horology showcase. Headless WordPress with WPGraphQL feeding a blazing Next.js client with inertia-driven kinetic typography.",
    tech: ["WPGraphQL", "Tailwind", "GSAP Inertia", "Vercel Edge"],
    accentGradient: "from-amber-950/30 via-midnight to-surface",
    metric: "99 Lighthouse · Zero Bloat",
    previewAspect: "aspect-[4/3]",
  },
  {
    index: "04",
    title: "Peleus Intelligence",
    italicSubtitle: "Applied AI Workspace",
    category: "AI & Autonomous Workflows",
    status: "Enterprise Workspace",
    description:
      "Custom conversational AI copilot and agentic task router designed around strict corporate privacy, document embedding, and human review.",
    tech: ["Vercel AI SDK", "LangChain", "Vector Embeddings", "Streaming"],
    accentGradient: "from-emerald-950/30 via-midnight to-surface",
    metric: "< 180ms TTFB · Streamed LLM",
    previewAspect: "aspect-[16/10]",
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
          <span>03 / SELECTED WORK</span>
          <span>IMAGINATION, PUT TO WORK</span>
        </div>

        {/* Header Block */}
        <div className="work-header max-w-3xl mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-paper font-medium tracking-tight mb-6">
            The thinking{" "}
            <em className="font-serif italic font-normal text-slate-300">
              in practice
            </em>
          </h2>
          <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            Step inside the showrooms, sourcing pipelines, and digital interfaces we
            design and build. See the platforms and the engineering decisions behind
            them.
          </p>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.title}
              className={`project-card group relative rounded-2xl bg-surface border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                idx === 0 || idx === 3 ? "md:col-span-2" : ""
              }`}
            >
              {/* Top Media Presentation Mockup */}
              <div
                className={`relative w-full ${project.previewAspect} bg-gradient-to-br ${project.accentGradient} p-6 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden border-b border-white/[0.06]`}
              >
                {/* Background grid */}
                <div className="absolute inset-0 blueprint-grid-faint opacity-50 pointer-events-none" />

                {/* Top status bar */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper-muted uppercase tracking-wider">
                  <span>{project.category}</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-paper text-[11px]">
                    {project.status}
                  </span>
                </div>

                {/* Center Graphic Frame */}
                <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white/90 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {project.title}
                  </div>
                  <div className="font-serif italic text-base sm:text-2xl text-slate-300 mt-2 font-light">
                    {project.italicSubtitle}
                  </div>
                </div>

                {/* Bottom telemetry badge */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                    <span>{project.metric}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-paper group-hover:bg-paper group-hover:text-midnight transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Lower Details Block */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-sm sm:text-base text-paper-muted font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 rounded bg-white/[0.03] text-paper-muted border border-white/[0.06]"
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
