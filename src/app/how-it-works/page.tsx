"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText, Phone, ClipboardCheck, Video, CheckCircle, Mail,
  Upload, UserPlus, Link2, LayoutTemplate, SlidersHorizontal, Shuffle
} from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

const stages = [
  {
    number: "01",
    icon: FileText,
    name: "CV Screening",
    what: "Every resume gets parsed, standardized, and ranked against your job requirements.",
    ai: "AI extracts skills, titles, and experience. It scores each candidate against your criteria. You don't read a single raw PDF.",
    you: "You set the criteria once. You see a ranked list. You decide who advances.",
  },
  {
    number: "02",
    icon: Phone,
    name: "AI Voice Call",
    what: "Aria calls every shortlisted candidate — automatically, within hours of upload.",
    ai: "Aria asks role-specific screening questions, listens for quality of answers, and scores each response in real time.",
    you: "You receive a full call transcript and score summary. You decide who moves to assessment.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    name: "Skill Assessment",
    what: "Role-specific tests are sent to candidates who passed the voice call.",
    ai: "Tests run automatically. Results are scored and attached to the candidate's profile, with proctoring enabled by default.",
    you: "You see scores alongside call transcripts. You filter by threshold. You pick who continues.",
  },
  {
    number: "04",
    icon: Video,
    name: "AI Video Interview",
    what: "Aria conducts a structured async video interview with each candidate.",
    ai: "Aria adapts follow-up questions based on each answer. She flags inconsistencies and scores communication, depth, and confidence.",
    you: "You review short video clips with AI summaries. You compare candidates side-by-side. You move the right ones forward.",
  },
  {
    number: "05",
    icon: CheckCircle,
    name: "Selection",
    what: "You review a ranked, evidence-backed shortlist — ready for final decision.",
    ai: "AI compiles scores, transcripts, and video summaries into a single candidate card. Nothing is hidden; nothing is padded.",
    you: "You choose who to advance, reject, or hold. Every decision is logged for compliance.",
  },
  {
    number: "06",
    icon: Mail,
    name: "Offer Letter",
    what: "Generate and send a branded offer letter the moment you've made your decision.",
    ai: "AI pre-fills the letter with job title, compensation, and start date from your job settings.",
    you: "You review, edit if needed, and send in two clicks. The candidate signs digitally.",
  },
];

function StageCard({ stage, index }: { stage: (typeof stages)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: inView ? 1 : 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative grid md:grid-cols-[64px_1fr] gap-6 py-10 border-b border-white/5 last:border-0"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            background: inView
              ? "linear-gradient(135deg,#3b82f6,#7c3aed)"
              : "rgba(255,255,255,0.05)",
            boxShadow: inView ? "0 0 20px rgba(99,102,241,0.4)" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
        >
          {stage.number}
        </motion.div>
        {index < stages.length - 1 && (
          <div className="w-px flex-1 mt-2"
            style={{ background: inView ? "linear-gradient(to bottom,rgba(99,102,241,0.4),transparent)" : "rgba(255,255,255,0.05)" }} />
        )}
      </div>

      <div className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <Icon size={16} style={{ color: "#818cf8" }} />
          </div>
          <h3 className="text-white font-bold text-lg">{stage.name}</h3>
        </div>
        <p className="text-slate-300 mb-4">{stage.what}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg p-3 text-sm" style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}>
            <p className="text-indigo-400 text-xs font-semibold mb-1 uppercase tracking-wide">What AI does</p>
            <p className="text-slate-400 leading-relaxed">{stage.ai}</p>
          </div>
          <div className="rounded-lg p-3 text-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-emerald-400 text-xs font-semibold mb-1 uppercase tracking-wide">What you control</p>
            <p className="text-slate-400 leading-relaxed">{stage.you}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="bg-navy-950 min-h-screen pt-24">
      <section className="py-16 px-4 text-center">
        <FadeUp>
          <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">How It Works</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Six stages. Your rules.{" "}
            <span className="gradient-text">AI does the work.</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm tracking-wide">
            Turn on what you need.&nbsp;&nbsp;Skip what you don&apos;t.&nbsp;&nbsp;You stay in control.
          </p>
          <p className="mt-5 text-slate-300 max-w-xl mx-auto leading-relaxed">
            Every job is different. Recruit AI lets you configure which pipeline stages run — and in what order.
            Use all six for executive hires. Use two for high-volume roles. You decide.
          </p>
        </FadeUp>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          {stages.map((s, i) => (
            <StageCard key={s.name} stage={s} index={i} />
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Every job is different. Build the pipeline that fits.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              Toggle stages on or off.&nbsp;&nbsp;Reorder them.&nbsp;&nbsp;Use a preset template.
            </p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: SlidersHorizontal,
                title: "Toggle and reorder",
                desc: "Turn any stage on or off per job. Drag to reorder. Your pipeline saves with the job — not globally.",
              },
              {
                icon: LayoutTemplate,
                title: "Preset templates",
                desc: "Start from Quick Hire (CV screen + offer), Standard (CV + voice + selection), or Technical (all six stages).",
              },
              {
                icon: Shuffle,
                title: "Per-job settings",
                desc: "Different criteria, different pass thresholds, different Aria question sets for each role. Nothing bleeds across jobs.",
              },
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-white/8 bg-white/3 p-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
                  >
                    <card.icon size={18} style={{ color: "#818cf8" }} />
                  </div>
                  <p className="text-white font-semibold mb-2">{card.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Getting candidates into your pipeline.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              Three ways in.&nbsp;&nbsp;All routes lead to the same ranked pipeline.
            </p>
          </FadeUp>
          <div className="mt-12 space-y-4">
            {[
              {
                icon: Upload,
                title: "Bulk upload",
                desc: "Drag up to 5,000 resumes at once — any format. AI parses every file, extracts structured data, and scores each candidate against your job criteria. No formatting required on your end.",
                detail: "Supported formats: PDF, DOCX, DOC, TXT. Processing time: under 3 minutes for 500 resumes.",
              },
              {
                icon: UserPlus,
                title: "Add one at a time",
                desc: "Paste a name and email. Aria sends a branded invite immediately. The candidate gets a secure, single-use link to their interview — no account, no password, no download.",
                detail: "Works for referrals, LinkedIn outreach, or any candidate you've already spoken to.",
              },
              {
                icon: Link2,
                title: "Shareable apply link",
                desc: "Every job gets a unique apply link. Post it to LinkedIn, Naukri, Indeed, your own careers page — anywhere you already post. Each applicant automatically enters the pipeline.",
                detail: "The apply page shows your job description and branding. Candidates submit a resume and basic details. No Recruit AI branding is visible to them unless you choose to show it.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="rounded-xl border border-white/8 bg-white/3 p-6 flex gap-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
                  >
                    <item.icon size={18} style={{ color: "#818cf8" }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    <p className="text-slate-600 text-xs mt-2">{item.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <FadeUp>
          <div
            className="max-w-2xl mx-auto text-center rounded-2xl p-10 border"
            style={{
              background: "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(124,58,237,0.08))",
              borderColor: "rgba(99,102,241,0.2)",
            }}
          >
            <h2 className="text-3xl font-bold text-white">Ready to run your first pipeline?</h2>
            <p className="text-slate-400 mt-3">Set up a job in 5 minutes. First 50 CV screens are free.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <GradientButton href="/signup">Start free trial</GradientButton>
              <GradientButton href="/pricing" outline>See pricing</GradientButton>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
