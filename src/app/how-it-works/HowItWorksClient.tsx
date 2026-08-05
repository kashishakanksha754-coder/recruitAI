"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FileSearch, Phone, ClipboardCheck, Video, Gift, ArrowRight, Users, Zap, Mic, ShieldCheck, FileText, Eye, Globe, Clock } from "lucide-react";
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

      {/* ── Section A: Hyrix works alongside your HR team ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">Your AI HR Apprentice</p>
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Hyrix works alongside your HR team</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Always on, always learning — it adapts every conversation in real time, asking sharper follow-ups when it needs to.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            {/* Left card — what HR keeps */}
            <FadeUp>
              <div className="card p-8 h-full" style={{ background: "rgba(45,27,105,0.04)", boxShadow: "0 2px 20px rgba(45,27,105,0.08)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                    <Users size={16} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-purple-900">Your HR team keeps</h3>
                </div>
                <ul className="space-y-3">
                  {["Strategy & workforce planning", "Relationships with candidates", "The final hiring decision", "Culture & employer brand"].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Center marker */}
            <FadeUp delay={0.15}>
              <div className="flex flex-col items-center gap-3 py-4 lg:py-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-btn" style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}>
                  <Mic size={26} className="text-white" />
                </div>
                <span className="text-sm font-extrabold text-purple-900">Hyrix</span>
                <span className="text-[11px] font-semibold text-muted bg-white rounded-full px-3 py-1 shadow-sm border border-purple-100 whitespace-nowrap">
                  Your HR apprentice · always on
                </span>
              </div>
            </FadeUp>

            {/* Right card — what Hyrix takes */}
            <FadeUp delay={0.2}>
              <div className="card p-8 h-full" style={{ background: "rgba(240,98,90,0.04)", boxShadow: "0 2px 20px rgba(240,98,90,0.08)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                    <Zap size={16} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-purple-900">Hyrix takes off your plate</h3>
                </div>
                <ul className="space-y-3">
                  {["Posting to every job portal", "Screening every resume", "Skills assessments", "Adaptive voice/video interviews", "Scheduling & candidate replies", "Shortlists & draft offers"].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="text-center mt-10 text-xs font-bold text-coral-500 uppercase tracking-widest">
              Trains &amp; evolves to your requirements
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section B: Built for trust, not just speed ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-3">Safe to Deploy</p>
            <h2 className="text-4xl font-extrabold text-purple-900 mb-4">Built for trust, not just speed</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              AI in hiring is now regulated — Hyrix is designed so you stay compliant by default.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: ShieldCheck, title: "A human always decides",   body: "A recruiter approves every stage — Hyrix never makes an autonomous hiring call." },
              { Icon: FileText,    title: "A complete audit trail",    body: "Full transcripts and rubric-matched scores for every candidate you review." },
              { Icon: Eye,         title: "Explainable scoring",       body: "Every score traces back to your criteria and the candidate's own words." },
              { Icon: Globe,       title: "Your data, your region",    body: "Consent capture and configurable data residency — GDPR and India DPDP ready." },
              { Icon: Users,       title: "Fair by design",            body: "Structured rubrics keep every candidate on equal footing." },
              { Icon: Clock,       title: "Deploy without fear",       body: "The controls regulators now require are already how Hyrix works." },
            ].map(({ Icon, title, body }, i) => (
              <FadeUp key={title} delay={i * 0.07}>
                <div className="card p-7 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                    <Icon size={18} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-purple-900 font-bold mb-2 text-base leading-snug min-h-[2.75rem]">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="text-center mt-10 text-xs text-muted/60 leading-relaxed max-w-2xl mx-auto">
              References: EU AI Act (Annex III, high-risk hiring, effective 2 August 2026); NYC Local Law 144; GDPR; India DPDP Act.
            </p>
          </FadeUp>
        </div>
      </section>

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
