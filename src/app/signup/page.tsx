"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export default function SignupPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", password: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-24">
      <FadeUp className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-extrabold gradient-text">Recruit AI</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-purple-900 mt-6 mb-2">Start your free trial</h1>
          <p className="text-muted text-sm">14 days free · No credit card · Cancel anytime</p>
        </div>

        <div className="flex justify-center gap-5 mb-6">
          {["No candidate accounts", "Setup in 15 min", "Full Growth features"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1 text-xs text-purple-900 font-medium">
              <Check size={12} className="text-coral-500" /> {item}
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="card-lg p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-purple-900 mb-1.5">Your name</label>
              <input
                type="text" required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-purple-900 mb-1.5">Company</label>
              <input
                type="text" required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                placeholder="Acme Corp"
              />
            </div>
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
          <div>
            <label className="block text-xs font-semibold text-purple-900 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"} required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white pr-11"
                placeholder="Min. 8 characters"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-purple-900"
              >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg shadow-btn hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Create account <ArrowRight size={14} />
          </button>
          <p className="text-center text-xs text-muted/70">
            By signing up you agree to our{" "}
            <Link href="/terms" className="text-coral-500 hover:underline">Terms</Link>
            {" and "}
            <Link href="/privacy" className="text-coral-500 hover:underline">Privacy Policy</Link>.
          </p>
        </form>

        <p className="text-center text-sm text-muted mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-coral-500 hover:text-coral-600 font-semibold">Sign in</Link>
        </p>
      </FadeUp>
    </main>
  );
}
