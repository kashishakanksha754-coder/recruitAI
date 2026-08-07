"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

// ── Section A: Side-by-side split card ─────────────────────────────────────

function SectionAToggle() {
  const { T } = useLanguage();

  const H = T.hiw as Record<string, string>;
  const A = T.about as Record<string, string>;

  const HR_ITEMS = [A.splitKeep1, A.splitKeep2, A.splitKeep3, A.splitKeep4];
  const HYRIX_ITEMS = [A.splitTake1, A.splitTake2, A.splitTake3, A.splitTake4, A.splitTake5, A.splitTake6];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">{H.aiApprentice}</p>
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{H.sectionATitle}</h2>
          <p className="text-muted text-lg leading-relaxed">{H.sectionASubtitle}</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch rounded-2xl overflow-hidden shadow-card border border-purple-100">

            {/* Left — HR team keeps */}
            <div className="px-9 py-10 flex flex-col" style={{ background: "#2D1B69" }}>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <Users size={14} className="text-white rtl:scale-x-[-1]" />
                </div>
                <p className="text-[11px] font-extrabold text-white/70 uppercase tracking-widest">{H.hrTeamTab} {H.teamFocus ? `· ${H.teamFocus}` : "keeps"}</p>
              </div>
              <ul className="space-y-4 flex-1">
                {HR_ITEMS.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#F0625A" }} />
                    <span className="text-sm font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center — Hyrix orb */}
            <div className="flex flex-col items-center justify-center px-6 py-10 bg-white gap-4 min-w-[160px]">
              <div className="text-muted/30 text-xs select-none">⇄</div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-btn shrink-0" style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-purple-900 font-extrabold text-base leading-tight">Hyrix</p>
                <span className="inline-block mt-1.5 text-[11px] font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(240,98,90,0.1)", color: "#F0625A" }}>
                  {H.trainsEvolves || "Your HR apprentice · always on"}
                </span>
              </div>
              <div className="text-muted/30 text-xs select-none">⇄</div>
            </div>

            {/* Right — Hyrix handles */}
            <div className="px-9 py-10 flex flex-col" style={{ background: "rgba(240,98,90,0.05)", borderLeft: "1px solid rgba(240,98,90,0.12)" }}>
              <div className="flex items-center gap-2.5 mb-7">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(240,98,90,0.15)" }}>
                  <Zap size={14} className="rtl:scale-x-[-1]" style={{ color: "#F0625A" }} />
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest" style={{ color: "#F0625A" }}>{H.hyrixHandles || "Hyrix takes off your plate"}</p>
              </div>
              <ul className="space-y-4 flex-1">
                {HYRIX_ITEMS.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#F0625A" }} />
                    <span className="text-sm font-medium text-purple-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Section B: Asymmetric bento trust grid ──────────────────────────────────
function SectionBBento() {
  const { T } = useLanguage();
  const H = T.hiw as Record<string, string>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">{H.safeToDeploy}</p>
          <h2 className="text-4xl font-extrabold text-purple-900 mb-4">{H.builtForTrust}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {H.aiRegulated}
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
                  <ShieldCheck size={24} className="text-white rtl:scale-x-[-1]" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-extrabold text-xl mb-3 leading-snug">{H.humanDecides}</h3>
                <p className="text-muted text-sm leading-relaxed">{H.humanDecidesDesc}</p>
                <span className="absolute top-5 end-5 text-[10px] font-bold text-purple-700 bg-purple-100 rounded-full px-2.5 py-1 tracking-wide">
                  {H.euAiAct}
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
                  <FileText size={17} className="text-white rtl:scale-x-[-1]" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">{H.auditTrail}</h3>
                <p className="text-muted text-sm leading-relaxed">{H.auditTrailDesc}</p>
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
                  <Eye size={17} className="text-white rtl:scale-x-[-1]" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">{H.explainableScoring}</h3>
                <p className="text-muted text-sm leading-relaxed">{H.explainableScoringDesc}</p>
              </div>
            </FadeUp>
          </div>

          <div style={{ gridArea: "region" }}>
            <FadeUp delay={0.16} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(45,27,105,0.05)", border: "1px solid rgba(45,27,105,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                  <Globe size={17} className="text-white rtl:scale-x-[-1]" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">{H.dataRegion}</h3>
                <p className="text-muted text-sm leading-relaxed">{H.dataRegionDesc}</p>
              </div>
            </FadeUp>
          </div>

          <div style={{ gridArea: "fair" }}>
            <FadeUp delay={0.2} className="h-full">
              <div className="rounded-2xl p-7 flex flex-col h-full"
                style={{ background: "rgba(45,27,105,0.05)", border: "1px solid rgba(45,27,105,0.1)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                  <Users size={17} className="text-white rtl:scale-x-[-1]" strokeWidth={1.8} />
                </div>
                <h3 className="text-purple-900 font-bold text-base mb-2 leading-snug">{H.fairByDesign}</h3>
                <p className="text-muted text-sm leading-relaxed">{H.fairByDesignDesc}</p>
              </div>
            </FadeUp>
          </div>

        </div>
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
          <Icon size={22} className="text-white rtl:scale-x-[-1]" />
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