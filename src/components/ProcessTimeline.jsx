"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS_PHASES } from "@/lib/constants";
import {
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Lock,
  Video,
  GitBranch,
  Eye,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap = {
  Search,
  Figma: Palette,
  Palette,
  Code: Code2,
  ShieldCheck,
  Rocket,
};

export default function ProcessTimeline() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".process-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Phase cards stagger
      gsap.fromTo(
        ".phase-step",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".phases-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Trust strip reveal
      gsap.fromTo(
        ".trust-strip-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".trust-strip",
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
      id="process"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/5"
    >
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="process-heading inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-electric-cyan text-xs font-mono tracking-widest uppercase mb-4">
            Methodology & Protocol
          </div>
          <h2 className="process-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            The 5-Phase <span className="gradient-text">Engineering Journey</span>
          </h2>
          <p className="process-heading text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            A battle-tested agile progression engineered for velocity, complete
            visibility, and zero scope drift from inception to launch.
          </p>
        </div>

        {/* 5-Phase Steps */}
        <div className="phases-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20 relative">
          {PROCESS_PHASES.map((phase, idx) => {
            const Icon = iconMap[phase.icon] || Code2;
            return (
              <div
                key={phase.number}
                className="phase-step group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-electric-cyan/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-electric-cyan/80 group-hover:text-electric-cyan transition-colors">
                      {phase.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-deep-navy/80 border border-electric-cyan/20 flex items-center justify-center p-2 text-electric-cyan group-hover:bg-electric-cyan/10 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {phase.description}
                  </p>
                </div>

                {/* Status indicator bar */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan/60 group-hover:bg-electric-cyan animate-pulse" />
                  <span>Phase {idx + 1} Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Collaboration Standards Strip */}
        <div className="trust-strip rounded-2xl bg-white/[0.02] border border-white/10 p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="trust-strip-item flex flex-col items-center gap-2 p-2">
              <Lock className="w-5 h-5 text-electric-cyan" />
              <div className="text-sm font-semibold text-white">Private Slack / Discord</div>
              <p className="text-xs text-slate-400 font-light">Direct channel with lead engineers</p>
            </div>
            <div className="trust-strip-item flex flex-col items-center gap-2 p-2">
              <Video className="w-5 h-5 text-electric-cyan" />
              <div className="text-sm font-semibold text-white">Weekly Loom Walkthroughs</div>
              <p className="text-xs text-slate-400 font-light">Asynchronous video updates every sprint</p>
            </div>
            <div className="trust-strip-item flex flex-col items-center gap-2 p-2">
              <GitBranch className="w-5 h-5 text-electric-cyan" />
              <div className="text-sm font-semibold text-white">GitHub Milestone Tracking</div>
              <p className="text-xs text-slate-400 font-light">100% transparent commit & issue ledger</p>
            </div>
            <div className="trust-strip-item flex flex-col items-center gap-2 p-2">
              <Eye className="w-5 h-5 text-electric-cyan" />
              <div className="text-sm font-semibold text-white">Live Staging Previews</div>
              <p className="text-xs text-slate-400 font-light">Instant preview URLs for every pull request</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
