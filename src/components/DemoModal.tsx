"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-purple-900 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-purple-900 mb-2">You&apos;re on the list!</h2>
            <p className="text-muted text-sm leading-relaxed">
              We&apos;ll be in touch within one business day to schedule your demo.
            </p>
            <button
              onClick={onClose}
              className="mt-6 text-sm font-semibold text-white px-6 py-2.5 rounded-xl transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold text-purple-900 mb-1">Request a demo</h2>
            <p className="text-muted text-sm mb-6">We&apos;ll show you Hyrix live and answer your questions.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Full name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-muted/50"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-900 mb-1.5">Work email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-muted/50"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-purple-900 mb-1.5">Company *</label>
                <input
                  required
                  type="text"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder:text-muted/50"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-purple-900 mb-1.5">Your role</label>
                <select
                  value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
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
                  className="w-full border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none placeholder:text-muted/50"
                  placeholder="e.g. AI interviews, resume screening, audit trail…"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
              >
                Request demo →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
