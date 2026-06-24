import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { Users, Shield, Zap, Globe } from "lucide-react";

const VALUES = [
  { icon: Users,  title: "Recruiters first",  desc: "Every feature is designed for the recruiter experience. Candidates only interact via Aria — never log in." },
  { icon: Shield, title: "Transparent AI",    desc: "Aria always discloses she's an AI. Every score is explainable. Every decision is auditable." },
  { icon: Zap,    title: "Speed with depth",  desc: "Fast doesn't mean shallow. Our rubrics surface nuance that keyword matching misses entirely." },
  { icon: Globe,  title: "Global by default", desc: "40+ languages, GDPR compliance, and EEOC-safe audit trails built in from day one." },
];

const TEAM = [
  { name: "Elena Vasquez",   role: "CEO & Co-founder",         bg: "from-coral-400 to-purple-700" },
  { name: "James Okonkwo",   role: "CTO & Co-founder",         bg: "from-purple-700 to-coral-400" },
  { name: "Aiko Tanaka",     role: "Head of AI Research",      bg: "from-coral-300 to-purple-600" },
  { name: "David Brennan",   role: "VP of Customer Success",   bg: "from-purple-600 to-coral-300" },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 mb-6">The problem we&apos;re solving</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>The average recruiter reviews 250 resumes per role. They conduct 30+ screening calls to produce 5 candidates worth presenting. That&apos;s weeks of work before a single qualified person reaches the hiring manager.</p>
                <p>Aria handles the entire volume layer — resume parsing, phone screens, structured interviews — so your team&apos;s judgment goes where it matters most: relationship building and final assessment.</p>
                <p>We don&apos;t replace recruiters. We give them back the parts of the job they actually love.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "1,200",  label: "Avg applicants per role processed" },
                  { stat: "48h",    label: "Average time to verified shortlist" },
                  { stat: "94%",    label: "Hiring manager satisfaction rate" },
                  { stat: "40+",    label: "Languages Aria interviews in" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="card p-6 text-center">
                    <p className="text-3xl font-extrabold gradient-text mb-1">{stat}</p>
                    <p className="text-xs text-muted leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900">What we stand for</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-icon flex items-center justify-center mb-5">
                    <Icon size={20} className="text-coral-500" />
                  </div>
                  <h3 className="text-purple-900 font-bold mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900">The team</h2>
            <p className="text-muted mt-3 text-lg">Former engineers and recruiters from Google, Greenhouse, and Sequoia-backed startups.</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, bg }, i) => (
              <FadeUp key={name} delay={i * 0.08}>
                <div className="card p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bg} mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold`}>
                    {name[0]}
                  </div>
                  <p className="text-purple-900 font-bold text-sm">{name}</p>
                  <p className="text-muted text-xs mt-1">{role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">Come build with us</h2>
            <p className="text-muted mb-8">We&apos;re hiring across engineering, research, and customer success.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/contact">Get in touch</GradientButton>
              <GradientButton href="/signup" outline>Try Recruit AI</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
