"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Play, Pause, Sparkles, Volume2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StudioShowreel() {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reel-frame",
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
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
      ref={containerRef}
      className="relative py-20 px-6 lg:px-12 bg-midnight overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>02 / SHOWREEL</span>
          <span>MOTION, CRAFT & INTERACTION</span>
        </div>

        {/* Cinematic Wide Screen Container */}
        <div className="reel-frame relative rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-2xl group cursor-pointer">
          {/* Simulated Interactive Stage */}
          <div className="relative h-[340px] sm:h-[500px] lg:h-[620px] w-full flex flex-col justify-between p-6 sm:p-12 overflow-hidden bg-gradient-to-b from-surface via-[#0d141e] to-surface">
            {/* Ambient dynamic glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 blueprint-grid-faint opacity-40 pointer-events-none" />

            {/* Top Stage Header */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper-muted uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Engineering Reel · 2026 Edition
              </span>
              <span className="hidden sm:inline">60 FPS Hardware Physics</span>
            </div>

            {/* Center Interactive Trigger */}
            <div className="relative z-10 self-center text-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group/btn relative inline-flex items-center justify-center gap-4 px-8 py-5 rounded-full bg-paper/10 hover:bg-paper/20 border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
              >
                <div className="w-10 h-10 rounded-full bg-paper text-midnight flex items-center justify-center pl-0.5 group-hover/btn:bg-electric-cyan transition-colors">
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs uppercase tracking-widest text-paper font-semibold">
                    {isPlaying ? "Pause Preview" : "Play Full Reel"}
                  </span>
                  <span className="block text-[10px] text-paper-muted">
                    Next.js · Three.js · 1688 Engines
                  </span>
                </div>
              </button>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08] text-xs font-mono text-paper-muted">
              <div className="flex items-center gap-6">
                <span>01 Tesla WebGL</span>
                <span className="text-white/20">/</span>
                <span>02 Apex 1688 API</span>
                <span className="text-white/20">/</span>
                <span>03 Vela Flagship</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-paper-muted" />
                <span className="text-[11px] tracking-wider uppercase">
                  Spatial Motion Mix
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
