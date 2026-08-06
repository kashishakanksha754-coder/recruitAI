"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-24">
      <FadeUp className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-extrabold gradient-text">Hyrix</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-purple-900 mb-2">Request a demo</h1>
          <p className="text-muted text-sm">30-minute live walkthrough. No sales pressure.</p>
        </div>

        {submitted ? (
          <div className="card-lg p-10 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-purple-900 mb-2">You&apos;re on the list!</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              We&apos;ll be in touch within one business day to schedule your demo.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-2.5 rounded-xl transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
            >
              Back to home <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="card-lg p-8">
            <div className="flex justify-center gap-5 mb-6">
              {["No credit card", "Cancel anytime", "Human support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1 text-xs text-purple-900 font-medium">
                  <Check size={12} className="text-coral-500" /> {item}
                </span>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Full name *</label>
                  <input
                    required type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white placeholder:text-muted/50"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Work email *</label>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white placeholder:text-muted/50"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-purple-900 mb-1.5">Company *</label>
                <input
                  required type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white placeholder:text-muted/50"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-purple-900 mb-1.5">Your role</label>
                <select
                  value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                >
                  <option value="">Select a role</option>
                  <option>HR / Recruiter</option>
                  <option>Hiring Manager</option>
                  <option>Talent Acquisition Lead</option>
                  <option>Founder / Executive</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-purple-900 mb-1.5">Anything specific you&apos;d like to see?</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 resize-none placeholder:text-muted/50"
                  placeholder="e.g. AI interviews, resume screening, audit trail…"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-btn"
                style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
              >
                Request demo <ArrowRight size={14} />
              </button>
            </form>

            <p className="text-center text-sm text-muted mt-5">
              Already have an account?{" "}
              <Link href="/login" className="text-coral-500 hover:text-coral-600 font-semibold">Sign in</Link>
            </p>
          </div>
        )}
      </FadeUp>
    </main>
  );
}
