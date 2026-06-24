"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SPOKES = [
  { x2: 160, y2: 50,  label: "Live Transcription",      anchor: { top: "2%",  left: "50%", transform: "translateX(-50%)" } },
  { x2: 265, y2: 126, label: "Adaptive Follow-Ups",     anchor: { top: "30%", right: "0%" } },
  { x2: 225, y2: 249, label: "Bias-Aware Scoring",      anchor: { bottom: "10%", right: "0%" } },
  { x2: 95,  y2: 249, label: "Multilingual Ready",      anchor: { bottom: "10%", left: "0%" } },
  { x2: 55,  y2: 126, label: "Voice + Video",           anchor: { top: "30%", left: "0%" } },
];

export default function AriaHub() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative w-[320px] h-[320px] mx-auto">
      <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0625A" />
            <stop offset="100%" stopColor="#2D1B69" />
          </linearGradient>
        </defs>

        {SPOKES.map((s, i) => (
          <motion.path
            key={i}
            d={`M 160 160 L ${s.x2} ${s.y2}`}
            stroke="url(#hub-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: reduced ? 0 : 0.3 + i * 0.12, ease: "easeOut" }}
          />
        ))}

        {/* Spoke endpoint dots */}
        {SPOKES.map((s, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={s.x2} cy={s.y2} r="4"
            fill="url(#hub-grad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: reduced ? 0 : 0.9 + i * 0.1 }}
          />
        ))}

        {/* Center circle */}
        <circle cx="160" cy="160" r="42" fill="url(#hub-grad)" opacity="0.12" />
        <circle cx="160" cy="160" r="32" fill="url(#hub-grad)" />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm font-bold tracking-wide">Aria</span>
      </div>

      {/* Spoke labels */}
      {SPOKES.map((s, i) => (
        <motion.div
          key={`label-${i}`}
          className="absolute text-[11px] font-semibold text-purple-900 bg-white rounded-full px-2.5 py-1 shadow-card whitespace-nowrap"
          style={s.anchor as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: reduced ? 0 : 1.0 + i * 0.1 }}
        >
          {s.label}
        </motion.div>
      ))}
    </div>
  );
}
