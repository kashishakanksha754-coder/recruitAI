"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Phone, BarChart2, Mail, CheckCircle, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

const STAGES = [
  {
    icon: FileText,
    step: "01",
    title: "Post a role",
    desc: "Define the role in plain English. Aria generates a structured rubric — skills, signals, dealbreakers — in seconds. No ATS wizard required.",
    detail: "Post once and distribute instantly to LinkedIn, Naukri, Glassdoor, Indeed, and more — no extra steps.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Applications flow in",
    desc: "Every resume is parsed in under 3 seconds. AI extracts skills, tenure gaps, title progression, and soft signals that keyword matching misses.",
    detail: "Handles PDF, Word, LinkedIn profiles, and plain-text submissions.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Aria calls candidates",
    desc: "Aria places a real phone call or video interview. She adapts questions based on each candidate's background, probes weak spots, and follows up naturally.",
    detail: "40+ languages. Scheduled automatically or on-demand. Candidates consistently rate the experience highly.",
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Scores & transcripts",
    desc: "Every interview is transcribed, scored against your rubric, and summarized. Key quotes are highlighted. Red flags are flagged explicitly.",
    detail: "EEOC-safe audit trail for every decision. Full export to PDF for your review.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Shortlist delivered",
    desc: "Your recruiter receives the top 10 candidates with full context — not raw resumes. One click to schedule a human interview.",
    detail: "Average: 48 hours from job post to verified shortlist.",
  },
  {
    icon: Mail,
    step: "06",
    title: "Candidates stay informed",
    desc: "Every applicant receives timely, respectful updates. Aria handles status emails automatically — no candidate left in the dark.",
    detail: "Customisable messaging. No candidate accounts required.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-5 tracking-tight">
              From 1,000 applicants to{" "}
              <span className="gradient-text">10 verified matches</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Here&apos;s exactly what happens when you post a role with Recruit AI.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pipeline stages */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-purple-100 hidden sm:block" />
            <div className="space-y-12">
              {STAGES.map(({ icon: Icon, step, title, desc, detail }, i) => (
                <StageRow key={step} icon={Icon} step={step} title={title} desc={desc} detail={detail} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">Ready to see it live?</h2>
            <p className="text-muted mb-8">No account needed. Explore the full Recruit AI experience in the demo.</p>
            <GradientButton href="/demo" className="px-8 py-4 text-base">
              Try the demo <ArrowRight size={16} className="ml-2" />
            </GradientButton>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

function StageRow({
  icon: Icon, step, title, desc, detail, index,
}: {
  icon: React.ElementType; step: string; title: string; desc: string; detail: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
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
        <span className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-1 block">Step {step}</span>
        <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
        <p className="text-muted leading-relaxed mb-3">{desc}</p>
        <p className="text-sm text-purple-700 bg-purple-50 rounded-xl px-4 py-2.5 inline-block">{detail}</p>
      </div>
    </motion.div>
  );
}
