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
  const activeChapterRef = useRef(0);
  const percentTextRef = useRef(null);
  const progressBarRef = useRef(null);
  const chapter1Ref = useRef(null);
  const chapter2Ref = useRef(null);
  const chapter3Ref = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0); // Only updates on chapter changes!
  const [isMotionPaused, setIsMotionPaused] = useState(false);

  useGSAP(
    () => {
      if (!containerRef.current || !stickyRef.current) return;

      // Pin the sticky visual stage with responsive 0.45s scrub (instantaneous response when reversing scroll)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.45,
        onUpdate: (self) => {
          const p = self.progress;
          progressRef.current = p;

          // Zero-re-render DOM updates for progress percent and track bar
          const percent = Math.round(p * 100);
          if (percentTextRef.current) {
            percentTextRef.current.textContent = `${percent}%`;
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${percent}%`;
          }

          // Active Chapter: Only trigger React state change when chapter index actually transitions!
          const nextChapter = p < 0.35 ? 0 : p < 0.72 ? 1 : 2;
          if (nextChapter !== activeChapterRef.current) {
            activeChapterRef.current = nextChapter;
            setActiveChapter(nextChapter);
          }

          // ── CHAPTER 1: GARGANTUA ANOMALY (p: 0.0 -> 0.35) ──
          if (chapter1Ref.current) {
            if (p <= 0.36) {
              const fade = Math.max(0, 1 - p / 0.28);
              const easeY = -p * 90;
              gsap.set(chapter1Ref.current, {
                opacity: fade,
                y: easeY,
                pointerEvents: fade > 0.15 ? "auto" : "none",
              });
            } else {
              gsap.set(chapter1Ref.current, { opacity: 0, pointerEvents: "none" });
            }
          }

          // ── CHAPTER 2: GRAVITATIONAL SLINGSHOT (p: 0.24 -> 0.76) ──
          if (chapter2Ref.current) {
            if (p > 0.24 && p <= 0.76) {
              let fade = 0;
              if (p < 0.42) {
                fade = (p - 0.24) / 0.18;
              } else if (p > 0.60) {
                fade = 1 - (p - 0.60) / 0.16;
              } else {
                fade = 1;
              }
              const easeY = (0.5 - p) * 110;
              gsap.set(chapter2Ref.current, {
                opacity: Math.max(0, Math.min(1, fade)),
                y: easeY,
                pointerEvents: fade > 0.15 ? "auto" : "none",
              });
            } else {
              gsap.set(chapter2Ref.current, { opacity: 0, pointerEvents: "none" });
            }
          }

          // ── CHAPTER 3: THE TESSERACT SINGULARITY (p: 0.62 -> 1.0) ──
          if (chapter3Ref.current) {
            if (p > 0.62) {
              const fade = Math.min(1, Math.max(0, (p - 0.62) / 0.22));
              const easeY = (1 - p) * 80;
              gsap.set(chapter3Ref.current, {
                opacity: fade,
                y: easeY,
                pointerEvents: fade > 0.15 ? "auto" : "none",
              });
            } else {
              gsap.set(chapter3Ref.current, { opacity: 0, pointerEvents: "none" });
            }
          }
        },
      });
    },
    { scope: containerRef }
  );

  const jumpToChapter = (chapterIdx) => {
    if (!containerRef.current) return;
    const scrollTarget =
      containerRef.current.offsetTop +
      (containerRef.current.offsetHeight - window.innerHeight) *
        (chapterIdx === 0 ? 0.05 : chapterIdx === 1 ? 0.5 : 0.95);
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-[440vh] bg-midnight w-full"
    >
      {/* Pinned Sticky Full-Screen Visual Stage */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-8 px-6 lg:px-12 overflow-hidden"
      >
        {/* Full-Screen Gargantua Black Hole WebGL Canvas */}
        <Scroll3DCanvas
          progressRef={progressRef}
          isPaused={isMotionPaused}
        />

        {/* Ambient Relativistic Vignette & Space Horizon Shade */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-midnight/25 to-midnight/85 pointer-events-none" />

        {/* Top Spacecraft Telemetry Rail (Apricode Hallmark) */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="section-rail">
            <span className="flex items-center gap-2.5 text-paper font-mono text-[11px] sm:text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_#38bdf8]" />
              {activeChapter === 0 && "01 / GARGANTUA ANOMALY"}
              {activeChapter === 1 && "02 / GRAVITATIONAL SLINGSHOT"}
              {activeChapter === 2 && "03 / TESSERACT SINGULARITY"}
            </span>
            <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-paper-muted">
              NEXT DYNAMICS · GENERAL RELATIVITY WEB EXPERIENCE
            </span>
          </div>
        </div>

        {/* Center Chapters Presentation Stage (Framed Left for Editorial Balance) */}
        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          <div className="relative w-full min-h-[300px] sm:min-h-[460px] flex items-center">
            {/* ── Chapter 1: The Anomaly ── */}
            <div
              ref={chapter1Ref}
              className="scene-chapter-1 absolute inset-y-0 left-0 flex flex-col justify-center max-w-xl lg:max-w-2xl will-change-transform"
            >
              <p className="chapter-label flex items-center gap-2 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[10px] sm:text-xs">
                <span className="signal-dot" />
                <span>01 / HIGH ORBIT ANOMALY</span>
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-paper font-medium leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                <span className="block">Make the digital</span>
                <span className="block">
                  <em className="font-serif italic font-normal text-slate-200">
                    feel extraordinary
                  </em>
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-paper-muted font-light leading-relaxed max-w-xl mb-6 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Immersive 3D environments, headless platforms, and high-throughput systems.
                Designed from first principles, engineered by one independent studio.
              </p>
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-paper-muted flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-electric-cyan animate-ping" />
                <span>Scroll to initiate gravitational dive</span>
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 24"
                  fill="none"
                  className="stroke-electric-cyan animate-bounce ml-1 hidden sm:block"
                >
                  <path d="M6 3V21" strokeWidth="1.5" />
                  <circle cx="6" cy="6" r="2.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* ── Chapter 2: Gravitational Slingshot (Accretion Skim) ── */}
            <div
              ref={chapter2Ref}
              className="scene-chapter-2 absolute inset-y-0 left-0 flex flex-col justify-center max-w-xl lg:max-w-2xl will-change-transform"
              style={{ opacity: 0 }}
            >
              <p className="chapter-label flex items-center gap-2 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[10px] sm:text-xs">
                <span className="signal-dot" />
                <span>02 / ACCRETION DISK SKIM</span>
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-paper font-medium leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                <span className="block">Skim the event horizon</span>
                <span className="block">
                  <em className="font-serif italic font-normal text-slate-200">
                    of pure performance
                  </em>
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-paper-muted font-light leading-relaxed max-w-xl mb-6 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Where relativistic motion physics, fluid WebGL shaders, and high-throughput
                cloud architecture converge without commodity bloat.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-paper">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
                  01 / Accretion Plasma
                </span>
                <span className="text-paper-muted hidden sm:inline">—</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
                  02 / Gravitational Lensing
                </span>
                <span className="text-paper-muted hidden sm:inline">—</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
                  03 / Einstein Photon Ring
                </span>
              </div>
            </div>

            {/* ── Chapter 3: Tesseract Singularity (Crossing the Horizon) ── */}
            <div
              ref={chapter3Ref}
              className="scene-chapter-3 absolute inset-y-0 left-0 flex flex-col justify-center max-w-xl lg:max-w-2xl will-change-transform"
              style={{ opacity: 0 }}
            >
              <p className="chapter-label flex items-center gap-2 mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[10px] sm:text-xs">
                <span className="signal-dot" />
                <span>03 / TESSERACT SINGULARITY</span>
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-paper font-medium leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                <span className="block">Breach the horizon</span>
                <span className="block">
                  <em className="font-serif italic font-normal text-slate-200">
                    into infinite dimension
                  </em>
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-paper-muted font-light leading-relaxed max-w-xl mb-6 sm:mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Crossing beyond conventional web design into multidimensional creative engineering.
                Built to explore. Engineered to scale.
              </p>
              <div>
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-paper text-midnight font-mono text-[11px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-electric-cyan hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] transition-all transform hover:-translate-y-0.5"
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
        </div>

        {/* Bottom Orbit Telemetry Stage (Apricode Hallmark) */}
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-3 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-mono">
          {/* Chapter Navigation Anchors */}
          <div className="flex items-center gap-2 sm:gap-6 uppercase tracking-wider text-paper-muted text-[10px] sm:text-xs">
            <button
              onClick={() => jumpToChapter(0)}
              className={`hover:text-paper transition-colors py-1 ${
                activeChapter === 0 ? "text-paper font-bold border-b border-paper" : ""
              }`}
            >
              01 <span className="hidden sm:inline">High </span>Orbit
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => jumpToChapter(1)}
              className={`hover:text-paper transition-colors py-1 ${
                activeChapter === 1 ? "text-paper font-bold border-b border-paper" : ""
              }`}
            >
              02 Slingshot
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => jumpToChapter(2)}
              className={`hover:text-paper transition-colors py-1 ${
                activeChapter === 2 ? "text-paper font-bold border-b border-paper" : ""
              }`}
            >
              03 Singularity
            </button>
          </div>

          {/* Right Motion Toggle & Progress Indicator */}
          <div className="flex items-center gap-3 sm:gap-6 text-paper-muted">
            {/* Motion Pause/Resume Toggle Button */}
            <button
              onClick={() => setIsMotionPaused(!isMotionPaused)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded border border-white/10 hover:border-white/30 text-paper text-[10px] sm:text-[11px] uppercase transition-colors"
            >
              <span className="hidden sm:inline">{isMotionPaused ? "Resume motion" : "Pause motion"}</span>
              <span className="sm:hidden">{isMotionPaused ? "Play" : "Pause"}</span>
              <span aria-hidden="true">{isMotionPaused ? "▷" : "Ⅱ"}</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              <span ref={percentTextRef} className="text-paper font-mono text-[11px] sm:text-xs">0%</span>
              <svg
                width="10"
                height="18"
                viewBox="0 0 12 24"
                fill="none"
                className="stroke-current animate-bounce text-electric-cyan"
              >
                <path d="M6 3V21" strokeWidth="1.5" />
                <circle cx="6" cy="6" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* Global Hairline Scroll Progress Track */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-royal-blue via-electric-cyan to-amber-400"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </section>
  );
}
