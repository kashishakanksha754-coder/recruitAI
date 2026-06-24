"use client";
import { useState } from "react";
import { Mail, Calendar, Building2, Copy, Check, ArrowRight, ExternalLink } from "lucide-react";
import FadeUp from "@/components/FadeUp";

// ─── Copy-to-clipboard value box ──────────────────────────────────────────────────
function CopyBox({ value, href }: { value: string; href?: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mt-4 flex items-center gap-2 bg-white border border-purple-100 rounded-xl px-4 py-2.5 text-sm font-medium text-purple-900">
      <span className="flex-1 truncate">{value}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-muted hover:text-purple-900 transition-colors"
          title="Open link"
        >
          <ExternalLink size={15} />
        </a>
      ) : (
        <button
          onClick={handleCopy}
          className="shrink-0 text-muted hover:text-purple-900 transition-colors relative"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <Check size={15} className="text-coral-500" />
          ) : (
            <Copy size={15} />
          )}
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-900 text-white text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      )}
    </div>
  );
}

// ─── Lightweight SVG dot-map of the world ────────────────────────────────────────────
function WorldDotMap() {
  const DOT_GRID: [number, number][] = [
    // North America
    [14,6],[15,6],[16,6],[13,7],[14,7],[15,7],[16,7],[17,7],
    [13,8],[14,8],[15,8],[16,8],[17,8],[18,8],
    [14,9],[15,9],[16,9],[17,9],[18,9],
    [15,10],[16,10],[17,10],[18,10],
    [16,11],[17,11],[18,11],
    [16,12],[17,12],
    // South America
    [18,13],[19,13],[20,13],
    [17,14],[18,14],[19,14],[20,14],
    [18,15],[19,15],[20,15],
    [18,16],[19,16],[20,16],
    [19,17],[20,17],
    [19,18],[20,18],
    [20,19],[21,19],
    [20,20],
    // Europe
    [28,5],[29,5],[30,5],[31,5],
    [27,6],[28,6],[29,6],[30,6],[31,6],[32,6],
    [27,7],[28,7],[29,7],[30,7],[31,7],[32,7],[33,7],
    [28,8],[29,8],[30,8],[31,8],[32,8],
    [29,9],[30,9],[31,9],[32,9],
    // Africa
    [28,10],[29,10],[30,10],[31,10],[32,10],[33,10],
    [28,11],[29,11],[30,11],[31,11],[32,11],[33,11],
    [28,12],[29,12],[30,12],[31,12],[32,12],
    [29,13],[30,13],[31,13],[32,13],
    [29,14],[30,14],[31,14],
    [30,15],[31,15],
    [30,16],
    // Asia
    [33,5],[34,5],[35,5],[36,5],[37,5],[38,5],[39,5],[40,5],[41,5],[42,5],[43,5],[44,5],[45,5],
    [33,6],[34,6],[35,6],[36,6],[37,6],[38,6],[39,6],[40,6],[41,6],[42,6],[43,6],[44,6],[45,6],[46,6],[47,6],
    [33,7],[34,7],[35,7],[36,7],[37,7],[38,7],[39,7],[40,7],[41,7],[42,7],[43,7],[44,7],[45,7],[46,7],[47,7],
    [34,8],[35,8],[36,8],[37,8],[38,8],[39,8],[40,8],[41,8],[42,8],[43,8],[44,8],[45,8],[46,8],
    [35,9],[36,9],[37,9],[38,9],[39,9],[40,9],[41,9],[42,9],[43,9],[44,9],[45,9],
    [36,10],[37,10],[38,10],[39,10],[40,10],[41,10],[42,10],[43,10],
    [38,11],[39,11],[40,11],[41,11],[42,11],
    [38,12],[39,12],[40,12],[41,12],
    [39,13],[40,13],[41,13],
    [40,14],[41,14],
    // Australia
    [41,16],[42,16],[43,16],[44,16],[45,16],
    [41,17],[42,17],[43,17],[44,17],[45,17],[46,17],
    [42,18],[43,18],[44,18],[45,18],[46,18],
    [43,19],[44,19],[45,19],
    [44,20],
  ];

  // Pin markers: [col, row, color]
  const PINS: [number, number, string][] = [
    [15, 8,  "#2D1B69"], // North America
    [30, 7,  "#2D1B69"], // Europe
    [39, 8,  "#F0625A"], // Asia
    [43, 17, "#F0625A"], // Australia / APAC
  ];

  const CELL = 9; // px per grid cell
  const COLS = 60;
  const ROWS = 26;
  const W = COLS * CELL;
  const H = ROWS * CELL;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto opacity-90"
      aria-hidden
    >
      {/* Dots */}
      {DOT_GRID.map(([c, r], i) => (
        <circle
          key={i}
          cx={c * CELL + CELL / 2}
          cy={r * CELL + CELL / 2}
          r={1.8}
          fill="#D0CBF0"
        />
      ))}
      {/* Pin markers */}
      {PINS.map(([c, r, fill], i) => {
        const cx = c * CELL + CELL / 2;
        const cy = r * CELL + CELL / 2;
        return (
          <g key={`pin-${i}`}>
            <circle cx={cx} cy={cy} r={5} fill={fill} opacity={0.15} />
            <circle cx={cx} cy={cy} r={3} fill={fill} />
          </g>
        );
      })}
    </svg>
  );
}

