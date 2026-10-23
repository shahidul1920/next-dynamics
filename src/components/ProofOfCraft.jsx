"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROOF_OF_CRAFT } from "@/lib/constants";
import {
  Zap,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Clock,
  Layers,
  Activity,
  SlidersHorizontal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProofOfCraft() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("nextDynamics"); // "generic" | "nextDynamics"

  useGSAP(
    () => {
      // Intro animations
      gsap.fromTo(
        ".proof-heading",
        { y: 50, opacity: 0 },
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
        ".comparison-card",
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".comparison-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Metric cards stagger
      gsap.fromTo(
        ".metric-pill",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="proof"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>02 / PROOF OF CRAFT</span>
          <span>ARCHITECTURAL BENCHMARK</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="proof-heading inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-electric-cyan text-xs font-mono tracking-widest uppercase mb-4">
            Proof of Craft
          </div>
          <h2 className="proof-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper mb-6">
            Architectural Benchmark:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper via-white to-electric-cyan">Commodity vs. Next Dynamics</span>
          </h2>
          <p className="proof-heading text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            We don’t just claim superior performance; we measure it in milliseconds,
            frame rates, and bandwidth efficiency. Here is how bespoke engineering
            obliterates standard bloated page builders.
          </p>
        </div>

        {/* Tab Controls for Mobile / Desktop Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-surface border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("generic")}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === "generic"
                  ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Generic Page Builder
            </button>
            <button
              onClick={() => setActiveTab("nextDynamics")}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === "nextDynamics"
                  ? "bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/40 shadow-[0_0_15px_rgba(85,209,255,0.25)] font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4 text-electric-cyan" />
              Next Dynamics Engine
            </button>
          </div>
        </div>

        {/* Interactive Comparison Display */}
        <div className="comparison-card rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6 lg:p-10 backdrop-blur-xl mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Visual Simulator Frame */}
            <div className="relative rounded-xl border border-white/10 bg-midnight/90 overflow-hidden shadow-inner">
              {/* Fake Browser Toolbar */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-white/5 px-3 py-1 rounded">
                  {activeTab === "generic"
                    ? "https://slow-agency-template.com"
                    : "https://nextdynamics.tech"}
                </div>
                <div className="w-8" />
              </div>

              {/* Simulated Page Content */}
              <div className="p-6 h-72 flex flex-col justify-center relative overflow-hidden">
                {activeTab === "generic" ? (
                  <div className="space-y-4 filter blur-[0.4px] animate-pulse">
                    <div className="h-4 bg-red-500/20 rounded w-1/3 border border-red-500/30" />
                    <div className="h-8 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/5 rounded w-5/6" />
                    <div className="h-3 bg-white/5 rounded w-2/3" />
                    <div className="flex gap-3 pt-4">
                      <div className="h-9 w-28 bg-red-500/20 rounded-md border border-red-500/40" />
                      <div className="h-9 w-28 bg-white/5 rounded-md" />
                    </div>
                    {/* Simulated banner warning */}
                    <div className="absolute inset-x-4 bottom-4 p-3 bg-red-950/80 border border-red-500/40 rounded-lg text-xs font-mono text-red-300 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>72 Plugins Loaded · 2,400ms Script Evaluation Lag</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 transition-all duration-500">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-[11px] font-mono">
                      <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping" />
                      Zero Runtime Bloat · Edge Cached
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight leading-snug">
                      Engineered for Sub-Second Dominance.
                    </div>
                    <p className="text-xs text-slate-400 font-light max-w-md leading-relaxed">
                      Custom WebGL canvas, tree-shaken GSAP 3D motion, and semantic
                      zero-cost abstractions running at steady 60 frames per second.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-sapphire to-royal-blue text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        Architecture Ready
                      </div>
                      <div className="text-xs font-mono text-electric-cyan">
                        TTFB: 18ms
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Gauges & Diagnostics */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Lighthouse Performance Score
                  </span>
                  <span
                    className={`text-sm font-mono font-bold ${
                      activeTab === "generic" ? "text-red-400" : "text-electric-cyan"
                    }`}
                  >
                    {activeTab === "generic" ? "38 / 100 (Critical)" : "99 / 100 (Exceptional)"}
                  </span>
                </div>
                {/* Score bar */}
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      activeTab === "generic"
                        ? "w-[38%] bg-gradient-to-r from-red-600 to-red-400"
                        : "w-[99%] bg-gradient-to-r from-royal-blue to-electric-cyan shadow-[0_0_15px_rgba(85,209,255,0.6)]"
                    }`}
                  />
                </div>
              </div>

              {/* Detailed metrics comparison table */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400 text-xs font-mono mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Load Time (LCP)
                  </div>
                  <div
                    className={`text-2xl font-bold font-mono ${
                      activeTab === "generic" ? "text-red-400" : "text-white"
                    }`}
                  >
                    {activeTab === "generic" ? "4.2s" : "0.3s"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {activeTab === "generic" ? "High bounce rate risk" : "Instantaneous paint"}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400 text-xs font-mono mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    JS Bundle Size
                  </div>
                  <div
                    className={`text-2xl font-bold font-mono ${
                      activeTab === "generic" ? "text-red-400" : "text-white"
                    }`}
                  >
                    {activeTab === "generic" ? "2.4 MB" : "187 KB"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {activeTab === "generic" ? "Severe memory footprint" : "Tree-shaken, zero junk"}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400 text-xs font-mono mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-slate-400" />
                    Scroll Frame Rate
                  </div>
                  <div
                    className={`text-2xl font-bold font-mono ${
                      activeTab === "generic" ? "text-red-400" : "text-white"
                    }`}
                  >
                    {activeTab === "generic" ? "12 FPS" : "60 FPS"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {activeTab === "generic" ? "Janky thread lock" : "Fluid hardware acceleration"}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-slate-400 text-xs font-mono mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-slate-400" />
                    SEO & CWV Audit
                  </div>
                  <div
                    className={`text-2xl font-bold font-mono ${
                      activeTab === "generic" ? "text-red-400" : "text-electric-cyan"
                    }`}
                  >
                    {activeTab === "generic" ? "Failed" : "Pass (Green)"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {activeTab === "generic" ? "Google penalization" : "Priority SERP ranking"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlights */}
        <div className="metrics-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="metric-pill p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-electric-cyan mb-1">
              99/100
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Google Lighthouse Score
            </div>
          </div>
          <div className="metric-pill p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-electric-cyan mb-1">
              &lt; 350ms
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Time to Interactive (TTI)
            </div>
          </div>
          <div className="metric-pill p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-electric-cyan mb-1">
              60 FPS
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Hardware Motion Sync
            </div>
          </div>
          <div className="metric-pill p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-electric-cyan mb-1">
              0 CLS
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Cumulative Layout Shift
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
