"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plus, Minus, ArrowUpRight, CheckCircle2, Compass, Code2, Gauge, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CAPABILITIES = [
  {
    number: "01",
    title: "SaaS Marketing & Conversion Flagships",
    lead: "Turn software visitors into paying users and confident investors. We engineer high-converting marketing sites for SaaS founders who already have a working product, featuring interactive feature tours, animated UI previews, and clear pricing architecture.",
    tags: ["SaaS Marketing", "Interactive Product Tours", "Next.js 15", "Conversion Architecture"],
    studyLabel: "FROM VISITOR TO CUSTOMER",
    studyCaption: "Clear narrative, interactive product demo, seamless signup funnel.",
    details: [
      "Interactive product feature breakdowns and animated UI demos",
      "High-converting pricing tiers and interactive comparison tables",
      "Sub-400ms page delivery with zero cumulative layout shift",
      "Clean CRM, analytics (GA4), and product waitlist integrations",
    ],
  },
  {
    number: "02",
    title: "Headless WordPress & Decoupled CMS",
    lead: "Keep the WordPress editor your team already knows, but ditch slow PHP themes and plugin lag. We connect your WordPress backend to an ultra-fast Next.js frontend via WPGraphQL for instant page delivery with zero plugin bloat.",
    tags: ["Headless WordPress", "WPGraphQL", "Zero Plugin Bloat", "99 Lighthouse"],
    studyLabel: "FAMILIAR ADMIN. INSTANT FRONTEND.",
    studyCaption: "Editorial team stays in WordPress; visitors experience sub-second Next.js speed.",
    details: [
      "Decoupled frontend eliminating slow page builders and bloated plugins",
      "Keep existing WordPress post editor, categories, and media library",
      "Instant editorial preview environments and automatic cache invalidation",
      "Enterprise-grade security separating your WordPress database from public traffic",
    ],
  },
  {
    number: "03",
    title: "Premium Brand Flagships & E-Commerce",
    lead: "Elevate your brand beyond generic templates. We engineer bespoke digital storefronts and luxury brand flagships with editorial typography, fluid micro-interactions, and frictionless checkout integrations.",
    tags: ["Custom E-Commerce", "Brand Storytelling", "Shopify Headless", "Fluid Cart"],
    studyLabel: "PRESTIGE TO PURCHASE",
    studyCaption: "Elevated digital identity with high-conversion checkout.",
    details: [
      "Bespoke layout design tailored to high-end brand identity",
      "Custom cart drawer, instant search, and headless checkout flows",
      "Optimized high-resolution media delivery with progressive loading",
      "Mobile-first responsive grids tuned for luxury product discovery",
    ],
  },
  {
    number: "04",
    title: "Interactive GSAP Motion & 60 FPS Performance",
    lead: "Engage visitors through intentional, physics-based motion. We craft kinetic typography, scroll-linked storytelling timelines, and interactive visual micro-details running at a consistent 60 frames per second.",
    tags: ["Physics GSAP", "Kinetic Typography", "60 FPS Motion", "Sub-second CWV"],
    studyLabel: "BUILT TO BE REMEMBERED",
    studyCaption: "Fluid motion that guides attention without sacrificing speed.",
    details: [
      "ScrollTrigger timelines with buttery smooth GPU hardware acceleration",
      "Zero layout shifts (0 CLS) ensuring top search ranking signals",
      "Lightweight JavaScript bundles that never bottleneck the main thread",
      "Accessible, responsive motion with prefers-reduced-motion support",
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
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-white font-semibold tracking-tight mb-4 leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Useful{" "}
              <em className="font-serif italic font-normal text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]">
                by design
              </em>
            </h2>
          </div>
          <div className="max-w-md text-sm text-paper-muted font-light leading-relaxed">
            <p>
              From SaaS marketing flagships to headless WordPress architectures and premium brand storefronts.
              Engineered with clean code, zero template bloat, and sub-second performance.
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
                  className="w-full py-5 sm:py-7 px-5 sm:px-10 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-paper-muted">
                      {cap.number}
                    </span>
                    <span className="text-lg sm:text-2xl lg:text-3xl font-medium text-paper tracking-tight">
                      {cap.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-paper transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-5 sm:px-10 pb-8 sm:pb-10 pt-2 border-t border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
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

        {/* ── Seamless Spacing Transition: Capabilities into Protocol ── */}
        <div className="pt-24 sm:pt-32 border-t border-white/[0.08]">
          {/* Header with High Negative Space */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 mb-16 sm:mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/20">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
                <span>Execution Protocol · Phase 01 to 04</span>
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                From first principles{" "}
                <em className="font-serif italic font-normal text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]">
                  to production scale
                </em>
              </h3>
            </div>
            <div className="max-w-md text-sm sm:text-base text-paper-muted font-light leading-relaxed">
              <p>
                A transparent, milestone-governed engineering sequence. Zero junior delegation, zero bloated status meetings—direct senior partner access from kickoff to live deployment.
              </p>
            </div>
          </div>

          {/* 4-Step Spacious Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 01 */}
            <div className="group relative rounded-2xl bg-surface/40 hover:bg-surface/80 border border-white/[0.07] hover:border-electric-cyan/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-electric-cyan tracking-widest font-semibold uppercase">
                    01 / DISCOVER
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-electric-cyan transition-colors">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-medium text-paper mb-3">
                  Architecture & Scope
                </h4>
                <p className="text-xs sm:text-sm text-paper-muted font-light leading-relaxed mb-8">
                  Deep technical profiling, Core Web Vitals audit, and content modeling before writing a single line of production code.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-paper-muted/80 block mb-1">
                  Key Output
                </span>
                <span className="text-xs font-mono text-paper font-medium">
                  Technical Architecture Spec
                </span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative rounded-2xl bg-surface/40 hover:bg-surface/80 border border-white/[0.07] hover:border-electric-cyan/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-electric-cyan tracking-widest font-semibold uppercase">
                    02 / MAKE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-electric-cyan transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-medium text-paper mb-3">
                  Interactive Staging
                </h4>
                <p className="text-xs sm:text-sm text-paper-muted font-light leading-relaxed mb-8">
                  Functional Next.js sandbox built with production code, real data, and headless APIs—no static Figma guesswork.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-paper-muted/80 block mb-1">
                  Key Output
                </span>
                <span className="text-xs font-mono text-paper font-medium">
                  Private Live Staging URL
                </span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative rounded-2xl bg-surface/40 hover:bg-surface/80 border border-white/[0.07] hover:border-electric-cyan/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-electric-cyan tracking-widest font-semibold uppercase">
                    03 / REFINE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-electric-cyan transition-colors">
                    <Gauge className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-medium text-paper mb-3">
                  Motion & CWV Tuning
                </h4>
                <p className="text-xs sm:text-sm text-paper-muted font-light leading-relaxed mb-8">
                  Fine-tuning 60 FPS GSAP timelines outside React re-render cycles, edge caching, and sub-400ms server response times.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-paper-muted/80 block mb-1">
                  Key Output
                </span>
                <span className="text-xs font-mono text-paper font-medium">
                  98+ Lighthouse Certification
                </span>
              </div>
            </div>

            {/* Step 04 */}
            <div className="group relative rounded-2xl bg-surface/40 hover:bg-surface/80 border border-white/[0.07] hover:border-electric-cyan/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-electric-cyan tracking-widest font-semibold uppercase">
                    04 / EVOLVE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-paper-muted group-hover:text-electric-cyan transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-medium text-paper mb-3">
                  Production SLA
                </h4>
                <p className="text-xs sm:text-sm text-paper-muted font-light leading-relaxed mb-8">
                  White-glove DNS cutover, automated CI/CD deployment, full code IP handover, and 14 days of dedicated post-launch sprint capacity.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-paper-muted/80 block mb-1">
                  Key Output
                </span>
                <span className="text-xs font-mono text-paper font-medium">
                  Production Cutover & SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
