"use client";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

const PLANS = [
  {
    name: "Starter",
    monthly: 299, annually: 249,
    desc: "For small teams hiring 1–3 roles/month",
    features: [
      "500 resume screens/mo",
      "50 AI voice interviews/mo",
      "3 active job roles",
      "Basic analytics dashboard",
      "Email + chat support",
    ],
    cta: "Start free trial", primary: false,
  },
  {
    name: "Growth",
    monthly: 799, annually: 665,
    desc: "For scaling teams with high volume",
    features: [
      "2,000 resume screens/mo",
      "200 AI voice interviews/mo",
      "Unlimited active roles",
      "ATS integrations",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start free trial", primary: true,
  },
  {
    name: "Enterprise",
    monthly: null, annually: null,
    desc: "For large orgs and custom workflows",
    features: [
      "Unlimited everything",
      "Custom AI rubrics",
      "SSO + audit logs",
      "Dedicated CSM",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Talk to sales", primary: false,
  },
];

const FAQS = [
  { q: "Is there a free trial?", a: "Yes — 14 days, full Growth plan features, no credit card required." },
  { q: "What happens when I hit my screen limit?", a: "We'll notify you at 80%. You can upgrade instantly or wait for the next billing cycle." },
  { q: "Can candidates tell they're talking to an AI?", a: "Aria introduces herself as an AI interviewer by default. Transparent disclosure is baked in." },
  { q: "Do candidates need to create accounts?", a: "Never. Candidates interact purely via phone call or a one-time video link." },
  { q: "Is our data used to train your models?", a: "No. Your data is never used for model training. Full data isolation per account." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-20 bg-surface">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-4 tracking-tight">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h1>
            <p className="text-muted text-xl mb-8">No per-seat fees. No surprise charges. Cancel anytime.</p>
            <div className="inline-flex items-center gap-1 bg-white rounded-xl p-1 shadow-card">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${!annual ? "gradient-bg text-white shadow-btn" : "text-muted"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "gradient-bg text-white shadow-btn" : "text-muted"}`}
              >
                Annual
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${annual ? "bg-white/20 text-white" : "bg-coral-100 text-coral-500"}`}>-17%</span>
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, monthly, annually, desc, features, cta, primary }, i) => (
              <FadeUp key={name} delay={i * 0.08}>
                <div className={`card-lg p-8 h-full flex flex-col relative ${primary ? "ring-2 ring-coral-500/30" : ""}`}>
                  {primary && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <p className="text-purple-900 font-bold text-xl mb-1">{name}</p>
                  <p className="text-muted text-sm mb-6">{desc}</p>
                  <div className="mb-7">
                    {monthly !== null ? (
                      <>
                        <span className="text-5xl font-extrabold gradient-text">${annual ? annually : monthly}</span>
                        <span className="text-muted text-sm ml-1">/month</span>
                        {annual && <p className="text-xs text-muted/70 mt-1">billed annually</p>}
                      </>
                    ) : (
                      <span className="text-4xl font-extrabold gradient-text">Custom</span>
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
                    className={`block text-center py-3.5 rounded-xl text-sm font-semibold transition-all ${
                      primary
                        ? "gradient-bg text-white shadow-btn hover:opacity-90"
                        : "border-2 border-purple-200 text-purple-900 hover:border-purple-400 hover:bg-purple-50"
                    }`}
                  >
                    {cta} {primary && <ArrowRight size={14} className="inline ml-1" />}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-purple-900">Frequently asked questions</h2>
          </FadeUp>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="card overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 font-semibold text-purple-900 text-sm flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {q}
                    <span className={`text-muted transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-purple-50 pt-3">
                      {a}
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">Still have questions?</h2>
            <p className="text-muted mb-8">Talk to a human on our team — no sales pressure.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/signup">Start free trial</GradientButton>
              <GradientButton href="/contact" outline>Talk to sales</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
