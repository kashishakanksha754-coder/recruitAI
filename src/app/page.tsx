"use client";
import React, { useState ,useRef} from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, ArrowRight, Zap, Users, BarChart2, Phone, FileText, ChevronLeft } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import FloatingShapes from "@/components/FloatingShapes";
import AriaHub from "@/components/AriaHub";
import { useLanguage } from "@/context/LanguageContext";

// ── Capabilities illustrations ─────────────────────────────────────────────

function AuditFeed() {
  const { T } = useLanguage();
  const ENTRIES = [
    { time: "10:42 AM", label: T.home.auditEntry1 },
    { time: "10:41 AM", label: T.home.auditEntry2 },
    { time: "10:40 AM", label: T.home.auditEntry3 },
    { time: "10:39 AM", label: T.home.auditEntry4 },
  ];
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="audit-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#audit-grid)" />
      </svg>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 gap-2.5">
        {ENTRIES.map(({ time, label }) => (
          <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-3.5 py-2.5 shadow-card">
            <span className="w-5 h-5 rounded-full bg-coral-50 flex items-center justify-center shrink-0">
              <Check size={10} className="text-coral-500 rtl:-scale-x-100" />
            </span>
            <span className="text-[10px] font-mono text-muted/60 shrink-0">{time}</span>
            <span className="text-[11px] font-semibold text-purple-900">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiamondStack() {
  const { T } = useLanguage();
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="diamond-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond-grid)" />
      </svg>
      <div className="absolute top-4 bottom-12 left-1/2 -translate-x-1/2 w-px pointer-events-none"
           style={{ background: "linear-gradient(180deg, rgba(240,98,90,0.55) 0%, rgba(45,27,105,0.45) 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 16, width: 48, height: 48, borderRadius: 5, transform: "translateX(-50%) rotate(45deg)", background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 72, width: 40, height: 40, borderRadius: 5, transform: "translateX(-50%) rotate(45deg)", background: "linear-gradient(135deg, #7B5CC4 0%, #5240A8 100%)" }} />
      <div className="absolute left-1/2"
           style={{ top: 122, width: 32, height: 32, borderRadius: 5, transform: "translateX(-50%) rotate(45deg)", background: "linear-gradient(135deg, #3B2380 0%, #2D1B69 100%)" }} />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 shadow-card whitespace-nowrap">
        <span className="text-[11px] font-semibold text-purple-900">{T.home.diamondPill}</span>
        <span className="w-2 h-2 rounded-full bg-coral-500 shrink-0" />
      </div>
    </div>
  );
}

function JobDistributionVisual() {
  const { T , lang } = useLanguage();
  const PLATFORMS = [
    { label: lang === "ar" ? "لينكدإن" : "LinkedIn",  color: "#0A66C2", text: "white" },
    { label: lang === "ar" ? "ناوكري" : "Naukri",    color: "#4A90D9", text: "white" },
    { label: lang === "ar" ? "جلاسدور" : "Glassdoor", color: "#0CAA41", text: "white" },
    { label: lang === "ar" ? "إنديد" : "Indeed",      color: "#2164F3", text: "white" },
  ];
  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden rtl:-scale-x-100" dir="ltr">
      <svg className="absolute inset-0 w-full h-full " aria-hidden>
        <defs>
          <pattern id="cap-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cap-grid)" />
        {[30, 42, 55, 68].map((pct, i) => (
          <line key={i} x1="22%" y1="50%" x2="60%" y2={`${pct}%`} stroke="#C4B5F8" strokeWidth="1.2" strokeDasharray="4 3" />
        ))}
      </svg>
      <div className="absolute flex flex-col items-center gap-1" style={{ left: "10%", top: "50%", transform: "translateY(-50%)" }}>
        <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center">
          <span className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
            <FileText size={15} className="text-purple-700 " />
          </span>
        </div>
        <span className="text-[9px] font-semibold text-muted/60 uppercase tracking-wide">{T.home.jobPost}</span>
      </div>
      <div className="absolute flex flex-col gap-2" style={{ right: "8%", top: "50%", transform: "translateY(-50%)" }}>
        {PLATFORMS.map(({ label, color, text }) => (
          <span key={label} className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm" style={{ background: color, color: text }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const TESTIMONIALS_EN = [
  { quote: "We cut time-to-interview from 3 weeks to 48 hours. Aria handled 800 applicants and surfaced genuinely great candidates. Our recruiters finally have time to recruit.", name: "S.C.", role: "Head of Talent · Series B startup" },
  { quote: "The voice interview quality surprised me. Candidates said it felt human. The transcripts were detailed and actionable — better notes than most human interviewers write.", name: "M.R.", role: "VP People · Growth-stage tech company" },
  { quote: "Bias auditing alone was worth it. Every decision is logged and explainable. Legal loved it, our team loved it, and diverse shortlist rates improved meaningfully.", name: "P.N.", role: "Chief People Officer · Enterprise SaaS" },
];
const TESTIMONIALS_AR = [
  { quote: "خفّضنا الوقت من التقديم إلى المقابلة من ٣ أسابيع إلى ٤٨ ساعة. تولّت آريا ٨٠٠ متقدم وأظهرت مرشحين رائعين حقّاً. أصبح لدى مسؤولي التوظيف وقت للتوظيف فعلاً.", name: "س.ح.", role: "رئيس المواهب · شركة ناشئة Series B" },
  { quote: "جودة المقابلة الصوتية فاجأتني. قال المرشحون إنها بدت بشرية. النصوص كانت مفصّلة وقابلة للتنفيذ — أفضل من ملاحظات معظم المحاورين البشريين.", name: "م.ر.", role: "نائب رئيس الموارد البشرية · شركة تقنية في مرحلة النمو" },
  { quote: "تدقيق التحيز وحده كان يستحق. كل قرار مسجّل وقابل للشرح. أحبّ القانون ذلك، وأحبّ فريقنا ذلك، وتحسّنت معدلات القوائم المتنوّعة بشكل ملحوظ.", name: "ب.ن.", role: "مدير الموارد البشرية الرئيسي · SaaS مؤسسية" },
];

const PLANS = [
  { nameKey: "freeName", monthly: 0, annually: 0, desc: "freeDesc", featuresKey: "freeFeatures", cta: "startFreeTrial", primary: false },
  { nameKey: "starterName", monthly: 299, annually: 249, desc: "starterDesc", featuresKey: "starterFeatures", cta: "getStarter", primary: true },
  { nameKey: "growthName", monthly: 799, annually: 665, desc: "growthDesc", featuresKey: "growthFeatures", cta: "getGrowth", primary: false },
  { nameKey: "enterpriseName", monthly: null, annually: null, desc: "enterpriseDesc", featuresKey: "enterpriseFeatures", cta: "talkToSales", primary: false },
];

export default function HomePage() {
  const { T, isRtl, n } = useLanguage();
  const [annual, setAnnual] = useState(true);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollPricing = (direction: "left" | "right") => {
    if (pricingRef.current && pricingRef.current.firstElementChild) {
      const scrollAmount = (pricingRef.current.firstElementChild as HTMLElement).offsetWidth + 24;
      pricingRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  const TESTIMONIALS = isRtl ? TESTIMONIALS_AR : TESTIMONIALS_EN;
  const t = TESTIMONIALS[testimonialIdx];

  const FEATURES = [
    { icon: FileText,  title: T.home.feature1Title, desc: T.home.feature1Desc },
    { icon: Phone,     title: T.home.feature2Title, desc: T.home.feature2Desc },
    { icon: BarChart2, title: T.home.feature3Title, desc: T.home.feature3Desc },
    { icon: Users,     title: T.home.feature4Title, desc: T.home.feature4Desc },
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-[62%_38%] gap-16 items-center">
            <div>
              <FadeUp delay={0}>
                <span className="inline-flex items-center gap-2 bg-coral-50 text-coral-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                  <Zap size={12} /> {T.home.badge}
                </span>
              </FadeUp>
              <FadeUp delay={0.08}>
              <h1 className="text-5xl font-extrabold text-purple-900 leading-[1.1] tracking-tight mb-6">
                 <span className="text-balance">
                   {T.home.heroTitle1}{" "}
                 <span className="gradient-text">{T.home.heroTitleAria}</span>
                 <span className="block mt-2">{T.home.heroTitle2}</span>
                </span>
              </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">{T.home.heroSub}</p>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div className="flex flex-wrap gap-4 mb-8">
                  {[T.home.noCandidateAccounts, T.home.setupTime, T.home.cancelAnytime].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm text-purple-900 font-medium">
                      <Check size={14} className="text-coral-500 shrink-0 rtl:-scale-x-100" /> {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={0.28}>
                <div className="flex flex-wrap gap-3">
                  <GradientButton href="/demo" className="px-7 py-3.5 text-base">
                    {T.home.tryDemo} <ArrowRight size={16} className="ms-2 rtl:scale-x-[-1]" />
                  </GradientButton>
                  <GradientButton href="/how-it-works" outline className="px-7 py-3.5 text-base">
                    {T.home.seeHowItWorks}
                  </GradientButton>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.1} className="hidden lg:block">
              <FloatingShapes />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ─────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-purple-100 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-muted/60 uppercase tracking-widest mb-8">{T.home.trustTitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[T.home.trust1, T.home.trust2, T.home.trust3, T.home.trust4, T.home.trust5, T.home.trust6].map((msg) => (
              <span key={msg} className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700/60">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400 shrink-0" />
                {msg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARIA HUB ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{T.home.ariaTitle}</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">{T.home.ariaSub}</p>
          </FadeUp>
          <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">
            <FadeUp delay={0.1} className="flex justify-center">
              <AriaHub />
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div
                  className="absolute start-[17px] top-[44px]"
                  style={{ width: 2, bottom: 44, background: "linear-gradient(180deg, #F0625A 0%, #7B5CC4 50%, #2D1B69 100%)", borderRadius: 2, opacity: 0.2 } as React.CSSProperties}
                />
                {[
                  { step: n("1"), label: T.home.step1Label, sub: T.home.step1Sub },
                  { step: n("2"), label: T.home.step2Label, sub: T.home.step2Sub },
                  { step: n("3"), label: T.home.step3Label, sub: T.home.step3Sub },
                ].map(({ step, label, sub }, i) => (
                  <div key={step} className={`flex items-center gap-4 ${i < 2 ? "mb-5" : ""}`}>
                    <span className="w-9 h-9 rounded-xl gradient-bg text-white text-sm font-bold flex items-center justify-center shrink-0 relative z-10" style={{ boxShadow: "0 2px 12px rgba(240,98,90,0.40)" }}>
                      {step}
                    </span>
                    <div className="flex-1 rounded-2xl p-5 bg-white" style={{ boxShadow: "0 4px 20px rgba(45,27,105,0.07), 0 1px 3px rgba(45,27,105,0.04)" } as React.CSSProperties}>
                      <p className="text-purple-900 font-semibold text-sm">{label}</p>
                      <p className="text-muted text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURE HIGHLIGHT ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[35%_65%] gap-16 items-start">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 leading-tight mb-6">{T.home.funnelTitle}</h2>
              <p className="text-muted text-base leading-relaxed mb-8">{T.home.funnelSub}</p>
              <GradientButton href="/how-it-works">
                {T.home.seeFullPipeline} <ChevronRight size={16} className="ms-1 rtl:scale-x-[-1]" />
              </GradientButton>
            </FadeUp>
            <div className="grid sm:grid-cols-2 gap-px bg-purple-100 rounded-2xl overflow-hidden">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <FadeUp key={title} delay={i * 0.08}>
                  <div className="bg-white p-8 h-full">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center mb-5">
                      <Icon size={20} className="text-coral-500 rtl:-scale-x-100" />
                    </div>
                    <h3 className="text-purple-900 font-bold text-base mb-2">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT SHOWCASE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{T.home.showcaseTitle}</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">{T.home.showcaseSub}</p>
          </FadeUp>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: T.home.showcase1Title, sub: T.home.showcase1Sub, accent: "bg-purple-50", rows: T.home.showcase1Rows },
              { title: T.home.showcase2Title, sub: T.home.showcase2Sub, accent: "bg-coral-50",  rows: T.home.showcase2Rows },
              { title: T.home.showcase3Title, sub: T.home.showcase3Sub, accent: "bg-surface",   rows: T.home.showcase3Rows },
            ].map(({ title, sub, accent, rows }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="card-lg p-6 h-full flex flex-col">
                  <div className={`${accent} rounded-xl p-4 mb-5`}>
                    <div className="space-y-2">
                      {rows.map((r) => (
                        <div key={r} className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-purple-900 shadow-card">{r}</div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-purple-900 font-bold text-base mb-1">{title}</h3>
                  <p className="text-muted text-sm">{sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{T.home.capsTitle}</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">{T.home.capsSub}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
              <div className="flex flex-col pe-0 md:pe-10 pb-10 md:pb-0">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">{T.home.cap1Title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">{T.home.cap1Sub}</p>
                <div className="flex-1"><AuditFeed /></div>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-s border-coral-300 pt-10 md:pt-0 md:px-10 pb-10 md:pb-0">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">{T.home.cap2Title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">{T.home.cap2Sub}</p>
                <div className="flex-1">
                  <DiamondStack />
                  <p className="mt-3 text-[11px] text-muted/60 text-center max-w-[200px] mx-auto">{T.home.statsNote}</p>
                </div>
              </div>
              <div className="flex flex-col border-t md:border-t-0 md:border-s border-purple-200 pt-10 md:pt-0 md:ps-10">
                <h3 className="text-xl font-extrabold text-purple-900 mb-2">{T.home.cap3Title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">{T.home.cap3Sub}</p>
                <div className="flex-1"><JobDistributionVisual /></div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 7. TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-[11px] text-muted/50 italic mb-6">{T.home.testimonialDisclaimer}</p>
            <span className="text-7xl gradient-text font-black leading-none select-none">&ldquo;</span>
            <motion.p
              key={testimonialIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-2xl md:text-3xl font-semibold text-purple-900 leading-snug mt-2 mb-10"
            >
              {t.quote}
            </motion.p>
            <motion.div key={`meta-${testimonialIdx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">{t.name[0]}</div>
              <p className="text-purple-900 font-semibold text-sm">{t.name}</p>
              <p className="text-muted text-xs">{t.role}</p>
            </motion.div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-muted hover:border-purple-400 hover:text-purple-900 transition-all">
                <ChevronLeft size={16} className="rtl:scale-x-[-1]" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`h-2 rounded-full transition-all ${i === testimonialIdx ? "gradient-bg w-5" : "bg-purple-200 w-2"}`} />
                ))}
              </div>
              <button onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full border border-purple-200 flex items-center justify-center text-muted hover:border-purple-400 hover:text-purple-900 transition-all">
                <ChevronRight size={16} className="rtl:scale-x-[-1]" />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 8. PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" id="pricing">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{T.home.pricingTitle}</h2>
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">{T.home.pricingSub}</p>
            <div className="inline-flex items-center gap-1 bg-surface rounded-xl p-1">
              <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white shadow-card text-purple-900" : "text-muted"}`}>{T.home.monthly}</button>
              <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white shadow-card text-purple-900" : "text-muted"}`}>
                {T.home.annual}
                <span className="text-[10px] bg-coral-100 text-coral-500 font-bold px-1.5 py-0.5 rounded-full">-{n("17")}%</span>
              </button>
            </div>
          </FadeUp>
          
          <div className="relative group">
            <button
              onClick={() => scrollPricing('left')}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-purple-100 flex items-center justify-center text-purple-900 hover:bg-purple-50 transition-all md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={24} className="rtl:scale-x-[-1]" />
            </button>
            
            <div 
              ref={pricingRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-8 px-2 md:px-6 -mx-2 md:-mx-6 hide-scrollbar scroll-smooth"
            >
              {PLANS.map(({ nameKey, monthly, annually, desc, featuresKey, cta, primary }, i) => {
                const Pt = T.pricing as Record<string, string | string[]>;
                const features = Pt[featuresKey] as string[];
                const planName = Pt[nameKey] as string;
                return (
                <div key={nameKey} className="w-[85vw] md:w-[calc((100%-3rem)/3)] shrink-0 snap-center">
                  <FadeUp delay={i * 0.08} className="h-full">
                    <div className={`card-lg p-8 h-full flex flex-col relative ${primary ? "ring-2 ring-coral-500/30" : ""}`}>
                      {primary && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-[11px] font-bold px-3 py-1 rounded-full">
                          {T.home.mostPopular}
                        </span>
                      )}
                      <p className="text-purple-900 font-bold text-lg mb-1">{planName}</p>
                      <p className="text-muted text-sm mb-5">{Pt[desc] as string}</p>
                      <div className="mb-6">
                        {monthly !== null ? (
                          <>
                           <div dir={isRtl ? "rtl" : "ltr"} className="flex items-baseline gap-1">
                              <span className="text-4xl font-extrabold gradient-text">${n(annual ? annually : monthly)}</span>
                              <span className="text-muted text-sm">{T.pricing.perMonth}</span>
                            </div>
                            {annual && <p className="text-xs text-muted/70 mt-1">{T.home.billedAnnually}</p>}
                          </>
                        ) : (
                          <span className="text-3xl font-extrabold gradient-text">{T.pricing.customPricing}</span>
                        )}
                      </div>
                      <ul className="space-y-3 flex-1 mb-8">
                        {features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                            <Check size={15} className="text-coral-500 mt-0.5 shrink-0 rtl:-scale-x-100" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={cta === "talkToSales" ? "/contact" : "/signup"}
                        className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${primary ? "gradient-bg text-white shadow-btn hover:opacity-90" : "border-2 border-purple-200 text-purple-900 hover:border-purple-400 hover:bg-purple-50"}`}
                      >
                        { cta === "talkToSales" ? T.home.talkToSales: cta === "getStarter"
                           ? T.home.getStarter: cta === "getGrowth" ? T.home.getGrowth: T.home.startFreeTrial }
                      </a>
                    </div>
                  </FadeUp>
                </div>
                );
              })}
            </div>

            <button
              onClick={() => scrollPricing('right')}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-purple-100 flex items-center justify-center text-purple-900 hover:bg-purple-50 transition-all md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={24} className="rtl:scale-x-[-1]" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <defs>
            <pattern id="cta-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dot-grid)" opacity="0.45" />
        </svg>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeUp>
            <h2 className="text-5xl font-extrabold text-purple-900 mb-5">
              {T.home.ctaTitle} <span className="gradient-text">{T.home.ctaTitle2}</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">{T.home.ctaSub}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/demo" className="px-8 py-4 text-base">
                {T.home.ctaCta} <ArrowRight size={16} className="ms-2 rtl:scale-x-[-1]" />
              </GradientButton>
              <GradientButton href="/contact" outline className="px-8 py-4 text-base">
                {T.home.ctaSecondary}
              </GradientButton>
            </div>
            <p className="text-xs text-muted/60 mt-6">{T.home.ctaFootnote}</p>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}