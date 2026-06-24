"use client";
import { useState } from "react";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="pt-24 pb-20 bg-white">
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

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
            <FadeUp>
              <div className="space-y-5">
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-coral-500" />
                  </div>
                  <div>
                    <p className="text-purple-900 font-bold text-sm mb-1">Email us</p>
                    <p className="text-muted text-sm">hello@recruitai.app</p>
                    <p className="text-xs text-muted/70 mt-1">Responses within 24 hours</p>
                  </div>
                </div>
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center shrink-0">
                    <Calendar size={20} className="text-coral-500" />
                  </div>
                  <div>
                    <p className="text-purple-900 font-bold text-sm mb-1">Book a demo</p>
                    <p className="text-muted text-sm">30-minute live walkthrough</p>
                    <p className="text-xs text-muted/70 mt-1">No sales pressure. See the product live.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-coral-50 rounded-2xl p-6">
                  <p className="text-purple-900 font-bold text-sm mb-2">Enterprise inquiry?</p>
                  <p className="text-muted text-sm leading-relaxed">
                    For custom contracts, volume pricing, SSO, or dedicated support — use the form and mention &ldquo;Enterprise&rdquo; in your message.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              {submitted ? (
                <div className="card-lg p-12 text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg mx-auto mb-5 flex items-center justify-center">
                    <ArrowRight size={24} className="text-white" />
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
        </div>
      </section>
    </main>
  );
}
