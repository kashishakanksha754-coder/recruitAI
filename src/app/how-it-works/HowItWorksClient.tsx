"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, FileSearch, Phone, ClipboardCheck, Video, Gift, ArrowRight, Users, Zap, Check, ShieldCheck, FileText, Eye, Globe } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksClient() {
  const { T } = useLanguage();
  const H = T.hiw;

  const STAGES = [
    { icon: Briefcase,      step: "01", title: H.stage1Title, desc: H.stage1Desc, detail: H.stage1Detail },
    { icon: FileSearch,     step: "02", title: H.stage2Title, desc: H.stage2Desc, detail: H.stage2Detail },
    { icon: Phone,          step: "03", title: H.stage3Title, desc: H.stage3Desc, detail: H.stage3Detail },
    { icon: ClipboardCheck, step: "04", title: H.stage4Title, desc: H.stage4Desc, detail: H.stage4Detail },
    { icon: Video,          step: "05", title: H.stage5Title, desc: H.stage5Desc, detail: H.stage5Detail },
    { icon: Gift,           step: "06", title: H.stage6Title, desc: H.stage6Desc, detail: H.stage6Detail },
  ];

  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-5 tracking-tight">
              {H.heroTitle1}{" "}
              <span className="gradient-text">{H.heroTitle2}</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">{H.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute start-[28px] top-0 bottom-0 w-px bg-purple-100 hidden sm:block" />
            <div className="space-y-12">
              {STAGES.map(({ icon: Icon, step, title, desc, detail }, i) => (
                <StageRow key={step} icon={Icon} step={step} title={title} desc={desc} detail={detail} index={i} stepLabel={H.step} />
              ))}
            </div>
          </div>

          <FadeUp>
            <p className="mt-16 text-center text-base text-purple-800 bg-purple-50 rounded-2xl px-6 py-5 leading-relaxed max-w-2xl mx-auto">
              {(H as unknown as Record<string, string>).closingSummary}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section A: Toggle card ── */}
      <SectionAToggle />

      {/* ── Section B: Bento trust grid ── */}
      <SectionBBento />

      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <defs>
            <pattern id="hiw-cta-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hiw-cta-dot-grid)" opacity="0.45" />
        </svg>
        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">{H.ctaTitle}</h2>
            <p className="text-muted mb-8">{H.ctaSub}</p>
            <GradientButton href="/demo" className="px-8 py-4 text-base">
              {H.tryDemo} <ArrowRight size={16} className="ms-2 rtl:scale-x-[-1]" />
            </GradientButton>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

// ── Section A: Interactive toggle card ─────────────────────────────────────
const HR_ITEMS = [
  "Strategy & workforce planning",
  "Relationships with candidates",
  "The final hiring decision",
  "Culture & employer brand",
];
const HYRIX_ITEMS = [
  "Posting to every job portal",
  "Screening every resume",
  "Skills assessments",
  "Adaptive voice/video interviews",
  "Scheduling & candidate replies",
  "Shortlists & draft offers",
];

