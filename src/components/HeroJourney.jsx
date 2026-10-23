"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Scroll3DCanvas = dynamic(() => import("./Scroll3DCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroJourney() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const progressRef = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0); // 0, 1, 2
  const [progressPercent, setProgressPercent] = useState(0);

  useGSAP(
    () => {
      if (!containerRef.current || !stickyRef.current) return;

      // Pin the sticky stage and scrub through the 3 chapters
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          progressRef.current = p;
          setProgressPercent(Math.round(p * 100));

          // Determine active chapter
          if (p < 0.35) {
            setActiveChapter(0);
          } else if (p < 0.7) {
            setActiveChapter(1);
          } else {
            setActiveChapter(2);
          }

          // Chapter 1 opacity & transform
          if (p <= 0.35) {
            const fade = 1 - p / 0.3;
            gsap.set(".scene-chapter-1", {
              opacity: Math.max(0, fade),
              y: -p * 100,
              pointerEvents: fade > 0.1 ? "auto" : "none",
            });
          } else {
            gsap.set(".scene-chapter-1", { opacity: 0, pointerEvents: "none" });
          }

          // Chapter 2 opacity & transform
          if (p > 0.28 && p <= 0.72) {
            let fade = 0;
            if (p < 0.45) {
              fade = (p - 0.28) / 0.17;
            } else if (p > 0.58) {
              fade = 1 - (p - 0.58) / 0.14;
            } else {
              fade = 1;
            }
            gsap.set(".scene-chapter-2", {
              opacity: Math.max(0, fade),
              y: (0.5 - p) * 120,
              pointerEvents: fade > 0.1 ? "auto" : "none",
            });
          } else {
            gsap.set(".scene-chapter-2", { opacity: 0, pointerEvents: "none" });
          }

          // Chapter 3 opacity & transform
          if (p > 0.65) {
            const fade = (p - 0.65) / 0.25;
            gsap.set(".scene-chapter-3", {
              opacity: Math.min(1, Math.max(0, fade)),
              y: (1 - p) * 80,
              pointerEvents: fade > 0.1 ? "auto" : "none",
            });
          } else {
            gsap.set(".scene-chapter-3", { opacity: 0, pointerEvents: "none" });
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-[320vh] bg-midnight w-full"
    >
      {/* Pinned Sticky Full-Screen Visual Stage */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 lg:px-12 overflow-hidden blueprint-grid-faint"
      >
        {/* Full-Screen 3D WebGL Canvas Layer */}
        <Scroll3DCanvas progressRef={progressRef} />

        {/* Ambient Dark Gradient Vignette for Readability */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-midnight/40 to-midnight/90 pointer-events-none" />

        {/* Top Chapter Status Rail */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="section-rail">
            <span className="flex items-center gap-2 text-paper">
              <span className="signal-dot animate-pulse" />
              {activeChapter === 0 && "01 / POTENTIAL"}
              {activeChapter === 1 && "02 / COMING TOGETHER"}
              {activeChapter === 2 && "03 / NEW PERSPECTIVES"}
            </span>
            <span className="hidden sm:inline text-paper-muted">
              NEXT DYNAMICS · INTERACTIVE 3D STAGE
            </span>
          </div>
        </div>

        {/* Center Chapters Container */}
        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          {/* Chapter 1: Potential */}
          <div className="scene-chapter-1 max-w-4xl transition-transform duration-75">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-paper font-medium leading-[1.05] mb-8">
              <span className="block">Make the digital</span>
              <span className="block">
                <em className="font-serif italic font-normal text-slate-300">
                  feel extraordinary
                </em>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-paper-muted font-light leading-relaxed max-w-2xl mb-10">
              Immersive websites, headless systems, e-commerce engines, and applied AI.
              Designed from first principles, engineered by one studio.
            </p>
            <div className="text-xs font-mono uppercase tracking-widest text-paper-muted flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping" />
              <span>Scroll to navigate through 3D space</span>
            </div>
          </div>

          {/* Chapter 2: Coming Together */}
          <div
            className="scene-chapter-2 max-w-4xl absolute top-0 left-0"
            style={{ opacity: 0 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-paper font-medium leading-[1.05] mb-8">
              <span className="block">Bring the pieces</span>
              <span className="block">
                <em className="font-serif italic font-normal text-slate-300">
                  together
                </em>
              </span>
            </h2>
            <p className="text-base sm:text-xl text-paper-muted font-light leading-relaxed max-w-2xl mb-10">
              The visual story, the interface, and the high-throughput systems behind it.
              Designed together, engineered together.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-xs uppercase tracking-widest text-paper">
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                01 / Idea
              </span>
              <span className="text-paper-muted">—</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                02 / Architecture
              </span>
              <span className="text-paper-muted">—</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                03 / Experience
              </span>
            </div>
          </div>

          {/* Chapter 3: New Perspectives */}
          <div
            className="scene-chapter-3 max-w-4xl absolute top-0 left-0"
            style={{ opacity: 0 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-paper font-medium leading-[1.05] mb-8">
              <span className="block">Built to explore</span>
              <span className="block">
                <em className="font-serif italic font-normal text-slate-300">
                  Ready to use
                </em>
              </span>
            </h2>
            <p className="text-base sm:text-xl text-paper-muted font-light leading-relaxed max-w-2xl mb-10">
              From the first millisecond of interaction in WebGL to the mission-critical
              operational engine powering your platform.
            </p>
            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-paper text-midnight font-mono text-xs uppercase tracking-widest font-semibold hover:bg-electric-cyan transition-colors"
              >
                <span>Into the work</span>
                <span className="link-signal" aria-hidden="true">
                  <svg width="24" height="12" viewBox="0 0 30 18" fill="none">
                    <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                    <path d="M10 9H20" stroke="currentColor" strokeWidth="1" />
                    <circle cx="26" cy="9" r="2.5" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Stage & Chapter Tracker (Apricode Hallmark) */}
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
          {/* Chapter Pills */}
          <div className="flex items-center gap-3 sm:gap-6 uppercase tracking-wider text-paper-muted">
            <span
              className={`transition-colors duration-300 ${
                activeChapter === 0 ? "text-paper font-bold underline" : ""
              }`}
            >
              01 Portal
            </span>
            <span className="text-white/20">/</span>
            <span
              className={`transition-colors duration-300 ${
                activeChapter === 1 ? "text-paper font-bold underline" : ""
              }`}
            >
              02 Passage
            </span>
            <span className="text-white/20">/</span>
            <span
              className={`transition-colors duration-300 ${
                activeChapter === 2 ? "text-paper font-bold underline" : ""
              }`}
            >
              03 Beyond
            </span>
          </div>

          {/* Right Scroll Indicator & % */}
          <div className="flex items-center gap-4 text-paper-muted">
            <span className="hidden sm:inline">Scroll to transform 3D scene</span>
            <span className="text-paper font-mono">{progressPercent}%</span>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 24"
              fill="none"
              className="stroke-current animate-bounce text-electric-cyan"
            >
              <path d="M6 3V21" strokeWidth="1.5" />
              <circle cx="6" cy="6" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Global Hairline Scroll Progress Track */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
          <div
            className="h-full bg-gradient-to-r from-royal-blue via-electric-cyan to-mint-glow transition-all duration-75"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
}