// ─── Contact page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="pt-24 pb-20 bg-white">

      {/* Header */}
      <section className="py-20 bg-surface">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-4 tracking-tight">
              Let&apos;s <span className="gradient-text">talk</span>
            </h1>
            <p className="text-muted text-xl">We respond to every message within one business day.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Divided strip ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAFBFF] border-y border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-purple-100">

              {/* Col 1 — Email */}
              <div className="flex flex-col px-8 py-8 lg:py-0 first:pl-0 last:pr-0">
                <div className="w-10 h-10 rounded-xl bg-white shadow-icon flex items-center justify-center mb-4">
                  <Mail size={18} className="text-purple-900" />
                </div>
                <p className="text-purple-900 font-bold text-sm mb-1">Email us</p>
                <p className="text-muted text-xs leading-relaxed">Responses within 24 hours, every working day.</p>
                <CopyBox value="hello@recruitai.app" />
              </div>

              {/* Col 2 — Book a demo */}
              <div className="flex flex-col px-8 py-8 lg:py-0">
                <div className="w-10 h-10 rounded-xl bg-white shadow-icon flex items-center justify-center mb-4">
                  <Calendar size={18} className="text-purple-900" />
                </div>
                <p className="text-purple-900 font-bold text-sm mb-1">Book a demo</p>
                <p className="text-muted text-xs leading-relaxed">30-minute live walkthrough. No sales pressure.</p>
                <CopyBox value="30-min live walkthrough" href="https://calendly.com/recruitai" />
              </div>

              {/* Col 3 — Enterprise */}
              <div className="flex flex-col px-8 py-8 lg:py-0">
                <div className="w-10 h-10 rounded-xl bg-white shadow-icon flex items-center justify-center mb-4">
                  <Building2 size={18} className="text-purple-900" />
                </div>
                <p className="text-purple-900 font-bold text-sm mb-1">Enterprise inquiry</p>
                <p className="text-muted text-xs leading-relaxed">
                  Custom contracts, volume pricing, SSO, and dedicated CSM. Mention &ldquo;Enterprise&rdquo; in the form below.
                </p>
                <div className="mt-4 flex items-center gap-2 bg-white border border-purple-100 rounded-xl px-4 py-2.5 text-xs font-medium text-muted">
                  Use the contact form ↓
                </div>
              </div>

              {/* Col 4 — World map */}
              <div className="flex flex-col items-center justify-center px-8 py-8 lg:py-0">
                <p className="text-[10px] font-semibold text-muted/60 uppercase tracking-widest mb-3 text-center">
                  Teams in 40+ countries
                </p>
                <WorldDotMap />
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Contact form ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-purple-900">Send us a message</h2>
            <p className="text-muted text-sm mt-2">For anything detailed, complex, or Enterprise-related.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            {submitted ? (
              <div className="card-lg p-12 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-5 flex items-center justify-center">
                  <Check size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-extrabold text-purple-900 mb-3">Message sent!</h2>
                <p className="text-muted">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-lg p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-purple-900 mb-1.5">Name</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-purple-900 mb-1.5">Work email</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Message</label>
                  <textarea
                    required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white resize-none"
                    placeholder="Tell us about your hiring needs…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg shadow-btn hover:opacity-90 transition-all"
                >
                  Send message <ArrowRight size={14} className="inline ml-1.5" />
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
