"use client";
import { useState } from "react";
import { CheckCircle, Phone, Video } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

const plans = [
  {
    name: "Pilot",
    price: "Free",
    period: "",
    desc: "Test the full pipeline with a small batch. No credit card required.",
    highlight: false,
    features: [
      "3 active jobs",
      "50 CV screens included",
      "10 AI voice screening minutes",
      "5 AI video interview minutes",
      "Bulk upload and apply link",
      "Email support",
    ],
    cta: "Start for free",
    href: "/signup",
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "/month",
    desc: "For individual recruiters and small teams running multiple active roles.",
    highlight: true,
    features: [
      "Unlimited active jobs",
      "Unlimited CV screens",
      "500 AI voice minutes included",
      "200 AI video minutes included",
      "Shareable apply links",
      "Aria question customization",
      "Priority email support",
    ],
    cta: "Start free trial",
    href: "/signup",
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For staffing firms and enterprise teams with high-volume hiring needs.",
    highlight: false,
    features: [
      "Everything in Growth",
      "Custom voice and video credit pools",
      "Team seats with role-based access",
      "Audit logs and compliance exports",
      "ATS / CRM integrations",
      "Dedicated onboarding and account manager",
    ],
    cta: "Book a demo",
    href: "/contact",
  },
];

function CreditEstimator() {
  const [voiceMin, setVoiceMin] = useState(200);
  const [videoMin, setVideoMin] = useState(100);
  const voiceCost = (voiceMin * 3.5).toFixed(0);
  const videoCost = (videoMin * 12).toFixed(0);
  const total = (Number(voiceCost) + Number(videoCost)).toFixed(0);

  return (
    <div
      className="rounded-xl border p-6 max-w-lg mx-auto"
      style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.04)" }}
    >
      <p className="text-white font-semibold mb-1">Estimate your monthly credit usage</p>
      <p className="text-slate-500 text-sm mb-5">CV screening is always included. You pay only for AI voice and video minutes.</p>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-slate-400 text-sm flex items-center gap-1">
              <Phone size={12} style={{ color: "#818cf8" }} /> Voice screening minutes
            </label>
            <span className="text-white text-sm font-medium">{voiceMin} min</span>
          </div>
          <input
            type="range" min={0} max={2000} step={50}
            value={voiceMin}
            onChange={(e) => setVoiceMin(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
          <p className="text-slate-600 text-xs mt-1">≈ {Math.round(voiceMin / 7)} candidates at 7 min avg call</p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="text-slate-400 text-sm flex items-center gap-1">
              <Video size={12} style={{ color: "#818cf8" }} /> Video interview minutes
            </label>
            <span className="text-white text-sm font-medium">{videoMin} min</span>
          </div>
          <input
            type="range" min={0} max={1000} step={25}
            value={videoMin}
            onChange={(e) => setVideoMin(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
          <p className="text-slate-600 text-xs mt-1">≈ {Math.round(videoMin / 12)} candidates at 12 min avg interview</p>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-white/8 grid grid-cols-3 gap-3 text-center">
        <div>
          <p className="gradient-text font-bold">₹{voiceCost}</p>
          <p className="text-slate-500 text-xs">Voice credits</p>
        </div>
        <div>
          <p className="gradient-text font-bold">₹{videoCost}</p>
          <p className="text-slate-500 text-xs">Video credits</p>
        </div>
        <div>
          <p className="text-white font-bold">₹{total}</p>
          <p className="text-slate-500 text-xs">Total / month</p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-navy-950 min-h-screen pt-24">
      {/* HERO */}
      <section className="py-16 px-4 text-center">
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Simple pricing.{" "}
            <span className="gradient-text">Pay only for what you use.</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm tracking-wide">
            Unlimited jobs and screening, always included.&nbsp;&nbsp;You&apos;re billed only for AI voice and video minutes.
          </p>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            CV screening runs on every candidate at no extra cost. You pay only when Aria picks up a call or runs a video interview.
          </p>
        </FadeUp>
      </section>

      {/* PLAN CARDS */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.08}>
              <div
                className="rounded-xl border p-6 flex flex-col h-full"
                style={{
                  borderColor: plan.highlight ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)",
                  background: plan.highlight
                    ? "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(124,58,237,0.08))"
                    : "rgba(255,255,255,0.02)",
                  boxShadow: plan.highlight ? "0 0 30px rgba(99,102,241,0.15)" : "none",
                }}
              >
                {plan.highlight && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full w-fit mb-3"
                    style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)", color: "#fff" }}>
                    Most popular
                  </span>
                )}
                <p className="text-white font-bold text-lg">{plan.name}</p>
                <div className="mt-2 mb-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#818cf8" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <GradientButton href={plan.href} className="w-full" outline={!plan.highlight}>
                    {plan.cta}
                  </GradientButton>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Estimate your credit usage.
            </h2>
            <CreditEstimator />
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl font-bold text-white text-center mb-10">Common questions</h2>
          </FadeUp>
          {[
            {
              q: "What counts as a CV screen?",
              a: "Every resume uploaded or submitted through your apply link is parsed and scored. CV screening is always included — it never counts against a credit balance.",
            },
            {
              q: "What counts as a voice minute?",
              a: "Each minute Aria spends on a live call with a candidate. The average screening call is 6–8 minutes. You're billed only for actual call time.",
            },
            {
              q: "What counts as a video minute?",
              a: "Each minute of video interview recorded and analyzed by Aria. Async video interviews average 10–15 minutes per candidate.",
            },
            {
              q: "Can I roll over unused credits?",
              a: "Credits on the Growth plan roll over for one billing period. Custom agreements on Scale can include larger rollover windows.",
            },
            {
              q: "Is there a contract on Growth?",
              a: "No. Growth is month-to-month. Cancel any time. Scale plans typically involve an annual agreement.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border-b border-white/8 py-5">
                <p className="text-white font-medium mb-2">{item.q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
