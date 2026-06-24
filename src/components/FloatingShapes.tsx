"use client";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { FileText, CheckCircle, Phone, Star, Clock, RotateCcw } from "lucide-react";

const float = (y: number[], duration: number) => {
  const transition: Transition = { duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" };
  return { animate: { y }, transition };
};

// Badges repositioned to frame the isometric composition — no overlaps
const badges = [
  { icon: FileText,    label: "Resume parsed",      color: "text-coral-500",  bg: "bg-coral-50",  top: "5%",   left: "0%"           },
  { icon: CheckCircle, label: "94% match score",    color: "text-purple-700", bg: "bg-purple-50", top: "46%",  left: "0%"           },
  { icon: Phone,       label: "Call transcribed",   color: "text-coral-500",  bg: "bg-coral-50",  top: "64%",  left: "3%"           },
  { icon: Star,        label: "Aria recommended",   color: "text-purple-700", bg: "bg-purple-50", top: "12%",  right: "0%"          },
  { icon: Clock,       label: "Decision in 2 days", color: "text-coral-500",  bg: "bg-coral-50",  top: "82%",  right: "2%"          },
];

export default function FloatingShapes() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="relative w-full h-[480px] select-none" aria-hidden>

      {/* ── Isometric composition floats as one unit ── */}
      <motion.div
        className="absolute inset-0"
        {...(reduced ? {} : {
          animate: { y: [0, -14, 0] },
          transition: { duration: 7, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } as Transition,
        })}
      >
        {/* ── SVG: platform, cube, connector lines ── */}
        <svg
          viewBox="0 0 500 460"
          className="absolute inset-0 w-full h-full overflow-visible"
          aria-hidden
        >
          <defs>
            <linearGradient id="iso-platform-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EEEEFF" />
            </linearGradient>
            <linearGradient id="iso-cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0625A" />
              <stop offset="100%" stopColor="#2D1B69" />
            </linearGradient>
            <radialGradient id="iso-cube-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#F0625A" stopOpacity="0.55" />
              <stop offset="55%"  stopColor="#7B3FA8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2D1B69" stopOpacity="0"   />
            </radialGradient>
            <filter id="iso-platform-shadow" x="-25%" y="-30%" width="150%" height="200%">
              <feDropShadow dx="0" dy="14" stdDeviation="20" floodColor="#2D1B69" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Platform drop shadow ellipse */}
          <ellipse cx="272" cy="366" rx="152" ry="16" fill="#2D1B69" opacity="0.07" />

          {/* ── Platform (Component A) ── */}
          <polygon
            points="148,268 352,230 394,292 190,330"
            fill="url(#iso-platform-top)"
            filter="url(#iso-platform-shadow)"
          />
          {/* Platform right face */}
          <polygon points="352,230 394,292 394,310 352,248" fill="#C8CAE6" />
          {/* Platform front face */}
          <polygon points="190,330 394,292 394,310 190,348" fill="#D5D8EE" />

          {/* ── Cube glow beneath (Component B) ── */}
          <ellipse cx="278" cy="263" rx="60" ry="20" fill="url(#iso-cube-glow)" />

          {/* ── Cube (Component B) ── */}
          {/* Cube front face */}
          <polygon points="226,184 278,174 278,246 226,256" fill="#F2F0FF" />
          {/* Cube right face */}
          <polygon points="278,174 291,193 291,265 278,246" fill="#D0CEEE" />
          {/* Cube top face — coral→purple gradient */}
          <polygon points="226,184 278,174 291,193 239,203" fill="url(#iso-cube-top)" />
          {/* Checkmark icon on cube top face */}
          <g
            transform="translate(258, 191)"
            stroke="white" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            fill="none"
            opacity="0.92"
          >
            <path d="M-10,3 L-2,11 L13,-7" />
          </g>

          {/* ── Connector wires to nodes (Component C) ── */}
          <line x1="291" y1="190" x2="426" y2="132" stroke="#BEC0DA" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1="228" y1="250" x2="78" y2="212" stroke="#BEC0DA" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1="182" y1="336" x2="90" y2="396" stroke="#BEC0DA" strokeWidth="1.5" strokeDasharray="5 4" />
        </svg>

        {/* ── Node 1: upper-right — Phone, coral ── */}
        <div
          className="absolute w-11 h-11 rounded-full bg-white flex items-center justify-center"
          style={{ top: "22%", right: "11%", boxShadow: "0 4px 16px rgba(45,27,105,0.14)" }}
        >
          <span className="w-7 h-7 rounded-full bg-coral-50 flex items-center justify-center">
            <Phone size={14} className="text-coral-500" />
          </span>
        </div>

        {/* ── Node 2: left — CheckCircle, coral ── */}
        <div
          className="absolute w-11 h-11 rounded-full bg-white flex items-center justify-center"
          style={{ top: "40%", left: "11%", boxShadow: "0 4px 16px rgba(45,27,105,0.14)" }}
        >
          <span className="w-7 h-7 rounded-full bg-coral-50 flex items-center justify-center">
            <CheckCircle size={14} className="text-coral-500" />
          </span>
        </div>

        {/* ── Node 3: lower-left — Star, purple ── */}
        <div
          className="absolute w-11 h-11 rounded-full bg-white flex items-center justify-center"
          style={{ top: "76%", left: "14%", boxShadow: "0 4px 16px rgba(45,27,105,0.14)" }}
        >
          <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center">
            <Star size={14} className="text-purple-700" />
          </span>
        </div>

        {/* ── Component D: tilted UI card mockup ── */}
        <div
          className="absolute bg-white rounded-2xl p-3 w-52"
          style={{
            bottom: "7%",
            right: "2%",
            transform: "perspective(500px) rotateX(8deg) rotateY(-10deg)",
            boxShadow: "0 8px 30px rgba(45,27,105,0.14), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {/* File row */}
          <div className="flex items-center gap-2 bg-purple-50 rounded-xl px-2.5 py-2 mb-2">
            <span className="w-6 h-6 rounded-lg bg-coral-100 flex items-center justify-center shrink-0">
              <FileText size={11} className="text-coral-500" />
            </span>
            <span className="text-[10px] font-semibold text-purple-900 flex-1 truncate">
              resume_john_doe.pdf
            </span>
            <span className="text-[12px] text-muted/40 font-bold leading-none ml-1">×</span>
          </div>
          {/* Status + submit */}
          <div className="flex items-center justify-between px-0.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0" />
              <span className="text-[10px] font-semibold text-purple-700">Processing</span>
            </span>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
            >
              <RotateCcw size={10} className="text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Pulsing glow on cube — separate animation, not tied to float ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 116,
          height: 42,
          top: "35%",
          left: "36%",
          background:
            "radial-gradient(ellipse, rgba(240,98,90,0.52) 0%, rgba(45,27,105,0.22) 55%, transparent 100%)",
          filter: "blur(10px)",
        }}
        animate={reduced ? {} : { opacity: [0.28, 0.72, 0.28] }}
        transition={
          { duration: 3.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } as Transition
        }
      />

      {/* ── Pill badges — z-10 so they float above composition ── */}
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
