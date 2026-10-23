"use client";

import { useState, useEffect } from "react";
import LogoIcon from "./LogoIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 ${
        scrolled
          ? "bg-midnight/80 backdrop-blur-md border-b border-white/[0.06] py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand identity */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <LogoIcon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span className="font-bold tracking-wider text-sm text-white">
            NEXTDYNAMICS
          </span>
        </a>

        {/* Center studio caption (Apricode hallmark) */}
        <div className="hidden md:block text-[11px] font-mono leading-tight text-paper-muted/80 tracking-wide border-l border-white/10 pl-5">
          <span>Independent thinking.</span>
          <br />
          <span className="text-paper/90">Connected engineering.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-paper-muted">
          <a
            href="#work"
            className="hover:text-paper transition-colors duration-200"
          >
            Selected Work
          </a>
          <a
            href="#practice"
            className="hover:text-paper transition-colors duration-200"
          >
            The Practice
          </a>
          <a
            href="#investment"
            className="hover:text-paper transition-colors duration-200"
          >
            Investment
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-paper hover:text-electric-cyan transition-colors duration-200 font-semibold"
          >
            <span>Let’s Talk</span>
            <span className="link-signal" aria-hidden="true">
              <svg width="24" height="12" viewBox="0 0 30 18" fill="none">
                <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                <path d="M10 9H20" stroke="currentColor" strokeWidth="1" />
                <circle cx="26" cy="9" r="2.5" fill="currentColor" />
              </svg>
            </span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-paper p-1.5 rounded-lg border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 mt-2 space-y-5 text-sm font-mono uppercase tracking-wider">
          <a
            href="#work"
            onClick={() => setMobileOpen(false)}
            className="block text-paper-muted hover:text-paper"
          >
            01 / Selected Work
          </a>
          <a
            href="#practice"
            onClick={() => setMobileOpen(false)}
            className="block text-paper-muted hover:text-paper"
          >
            02 / The Practice
          </a>
          <a
            href="#investment"
            onClick={() => setMobileOpen(false)}
            className="block text-paper-muted hover:text-paper"
          >
            03 / Investment
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-electric-cyan font-bold pt-2 border-t border-white/10"
          >
            04 / Start a Conversation →
          </a>
        </div>
      )}
    </header>
  );
}
