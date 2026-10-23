"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Mail, Lock } from "lucide-react";
import { SITE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactStage() {
  const containerRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "Creative Web Experience & GSAP",
    budget: "$15,000 – $30,000",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="contact-header lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-6xl text-paper font-medium tracking-tight mb-6 leading-[1.08]">
                Your next platform{" "}
                <em className="font-serif italic font-normal text-slate-300">
                  starts here
                </em>
              </h2>
              <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed mb-8">
                A digital experience, a high-volume supply chain engine, a headless
                flagship, or an applied AI workflow. Tell us what you want to build.
              </p>

              <div className="space-y-4 mb-10">
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

            <div className="pt-8 border-t border-white/[0.06] text-xs font-mono text-paper-muted">
              <span>Next Dynamics Studio · Working with teams worldwide</span>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface border border-white/[0.08] p-8 sm:p-12 shadow-2xl">
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
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-paper-muted hover:text-paper"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
