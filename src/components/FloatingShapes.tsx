"use client";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { FileText, CheckCircle, Phone, Star } from "lucide-react";

const float = (y: number[], duration: number) => {
  const transition: Transition = { duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" };
  return { animate: { y }, transition };
};

const badges = [
  { icon: FileText,    label: "Resume parsed",       color: "text-coral-500", top: "14%",  left: "-4%"  },
  { icon: CheckCircle, label: "94% match score",     color: "text-purple-700", top: "52%", left: "2%"   },
  { icon: Phone,       label: "Call transcribed",    color: "text-coral-500", top: "72%", left: "18%"  },
  { icon: Star,        label: "Aria recommended",    color: "text-purple-700", top: "28%", right: "-2%" },
];

export default function FloatingShapes() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="relative w-full h-[460px] select-none" aria-hidden>
      {/* Large primary shape */}
      <motion.div
        className="absolute rounded-[32px] gradient-bg opacity-10"
        style={{ width: 340, height: 340, top: "5%", left: "8%", rotate: 15 }}
        {...(reduced ? {} : float([0, -18, 0], 7))}
      />
      {/* Medium secondary shape */}
      <motion.div
        className="absolute rounded-[24px]"
        style={{
          width: 220, height: 220, top: "28%", left: "34%", rotate: -20,
          background: "linear-gradient(135deg, #E8E4F8 0%, #FCE8E7 100%)",
        }}
        {...(reduced ? {} : float([0, 14, 0], 9))}
      />
      {/* Small accent dot */}
      <motion.div
        className="absolute rounded-full gradient-bg opacity-30"
        style={{ width: 80, height: 80, top: "68%", left: "55%", rotate: 0 }}
        {...(reduced ? {} : float([0, -10, 0], 5))}
      />

      {/* Floating badge cards */}
      {badges.map(({ icon: Icon, label, color, top, left, right }, i) => (
        <motion.div
          key={label}
          className="absolute flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-card-lg text-xs font-semibold text-purple-900 whitespace-nowrap"
          style={{ top, left, right }}
          {...(reduced ? {} : float([0, i % 2 === 0 ? -8 : 8, 0], 4 + i * 0.8))}
        >
          <Icon size={15} className={color} />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
