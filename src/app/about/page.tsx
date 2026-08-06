"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { UserCheck, FileText, Eye, Database, Scale, Check, Zap, Users } from "lucide-react";
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

  const KEEP_ITEMS = [A.splitKeep1, A.splitKeep2, A.splitKeep3, A.splitKeep4];
  const TAKE_ITEMS = [A.splitTake1, A.splitTake2, A.splitTake3, A.splitTake4, A.splitTake5, A.splitTake6];

  const [tab, setTab] = useState<"keep" | "take">("keep");
  const isKeep = tab === "keep";

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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-4xl font-extrabold text-purple-900 mb-6">{A.problemTitle}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{A.p1}</p>
                <p>{A.p2}</p>
                <p>{A.p3}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: A.stat1Value, title: A.stat1Title, label: A.stat1Label },
                  { value: A.stat2Value, title: A.stat2Title, label: A.stat2Label },
                  { value: A.stat3Value, title: A.stat3Title, label: A.stat3Label },
                ].map(({ value, title, label }) => (
                  <div key={value} className="card p-6 flex items-center gap-6">
                    <p className="text-5xl font-extrabold gradient-text leading-none shrink-0">{value}</p>
                    <div>
                      <p className="text-sm font-bold text-purple-900 mb-0.5">{title}</p>
                      <p className="text-sm text-muted leading-snug">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What stays / what goes toggle ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-purple-900">{A.splitTitle}</h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="card px-10 pt-8 pb-9 max-w-lg mx-auto">
              {/* Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-purple-50 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setTab("keep")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isKeep ? "gradient-bg text-white shadow-btn" : "text-muted hover:text-purple-900"
                    }`}
                  >
                    <Users size={14} />
                    {A.splitTab1}
                  </button>
                  <button
                    onClick={() => setTab("take")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      !isKeep ? "gradient-bg text-white shadow-btn" : "text-muted hover:text-purple-900"
                    }`}
                  >
                    <Zap size={14} />
                    {A.splitTab2}
                  </button>
                </div>
              </div>

              {/* Fixed-height content */}
              <div className="relative min-h-[280px]">
                <AnimatePresence mode="wait">
                  {isKeep ? (
                    <motion.div
                      key="keep"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0"
                    >
                      <ul className="space-y-4 mt-1">
                        {KEEP_ITEMS.map(item => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)" }}>
                              <Check size={13} className="text-white" strokeWidth={2.5} />
                            </span>
                            <span className="text-sm font-medium text-purple-900">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="take"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0"
                    >
                      <ul className="space-y-4 mt-1">
                        {TAKE_ITEMS.map(item => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)" }}>
                              <Zap size={12} className="text-white" strokeWidth={2.5} />
                            </span>
                            <span className="text-sm font-medium text-purple-900">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── What we stand for ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-purple-900">{A.valuesTitle}</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-purple-100 bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden items-stretch">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08} className="flex">
                <div className="p-8 flex flex-col items-start w-full">
                  <Icon size={28} className="text-coral-500 mb-5 shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(240,98,90,0.25))" }} />
                  <h3 className="text-purple-900 font-bold mb-3 text-base leading-snug min-h-[3rem]">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing line ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-xl font-medium text-purple-900 leading-relaxed">{A.closingLine}</p>
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