function SectionAToggle() {
  const [tab, setTab] = useState<"hr" | "hyrix">("hr");
  const isHr = tab === "hr";

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">Your AI HR Apprentice</p>
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Hyrix works alongside your HR team</h2>
          <p className="text-muted text-lg leading-relaxed">
            Always on, always learning — it adapts every conversation in real time, asking sharper follow-ups when it needs to.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="card px-10 pt-8 pb-9 max-w-lg mx-auto">
            {/* Pill toggle — centered */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-purple-50 rounded-xl p-1 gap-1">
                <button
                  onClick={() => setTab("hr")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isHr ? "gradient-bg text-white shadow-btn" : "text-muted hover:text-purple-900"
                  }`}
                >
                  <Users size={14} />
                  Your HR team
                </button>
                <button
                  onClick={() => setTab("hyrix")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    !isHr ? "gradient-bg text-white shadow-btn" : "text-muted hover:text-purple-900"
                  }`}
                >
                  <Zap size={14} />
                  Hyrix
                </button>
              </div>
            </div>

            {/* Content with AnimatePresence fade */}
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                {isHr ? (
                  <motion.div
                    key="hr"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">Your team stays focused on what matters</p>
                    <ul className="space-y-4">
                      {HR_ITEMS.map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                            <Check size={13} className="text-white" strokeWidth={2.5} />
                          </span>
                          <span className="text-sm font-medium text-purple-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hyrix"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-6">Hyrix handles the volume, automatically</p>
                    <ul className="space-y-4">
                      {HYRIX_ITEMS.map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                            <Zap size={12} className="text-white" strokeWidth={2.5} />
                          </span>
                          <span className="text-sm font-medium text-purple-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-center mt-8 text-xs text-muted/60 uppercase tracking-widest">
            Trains &amp; evolves to your requirements
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Section B: Asymmetric bento trust grid ──────────────────────────────────
function SectionBBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">Safe to Deploy</p>
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Built for trust, not just speed</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            AI in hiring is now regulated — Hyrix is designed so you stay compliant by default.
          </p>
        </FadeUp>

        {/* Bento: row 1 = featured(2 cols) + audit(1 col); row 2 = 3 equal cards */}
        <div className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateAreas: `"feat feat audit" "exp region fair"` }}>

          {/* Featured — 2 cols */}
          <div style={{ gridArea: "feat" }}>
            <FadeUp className="h-full">
              <div className="rounded-2xl p-8 flex flex-col h-full relative overflow-hidden"
                style={{ background: "rgba(45,27,105,0.05)", border: "1px solid rgba(45,27,105,0.1)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                  <ShieldCheck size={24} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-extrabold text-xl mb-3 leading-snug">A human always decides</h3>
                <p className="text-muted text-sm leading-relaxed">A recruiter approves every stage — Hyrix never makes an autonomous hiring call.</p>
                <span className="absolute top-5 right-5 text-[10px] font-bold text-purple-700 bg-purple-100 rounded-full px-2.5 py-1 tracking-wide">
                  EU AI Act · Aug 2026
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Audit trail — 1 col */}
          <div style={{ gridArea: "audit" }}>
            <FadeUp delay={0.08} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(240,98,90,0.05)", border: "1px solid rgba(240,98,90,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                  <FileText size={17} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">A complete audit trail</h3>
                <p className="text-muted text-sm leading-relaxed">Full transcripts and rubric-matched scores for every candidate you review.</p>
              </div>
            </FadeUp>
          </div>

          {/* Row 2 — 3 equal cards */}
          <div style={{ gridArea: "exp" }}>
            <FadeUp delay={0.12} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(240,98,90,0.05)", border: "1px solid rgba(240,98,90,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                  <Eye size={17} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">Explainable scoring</h3>
                <p className="text-muted text-sm leading-relaxed">Every score traces back to your criteria and the candidate&apos;s own words.</p>
              </div>
            </FadeUp>
          </div>

          <div style={{ gridArea: "region" }}>
            <FadeUp delay={0.16} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(45,27,105,0.05)", border: "1px solid rgba(45,27,105,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                  <Globe size={17} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">Your data, your region</h3>
                <p className="text-muted text-sm leading-relaxed">Consent capture and configurable data residency — GDPR and India DPDP ready.</p>
              </div>
            </FadeUp>
          </div>

          <div style={{ gridArea: "fair" }}>
            <FadeUp delay={0.2} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(45,27,105,0.05)", border: "1px solid rgba(45,27,105,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                  <Users size={17} className="text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">Fair by design</h3>
                <p className="text-muted text-sm leading-relaxed">Structured rubrics keep every candidate on equal footing.</p>
              </div>
            </FadeUp>
          </div>

        </div>

        <FadeUp delay={0.1}>
          <p className="text-center mt-10 text-xs text-muted/60 leading-relaxed max-w-2xl mx-auto">
            References: EU AI Act (Annex III, high-risk hiring, effective 2 August 2026); NYC Local Law 144; GDPR; India DPDP Act.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function StageRow({
  icon: Icon, step, title, desc, detail, index, stepLabel,
}: {
  icon: React.ElementType; step: string; title: string; desc: string; detail: string; index: number; stepLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { isRtl, n } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-8 items-start"
    >
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-btn">
          <Icon size={22} className="text-white" />
        </div>
      </div>
      <div className="flex-1 pt-1">
        <span className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-1 block">{stepLabel} {n(step)}</span>
        <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
        <p className="text-muted leading-relaxed mb-3">{desc}</p>
        <p className="text-sm text-purple-700 bg-purple-50 rounded-xl px-4 py-2.5 inline-block">{detail}</p>
      </div>
    </motion.div>
  );
}
