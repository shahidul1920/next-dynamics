"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Mail, Lock, Sparkles, Hand } from "lucide-react";
import { SITE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactRobot3D = dynamic(() => import("./ContactRobot3D"), {
  ssr: false,
  loading: () => null,
});

const GREETINGS = [
  { lang: "en", text: "hello." },
  { lang: "es", text: "hola." },
  { lang: "fr", text: "salut." },
  { lang: "it", text: "ciao." },
  { lang: "ja", text: "こんにちは." },
  { lang: "de", text: "hallo." },
  { lang: "uk", text: "привіт." },
];

export default function ContactStage() {
  const containerRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isWaving, setIsWaving] = useState(false);
  const [greetingIdx, setGreetingIdx] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "Creative Web Experience & GSAP",
    budget: "$15,000 – $30,000",
    message: "",
  });

  // Cycle multilingual greeting every 3.2s
  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIdx((prev) => (prev + 1) % GREETINGS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-header",
        { y: 40, opacity: 0 },
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
    },
    { scope: containerRef }
  );

  const triggerGreet = () => {
    setIsWaving(true);
    setGreetingIdx((prev) => (prev + 1) % GREETINGS.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        scope: "Creative Web Experience & GSAP",
        budget: "$15,000 – $30,000",
        message: "",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setError(err.message || "Failed to transmit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>06 / YOUR NEXT CHAPTER</span>
          <span>START A CONVERSATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Sentinel 3D Character, and Direct Signal */}
          <div className="contact-header lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl sm:text-6xl text-paper font-medium tracking-tight mb-6 leading-[1.08]">
                Your next platform{" "}
                <em className="font-serif italic font-normal text-slate-300">
                  starts here
                </em>
              </h2>
              <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed mb-8">
                A brand experience, a 1688 supply chain engine, a headless flagship,
                or an applied AI workflow. Tell us what you want to build.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 text-lg text-paper hover:text-electric-cyan transition-colors"
                >
                  <Mail className="w-5 h-5 text-electric-cyan" />
                  <span>{SITE.email}</span>
                  <span className="link-signal" aria-hidden="true">
                    <svg width="24" height="12" viewBox="0 0 30 18" fill="none">
                      <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                      <path d="M10 9H20" stroke="currentColor" strokeWidth="1" />
                      <circle cx="26" cy="9" r="2.5" fill="currentColor" />
                    </svg>
                  </span>
                </a>

                <div className="flex items-center gap-2 text-xs font-mono text-paper-muted">
                  <Lock className="w-3.5 h-3.5 text-paper-muted" />
                  <span>Strict NDA executed upon request prior to initial call</span>
                </div>
              </div>
            </div>

            {/* ── Apricode Hallmark: Interactive 3D Robot Character Stage ── */}
            <div className="rounded-2xl bg-surface/50 border border-white/[0.08] p-6 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-serif italic text-paper tracking-tight">
                  {GREETINGS[greetingIdx].text}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-paper-muted/60">
                  HUMAN IDEAS. ROBOT ENERGY.
                </span>
              </div>

              {/* 3D Sentinel Head Canvas */}
              <div className="cursor-pointer" onClick={triggerGreet}>
                <ContactRobot3D
                  isWaving={isWaving}
                  onWaveEnd={() => setIsWaving(false)}
                />
              </div>

              {/* Interactive Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono">
                <button
                  type="button"
                  onClick={triggerGreet}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-electric-cyan hover:text-midnight text-paper transition-all"
                >
                  <Hand className="w-3.5 h-3.5" />
                  <span>Say hello</span>
                </button>
                <span className="text-[11px] text-paper-muted">
                  Interactive cursor tracking
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-medium text-paper">
                    Architecture Brief Received.
                  </h3>
                  <p className="text-sm text-paper-muted max-w-md mx-auto font-light leading-relaxed">
                    A principal systems engineer will review your specifications and
                    reach out within 24 business hours to arrange our 45-minute technical
                    discovery session.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-6 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-paper-muted hover:text-paper"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alexander Wright"
                        className="w-full px-4 py-3 rounded-xl bg-midnight/60 border border-white/10 text-paper placeholder-paper-muted/40 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-midnight/60 border border-white/10 text-paper placeholder-paper-muted/40 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                        Platform Focus
                      </label>
                      <select
                        value={form.scope}
                        onChange={(e) => setForm({ ...form, scope: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-midnight/90 border border-white/10 text-paper text-sm focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option>Creative Web Experience & GSAP</option>
                        <option>Full-Stack Growth Platform</option>
                        <option>1688 Sourcing & Enterprise APIs</option>
                        <option>Applied AI & Autonomous Agents</option>
                        <option>Headless CMS & Decoupled Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                        Allocated Budget
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-midnight/90 border border-white/10 text-paper text-sm focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option>$6,000 – $12,000 (Tier 1)</option>
                        <option>$15,000 – $30,000 (Tier 2)</option>
                        <option>$40,000 – $80,000+ (Tier 3 Enterprise)</option>
                        <option>$2,500 – $5,000/mo (Retainer)</option>
                        <option>To be scoped during discovery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                      Project Vision & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline current bottlenecks, visual reference links, motion requirements, or target launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-midnight/60 border border-white/10 text-paper placeholder-paper-muted/40 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-paper text-midnight font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-3 hover:bg-electric-cyan transition-all duration-300 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Start Architecture Discussion</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
