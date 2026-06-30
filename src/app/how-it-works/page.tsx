"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Phone, BarChart2, Mail, CheckCircle, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { T } = useLanguage();
  const H = T.hiw;

  const STAGES = [
    { icon: FileText,    step: "01", title: H.stage1Title, desc: H.stage1Desc, detail: H.stage1Detail },
    { icon: FileText,    step: "02", title: H.stage2Title, desc: H.stage2Desc, detail: H.stage2Detail },
    { icon: Phone,       step: "03", title: H.stage3Title, desc: H.stage3Desc, detail: H.stage3Detail },
    { icon: BarChart2,   step: "04", title: H.stage4Title, desc: H.stage4Desc, detail: H.stage4Detail },
    { icon: CheckCircle, step: "05", title: H.stage5Title, desc: H.stage5Desc, detail: H.stage5Detail },
    { icon: Mail,        step: "06", title: H.stage6Title, desc: H.stage6Desc, detail: H.stage6Detail },
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
  const { isRtl } = useLanguage();

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
        <span className="text-xs font-bold text-coral-500 uppercase tracking-widest mb-1 block">{stepLabel} {step}</span>
        <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
        <p className="text-muted leading-relaxed mb-3">{desc}</p>
        <p className="text-sm text-purple-700 bg-purple-50 rounded-xl px-4 py-2.5 inline-block">{detail}</p>
      </div>
    </motion.div>
  );
}
