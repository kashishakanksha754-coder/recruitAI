"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, MessageCircle, ShieldCheck, Globe, Video, Sparkles } from "lucide-react";

const BASE = 500;
const CX = BASE / 2;
const CY = BASE / 2;
const RING_R = 188;

function polar(deg: number, r = RING_R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

const NODES = [
  { angle: -90,  lines: ["Live Transcription"],         Icon: Mic2,          pink: false },
  { angle: -18,  lines: ["Adaptive", "Follow-Ups"],     Icon: MessageCircle, pink: true  },
  { angle:  54,  lines: ["Bias-Aware", "Scoring"],      Icon: ShieldCheck,   pink: false },
  { angle: 126,  lines: ["Multilingual", "Support"],    Icon: Globe,         pink: false },
  { angle: 198,  lines: ["Voice + Video", "Interviews"],Icon: Video,         pink: true  },
];

const MID_DOTS = [-54, 18, 90, 162, 234];

export default function AriaHub({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const size = compact ? 320 : 460;
  const scale = size / BASE;

  return (
    <div ref={ref} className="relative mx-auto overflow-hidden" style={{ width: size, height: size }}>
      <div
        className="absolute top-0 left-0"
        style={{ width: BASE, height: BASE, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* ── SVG: glow halo + dashed ring + mid dots + orb ── */}
        <svg
          viewBox={`0 0 ${BASE} ${BASE}`}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <radialGradient id="ah-orb" cx="50%" cy="40%" r="55%">
              <stop offset="0%"   stopColor="#F5F0FF" />
              <stop offset="35%"  stopColor="#DDD6FE" />
              <stop offset="70%"  stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.65" />
            </radialGradient>
            <radialGradient id="ah-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#C4B5F8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C4B5F8" stopOpacity="0"   />
            </radialGradient>
            <filter id="ah-halo" filterUnits="userSpaceOnUse" x="50" y="50" width="400" height="400">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>

          {/* Outer pulsing glow */}
          <motion.circle
            cx={CX} cy={CY} r={128}
            fill="url(#ah-glow)"
            filter="url(#ah-halo)"
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dashed orbit ring */}
          <motion.circle
            cx={CX} cy={CY} r={RING_R}
            fill="none"
            stroke="#C4B5F8"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.8 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Small dots between nodes */}
          {MID_DOTS.map((a, i) => {
            const { x, y } = polar(a);
            return (
              <motion.circle
                key={i}
                cx={x} cy={y} r={5}
                fill={i % 2 === 0 ? "#C4B5F8" : "#F0625A"}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.9 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            );
          })}

          {/* Central orb sphere */}
          <motion.circle
            cx={CX} cy={CY} r={98}
            fill="url(#ah-orb)"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </svg>

        {/* ── Center "Aria" label ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles size={26} className="text-purple-400 mb-2" strokeWidth={1.5} />
            <span className="text-[32px] font-extrabold text-purple-900 leading-none tracking-tight">Aria</span>
            <span className="text-[12px] text-purple-400 font-semibold tracking-wider mt-1.5">AI Interviewer</span>
          </motion.div>
        </div>

        {/* ── Node cards ── */}
        {NODES.map(({ angle, lines, Icon, pink }, i) => {
          const { x, y } = polar(angle);
          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center gap-2.5"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0.55 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.45 + i * 0.1, ease: "easeOut" }}
            >
              {/* White card */}
              <div
                className="flex items-center justify-center rounded-[20px] bg-white"
                style={{
                  width: 76, height: 76,
                  boxShadow: "0 8px 32px rgba(139,92,246,0.14), 0 1px 4px rgba(139,92,246,0.06)",
                }}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    pink
                      ? "bg-gradient-to-br from-pink-400 to-rose-500"
                      : "bg-gradient-to-br from-violet-400 to-purple-700"
                  }`}
                >
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
              </div>
              {/* Label */}
              <div className="text-center">
                {lines.map((l, j) => (
                  <p key={j} className="text-[12px] font-bold text-purple-900 leading-[1.4]">{l}</p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
