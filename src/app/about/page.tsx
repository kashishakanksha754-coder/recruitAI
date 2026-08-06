"use client";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { UserCheck, FileText, Eye, Database, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { T } = useLanguage();
  const A = T.about as unknown as Record<string, string>;

  const STATS = [
    { value: A.stat1Value, title: A.stat1Title, label: A.stat1Label, bg: "rgba(240,98,90,0.04)" },
    { value: A.stat2Value, title: A.stat2Title, label: A.stat2Label, bg: "rgba(45,27,105,0.04)" },
    { value: A.stat3Value, title: A.stat3Title, label: A.stat3Label, bg: "rgba(240,98,90,0.04)" },
  ];

  const VALUES = [
    { icon: UserCheck, title: A.val1Title, desc: A.val1Desc },
    { icon: FileText,  title: A.val2Title, desc: A.val2Desc },
    { icon: Eye,       title: A.val3Title, desc: A.val3Desc },
    { icon: Database,  title: A.val4Title, desc: A.val4Desc },
    { icon: Scale,     title: A.val5Title, desc: A.val5Desc },
  ];

  return (
    <main className="pt-24 pb-20">

      {/* ── Hero ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="text-5xl font-extrabold text-purple-900 mb-6 tracking-tight">
              {A.heroTitle1}{" "}
              <span className="gradient-text">{A.heroTitle2}</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">{A.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Problem + 3 stats ── */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* Left: copy */}
            <FadeUp className="flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold text-purple-900 mb-8">{A.problemTitle}</h2>
              <div className="flex flex-col gap-6 text-[15px] text-muted" style={{ lineHeight: 1.7 }}>
                <p>{A.p1}</p>
                <p>
                  <span className="font-bold text-purple-900">{"It’s not a people problem, it’s a process problem."}</span>
                  {" "}Hyrix takes over the repetitive work — parsing, screening, assessments, interviews — so your team can focus on relationships, culture, and the final call. We don&apos;t replace recruiters. We work alongside them.
                </p>
              </div>
            </FadeUp>

            {/* Right: stat cards */}
            <FadeUp delay={0.15} className="flex flex-col justify-between gap-4">
              {STATS.map(({ value, title, label, bg }) => (
                <div
                  key={value}
                  className="flex-1 flex items-center rounded-2xl border border-purple-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: bg }}
                >
                  {/* Number block */}
                  <div className="shrink-0 flex items-center justify-center self-stretch px-8 min-w-[120px]">
                    <p className="text-5xl font-extrabold gradient-text leading-none">{value}</p>
                  </div>
                  {/* Divider */}
                  <div className="w-px self-stretch bg-purple-100 shrink-0" />
                  {/* Label block */}
                  <div className="flex-1 py-7 px-8">
                    <p className="text-base font-bold text-purple-900 mb-1">{title}</p>
                    <p className="text-sm text-muted leading-relaxed">{label}</p>
                  </div>
                </div>
              ))}
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── What we stand for + closing line ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-purple-900">{A.valuesTitle}</h2>
          </FadeUp>
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden grid grid-cols-2 lg:grid-cols-5" style={{ alignItems: "stretch" }}>
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08} className="flex">
                <div className={`px-10 py-10 flex flex-col items-start w-full${i < VALUES.length - 1 ? " border-r border-purple-100" : ""}`}>
                  <Icon size={28} className="text-coral-500 mb-5 shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(240,98,90,0.25))" }} />
                  <h3 className="text-purple-900 font-bold mb-3 text-sm leading-snug">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="text-center mt-14">
            <p className="text-lg font-medium text-purple-900 leading-relaxed max-w-2xl mx-auto">{A.closingLine}</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Careers CTA ── */}
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
            <h2 className="text-3xl font-extrabold text-purple-900 mb-4">{A.ctaTitle}</h2>
            <p className="text-muted mb-8">{A.ctaSub}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <GradientButton href="/contact">{A.getInTouch}</GradientButton>
              <GradientButton href="/demo" outline>{A.tryDemo}</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
