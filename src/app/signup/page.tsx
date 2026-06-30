"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function SignupPage() {
  const { T } = useLanguage();
  const S = T.signup;
  const brandName = T.nav.brandName;
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
            <span className="text-2xl font-extrabold gradient-text">{brandName}</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-purple-900 mt-6 mb-2">{S.title}</h1>
          <p className="text-muted text-sm">{S.sub}</p>
        </div>

        <div className="flex justify-center gap-5 mb-6">
          {[S.badge1, S.badge2, S.badge3].map((item) => (
            <span key={item} className="inline-flex items-center gap-1 text-xs text-purple-900 font-medium">
              <Check size={12} className="text-coral-500" /> {item}
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="card-lg p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-purple-900 mb-1.5">{S.nameLabel}</label>
              <input
                type="text" required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                placeholder={S.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-purple-900 mb-1.5">{S.companyLabel}</label>
              <input
                type="text" required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
                placeholder={S.companyPlaceholder}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-purple-900 mb-1.5">{S.emailLabel}</label>
            <input
              type="email" required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white"
              placeholder={S.emailPlaceholder}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-purple-900 mb-1.5">{S.passwordLabel}</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"} required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-purple-100 text-purple-900 text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 bg-white pe-11"
                placeholder={S.passwordPlaceholder}
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
            {S.createAccount} <ArrowRight size={14} className="rtl:scale-x-[-1]" />
          </button>
          <p className="text-center text-xs text-muted/70">
            {S.termsNote}{" "}
            <Link href="/legal/terms" className="text-coral-500 hover:underline">{S.terms}</Link>
            {" "}{S.and}{" "}
            <Link href="/legal/privacy" className="text-coral-500 hover:underline">{S.privacyPolicy}</Link>.
          </p>
        </form>

        <p className="text-center text-sm text-muted mt-6">
          {S.haveAccount}{" "}
          <Link href="/login" className="text-coral-500 hover:text-coral-600 font-semibold">{S.signIn}</Link>
        </p>
      </FadeUp>
    </main>
  );
}
