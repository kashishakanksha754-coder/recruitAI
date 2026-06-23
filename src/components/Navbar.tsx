"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">Recruit AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-slate-400 hover:text-white text-sm px-4 py-2 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm px-4 py-2 rounded-lg font-medium text-white"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)" }}
          >
            Start free trial
          </Link>
        </div>

        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-b border-white/5 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-slate-400 hover:text-white text-sm py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link href="/login" className="text-center text-sm text-slate-400 py-2 border border-white/10 rounded-lg">
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-center text-sm font-medium text-white py-2 rounded-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)" }}
            >
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
