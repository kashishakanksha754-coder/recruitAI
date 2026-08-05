"use client";
import React, { useState } from "react";
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
    { time: "10:43 AM", label: T.home.auditEntry1 },
    { time: "10:42 AM", label: T.home.auditEntry2 },
    { time: "10:41 AM", label: T.home.auditEntry3 },
    { time: "10:40 AM", label: T.home.auditEntry4 },
    { time: "10:39 AM", label: T.home.auditEntry5 },
  ];
  return (
    <div className="relative h-64 w-full rounded-xl overflow-hidden">
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
              <Check size={10} className="text-coral-500" />
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
  const { T, isRtl } = useLanguage();
  
  const PLATFORMS = [
    { label: "LinkedIn",    arLabel: "لينكدإن",    bg: "bg-[#0A66C2]", text: "text-white" },
    { label: "Naukri",      arLabel: "نوكري",      bg: "bg-[#4A90D9]", text: "text-white" },
    { label: "Bayt",        arLabel: "بيت",        bg: "bg-[#E8572A]", text: "text-white" },
    { label: "Indeed",      arLabel: "إنديد",      bg: "bg-[#2164F3]", text: "text-white" },
    { label: "20+ portals", arLabel: "٢٠+ بوابة", bg: "bg-purple-100", text: "text-purple-900" },
  ];

  return (
    <div className="relative h-52 w-full rounded-xl overflow-hidden flex items-center justify-between px-6">
      
      {/* Subtle Grid Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <pattern id="cap-grid-new" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#E8E4F8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cap-grid-new)" />
      </svg>

      {/* 1. Document Icon */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="w-14 h-14 rounded-xl bg-white shadow-[0_4px_20px_rgba(139,92,246,0.12)] border border-purple-50 flex items-center justify-center">
          <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center">
             <FileText className="text-purple-700" size={18} strokeWidth={1.5} />
          </div>
        </div>
        <span className="text-[10px] font-semibold text-slate-400">
          {T.home.jobPost}
        </span>
      </div>

      {/* 2. Dotted Lines SVG (Flipped automatically via isRtl) */}
      <div className="relative z-10 flex-1 h-[140px] mx-4">
        <svg
          className={`w-full h-full transition-transform duration-300 ${isRtl ? 'scale-x-[-1]' : ''}`}
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 50 L 100 15" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
          <path d="M 0 50 L 100 32" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
          <path d="M 0 50 L 100 50" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
          <path d="M 0 50 L 100 68" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
          <path d="M 0 50 L 100 85" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
        </svg>
      </div>

      {/* 3. Portals List */}
      <div className="relative z-10 flex flex-col gap-2 w-[100px]">
        {PLATFORMS.map(({ label, arLabel, bg, text }) => (
          <span key={label} className={`${bg} ${text} text-[10px] font-bold py-1.5 px-3 rounded-full text-center shadow-sm whitespace-nowrap`}>
            {isRtl ? arLabel : label}
          </span>
        ))}
      </div>
    </div>
  );
}
const TESTIMONIALS_EN = [
  { quote: "We cut time-to-hire from over a month to under a week. Hyrix screened 140 applicants and surfaced genuinely great candidates. Our recruiters finally have time to recruit.", name: "S.C.", role: "Head of Talent · Series B startup" },
  { quote: "Resume screening used to eat 6–8 hours a week. Now Hyrix does it in seconds, and every score comes with a transcript we can actually trust.", name: "R.K.", role: "Talent Acquisition Lead · Mid-market company" },
  { quote: "We post once and Hyrix distributes across 20+ portals automatically. No more duplicate candidates piling up across five different inboxes.", name: "M.P.", role: "HR Director · Enterprise team" },
];
const TESTIMONIALS_AR = [
  { quote: "خفّضنا وقت التوظيف من أكثر من شهر إلى أقل من أسبوع. فرز هايريكس ١٤٠ متقدماً وأظهر مرشحين رائعين حقاً. أصبح لدى مسؤولي التوظيف وقت للتوظيف فعلاً.", name: "س.ح.", role: "رئيس المواهب · شركة ناشئة Series B" },
  { quote: "كان فرز السير الذاتية يستهلك ٦-٨ ساعات أسبوعياً. الآن يُنجزه هايريكس في ثوانٍ، وكل نتيجة مرفقة بنص مقابلة يمكننا الوثوق به فعلاً.", name: "ر.ك.", role: "قائد اكتساب المواهب · شركة متوسطة الحجم" },
  { quote: "ننشر مرة واحدة وهايريكس يوزّع تلقائياً على أكثر من ٢٠ بوابة. لا مزيد من تكرار المرشحين في خمسة صناديق بريد مختلفة.", name: "م.ب.", role: "مدير الموارد البشرية · فريق مؤسسي" },
];

const PLANS = [
  { nameKey: "freeName",    monthly: 0,    annually: 0,    desc: "freeDesc",    featuresKey: "freeFeatures",    cta: "startFreeTrial", primary: false, freeLabel: "freePriceLabel" },
  { nameKey: "pilotName",   monthly: 199,  annually: 199,  desc: "pilotDesc",   featuresKey: "pilotFeatures",   cta: "startFreeTrial", primary: false },
  { nameKey: "growthName",  monthly: 599,  annually: 599,  desc: "growthDesc",  featuresKey: "growthFeatures",  cta: "startFreeTrial", primary: true  },
  { nameKey: "scaleName",   monthly: 1499, annually: 1499, desc: "scaleDesc",   featuresKey: "scaleFeatures",   cta: "talkToSales",    primary: false },
];

export default function HomePage() {
  const { T, isRtl, n } = useLanguage();
  const [annual] = useState(true);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [pricingIdx, setPricingIdx] = useState(0);
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
              <h1 className="text-5xl font-extrabold text-purple-900 leading-[1.1] tracking-tight mb-6">
                   <span className="block hero-line-1">
                     {T.home.heroTitle1.split('. ')[0]}.
                   </span>
  
                    <span className="block hero-coral-text hero-line-2">
                        {T.home.heroTitle1.split('. ')[1]}
                     </span>
  
                      <span className="block hero-line-3">
                         {T.home.heroTitle2}{" "}
                        <span className="gradient-text hero-shimmer">{T.home.heroTitle3}</span>
                    </span>
                 </h1>
                 
              <FadeUp delay={0.16}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">{T.home.heroSub}</p>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div className="flex flex-wrap gap-4 mb-8">
                  {[T.home.noCandidateAccounts, T.home.setupTime, T.home.cancelAnytime].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm text-purple-900 font-medium">
                      <Check size={14} className="text-coral-500 shrink-0" /> {item}
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
            {[T.home.trust1, T.home.trust2, T.home.trust3, T.home.trust4, T.home.trust5, T.home.trust7].map((msg, i) => (
              <span key={msg} className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700/60">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i % 2 === 0 ? "bg-coral-400" : "bg-purple-700"}`} />
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
          {/* Mirror: hub on start side in LTR (left), steps on end side. In RTL dir flips the flex row automatically. */}
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
                      <Icon size={20} className="text-coral-500" />
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
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              { title: T.home.showcase1Title, sub: T.home.showcase1Sub, accent: "bg-purple-50", rows: T.home.showcase1Rows },
              { title: T.home.showcase2Title, sub: T.home.showcase2Sub, accent: "bg-coral-50",  rows: T.home.showcase2Rows },
              { title: T.home.showcase3Title, sub: T.home.showcase3Sub, accent: "bg-surface",   rows: T.home.showcase3Rows },
            ].map(({ title, sub, accent, rows }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="card-lg p-6 h-full flex flex-col">
                  <div className={`${accent} rounded-xl p-4 mb-5 flex-1`}>
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
      <section className="py-24 bg-[#F7F7FB]" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{T.home.pricingTitle}</h2>
            <p className="text-muted text-lg max-w-lg mx-auto">{T.home.pricingSub}</p>
          </FadeUp>

          {/* Carousel */}
          <div className="relative flex items-center">
            {/* Prev arrow */}
            <button
              onClick={() => setPricingIdx(Math.max(0, pricingIdx - 1))}
              disabled={pricingIdx === 0}
              className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 hover:text-purple-900 hover:border-purple-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed me-4 z-10"
            >
              <ChevronLeft size={18} className="rtl:scale-x-[-1]" />
            </button>

            {/* Cards viewport — px/py padding lets shadows render without clipping */}
            <div className="flex-1 overflow-hidden px-1 py-6">
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${isRtl ? pricingIdx * 33.4 : -pricingIdx * 33.4}%)` }}
              >
                {PLANS.map(({ nameKey, monthly, annually, desc, featuresKey, cta, primary, freeLabel }: { nameKey: string; monthly: number; annually: number; desc: string; featuresKey: string; cta: string; primary: boolean; freeLabel?: string }) => {
                  const Pt = T.pricing as Record<string, string | string[]>;
                  const features = Pt[featuresKey] as string[];
                  const planName = Pt[nameKey] as string;
                  return (
                    <div key={nameKey} className="w-[calc(33.333%-1rem)] shrink-0 relative pt-5">
                      {primary && (
                        <div className="absolute top-0 inset-x-0 flex justify-center">
                          <span className="gradient-bg text-white text-[11px] font-bold px-4 py-1 rounded-full">
                            {T.home.mostPopular}
                          </span>
                        </div>
                      )}
                      <div className={`bg-white rounded-2xl p-8 h-full flex flex-col shadow-[0_2px_16px_rgba(0,0,0,0.07)] ${primary ? "ring-2 ring-[#E04E48]/20" : ""}`}>
                        <p className="text-purple-900 font-bold text-xl mb-1">{planName}</p>
                        <p className="text-muted text-sm mb-6">{Pt[desc] as string}</p>
                        <div className="mb-6">
                          {freeLabel ? (
                            <div dir="ltr" className="flex items-baseline gap-1">
                              <span className="text-5xl font-extrabold gradient-text">${n(0)}</span>
                              <span className="text-muted text-sm ms-1">{Pt[freeLabel] as string}</span>
                            </div>
                          ) : (
                            <>
                              <div dir="ltr" className="flex items-baseline gap-1">
                                <span className="text-5xl font-extrabold gradient-text">${n(annual ? annually! : monthly!)}</span>
                                <span className="text-muted text-sm ms-1">{T.pricing.perMonth}</span>
                              </div>
                              <p className="text-xs text-muted/60 mt-1">{T.home.billedAnnually}</p>
                            </>
                          )}
                        </div>
                        <ul className="space-y-3 flex-1 mb-8">
                          {features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                              <Check size={15} className="text-[#E04E48] mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={cta === "talkToSales" ? "/contact" : "/signup"}
                          className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                            primary
                              ? "gradient-bg text-white shadow-btn hover:opacity-90"
                              : "border-2 border-purple-200 text-purple-900 hover:border-purple-400 hover:bg-purple-50"
                          }`}
                        >
                          {cta === "talkToSales" ? T.home.talkToSales : T.home.startFreeTrial}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => setPricingIdx(Math.min(PLANS.length - 3, pricingIdx + 1))}
              disabled={pricingIdx >= PLANS.length - 3}
              className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 hover:text-purple-900 hover:border-purple-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed ms-4 z-10"
            >
              <ChevronRight size={18} className="rtl:scale-x-[-1]" />
            </button>
          </div>

          <p className="text-center text-sm text-muted mt-10 max-w-2xl mx-auto">
            {(T.pricing as unknown as Record<string, string>).pricingNote}
          </p>
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
