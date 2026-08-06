"use client";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { UserCheck, FileText, Eye, Database, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { T } = useLanguage();
  const A = T.about as unknown as Record<string, string>;

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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <FadeUp className="flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold text-purple-900 mb-6">{A.problemTitle}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{A.p1}</p>
                <p>{A.p2}</p>
                <p>{A.p3}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex flex-col justify-center gap-4">
              {[
                { value: A.stat1Value, title: A.stat1Title, label: A.stat1Label },
                { value: A.stat2Value, title: A.stat2Title, label: A.stat2Label },
                { value: A.stat3Value, title: A.stat3Title, label: A.stat3Label },
              ].map(({ value, title, label }) => (
                <div key={value} className="card p-6 flex items-center gap-6 border border-purple-100">
                  <p className="text-5xl font-extrabold gradient-text leading-none shrink-0 w-20 text-center">{value}</p>
                  <div className="border-l border-purple-100 pl-6">
                    <p className="text-base font-bold text-purple-900 mb-0.5">{title}</p>
                    <p className="text-sm text-muted leading-snug">{label}</p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What we stand for + closing line ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-purple-900">{A.valuesTitle}</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-purple-100 bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08} className="flex">
                <div className="p-7 flex flex-col items-start w-full">
                  <Icon size={24} className="text-coral-500 mb-4 shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(240,98,90,0.25))" }} />
                  <h3 className="text-purple-900 font-bold mb-2 text-sm leading-snug">{title}</h3>
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
