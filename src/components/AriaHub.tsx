"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, MessageCircle, ShieldCheck, Globe, Video, Sparkles } from "lucide-react";

const BASE = 600;
const CX = BASE / 2;
const CY = BASE / 2;
const RING_R = 215;
const CARD = 76;

function polar(deg: number, r = RING_R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

const NODES = [
  { angle: -90,  lines: ["Live Transcription"],         Icon: Mic2,          coral: false },
  { angle: -18,  lines: ["Adaptive", "Follow-Ups"],     Icon: MessageCircle, coral: true  },
  { angle:  54,  lines: ["Bias-Aware", "Scoring"],      Icon: ShieldCheck,   coral: false },
  { angle: 126,  lines: ["Multilingual", "Support"],    Icon: Globe,         coral: false },
  { angle: 198,  lines: ["Voice + Video", "Interviews"],Icon: Video,         coral: true  },
];

const MID_DOTS = [-54, 18, 90, 162, 234];

export default function AriaHub({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const size = compact ? 340 : 480;
  const scale = size / BASE;

  return (
    <div ref={ref} className="relative mx-auto" style={{ width: size, height: size }}>
      <div
        className="absolute top-0 left-0"
        style={{ width: BASE, height: BASE, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* ── SVG: glow + ring + dots + orb ── */}
        <svg viewBox={`0 0 ${BASE} ${BASE}`} className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <radialGradient id="ah-orb" cx="50%" cy="38%" r="56%">
              <stop offset="0%"   stopColor="#EDE9FE" />
              <stop offset="30%"  stopColor="#C4B5F8" />
              <stop offset="65%"  stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.85" />
            </radialGradient>
            <radialGradient id="ah-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0"   />
            </radialGradient>
            <filter id="ah-halo" filterUnits="userSpaceOnUse" x="60" y="60" width="480" height="480">
              <feGaussianBlur stdDeviation="28" />
            </filter>
          </defs>

          {/* Outer pulsing glow */}
          <motion.circle
            cx={CX} cy={CY} r={145}
            fill="url(#ah-glow)" filter="url(#ah-halo)"
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={reduced ? {} : { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dashed orbit ring */}
          <motion.circle
            cx={CX} cy={CY} r={RING_R}
            fill="none" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="6 8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.7 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Mid-point dots */}
          {MID_DOTS.map((a, i) => {
            const { x, y } = polar(a);
            return (
              <motion.circle key={i}
                cx={x} cy={y} r={5}
                fill={i % 2 === 0 ? "#C4B5F8" : "#F0625A"}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.85 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            );
          })}

          {/* Central orb sphere */}
          <motion.circle
            cx={CX} cy={CY} r={105}
            fill="url(#ah-orb)"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </svg>

        {/* ── Center "Aria" label (inside orb) ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles size={26} strokeWidth={1.5} className="mb-2" style={{ color: "rgba(255,255,255,0.85)" }} />
            <span
              className="text-[34px] font-extrabold leading-none tracking-tight"
              style={{ color: "#1E1057", textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}
            >
              Aria
            </span>
            <span
              className="text-[12px] font-semibold tracking-wider mt-1.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              AI Interviewer
            </span>
          </motion.div>
        </div>

        {/* ── Node icon cards ── */}
        {NODES.map(({ angle, Icon, coral }, i) => {
          const { x, y } = polar(angle);
          return (
            <motion.div
              key={`card-${i}`}
              className="absolute flex items-center justify-center rounded-[20px] bg-white"
              style={{
                left: x, top: y,
                width: CARD, height: CARD,
                transform: "translate(-50%, -50%)",
                boxShadow: "0 6px 28px rgba(139,92,246,0.15), 0 1px 4px rgba(139,92,246,0.07)",
              }}
              initial={{ opacity: 0, scale: 0.55 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.45 + i * 0.1, ease: "easeOut" }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background: coral
                    ? "linear-gradient(135deg, #F0625A 0%, #D44E80 100%)"
                    : "linear-gradient(135deg, #7B5CC4 0%, #2D1B69 100%)",
                }}
              >
                <Icon size={22} className="text-white" strokeWidth={1.8} />
              </div>
            </motion.div>
          );
        })}

        {/* ── Node labels (below each card) ── */}
        {NODES.map(({ angle, lines }, i) => {
          const { x, y } = polar(angle);
          return (
            <motion.div
              key={`label-${i}`}
              className="absolute text-center"
              style={{
                left: x,
                top: y + CARD / 2 + 10,
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.6 + i * 0.1 }}
            >
              {lines.map((l, j) => (
                <p key={j} className="text-[12px] font-bold text-purple-900 leading-[1.45] whitespace-nowrap">{l}</p>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
