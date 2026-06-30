"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function LoginPage() {
  const { T } = useLanguage();
  const L = T.login;
  const brandName = T.nav.brandName;
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-24">
      <FadeUp className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-extrabold gradient-text">{brandName}</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-purple-900 mt-6 mb-2">{L.welcomeBack}</h1>
          <p className="text-muted text-sm">{L.sub}</p>
        </div>

        <form onSubmit={handleSubmit} className="card-lg p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-purple-900 mb-1.5">{L.emailLabel}</label>
            <input
              type="email" required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
              placeholder={L.emailPlaceholder}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-purple-900">{L.passwordLabel}</label>
              <Link href="#" className="text-xs text-coral-500 hover:text-coral-600 font-medium">{L.forgotPassword}</Link>
            </div>
            <div className="relative">
              <input
                type={show ? "text" : "password"} required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white pe-11"
                placeholder={L.passwordPlaceholder}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-purple-900"
              >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg shadow-btn hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            {L.signIn} <ArrowRight size={14} className="rtl:scale-x-[-1]" />
          </button>
        </form>

        <p className="text-center text-sm text-muted mt-6">
          {L.noAccount}{" "}
          <Link href="/signup" className="text-coral-500 hover:text-coral-600 font-semibold">{L.startTrial}</Link>
        </p>
      </FadeUp>
    </main>
  );
}
