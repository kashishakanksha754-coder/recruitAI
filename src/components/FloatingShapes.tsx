"use client";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { FileText, CheckCircle, Phone, Star, Clock } from "lucide-react";

const float = (y: number[], duration: number) => {
  const transition: Transition = { duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" };
  return { animate: { y }, transition };
};

const badges = [
  {
    icon: FileText,    label: "Resume parsed",    color: "text-coral-500",
    bg: "bg-coral-50", top: "8%",  left: "2%",
  },
  {
    icon: CheckCircle, label: "94% match score",  color: "text-purple-700",
    bg: "bg-purple-50", top: "46%", left: "0%",
  },
  {
    icon: Phone,       label: "Call transcribed", color: "text-coral-500",
    bg: "bg-coral-50", top: "70%", left: "22%",
  },
  {
    icon: Star,        label: "Aria recommended", color: "text-purple-700",
    bg: "bg-purple-50", top: "24%", right: "4%",
  },
  {
    icon: Clock,       label: "Decision in 2 days", color: "text-coral-500",
    bg: "bg-coral-50", top: "72%", left: "46%",
  },
];

export default function FloatingShapes() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="relative w-full h-[480px] select-none" aria-hidden>

      {/* Large primary shape — coral/purple gradient, 20% opacity with soft glow */}
      <motion.div
        className="absolute rounded-[36px]"
        style={{
          width: 300, height: 300,
          top: "8%", left: "12%",
          rotate: "15deg",
          background: "linear-gradient(135deg, rgba(240,98,90,0.22) 0%, rgba(45,27,105,0.18) 100%)",
          boxShadow: "0 0 60px 10px rgba(240,98,90,0.12)",
        }}
        {...(reduced ? {} : float([0, -16, 0], 7))}
      />

      {/* Medium secondary shape — lavender tint, solid enough to read */}
      <motion.div
        className="absolute rounded-[28px]"
        style={{
          width: 190, height: 190,
          top: "32%", left: "38%",
          rotate: "-18deg",
          background: "linear-gradient(135deg, rgba(232,228,248,0.90) 0%, rgba(252,232,231,0.80) 100%)",
          boxShadow: "0 4px 30px rgba(45,27,105,0.10)",
        }}
        {...(reduced ? {} : float([0, 12, 0], 9))}
      />

      {/* Small accent circle — gradient, visible opacity */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 72, height: 72,
          top: "66%", left: "58%",
          background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)",
          opacity: 0.22,
          boxShadow: "0 0 24px 4px rgba(240,98,90,0.18)",
        }}
        {...(reduced ? {} : float([0, -10, 0], 5))}
      />

      {/* Floating pill badges — white with real drop-shadow for lift on white bg */}
      {badges.map(({ icon: Icon, label, color, bg, top, left, right }, i) => (
        <motion.div
          key={label}
          className="absolute flex items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 whitespace-nowrap z-10"
          style={{
            top, left, right,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12), 0 1px 6px rgba(0,0,0,0.08)",
          }}
          {...(reduced ? {} : float([0, i % 2 === 0 ? -7 : 7, 0], 4.5 + i * 0.9))}
        >
          <span className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
            <Icon size={15} className={color} />
          </span>
          <span className="text-xs font-semibold text-purple-900">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
