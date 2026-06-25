import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { Users, Shield, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Recruit AI — Our Mission and Values",
  description: "Learn why we built Aria, our mission to give recruiters their time back, and the values that guide how we build.",
  openGraph: {
    title: "About Recruit AI — Our Mission and Values",
    description: "Learn why we built Aria, our mission to give recruiters their time back, and the values that guide how we build.",
    url: "https://recruitai.app/about",
  },
};

const VALUES = [
  { icon: Users,  title: "Recruiters first",  desc: "Every feature is designed for the recruiter experience. Candidates only interact via Aria — never log in." },
  { icon: Shield, title: "Transparent AI",    desc: "Aria always discloses she’s an AI. Every score is explainable. Every decision is auditable." },
  { icon: Zap,    title: "Speed with depth",  desc: "Fast doesn’t mean shallow. Our rubrics surface nuance that keyword matching misses entirely." },
  { icon: Globe,  title: "Global by default", desc: "40+ languages, GDPR compliance, and EEOC-safe audit trails built in from day one." },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">

      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-6 tracking-tight">
              We built Aria so recruiters can{" "}
              <span className="gradient-text">actually recruit</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Recruit AI started because we watched talented recruiters spend 80% of their week on screening calls they never wanted to do. Aria fixes that.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 mb-6">The problem we&apos;re solving</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  The average recruiter reviews 250 resumes per role. They conduct 30+ screening calls to produce 5 candidates worth presenting. That&apos;s weeks of work before a single qualified person reaches the hiring manager.
                </p>
                <p>
                  Aria handles the entire volume layer — resume parsing, phone screens, structured interviews — so your team&apos;s judgment goes where it matters most: relationship building and final assessment.
                </p>
                <p>
                  We don&apos;t replace recruiters. We give them back the parts of the job they actually love.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="h-full">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {[
                  { stat: "1,200",  label: "Avg applicants per role processed" },
                  { stat: "48h",    label: "Average time to verified shortlist" },
                  { stat: "94%",    label: "Hiring manager satisfaction rate" },
                  { stat: "40+",    label: "Languages Aria interviews in" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="card p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-extrabold gradient-text mb-1">{stat}</p>
                    <p className="text-xs text-muted leading-snug">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted/40 text-center mt-3 italic">
                Figures are projected targets for Phase 1, not yet measured results.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900">What we stand for</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-purple-100 bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="p-7 h-full">
                  <Icon size={22} className="text-coral-500 mb-5" style={{ filter: "drop-shadow(0 2px 4px rgba(240,98,90,0.25))" }} />
                  <h3 className="text-purple-900 font-bold mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
          <defs>
            <pattern id="about-cta-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-cta-dot-grid)" opacity="0.45" />
        </svg>
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">Come build with us</h2>
            <p className="text-muted mb-8">We&apos;re hiring across engineering, research, and customer success.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/contact">Get in touch</GradientButton>
              <GradientButton href="/demo" outline>Try Recruit AI</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
