"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SPECIALIZATIONS } from "@/lib/constants";
import {
  Layers,
  Database,
  Container,
  BrainCircuit,
  Gauge,
  Shield,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap = {
  Layers,
  Database,
  Container,
  BrainCircuit,
  Gauge,
  Shield,
};

export default function Specializations() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Heading reveal
      gsap.fromTo(
        ".spec-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle reveal
      gsap.fromTo(
        ".spec-subtext",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered card reveal with rotation snap
      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".spec-grid",
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
      id="capabilities"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight/90 blueprint-grid overflow-hidden border-t border-white/5"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="spec-heading inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-electric-cyan text-xs font-mono tracking-widest uppercase mb-4">
            Core Capabilities
          </div>
          <h2 className="spec-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Bespoke Engineering.{" "}
            <span className="gradient-text">Zero Compromises.</span>
          </h2>
          <p className="spec-subtext text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            From award-winning physics-based micro-interactions to high-load
            custom API orchestration, our full-spectrum capabilities build
            lasting digital dominance.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="spec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZATIONS.map((spec, index) => {
            const Icon = iconMap[spec.icon] || Layers;
            return (
              <div
                key={spec.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-electric-cyan/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(85,209,255,0.15)] flex flex-col justify-between"
              >
                {/* Subtle corner highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-electric-cyan/5 rounded-tr-2xl blur-xl group-hover:bg-electric-cyan/15 transition-colors duration-300" />

                <div>
                  {/* Icon & Index header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-deep-navy/80 border border-electric-cyan/30 flex items-center justify-center p-3 text-electric-cyan group-hover:scale-110 group-hover:bg-electric-cyan/10 transition-all duration-300 shadow-[0_0_15px_rgba(85,209,255,0.1)]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors duration-200">
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {spec.description}
                  </p>
                </div>

                {/* Footer interactive link indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-electric-cyan transition-colors">
                  <span>Explore Stack</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
