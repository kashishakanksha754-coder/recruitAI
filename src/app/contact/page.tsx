"use client";
import { useState } from "react";
import { Mail, Calendar } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-navy-950 min-h-screen pt-24">
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <FadeUp>
            <h1 className="text-4xl font-bold text-white">Get in touch.</h1>
            <p className="text-slate-500 mt-2 text-sm">
              Questions about the product, a custom pricing conversation, or just want to see it in action — send us a note.
            </p>
          </FadeUp>

          {submitted ? (
            <FadeUp delay={0.05}>
              <div
                className="mt-10 rounded-xl border p-8 text-center"
                style={{ borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)" }}
                >
                  <Mail size={20} className="text-white" />
                </div>
                <p className="text-white font-semibold text-lg">Message received.</p>
                <p className="text-slate-400 text-sm mt-2">We&apos;ll reply to your work email within one business day.</p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.08}>
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Full name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="Kashish Anand"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Work email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1">Company name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="Acme Staffing"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1">I am a:</label>
                  <select
                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white bg-navy-900 border border-white/10 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    style={{ background: "#0d1528" }}
                  >
                    <option value="">Select one</option>
                    <option>Individual recruiter</option>
                    <option>Staffing company</option>
                    <option>Enterprise team</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)" }}
                >
                  Send message
                </button>
              </form>
            </FadeUp>
          )}

          <FadeUp delay={0.15}>
            <div
              className="mt-8 rounded-xl border p-5 flex items-start gap-4"
              style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.04)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <Calendar size={16} style={{ color: "#818cf8" }} />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Running a larger team?</p>
                <p className="text-slate-500 text-sm mt-1">
                  Book a 30-minute live demo. We&apos;ll walk through the full pipeline with your actual job requirements.
                </p>
                <a
                  href="#"
                  className="text-xs font-medium mt-2 inline-block"
                  style={{ color: "#818cf8" }}
                >
                  Book a demo call →
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
