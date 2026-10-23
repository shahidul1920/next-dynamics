"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

gsap.registerPlugin(useGSAP);

export default function EditorialHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        ".hero-rail",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      tl.fromTo(
        ".hero-line-1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-line-2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      );

      tl.fromTo(
        ".hero-lead",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        ".hero-actions",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 lg:px-12 overflow-hidden blueprint-grid-faint"
    >
      {/* Ambient Canvas */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <HeroCanvas />
      </div>

      {/* Top Chapter Rail */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="hero-rail section-rail">
          <span className="flex items-center gap-2">
            <span className="signal-dot" />
            01 / POTENTIAL
          </span>
          <span>INDEPENDENT ENGINEERING STUDIO</span>
        </div>

        {/* Hero Narrative */}
        <div className="max-w-4xl pt-6 sm:pt-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-paper font-medium leading-[1.05] mb-8">
            <span className="hero-line-1 block">Make the digital</span>
            <span className="hero-line-2 block">
              <em className="font-serif italic font-normal text-slate-300">
                feel extraordinary
              </em>
            </span>
          </h1>

          <p className="hero-lead text-base sm:text-xl text-paper-muted font-light leading-relaxed max-w-2xl mb-12">
            Immersive websites, headless systems, e-commerce engines, and applied AI.
            Designed from first principles, engineered by one studio.
          </p>

          {/* Signal Terms */}
          <div className="hero-actions flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono uppercase tracking-widest text-paper-muted/80">
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-paper hover:text-electric-cyan transition-colors"
            >
              <span>Explore the work</span>
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 24"
                fill="none"
                className="stroke-current animate-bounce"
              >
                <path d="M6 3V21" strokeWidth="1.2" />
                <circle cx="6" cy="6" r="2.5" fill="currentColor" />
              </svg>
            </a>

            <div className="hidden sm:flex items-center gap-3 text-paper-muted/50">
              <span>Idea</span>
              <span>—</span>
              <span>Architecture</span>
              <span>—</span>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom subtle bar */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 flex items-center justify-between text-[11px] font-mono text-paper-muted/60 uppercase tracking-widest border-t border-white/[0.04]">
        <span>Next.js 15 · GSAP Motion · WebGL</span>
        <span className="hidden sm:inline">Sub-Second Core Web Vitals</span>
      </div>
    </section>
  );
}
