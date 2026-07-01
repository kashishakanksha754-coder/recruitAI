"use client";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { Users, Shield, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { T } = useLanguage();
  const A = T.about;

  const VALUES = [
    { icon: Users,  title: A.val1Title, desc: A.val1Desc },
    { icon: Shield, title: A.val2Title, desc: A.val2Desc },
    { icon: Zap,    title: A.val3Title, desc: A.val3Desc },
    { icon: Globe,  title: A.val4Title, desc: A.val4Desc },
  ];

  return (
    <main className="pt-24 pb-20">

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

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 mb-6">{A.problemTitle}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{A.p1}</p>
                <p>{A.p2}</p>
                <p>{A.p3}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="h-full">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {[
                  { stat: A.stat1Value, label: A.stat1Label },
                  { stat: A.stat2Value, label: A.stat2Label },
                  { stat: A.stat3Value, label: A.stat3Label },
                  { stat: A.stat4Value, label: A.stat4Label },
                ].map(({ stat, label }) => (
                  <div key={stat} className="card p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-extrabold gradient-text mb-1">{stat}</p>
                    <p className="text-xs text-muted leading-snug">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted/40 text-center mt-3 italic">{A.statsDisclaimer}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900">{A.valuesTitle}</h2>
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
