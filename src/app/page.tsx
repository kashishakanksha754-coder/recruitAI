"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, Phone, ClipboardCheck, Video, CheckCircle, Mail,
  Upload, UserPlus, Link2, Users, Building2, Briefcase,
  Mic, Languages, Brain, BarChart3, Zap, Clock, TrendingDown, Target,
  ChevronDown
} from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

function CodeTexture() {
  const lines = [
    "parsing_resume.pdf...",
    "scoring_candidate_0042...",
    "transcribing_call.wav",
    "running_cv_screen()",
    "aria.conduct_interview()",
    "rank_candidates(pool=1200)",
    "extracting_skills[]",
    "bias_check: passed",
    "generate_offer_letter()",
    "pipeline.stage = 'voice_call'",
    "match_score: 94.2",
    "scheduling_aria_call()",
    "parsing_resume.pdf...",
    "scoring_candidate_0019...",
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div className="absolute top-10 right-8 space-y-3 text-right">
        {lines.map((l, i) => (
          <p
            key={i}
            className="text-xs font-mono"
            style={{ color: `rgba(99,102,241,${0.06 + (i % 4) * 0.015})`, lineHeight: 1.8 }}
          >
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function IconChip({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5">
      <span
        className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
        style={{ background: "linear-gradient(135deg,#3b82f620,#7c3aed20)" }}
      >
        <Icon size={10} style={{ color: "#818cf8" }} />
      </span>
      <span className="text-slate-300">{label}</span>
    </span>
  );
}

const stages = [
  {
    icon: FileText,
    name: "CV Screening",
    desc: "AI parses and ranks every resume against your job criteria. You see a ranked shortlist — not 800 PDFs.",
    cta: "See a sample screening score",
    snippet: `Candidate: Priya M.\nRole fit: 91/100\nSkills matched: React, Node.js, AWS\nExperience gap: none\nRecommendation: Advance to voice call`,
  },
  {
    icon: Phone,
    name: "AI Voice Call",
    desc: "Aria calls every shortlisted candidate. She asks role-specific questions and scores each answer live.",
    cta: "Hear Aria run a screening call",
    snippet: `Aria: "Walk me through your last deployment pipeline."\nCandidate: "We used GitHub Actions with..."\n[Aria scores: Technical depth 8/10, Communication 9/10]\nCall duration: 7m 42s`,
  },
  {
    icon: ClipboardCheck,
    name: "Skill Assessment",
    desc: "Role-specific tests run automatically after the call. Results attach directly to the candidate profile.",
    cta: "See a sample assessment report",
    snippet: `Assessment: Full-Stack Engineer\nScore: 78/100\nTime taken: 38 min\nStrong: System design, APIs\nWeak: Database indexing\nProctoring: Clean`,
  },
  {
    icon: Video,
    name: "AI Video Interview",
    desc: "Aria runs a structured async video interview. She adapts follow-up questions based on each response.",
    cta: "Watch the pipeline in action",
    snippet: `Q3: "Describe a time you led a cross-team project."\n[Candidate response: 2m 14s]\nAria follow-up: "How did you handle the conflicting priorities?"\nSentiment: Confident. Clarity: High.`,
  },
  {
    icon: CheckCircle,
    name: "Selection",
    desc: "You review ranked candidates with full evidence — transcripts, scores, recordings. You make the call.",
    cta: "See the decision dashboard",
    snippet: `Top 5 candidates ready for your review\n#1 Ravi K. — 94/100\n#2 Anya S. — 91/100\n#3 James T. — 88/100\n[Your decision: advance / reject / hold]`,
  },
  {
    icon: Mail,
    name: "Offer Letter",
    desc: "Generate and send a branded offer letter in two clicks once you've made your decision.",
    cta: "See a sample offer letter",
    snippet: `Offer: Senior Frontend Engineer\nCompensation: ₹28 LPA + ESOPs\nStart date: 15 Aug 2025\nSent to: ravi.k@email.com\nStatus: Awaiting signature`,
  },
];

function PipelineCard({ stage, index }: { stage: (typeof stages)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = stage.icon;
  return (
    <FadeUp delay={index * 0.07}>
      <div className="rounded-xl border border-white/8 bg-white/3 p-5 flex flex-col gap-3 hover:border-indigo-500/30 transition-colors h-full">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
        >
          <Icon size={18} style={{ color: "#818cf8" }} />
        </div>
        <p className="text-white font-semibold text-sm">{stage.name}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{stage.desc}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-medium mt-auto"
          style={{ color: "#818cf8" }}
        >
          {stage.cta}
          <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-lg p-3 text-xs font-mono text-slate-400 whitespace-pre-line leading-relaxed"
            style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}
          >
            {stage.snippet}
          </motion.div>
        )}
      </div>
    </FadeUp>
  );
}

export default function HomePage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <CodeTexture />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(79,70,229,0.18) 0%,transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-400 mb-6"
              style={{ background: "rgba(79,70,229,0.08)" }}>
              AI hiring platform for recruiters
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Stop reading resumes.{" "}
              <span className="gradient-text">Start interviewing finalists.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mt-4 text-slate-500 text-sm font-medium tracking-wide">
              No pileups.&nbsp;&nbsp;No scheduling chaos.&nbsp;&nbsp;No guesswork.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
              AI screens resumes, calls candidates, and runs interviews. You make the final call.
            </p>
          </FadeUp>
          <FadeUp delay={0.26}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <GradientButton href="/signup">Start free trial</GradientButton>
              <GradientButton href="/how-it-works" outline>See how it works</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { stat: "1,000 → 10", label: "candidates screened to shortlist in 2 days" },
            { stat: "78%", label: "reduction in time-to-shortlist" },
            { stat: "6 min", label: "average AI voice screening call" },
            { stat: "4×", label: "more roles filled per recruiter per month" },
          ].map((s, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.stat}</p>
                <p className="text-slate-500 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Manual hiring kills your pipeline.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              Bottlenecks pile up.&nbsp;&nbsp;Good candidates leave.&nbsp;&nbsp;Time disappears.
            </p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, stat: "6–8 hrs", label: "Average recruiter time reviewing resumes per open role" },
              { icon: TrendingDown, stat: "38 days", label: "Average time-to-hire — top candidates drop off by day 7" },
              { icon: Target, stat: "60%", label: "Of candidates never hear back, hurting your employer brand" },
              { icon: Zap, stat: "3× slower", label: "Manual screening means losing finalists to faster competitors" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-white/8 bg-white/3 p-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(135deg,#3b82f615,#7c3aed15)", border: "1px solid rgba(99,102,241,0.2)" }}
                  >
                    <item.icon size={16} style={{ color: "#818cf8" }} />
                  </div>
                  <p className="text-2xl font-bold text-white">{item.stat}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">{item.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* MEET ARIA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%,rgba(124,58,237,0.08) 0%,transparent 60%)" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">Meet Aria</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Your AI interviewer.{" "}
                <span className="gradient-text">She screens. She probes. You decide.</span>
              </h2>
              <p className="text-slate-500 mt-2 text-sm tracking-wide">
                Live on calls.&nbsp;&nbsp;Sharp in video.&nbsp;&nbsp;Ready for every candidate.
              </p>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Aria handles every voice screening call and video interview in your pipeline. She asks role-specific questions,
                listens for depth, and scores each response in real time.
              </p>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Aria screens. She adapts follow-up questions on the fly. You don&apos;t hear junk calls.
                You see five decision-ready candidates with scores, transcripts, and evidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { icon: Mic, label: "Live Transcription" },
                  { icon: Brain, label: "Adaptive Follow-Ups" },
                  { icon: Languages, label: "Multilingual Ready" },
                  { icon: BarChart3, label: "Bias-Aware Scoring" },
                  { icon: FileText, label: "ATS-Ready Reports" },
                ].map((chip) => (
                  <IconChip key={chip.label} icon={chip.icon} label={chip.label} />
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: "linear-gradient(135deg,rgba(59,130,246,0.06),rgba(124,58,237,0.06))",
                  borderColor: "rgba(99,102,241,0.2)",
                  boxShadow: "0 0 40px rgba(99,102,241,0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#3b82f6,#7c3aed)" }}
                  >
                    A
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aria</p>
                    <p className="text-indigo-400 text-xs">AI Interviewer · Online now</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="space-y-3">
                  {[
                    { from: "Aria", msg: "Hi Priya, I'm Aria from Recruit AI. Ready for your screening call?" },
                    { from: "Priya", msg: "Yes, absolutely." },
                    { from: "Aria", msg: "Walk me through the last backend system you designed from scratch." },
                    { from: "Priya", msg: "Sure — it was a real-time notification service handling 50k events per minute..." },
                    { from: "Aria", msg: "Interesting. How did you handle backpressure when the downstream consumer slowed down?" },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.from === "Aria" ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-xs rounded-xl px-3 py-2 text-xs leading-relaxed ${
                          m.from === "Aria"
                            ? "bg-white/5 text-slate-300 rounded-tl-none"
                            : "text-white rounded-tr-none"
                        }`}
                        style={m.from !== "Aria" ? { background: "linear-gradient(135deg,#3b82f6,#7c3aed)" } : {}}
                      >
                        {m.msg}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/8 grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "Technical depth", score: "9/10" },
                    { label: "Communication", score: "8/10" },
                    { label: "Overall", score: "92/100" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="gradient-text font-bold text-sm">{s.score}</p>
                      <p className="text-slate-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PIPELINE STAGES */}
      <section id="pipeline" className="py-20 px-4 relative overflow-hidden">
        <CodeTexture />
        <div className="relative max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              AI does the screening. You do the deciding.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              Six stages.&nbsp;&nbsp;Any combination.&nbsp;&nbsp;You choose what runs.
            </p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stages.map((s, i) => (
              <PipelineCard key={s.name} stage={s} index={i} />
            ))}
          </div>
          <FadeUp delay={0.2}>
            <p className="text-center text-slate-500 text-sm mt-6">
              Pick the stages you need. Skip the rest.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CANDIDATE INTAKE */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Bring candidates in however you already work.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              No new process.&nbsp;&nbsp;No new platform.&nbsp;&nbsp;Just your workflow, faster.
            </p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Upload,
                title: "Upload what you have",
                desc: "Drag and drop up to 5,000 resumes at once. Our AI parses, standardizes, and ranks every one in minutes. No cleanup required.",
              },
              {
                icon: UserPlus,
                title: "Add one at a time",
                desc: "Manually add a candidate with a name and email. Aria sends the invite. They get a secure link — no login, no profile required.",
              },
              {
                icon: Link2,
                title: "Share one link",
                desc: "Post your apply link to LinkedIn, Naukri, or your own careers page. Every submission enters your pipeline automatically.",
              },
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-white/8 bg-white/3 p-6 h-full">
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

      {/* BUILT FOR EVERY RECRUITER */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Built for every kind of recruiter.
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm tracking-wide">
              Solo desk.&nbsp;&nbsp;Agency floor.&nbsp;&nbsp;Enterprise team.
            </p>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Individual recruiters",
                desc: "Run your entire pipeline without a coordinator. Aria handles calls while you focus on building relationships with finalists.",
              },
              {
                icon: Users,
                title: "Staffing companies",
                desc: "Screen once, reuse scores across every client role. Cut your cost-per-screen and move candidates faster than your competitors.",
              },
              {
                icon: Building2,
                title: "Enterprise teams",
                desc: "Consistent, defensible screening across every hire. Centralized dashboards, audit trails, and role-based access for your full team.",
              },
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-white/8 bg-white/3 p-6 h-full hover:border-indigo-500/30 transition-colors">
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

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <FadeUp>
          <div
            className="max-w-2xl mx-auto text-center rounded-2xl p-10 border"
            style={{
              background: "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(124,58,237,0.08))",
              borderColor: "rgba(99,102,241,0.2)",
              boxShadow: "0 0 60px rgba(99,102,241,0.1)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Start screening smarter today.
            </h2>
            <p className="text-slate-400 mt-3">
              No setup call required. Import your first job and upload resumes in under 5 minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <GradientButton href="/signup">Start free trial</GradientButton>
              <GradientButton href="/contact" outline>Book a demo</GradientButton>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
