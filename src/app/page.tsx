"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, ArrowRight, Zap, Users, BarChart2, Phone, FileText, Clock, Globe, Shield, Star, ChevronLeft, MessageSquare, Settings, Database } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import FloatingShapes from "@/components/FloatingShapes";
import AriaHub from "@/components/AriaHub";

const LOGOS = ["Stripe", "Shopify", "Notion", "Vercel", "Linear", "Figma"];

const FEATURES = [
  { icon: FileText,  title: "Resume Parsing",   desc: "AI extracts skills, tenure, and signals in under 3 seconds per CV." },
  { icon: Phone,     title: "Voice Interviews",  desc: "Aria calls candidates, adapts questions in real-time, transcribes everything." },
  { icon: BarChart2, title: "Smart Scoring",     desc: "Candidates ranked by fit — not keyword matching — using role-specific rubrics." },
  { icon: Users,     title: "Recruiter Handoff", desc: "Top 10 verified matches land in your inbox with full interview summaries." },
];

// ── Capabilities illustrations ─────────────────────────────────────────────

function AuditFeed() {
  const ENTRIES = [
    { time: "10:42 AM", label: "Decision logged"      },
    { time: "10:41 AM", label: "Bias check passed"    },
    { time: "10:40 AM", label: "Score calculated"     },
    { time: "10:39 AM", label: "Interview completed"  },
  ];
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="audit-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#audit-grid)" />
      </svg>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 gap-2.5">
        {ENTRIES.map(({ time, label }) => (
          <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-3.5 py-2.5 shadow-card">
            <span className="w-5 h-5 rounded-full bg-coral-50 flex items-center justify-center shrink-0">
              <Check size={10} className="text-coral-500" />
            </span>
            <span className="text-[10px] font-mono text-muted/60 shrink-0">{time}</span>
            <span className="text-[11px] font-semibold text-purple-900">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiamondStack() {
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="diamond-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond-grid)" />
      </svg>
      <div className="absolute top-4 bottom-12 left-1/2 -translate-x-1/2 w-px pointer-events-none"
           style={{ background: "linear-gradient(180deg, rgba(240,98,90,0.55) 0%, rgba(45,27,105,0.45) 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 16, width: 48, height: 48, borderRadius: 5,
                    transform: "translateX(-50%) rotate(45deg)",
                    background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 72, width: 40, height: 40, borderRadius: 5,
                    transform: "translateX(-50%) rotate(45deg)",
                    background: "linear-gradient(135deg, #7B5CC4 0%, #5240A8 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 122, width: 32, height: 32, borderRadius: 5,
                    transform: "translateX(-50%) rotate(45deg)",
                    background: "linear-gradient(135deg, #3B2380 0%, #2D1B69 100%)" }} />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 shadow-card whitespace-nowrap">
        <span className="text-[11px] font-semibold text-purple-900">1,000 → 10 in 48 hours</span>
        <span className="w-2 h-2 rounded-full bg-coral-500 shrink-0" />
      </div>
    </div>
  );
}

function IntegrationGrid() {
  const ITEMS = [
    { icon: MessageSquare, color: "text-coral-500",  bg: "bg-coral-50",  style: { top: "8%",  left: "12%" } },
    { icon: Settings,      color: "text-purple-700", bg: "bg-purple-50", style: { top: "4%",  right: "18%" } },
    { icon: FileText,      color: "text-coral-500",  bg: "bg-coral-50",  style: { top: "40%", left: "4%" } },
    { icon: Database,      color: "text-purple-700", bg: "bg-purple-50", style: { top: "36%", right: "6%" } },
    { icon: BarChart2,     color: "text-coral-500",  bg: "bg-coral-50",  style: { bottom: "18%", left: "28%" } },
    { icon: Zap,           color: "text-purple-700", bg: "bg-purple-50", style: { bottom: "14%", right: "20%" } },
  ];
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="cap-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cap-grid)" />
      </svg>
      {ITEMS.map(({ icon: Icon, color, bg, style }, i) => (
        <div
          key={i}
          className="absolute w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-icon"
          style={style as React.CSSProperties}
        >
          <span className={`w-6 h-6 rounded-lg ${bg} flex items-center justify-center`}>
            <Icon size={13} className={color} />
          </span>
        </div>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote: "We cut time-to-interview from 3 weeks to 48 hours. Aria handled 800 applicants and surfaced 8 genuinely great candidates. Our recruiters finally have time to recruit.",
    name: "Sarah Chen", role: "Head of Talent · Acme Corp",
  },
  {
    quote: "The voice interview quality surprised me. Candidates said it felt human. The transcripts were detailed and actionable — better notes than most human interviewers write.",
    name: "Marcus Riley", role: "VP People · Novatech",
  },
  {
    quote: "Bias auditing alone was worth it. Every decision is logged and explainable. Legal loved it, our team loved it, and diverse hire rates improved 22% in Q1.",
    name: "Priya Nair", role: "Chief People Officer · Luminos",
  },
];

const PLANS = [
  {
    name: "Starter",
    monthly: 299, annually: 249,
    desc: "For small teams hiring 1–3 roles/month",
    features: ["500 resume screens/mo", "50 AI voice interviews/mo", "3 active job roles", "Email + chat support"],
    cta: "Start free trial", primary: false,
  },
  {
    name: "Growth",
    monthly: 799, annually: 665,
    desc: "For scaling teams with high volume",
    features: ["2,000 resume screens/mo", "200 AI voice interviews/mo", "Unlimited active roles", "ATS integrations", "Priority support"],
    cta: "Start free trial", primary: true,
  },
  {
    name: "Enterprise",
    monthly: null, annually: null,
    desc: "For large orgs and custom workflows",
    features: ["Unlimited everything", "Custom AI rubrics", "SSO + audit logs", "Dedicated CSM", "SLA guarantee"],
    cta: "Talk to sales", primary: false,
  },
];

export default function HomePage() {
  const [annual, setAnnual] = useState(true);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const t = TESTIMONIALS[testimonialIdx];

  return (
    <main className="overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-[62%_38%] gap-16 items-center">
            <div>
              <FadeUp delay={0}>
                <span className="inline-flex items-center gap-2 bg-coral-50 text-coral-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                  <Zap size={12} /> AI-native recruiting platform
                </span>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h1 className="text-5xl font-extrabold text-purple-900 leading-[1.1] tracking-tight mb-6">
                  <span className="xl:whitespace-nowrap">
                    Hire 10× faster with{" "}
                    <span className="gradient-text">Aria</span>,
                  </span>
                  <br />
                  your AI recruiter
                </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  Aria screens resumes, calls candidates, and runs full voice interviews — so your team reviews only the top 1%.
                </p>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["No candidate accounts needed", "Setup in 15 minutes", "Cancel anytime"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm text-purple-900 font-medium">
                      <Check size={14} className="text-coral-500" /> {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={0.28}>
                <div className="flex flex-wrap gap-3">
                  <GradientButton href="/signup" className="px-7 py-3.5 text-base">
                    Start free trial <ArrowRight size={16} className="ml-2" />
                  </GradientButton>
                  <GradientButton href="/how-it-works" outline className="px-7 py-3.5 text-base">
                    See how it works
                  </GradientButton>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.1} className="hidden lg:block">
              <FloatingShapes />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-purple-100 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-muted/60 uppercase tracking-widest mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-purple-300 font-bold text-lg tracking-tight select-none">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARIA HUB ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Meet Aria — your AI interviewer</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">She adapts every conversation in real-time, in any language, on any device.</p>
          </FadeUp>
          <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">
            <FadeUp delay={0.1} className="flex justify-center">
              <AriaHub />
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                {/* Timeline vertical line */}
                <div
                  className="absolute left-[17px] top-[44px]"
                  style={{
                    width: 2,
                    bottom: 44,
                    background: "linear-gradient(180deg, #F0625A 0%, #7B5CC4 50%, #2D1B69 100%)",
                    borderRadius: 2,
                    opacity: 0.2,
                  } as React.CSSProperties}
                />
                {[
                  { step: "1", label: "Candidate applies",  sub: "Resume auto-parsed in 3s" },
                  { step: "2", label: "Aria calls them",    sub: "Adaptive voice interview" },
                  { step: "3", label: "Score + transcript", sub: "Delivered to your inbox" },
                ].map(({ step, label, sub }, i) => (
                  <div
                    key={step}
                    className={`flex items-center gap-4 ${i < 2 ? "mb-5" : ""}`}
                  >
                    <span
                      className="w-9 h-9 rounded-xl gradient-bg text-white text-sm font-bold flex items-center justify-center shrink-0 relative z-10"
                      style={{ boxShadow: "0 2px 12px rgba(240,98,90,0.40)" }}
                    >
                      {step}
                    </span>
                    <div
                      className="flex-1 rounded-2xl p-5 bg-white"
                      style={{ boxShadow: "0 4px 20px rgba(45,27,105,0.07), 0 1px 3px rgba(45,27,105,0.04)" } as React.CSSProperties}
                    >
                      <p className="text-purple-900 font-semibold text-sm">{label}</p>
                      <p className="text-muted text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURE HIGHLIGHT — 35/65 split ──────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[35%_65%] gap-16 items-start">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 leading-tight mb-6">
                Every step of the funnel, automated
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                From 1,000 applicants to a shortlist of 10 verified, interview-ready candidates — in 48 hours.
              </p>
              <GradientButton href="/how-it-works">
                See the full pipeline <ChevronRight size={16} className="ml-1" />
              </GradientButton>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-px bg-purple-100 rounded-2xl overflow-hidden">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <FadeUp key={title} delay={i * 0.08}>
                  <div className="bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center mb-5">
                      <Icon size={20} className="text-coral-500" />
                    </div>
                    <h3 className="text-purple-900 font-bold text-base mb-2">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT SHOWCASE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Built for how recruiters actually work</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">No clunky setup. No training candidates. Just results.</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Candidate pipeline",
                sub: "Drag-and-drop board, auto-updated by Aria",
                accent: "bg-purple-50",
                rows: ["Applied · 1,204", "Screened · 480", "Interviewed · 96", "Shortlisted · 10"],
              },
              {
                title: "Interview transcript",
                sub: "Full transcript + key quotes highlighted",
                accent: "bg-coral-50",
                rows: ["Q: Walk me through your last role", "A: I led a team of 12 engineers…", "⭐ Strong leadership signal", "Score: 91 / 100"],
              },
              {
                title: "Recruiter dashboard",
                sub: "Live metrics, no manual reporting",
                accent: "bg-surface",
                rows: ["Time-to-screen: 2.1 days", "Interview pass rate: 8.2%", "Diverse shortlists: 74%", "Avg match score: 88.4"],
              },
            ].map(({ title, sub, accent, rows }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="card-lg p-6 h-full flex flex-col">
                  <div className={`${accent} rounded-xl p-4 mb-5`}>
                    <div className="space-y-2">
                      {rows.map((r) => (
                        <div key={r} className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-purple-900 shadow-card">
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-purple-900 font-bold text-base mb-1">{title}</h3>
                  <p className="text-muted text-sm">{sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CAPABILITIES — 3-column divided ──────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Advanced capabilities, out of the box</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">Everything you need to run enterprise-grade hiring at scale.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
              <div className="flex flex-col pr-0 md:pr-10 pb-10 md:pb-0">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">Built-in fairness</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">40+ languages. Every decision logged with audit trails.</p>
                <div className="flex-1"><AuditFeed /></div>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-l border-coral-300 pt-10 md:pt-0 md:px-10 pb-10 md:pb-0">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">2-day turnaround</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">From 1,000 applicants to 10 verified matches.</p>
                <div className="flex-1">
                  <DiamondStack />
                  <p className="mt-3 text-[11px] text-muted/60 text-center max-w-[200px] mx-auto">
                    98% of hiring managers rate Aria-screened candidates higher
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-l border-purple-200 pt-10 md:pt-0 md:pl-10">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">ATS integrations</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">Works with Greenhouse, Lever, Workday, and 30+ more.</p>
                <div className="flex-1"><IntegrationGrid /></div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 7. TESTIMONIAL — oversized pull-quote ───────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-7xl gradient-text font-black leading-none select-none">&ldquo;</span>
            <motion.p
              key={testimonialIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-2xl md:text-3xl font-semibold text-purple-900 leading-snug mt-2 mb-10"
            >
              {t.quote}
            </motion.p>
            <motion.div
              key={`meta-${testimonialIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                {t.name[0]}
              </div>
              <p className="text-purple-900 font-semibold text-sm">{t.name}</p>
              <p className="text-muted text-xs">{t.role}</p>
            </motion.div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-muted hover:border-purple-400 hover:text-purple-900 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`h-2 rounded-full transition-all ${i === testimonialIdx ? "gradient-bg w-5" : "bg-purple-200 w-2"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)}
                className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-muted hover:border-purple-400 hover:text-purple-900 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 8. PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">No per-seat fees. No surprise charges. Cancel anytime.</p>
            <div className="inline-flex items-center gap-1 bg-surface rounded-xl p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white shadow-card text-purple-900" : "text-muted"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white shadow-card text-purple-900" : "text-muted"}`}
              >
                Annual
                <span className="text-[10px] bg-coral-100 text-coral-500 font-bold px-1.5 py-0.5 rounded-full">-17%</span>
              </button>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, monthly, annually, desc, features, cta, primary }, i) => (
              <FadeUp key={name} delay={i * 0.08}>
                <div className={`card-lg p-8 h-full flex flex-col relative ${primary ? "ring-2 ring-coral-500/30" : ""}`}>
                  {primary && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <p className="text-purple-900 font-bold text-lg mb-1">{name}</p>
                  <p className="text-muted text-sm mb-5">{desc}</p>
                  <div className="mb-6">
                    {monthly !== null ? (
                      <>
                        <span className="text-4xl font-extrabold gradient-text">${annual ? annually : monthly}</span>
                        <span className="text-muted text-sm ml-1">/month</span>
                        {annual && <p className="text-xs text-muted/70 mt-1">billed annually</p>}
                      </>
                    ) : (
                      <span className="text-3xl font-extrabold gradient-text">Custom</span>
                    )}
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check size={15} className="text-coral-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={cta === "Talk to sales" ? "/contact" : "/signup"}
                    className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                      primary
                        ? "gradient-bg text-white shadow-btn hover:opacity-90"
                        : "border-2 border-purple-200 text-purple-900 hover:border-purple-400 hover:bg-purple-50"
                    }`}
                  >
                    {cta}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <defs>
            <pattern id="cta-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dot-grid)" opacity="0.45" />
        </svg>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeUp>
            <h2 className="text-5xl font-extrabold text-purple-900 mb-5">
              Ready to hire <span className="gradient-text">10× faster?</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of recruiting teams who&apos;ve handed the volume work to Aria — and got their time back.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/signup" className="px-8 py-4 text-base">
                Start free trial — no credit card <ArrowRight size={16} className="ml-2" />
              </GradientButton>
              <GradientButton href="/contact" outline className="px-8 py-4 text-base">
                Talk to sales
              </GradientButton>
            </div>
            <p className="text-xs text-muted/60 mt-6">14-day free trial · Cancel anytime · GDPR compliant</p>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
