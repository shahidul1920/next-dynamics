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
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "SaaS Marketing Website & Conversion Landing Page",
    budget: "",
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
        scope: "SaaS Marketing Website & Conversion Landing Page",
        budget: "",
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
          {/* Left Column: Heading and Direct Signal */}
          <div className="contact-header lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl sm:text-6xl text-paper font-medium tracking-tight mb-6 leading-[1.08]">
                Your next platform{" "}
                <em className="font-serif italic font-normal text-slate-300">
                  starts here
                </em>
              </h2>
              <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed mb-8">
                A high-converting SaaS marketing website, a headless WordPress architecture,
                a luxury brand flagship, or an interactive GSAP experience. Tell us what you want to build.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello Next Dynamics, I'd like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-paper hover:text-emerald-400 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-emerald-400 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>{SITE.whatsapp}</span>
                  <span className="link-signal" aria-hidden="true">
                    <svg width="24" height="12" viewBox="0 0 30 18" fill="none">
                      <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                      <path d="M10 9H20" stroke="currentColor" strokeWidth="1" />
                      <circle cx="26" cy="9" r="2.5" fill="currentColor" />
                    </svg>
                  </span>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 text-lg text-paper hover:text-electric-cyan transition-colors"
                >
                  <Mail className="w-5 h-5 text-electric-cyan shrink-0" />
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

            {/* Studio Standards & Direct Commitments */}
            <div className="rounded-2xl bg-surface/50 border border-white/[0.08] p-6 space-y-4 backdrop-blur-md">
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold-blueprint">
                STUDIO STANDARDS · DIRECT ACCESS
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-paper">Direct Partner Access</p>
                    <p className="text-[11px] text-paper-muted leading-relaxed mt-0.5">
                      Work directly with senior engineers. Zero junior delegation or account manager telephone game.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-paper">14-Day Production Staging</p>
                    <p className="text-[11px] text-paper-muted leading-relaxed mt-0.5">
                      Initial functional deployment live on your staging domain within 14 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-paper">Full Code & Infrastructure Ownership</p>
                    <p className="text-[11px] text-paper-muted leading-relaxed mt-0.5">
                      100% clean repository handover with zero proprietary vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-paper-muted">
                <span>Response SLA</span>
                <span className="text-paper font-semibold">&lt; 24 Business Hours</span>
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
                        <option>SaaS Marketing Website & Conversion Landing Page</option>
                        <option>Headless WordPress Migration (WPGraphQL + Next.js)</option>
                        <option>Premium Brand Flagship & E-Commerce Storefront</option>
                        <option>Interactive Creative Web Experience (GSAP Motion)</option>
                        <option>Frontend Performance & Core Web Vitals Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-paper-muted mb-2">
                        Allocated Budget
                      </label>
                      <input
                        type="text"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        placeholder="e.g. $10,000 or Flexible"
                        className="w-full px-4 py-3 rounded-xl bg-midnight/60 border border-white/10 text-paper placeholder-paper-muted/40 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
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
