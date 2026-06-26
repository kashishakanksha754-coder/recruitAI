"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

// ─── 1. Animated gradient glow orbs ────────────────────────────────────────
interface OrbConfig {
  style: React.CSSProperties;
  keyframes: { x: number[]; y: number[] };
  duration: number;
}

const ORB_CONFIGS: OrbConfig[] = [
  {
    style: {
      top: "-10%", left: "-8%",
      width: 520, height: 520,
      background: "radial-gradient(ellipse, rgba(59,130,246,0.22) 0%, transparent 70%)",
      filter: "blur(90px)",
    },
    keyframes: { x: [0, 28, -18, 0], y: [0, -22, 18, 0] },
    duration: 22,
  },
  {
    style: {
      top: "-15%", right: "-10%",
      width: 560, height: 480,
      background: "radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, transparent 70%)",
      filter: "blur(100px)",
    },
    keyframes: { x: [0, -32, 20, 0], y: [0, 24, -16, 0] },
    duration: 26,
  },
  {
    style: {
      bottom: "-5%", left: "50%",
      transform: "translateX(-50%)",
      width: 480, height: 320,
      background: "radial-gradient(ellipse, rgba(99,102,241,0.16) 0%, transparent 70%)",
      filter: "blur(80px)",
    },
    keyframes: { x: [0, 20, -20, 0], y: [0, -18, 10, 0] },
    duration: 19,
  },
];

function GlowOrbs({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {ORB_CONFIGS.map((orb, i) => {
        const transition: Transition = {
          duration: orb.duration,
          repeat: Infinity,
          ease: "easeInOut",
        };
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ willChange: "transform", ...orb.style }}
            animate={reduced ? {} : orb.keyframes}
            transition={transition}
          />
        );
      })}
    </div>
  );
}

// ─── 2. Dot-grid pattern ────────────────────────────────────────────────────
function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

// ─── 3. Typewriter code texture ─────────────────────────────────────────────
const CODE_LINES = [
  { text: "parsing_resume.pdf...",      top: "12%",  left: "3%",   delay: 0.3  },
  { text: "scoring_candidate_0042...",  top: "22%",  left: "1%",   delay: 1.1  },
  { text: "transcribing_call.wav",      top: "68%",  left: "2%",   delay: 1.8  },
  { text: "aria.conduct_interview()",   top: "78%",  left: "4%",   delay: 2.4  },
  { text: "rank_candidates(pool=1200)", top: "8%",   right: "3%",  delay: 0.7  },
  { text: "extracting_skills[]",        top: "19%",  right: "2%",  delay: 1.5  },
  { text: "bias_check: passed",         top: "72%",  right: "3%",  delay: 2.1  },
  { text: "match_score: 94.2",          top: "82%",  right: "5%",  delay: 2.7  },
];

function TypewriterLine({
  text,
  delay,
  reduced,
}: {
  text: string;
  delay: number;
  reduced: boolean;
}) {
  const [displayed, setDisplayed] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) return; // show full text immediately if reduced-motion
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay, reduced]);

  return (
    <span>
      {displayed}
      {/* blinking cursor while typing, hidden after done */}
      {displayed.length < text.length && (
        <span
          className="inline-block w-[1px] h-[0.9em] ml-[1px] align-middle animate-pulse"
          style={{ background: "rgba(99,102,241,0.5)" }}
        />
      )}
    </span>
  );
}

function CodeTextureBg({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {CODE_LINES.map((line, i) => (
        <p
          key={i}
          className="absolute text-[10px] font-mono leading-none"
          style={{
            top: line.top,
            left: "left" in line ? line.left : undefined,
            right: "right" in line ? line.right : undefined,
            color: "rgba(99,102,241,0.10)",
            letterSpacing: "0.04em",
          }}
        >
          <TypewriterLine text={line.text} delay={line.delay} reduced={reduced} />
        </p>
      ))}
    </div>
  );
}

// ─── 4. Particle / node network ─────────────────────────────────────────────
type Node = { x: number; y: number; vx: number; vy: number };

function ParticleNetwork({ reduced }: { reduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    // 7 nodes, random positions, very slow velocities
    nodesRef.current = Array.from({ length: 7 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * (reduced ? 0 : 0.18),
      vy: (Math.random() - 0.5) * (reduced ? 0 : 0.18),
    }));

    const CONNECT_DIST = Math.min(W, H) * 0.38;
    const NODE_COLOR = "rgba(99,102,241,0.55)";
    const LINE_COLOR_FN = (alpha: number) => `rgba(99,102,241,${alpha})`;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Move nodes, bounce off edges
      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        }
      }

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = LINE_COLOR_FN(alpha);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR;
        ctx.globalAlpha = 0.45;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
      style={{ opacity: 0.9 }}
    />
  );
}

// ─── Composed hero background ────────────────────────────────────────────────
export default function HeroBackground() {
  const reduced = useReducedMotion() ?? false;

  return (
    // Sits behind all hero content via absolute positioning + z-0
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Layer 1 — dot grid (deepest) */}
      <DotGrid />
      {/* Layer 2 — animated gradient orbs */}
      <GlowOrbs reduced={reduced} />
      {/* Layer 3 — decorative code texture */}
      <CodeTextureBg reduced={reduced} />
      {/* Layer 4 — particle network (topmost bg layer) */}
      <ParticleNetwork reduced={reduced} />
    </div>
  );
}
