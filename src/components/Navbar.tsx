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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(45,27,105,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
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
              className="text-muted hover:text-purple-900 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-muted hover:text-purple-900 text-sm font-medium px-4 py-2 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="text-sm px-5 py-2.5 rounded-xl font-semibold text-white shadow-btn transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
          >
            Try the demo
          </Link>
        </div>

        <button className="md:hidden text-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-purple-100 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-muted hover:text-purple-900 text-sm font-medium py-2.5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/login" className="text-center text-sm text-muted font-medium py-2.5 border border-purple-200 rounded-xl">
              Log in
            </Link>
            <Link
              href="/demo"
              className="text-center text-sm font-semibold text-white py-2.5 rounded-xl"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
            >
              Try the demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
