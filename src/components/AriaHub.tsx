"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, MessageCircle, ShieldCheck, Globe, Video, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BASE = 600;
const CX = BASE / 2;
const CY = BASE / 2;
const RING_R = 225;
const CARD = 72;

function polar(deg: number, r = RING_R) {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

// LTR angles and their RTL mirrors (reflected across vertical axis: 180 - angle)
const NODE_DEFS = [
  { angle: -90,  rtlAngle: -90,  Icon: Mic2,          coral: false },
  { angle: -18,  rtlAngle: 198,  Icon: MessageCircle, coral: true  },
  { angle:  54,  rtlAngle: 126,  Icon: ShieldCheck,   coral: false },
  { angle: 126,  rtlAngle:  54,  Icon: Globe,         coral: false },
  { angle: 198,  rtlAngle: -18,  Icon: Video,         coral: true  },
];

const MID_DOTS = [-54, 18, 90, 162, 234];

export default function AriaHub({ compact = false }: { compact?: boolean }) {
  const { T, isRtl } = useLanguage();
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const size = compact ? 360 : 500;
  const scale = size / BASE;

  const nodeLabels = [T.aria.node1, T.aria.node2, T.aria.node3, T.aria.node4, T.aria.node5];

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
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          <motion.circle
            cx={CX} cy={CY} r={140}
            fill="url(#ah-glow)" filter="url(#ah-halo)"
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={reduced ? {} : { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx={CX} cy={CY} r={RING_R}
            fill="none" stroke="#C4B5F8" strokeWidth="1.5" strokeDasharray="6 8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.7 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
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
          <motion.circle
            cx={CX} cy={CY} r={105}
            fill="url(#ah-orb)"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        </svg>

        {/* Center "Aria" label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles size={26} strokeWidth={1.5} className="mb-2" style={{ color: "rgba(255,255,255,0.85)" }} />
            <span className="text-[34px] font-extrabold leading-none tracking-tight" style={{ color: "#1E1057" }}>
              Aria
            </span>
            <span className="text-[12px] font-semibold tracking-wider mt-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>
              {T.aria.aiInterviewer}
            </span>
          </motion.div>
        </div>

        {/* Node groups — angle switches on RTL to mirror horizontally */}
        {NODE_DEFS.map(({ angle, rtlAngle, Icon, coral }, i) => {
          const { x, y } = polar(isRtl ? rtlAngle : angle);
          const lines = nodeLabels[i];
          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: x, top: y - CARD / 2, transform: "translateX(-50%)", gap: 10 }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.45 + i * 0.1, ease: "easeOut" }}
            >
              <div
                className="flex items-center justify-center rounded-[18px] bg-white shrink-0"
                style={{ width: CARD, height: CARD, boxShadow: "0 6px 28px rgba(139,92,246,0.15), 0 1px 4px rgba(139,92,246,0.06)" }}
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
              </div>
              <div className="text-center">
                {lines.map((l, j) => (
                  <p key={j} className="text-[12px] font-bold text-purple-900 leading-[1.45] whitespace-nowrap">{l}</p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
