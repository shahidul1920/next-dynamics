"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProtectionClause() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".clause-card",
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
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
      ref={containerRef}
      className="relative py-20 px-6 lg:px-12 bg-midnight/90 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="clause-card relative rounded-2xl bg-gradient-to-r from-deep-navy/90 via-midnight/90 to-deep-navy/90 border border-gold-blueprint/30 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-blueprint/80 via-gold-blueprint to-gold-blueprint/40 rounded-l-2xl" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pl-4 sm:pl-6">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-blueprint/40 bg-gold-blueprint/10 text-gold-blueprint text-xs font-mono tracking-wider uppercase mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Operational Integrity Protocol
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Structured Milestones & The 14-Day Protection Clause
              </h3>

              {/* Milestones Flow */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 my-6 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan" />
                  <span>50% Inception</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-royal-blue" />
                  <span>30% Staging Approval</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-gold-blueprint" />
                  <span>20% Final Launch</span>
                </div>
              </div>

              {/* Highlighted Clause text */}
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                <span className="text-gold-blueprint font-semibold">14-Day Delivery Guarantee:</span>{" "}
                If deployment is delayed by external client dependencies (content
                assets, DNS access, or 3rd-party credentials) beyond 14 days following
                formal Staging sign-off, the final 20% milestone activates immediately.
                This guarantees focused sprint momentum and mutual accountability.
              </p>
            </div>

            {/* Right side trust badge */}
            <div className="flex-shrink-0 w-full lg:w-auto p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center text-center">
              <Calendar className="w-8 h-8 text-gold-blueprint mb-3" />
              <div className="text-2xl font-mono font-bold text-white">100%</div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                On-Time Staging Delivery Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
