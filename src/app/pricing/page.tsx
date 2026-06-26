"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

const PLANS = [
  {
    name: "Starter",
    monthly: 299, annually: 249,
    desc: "For small teams hiring 1–3 roles/month",
    screenLimit: 500, interviewLimit: 50,
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
    screenLimit: 2000, interviewLimit: 200,
    features: [
      "2,000 resume screens/mo",
      "200 AI voice interviews/mo",
      "Unlimited active roles",
      "Multi-board job distribution",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start free trial", primary: true,
  },
  {
    name: "Enterprise",
    monthly: null, annually: null,
    desc: "For large orgs and custom workflows",
    screenLimit: Infinity, interviewLimit: Infinity,
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

const INR_RATE = 83;

const TOPUP_SEGMENTS = [
  {
    size: "Small", mins: 250, price: 150, badge: null,
    weight: 20,
    from: "#F0625A", to: "#D44E80",
    glowColor: "rgba(240,98,90,0.55)",
  },
  {
    size: "Medium", mins: 1_000, price: 450, badge: "Save 25%/min",
    weight: 27,
    from: "#C44E90", to: "#9B5CC4",
    glowColor: "rgba(155,92,196,0.55)",
  },
  {
    size: "Large", mins: 5_000, price: 1_750, badge: "Save 42%/min",
    weight: 53,
    from: "#7B5CC4", to: "#2D1B69",
    glowColor: "rgba(45,27,105,0.55)",
  },
];
const INR_RATE_TOPUP = 83;

function TopUpMeter() {
  const [active, setActive] = useState<number | null>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  const meterMobileRef = useRef<HTMLDivElement>(null);
  const inView = useInView(meterRef, { once: true, margin: "-80px" });
  const inViewMobile = useInView(meterMobileRef, { once: true, margin: "-80px" });

  return (
    <div>
      {/* ── Desktop: equal-width columns, bar fills column, cards breathe ── */}
      <div ref={meterRef} className="hidden sm:block">
        <div className="flex gap-3">
          {TOPUP_SEGMENTS.map(({ size, weight, mins, price, badge, from, to, glowColor }, i) => (
            <div
              key={size}
              className="flex flex-col flex-1"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Meter segment — fills full column width */}
              <motion.div
                className="relative h-10 rounded-xl overflow-hidden cursor-pointer mb-2"
                style={{
                  background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
                  boxShadow: active === i ? `0 0 20px 2px ${glowColor}` : "none",
                }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
                onTap={() => setActive(active === i ? null : i)}
              >
                <div
                  className="absolute inset-0 transition-opacity duration-200"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
                    opacity: active === i ? 1 : 0.6,
                  }}
                />
                {active === i && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
                    style={{ background: `linear-gradient(90deg, ${from}44 0%, ${to}44 100%)` }}
                  />
                )}
              </motion.div>

              {/* Label */}
              <div className="flex justify-center mb-2">
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest transition-colors duration-200"
                  style={{ color: active === i ? "#2D1B69" : "#9B9BAD" }}
                >
                  {size}
                </span>
              </div>

              {/* Info card — full size, never squished */}
              <div
                className="flex-1 px-6 py-6 rounded-2xl transition-all duration-200 cursor-default"
                style={{
                  background: active === i ? "rgba(245,244,248,0.9)" : "rgba(245,244,248,0.5)",
                  boxShadow: active === i ? `inset 0 0 0 1.5px ${glowColor}` : "none",
                }}
              >
                {badge ? (
                  <span
                    className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full text-white mb-3"
                    style={{ background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)` }}
                  >
                    {badge}
                  </span>
                ) : (
                  <div className="mb-[21px]" />
                )}
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  ${price}
                </p>
                <p className="text-sm font-semibold text-purple-900 mb-1">{mins.toLocaleString()} min</p>
                <p className="text-[11px] text-muted/70 mb-5">
                  ${(price / mins).toFixed(2)}/min · ≈ ₹{((price / mins) * INR_RATE_TOPUP).toFixed(0)}/min
                </p>
                <a
                  href="/demo"
                  className="inline-block text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: active === i ? from : "#E2DDF4",
                    color: active === i ? from : "#6B6B7D",
                  }}
                >
                  Buy {size}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical stack ── */}
      <div className="sm:hidden">
        <div ref={meterMobileRef} className="flex flex-col gap-[3px] rounded-2xl overflow-hidden bg-purple-50 p-[3px] mb-6">
          {TOPUP_SEGMENTS.map(({ size, weight, from, to, glowColor }, i) => (
            <motion.div
              key={size}
              className="relative rounded-xl overflow-hidden cursor-pointer"
              style={{
                height: `${Math.round(weight * 0.7)}px`,
                minHeight: 28,
                background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
                boxShadow: active === i ? `0 0 16px 2px ${glowColor}` : "none",
              }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={inViewMobile ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              onTap={() => setActive(active === i ? null : i)}
            >
              <div
                className="absolute inset-0 transition-opacity duration-200"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
                  opacity: active === i ? 1 : 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {TOPUP_SEGMENTS.map(({ size, mins, price, badge, from, to, glowColor }, i) => (
            <div
              key={size}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 cursor-pointer"
              style={{
                background: active === i ? "rgba(245,244,248,0.9)" : "rgba(245,244,248,0.4)",
                boxShadow: active === i ? `inset 0 0 0 1.5px ${glowColor}` : "none",
              }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div
                className="w-3 shrink-0 self-stretch rounded-full"
                style={{ background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)` }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-bold text-purple-900">{size}</p>
                  {badge && (
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)` }}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted">{mins.toLocaleString()} min · ${(price / mins).toFixed(2)}/min</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xl font-extrabold" style={{ background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  ${price}
                </p>
                <a href="/demo" className="text-[11px] font-semibold text-muted/70 hover:text-purple-900 transition-colors">
                  Buy →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted/60 mt-8">
        1 credit = 1 minute of AI voice or video. Credits are shared across your whole team and never expire while subscribed.
      </p>
    </div>
  );
}

function EstimatorPanel({ annual }: { annual: boolean }) {
  const [screens,    setScreens]    = useState(300);
  const [interviews, setInterviews] = useState(40);

  const plan =
    screens <= 500 && interviews <= 50   ? PLANS[0] :
    screens <= 2000 && interviews <= 200 ? PLANS[1] :
                                           PLANS[2];

  const basePrice: number | null =
    plan.monthly === null ? null :
    annual ? (plan.annually as number) : plan.monthly;

  const extraScreens    = Math.max(0, screens    - (plan.screenLimit    === Infinity ? 0 : plan.screenLimit));
  const extraInterviews = Math.max(0, interviews - (plan.interviewLimit === Infinity ? 0 : plan.interviewLimit));

  return (
    <div className="bg-surface rounded-2xl p-8 grid md:grid-cols-2 gap-10">
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-purple-900">AI phone pre-screens / month</span>
            <span className="text-lg font-extrabold gradient-text">{screens}</span>
          </div>
          <input
            type="range" min={0} max={5000} step={50}
            value={screens}
            onChange={(e) => setScreens(Number(e.target.value))}
            className="w-full accent-coral-500 h-1.5 rounded-full cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-muted/60 mt-1">
            <span>0</span><span>5,000</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-purple-900">AI video interviews / month</span>
            <span className="text-lg font-extrabold gradient-text">{interviews}</span>
          </div>
          <input
            type="range" min={0} max={500} step={10}
            value={interviews}
            onChange={(e) => setInterviews(Number(e.target.value))}
            className="w-full accent-coral-500 h-1.5 rounded-full cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-muted/60 mt-1">
            <span>0</span><span>500</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 flex flex-col shadow-card">
        <p className="text-[10px] font-semibold text-muted/60 uppercase tracking-widest mb-1">Recommended plan</p>
        <p className="text-2xl font-extrabold text-purple-900 mb-0.5">{plan.name}</p>
        {basePrice !== null ? (
          <>
            <p className="text-3xl font-extrabold gradient-text mb-0.5">
              ${basePrice}<span className="text-base text-muted font-normal">/mo</span>
            </p>
            <p className="text-xs text-muted/70 mb-4">
              ≈ ₹{(basePrice * INR_RATE).toLocaleString("en-IN")}/mo {annual ? "· billed annually" : "· billed monthly"}
            </p>
          </>
        ) : (
          <p className="text-3xl font-extrabold gradient-text mb-4">Custom pricing</p>
        )}
        <div className="space-y-2 text-xs text-muted mb-5 flex-1">
          <div className="flex justify-between">
            <span>Included screens</span>
            <span className="font-semibold text-purple-900">
              {plan.screenLimit === Infinity ? "Unlimited" : plan.screenLimit.toLocaleString() + "/mo"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Included interviews</span>
            <span className="font-semibold text-purple-900">
              {plan.interviewLimit === Infinity ? "Unlimited" : plan.interviewLimit.toLocaleString() + "/mo"}
            </span>
          </div>
          {extraScreens > 0 && (
            <div className="flex justify-between text-coral-500">
              <span>{extraScreens.toLocaleString()} extra screens</span>
              <span className="font-semibold">Need top-up ↓</span>
            </div>
          )}
          {extraInterviews > 0 && (
            <div className="flex justify-between text-coral-500">
              <span>{extraInterviews.toLocaleString()} extra interviews</span>
              <span className="font-semibold">Need top-up ↓</span>
            </div>
          )}
        </div>
        <a
          href={plan.cta === "Talk to sales" ? "/contact" : "/signup"}
          className="block text-center py-3 rounded-xl text-sm font-semibold gradient-bg text-white shadow-btn hover:opacity-90 transition-all"
        >
          {plan.cta === "Talk to sales" ? "Talk to sales" : `Start ${plan.name}`}
          <ArrowRight size={14} className="inline ml-1.5" />
        </a>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [annual,   setAnnual]   = useState(true);
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-purple-900 mb-3">Estimate your month</h2>
            <p className="text-muted">Drag to match your hiring volume and see exactly what you&apos;d pay.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <EstimatorPanel annual={annual} />
          </FadeUp>
        </div>
      </section>

      {/* Top-ups */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-coral-50 text-coral-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              Voice &amp; video top-ups
            </span>
            <h2 className="text-3xl font-extrabold text-purple-900 mb-3">Need more minutes?</h2>
            <p className="text-muted max-w-md mx-auto">Buy extra voice &amp; video credits any time. Bigger bundles cost less per minute.</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <TopUpMeter />
          </FadeUp>
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

      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <defs>
            <pattern id="pricing-cta-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-cta-dot-grid)" opacity="0.45" />
        </svg>
        <div className="max-w-xl mx-auto px-4 text-center relative">
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
