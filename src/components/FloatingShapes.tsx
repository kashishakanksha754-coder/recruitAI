"use client";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { FileText, CheckCircle, Phone, Star, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const float = (y: number[], duration: number) => {
  const transition: Transition = { duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" };
  return { animate: { y }, transition };
};

const BADGE_META = [
  { icon: FileText,    key: "floatingBadge1", color: "text-coral-500",  bg: "bg-coral-50",  top: "6%",  left: "8%"   },
  { icon: CheckCircle, key: "floatingBadge2", color: "text-purple-700", bg: "bg-purple-50", top: "28%", right: "4%"  },
  { icon: Phone,       key: "floatingBadge3", color: "text-coral-500",  bg: "bg-coral-50",  top: "50%", left: "4%"   },
  { icon: Star,        key: "floatingBadge4", color: "text-purple-700", bg: "bg-purple-50", top: "70%", right: "8%"  },
  { icon: Clock,       key: "floatingBadge5", color: "text-coral-500",  bg: "bg-coral-50",  top: "86%", left: "28%"  },
];

export default function FloatingShapes() {
  const reduced = useReducedMotion() ?? false;
  const { T, isRtl } = useLanguage();
  const H = T.home as Record<string, string | string[]>;

  return (
    <div className="relative w-full h-[480px] select-none" aria-hidden>

      {/* Subtle dot-grid background texture */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="hero-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#C4C2E0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dot-grid)" opacity="0.45" />
      </svg>

      {/* Pill badges — floating freely with no graphic behind them */}
      {BADGE_META.map(({ icon: Icon, key, color, bg, top, left, right }, i) => {
        // Swap left/right for RTL so badges mirror to the opposite side
        const pos = isRtl ? { left: right, right: left } : { left, right };
        return (
        <motion.div
          key={key}
          className="absolute flex items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 whitespace-nowrap z-10"
          style={{
            top, ...pos,
            boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)",
          }}
          {...(reduced ? {} : float([0, i % 2 === 0 ? -8 : 8, 0], 5 + i * 0.8))}
        >
          <span className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
            <Icon size={15} className={color} />
          </span>
          <span className="text-xs font-semibold text-purple-900">{H[key] as string}</span>
        </motion.div>
        );
      })}
    </div>
  );
}
