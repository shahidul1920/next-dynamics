"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CAPABILITIES = [
  {
    number: "01",
    title: "Applied AI & Automation",
    lead: "Put AI to work on defined engineering workflows. We design autonomous assistants, API routers, and document ingestion pipelines designed around your existing data and human-in-the-loop review.",
    tags: ["Autonomous Workflows", "Vercel AI SDK", "Custom LLM Integrations", "Human-in-the-Loop"],
    studyLabel: "FROM INPUT TO ACTION",
    studyCaption: "Connected tools. A human architect in control.",
    details: [
      "Task-specific autonomous agent architectures",
      "Streaming RAG with vector semantic databases",
      "Model-agnostic routing (Claude, OpenAI, Local models)",
      "Strict data privacy and corporate isolation protocols",
    ],
  },
  {
    number: "02",
    title: "Immersive Digital Experiences",
    lead: "Build a brand platform people explore and a product they rely on. We unite creative art direction, WebGL interactive 3D, and butter-smooth GSAP motion into one seamless full-stack process.",
    tags: ["Next.js 15", "Physics GSAP", "Three.js / WebGL", "Sub-second CWV"],
    studyLabel: "EVERY SCREEN. ONE CONTINUUM.",
    studyCaption: "Engineered to move people. Built to be used.",
    details: [
      "Custom WebGL canvas and procedural shaders",
      "Physics-based kinetic typography and scroll narratives",
      "Zero layout shifts (0 CLS) and sub-400ms page handoffs",
      "Flawless responsive architecture across mobile and ultra-wide screens",
    ],
  },
  {
    number: "03",
    title: "Connected Commerce & 1688 Pipelines",
    lead: "Make a high-volume storefront work as smoothly as it looks. Sourcing automation, 1688 factory APIs, real-time inventory synchrony, and global checkout connect seamlessly into one unified backend.",
    tags: ["1688 Sourcing Engine", "Headless Commerce", "Inventory Sync", "Logistics Automation"],
    studyLabel: "FROM FACTORY TO DOORSTEP",
    studyCaption: "Complete supply chain visibility, end to end.",
    details: [
      "Direct 1688 API sourcing pipelines & automated currency conversion",
      "Custom warehouse and package tracking automation",
      "Multi-vendor architecture with high-concurrency databases",
      "Zero-latency checkout integrations",
    ],
  },
  {
    number: "04",
    title: "Headless CMS & Decoupled Architecture",
    lead: "Editorial independence without template bloat. We pair Headless WordPress (WPGraphQL), Sanity, or Strapi with ultra-fast Next.js frontends, giving marketing teams total control while preserving 99+ Lighthouse performance.",
    tags: ["Headless WordPress", "WPGraphQL", "Sanity CMS", "Incremental Static Regeneration"],
    studyLabel: "EDITORIAL SPEED. ZERO BLOAT.",
    studyCaption: "Clean editorial workflows, sub-second visitor delivery.",
    details: [
      "Decoupled frontend eliminating slow WordPress plugins",
      "Instant page preview environments for editorial teams",
      "Structured SEO schema and open graph automation",
      "Enterprise security isolating database from the public web",
    ],
  },
];

export default function ThePractice() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".practice-header",
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
    },
    { scope: containerRef }
  );

  return (
    <section
      id="practice"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>04 / THE PRACTICE</span>
          <span>THINKING + MAKING</span>
        </div>

        {/* Practice Header */}
        <div className="practice-header flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-paper font-medium tracking-tight mb-4 leading-[1.08]">
              Useful{" "}
              <em className="font-serif italic font-normal text-slate-300">
                by design
              </em>
            </h2>
          </div>
          <div className="max-w-md text-sm text-paper-muted font-light leading-relaxed">
            <p>
              From a brand’s first impression to the platform people use every single
              day. Designed from first principles, engineered by one team.
            </p>
          </div>
        </div>

        {/* Interactive Capability Accordion */}
        <div className="space-y-4 mb-24">
          {CAPABILITIES.map((cap, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={cap.number}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-surface border-white/20 shadow-xl"
                    : "bg-surface/40 border-white/[0.06] hover:border-white/10"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-7 px-8 sm:px-10 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-paper-muted">
                      {cap.number}
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-paper tracking-tight">
                      {cap.title}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-paper transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-8 sm:px-10 pb-10 pt-2 border-t border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-base text-paper-muted font-light leading-relaxed">
                        {cap.lead}
                      </p>

                      {/* Detail Checklist */}
                      <div className="space-y-2.5 pt-2">
                        {cap.details.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-paper/90">
                            <CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-paper-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Graphic Study Frame */}
                    <div className="lg:col-span-5 rounded-xl bg-midnight/80 border border-white/10 p-6 flex flex-col justify-between">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-paper-muted flex items-center justify-between pb-4 border-b border-white/[0.06]">
                        <span>{cap.studyLabel}</span>
                        <span>{cap.number} / STUDY</span>
                      </div>
                      <div className="py-8 text-center my-auto">
                        <div className="text-2xl font-serif italic text-slate-300">
                          &ldquo;{cap.studyCaption}&rdquo;
                        </div>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-between text-xs font-mono text-paper-muted hover:text-electric-cyan pt-4 border-t border-white/[0.06] transition-colors"
                      >
                        <span>Request Architecture Teardown</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Working Note Protocol (Apricode 4-step sequence) */}
        <div className="rounded-2xl bg-surface/50 border border-white/[0.08] p-8 sm:p-12">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-medium text-paper mb-2">
              From first idea{" "}
              <em className="font-serif italic font-normal text-slate-300">
                to the details
              </em>
            </h3>
            <p className="text-xs font-mono text-paper-muted uppercase tracking-wider">
              A transparent engineering progression
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block font-mono text-xs text-electric-cyan tracking-wider mb-2">
                01 / DISCOVER
              </span>
              <p className="text-sm font-medium text-paper">
                Understand the requirements & architecture
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block font-mono text-xs text-electric-cyan tracking-wider mb-2">
                02 / MAKE
              </span>
              <p className="text-sm font-medium text-paper">
                Build a focused prototype with real code
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block font-mono text-xs text-electric-cyan tracking-wider mb-2">
                03 / REFINE
              </span>
              <p className="text-sm font-medium text-paper">
                Tune motion, security & Lighthouse 99+
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block font-mono text-xs text-electric-cyan tracking-wider mb-2">
                04 / EVOLVE
              </span>
              <p className="text-sm font-medium text-paper">
                Launch with 14-day SLA & ongoing sprints
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
