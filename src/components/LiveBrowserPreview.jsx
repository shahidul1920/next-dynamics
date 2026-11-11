"use client";

import { useState, useRef, useEffect } from "react";
import { Lock, ExternalLink, Globe } from "lucide-react";

/**
 * LiveBrowserPreview
 * Mathematically calculates the exact container width via ResizeObserver
 * and dynamically scales the live desktop iframe so it fills 100% of the
 * container width with ZERO empty space or black borders on wide screens.
 */
export default function LiveBrowserPreview({ url, title, isWide = false }) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({
    baseWidth: 1440,
    baseHeight: 900,
    scale: 0.5,
  });

  // Clean domain display (e.g. https://www.freebirdsdigest.com -> freebirdsdigest.com)
  const displayDomain = url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  // Dynamically calculate scale factor so the iframe fills 100% of the container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const calculateScale = () => {
      const containerWidth = el.clientWidth;
      const containerHeight = el.clientHeight;
      if (containerWidth <= 0) return;

      // Use 1440px desktop canvas on wide cards, 1280px on standard cards
      const baseW = isWide ? 1440 : 1280;
      const s = containerWidth / baseW;
      const baseH = containerHeight / s;

      setDimensions({
        baseWidth: baseW,
        baseHeight: baseH,
        scale: s,
      });
    };

    calculateScale();
    const observer = new ResizeObserver(calculateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isWide]);

  return (
    <div className="relative w-full rounded-xl bg-midnight/90 border border-white/10 overflow-hidden shadow-2xl group/preview">
      {/* ── Browser Chrome Bar ── */}
      <div className="px-3.5 py-2.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between gap-3 text-xs font-mono">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-midnight/80 border border-white/10 text-[11px] text-paper-muted truncate max-w-xs sm:max-w-md">
          <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
          <span className="truncate text-paper/80 font-mono">{displayDomain}</span>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE</span>
          </span>
        </div>
      </div>

      {/* ── Scaled Non-Scrollable Live Viewport Container ── */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden bg-[#070b10] ${
          isWide
            ? "h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]"
            : "h-[240px] sm:h-[290px] md:h-[340px] lg:h-[370px]"
        }`}
      >
        {/* Placeholder / Loading shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-midnight/90 z-0 text-paper-muted text-xs font-mono">
            <Globe className="w-5 h-5 text-gold-blueprint animate-spin mb-2" />
            <span>Connecting live stream...</span>
          </div>
        )}

        {/* Scaled Desktop Iframe (strictly non-scrollable, pointer-events disabled) */}
        <iframe
          src={url}
          title={title}
          scrolling="no"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute top-0 left-0 border-0 pointer-events-none select-none origin-top-left transition-opacity duration-500"
          style={{
            width: `${dimensions.baseWidth}px`,
            height: `${dimensions.baseHeight}px`,
            transform: `scale(${dimensions.scale})`,
            opacity: isLoaded ? 1 : 0,
          }}
        />

        {/* ── Click Shield / External Link Overlay ── */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit live ${title} at ${url}`}
          className="absolute inset-0 z-10 flex items-center justify-center bg-midnight/0 hover:bg-midnight/40 backdrop-blur-[0px] hover:backdrop-blur-[2px] transition-all duration-300 group/link cursor-pointer"
        >
          <div className="opacity-0 group-hover/link:opacity-100 transform translate-y-2 group-hover/link:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-paper text-midnight font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            <span>Explore Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </div>
  );
}
