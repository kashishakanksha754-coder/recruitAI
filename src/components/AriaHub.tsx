"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

interface SpokeConfig {
  x2: number; y2: number; label: string;
  anchor: Record<string, string>;
}

const DEFAULT_SPOKES: SpokeConfig[] = [
  { x2: 160, y2: 50,  label: "Live Transcription",  anchor: { top: "2%",    left: "50%", transform: "translateX(-50%)" } },
  { x2: 265, y2: 126, label: "Adaptive Follow-Ups", anchor: { top: "30%",   right: "0%" } },
  { x2: 225, y2: 249, label: "Bias-Aware Scoring",  anchor: { bottom: "10%",right: "0%" } },
  { x2: 95,  y2: 249, label: "Multilingual Ready",  anchor: { bottom: "10%",left: "0%"  } },
  { x2: 55,  y2: 126, label: "Voice + Video",       anchor: { top: "30%",   left: "0%"  } },
];

const COMPACT_SPOKES: SpokeConfig[] = [
  { x2: 160, y2: 50,  label: "Live Analytics",  anchor: { top: "2%",    left: "50%", transform: "translateX(-50%)" } },
  { x2: 265, y2: 126, label: "Bias Audit",       anchor: { top: "30%",  right: "0%" } },
  { x2: 225, y2: 249, label: "Voice Calls",      anchor: { bottom: "10%",right: "0%" } },
  { x2: 95,  y2: 249, label: "40+ Languages",    anchor: { bottom: "10%",left: "0%"  } },
];

export default function AriaHub({ compact = false }: { compact?: boolean }) {
  const SPOKES = compact ? COMPACT_SPOKES : DEFAULT_SPOKES;
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const size = compact ? "w-[280px] h-[280px]" : "w-[320px] h-[320px]";

  return (
    <div ref={ref} className={`relative ${size} mx-auto`}>
      <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0625A" />
            <stop offset="100%" stopColor="#2D1B69" />
          </linearGradient>
          <radialGradient id="orb-glow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F0625A" stopOpacity="0.55" />
            <stop offset="55%"  stopColor="#7B5CC4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2D1B69" stopOpacity="0"    />
          </radialGradient>
          {/* Fixed-radius blur for glow halo — only opacity/scale are animated */}
          <filter id="orb-blur-filter" filterUnits="userSpaceOnUse" x="40" y="40" width="240" height="240">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          {/* Spoke glow: blurred copy merged under the sharp original */}
          <filter id="spoke-glow-filter" filterUnits="userSpaceOnUse" x="0" y="0" width="320" height="320">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Outer glow halo — slow opacity+scale pulse (GPU: transform+opacity only) ── */}
        <motion.circle
          cx="160" cy="160" r="70"
          fill="url(#orb-glow-grad)"
          filter="url(#orb-blur-filter)"
          style={{ transformOrigin: "160px 160px" }}
          animate={reduced ? {} : {
            scale:   [1, 1.05, 1],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Spoke lines with soft glow ── */}
        {SPOKES.map((s, i) => (
          <motion.path
            key={i}
            d={`M 160 160 L ${s.x2} ${s.y2}`}
            stroke="url(#hub-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#spoke-glow-filter)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.75 } : {}}
            transition={{ duration: 0.6, delay: reduced ? 0 : 0.3 + i * 0.12, ease: "easeOut" }}
          />
        ))}

        {/* ── Traveling pulse dots — CSS x/y transforms (GPU-accelerated) ── */}
        {SPOKES.map((s, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={160} cy={160} r="2.5"
            fill="url(#hub-grad)"
            filter="url(#spoke-glow-filter)"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={inView && !reduced ? {
              x:       [0, s.x2 - 160],
              y:       [0, s.y2 - 160],
              opacity: [0.9, 0],
            } : { x: 0, y: 0, opacity: 0 }}
            transition={{
              duration:    2.0,
              delay:       1.5 + i * 0.4,
              repeat:      Infinity,
              repeatDelay: 1.5,
              ease:        "easeOut",
            }}
          />
        ))}

        {/* ── Spoke endpoint dots ── */}
        {SPOKES.map((s, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={s.x2} cy={s.y2} r="4"
            fill="url(#hub-grad)"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: reduced ? 0 : 0.9 + i * 0.1 }}
            style={{ transformOrigin: `${s.x2}px ${s.y2}px` }}
          />
        ))}

        {/* ── Orb inner halo ring ── */}
        <motion.circle
          cx="160" cy="160" r="44"
          fill="url(#hub-grad)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.15 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* ── Solid orb ── */}
        <motion.circle
          cx="160" cy="160" r="32"
          fill="url(#hub-grad)"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "160px 160px" }}
        />
      </svg>

      {/* ── Center “Aria” label ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.span
          className="text-white text-sm font-bold tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Aria
        </motion.span>
      </div>

      {/* ── Glassmorphic spoke labels ── */}
      {SPOKES.map((s, i) => (
        <motion.div
          key={`label-${i}`}
          className="absolute text-[11px] font-semibold text-purple-900 whitespace-nowrap"
          style={{
            ...(s.anchor as React.CSSProperties),
            borderRadius: "10px",
            padding: "5px 12px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 4px 16px rgba(45,27,105,0.10), 0 1px 3px rgba(45,27,105,0.06)",
          } as React.CSSProperties}
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
