"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { T, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/how-it-works", label: T.nav.howItWorks },
    { href: "/pricing",      label: T.nav.pricing },
    { href: "/about",        label: T.nav.about },
    { href: "/contact",      label: T.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(45,27,105,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">{T.nav.brandName}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive ? "text-purple-900" : "text-muted hover:text-purple-900"
                }`}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full"
                    style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-purple-900 px-3 py-2 rounded-lg hover:bg-purple-50 transition-all"
              aria-label={T.nav.english + " / " + T.nav.arabic}
            >
              <Globe size={15} />
              <span className="uppercase text-xs font-bold tracking-wide">{lang}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full mt-1 w-36 bg-white rounded-xl shadow-card border border-purple-100 overflow-hidden z-50">
                {(["en", "ar"] as const).map((l) => (
                  <button
                    key={l}
                    onMouseDown={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full text-start px-4 py-2.5 text-sm font-medium transition-colors ${
                      lang === l ? "text-purple-900 bg-purple-50" : "text-muted hover:bg-purple-50 hover:text-purple-900"
                    }`}
                  >
                    {l === "en" ? T.nav.english : T.nav.arabic}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/login"
            className="text-muted hover:text-purple-900 text-sm font-medium px-4 py-2 transition-colors"
          >
            {T.nav.login}
          </Link>
          <Link
            href="/demo"
            className="text-sm px-5 py-2.5 rounded-xl font-semibold text-white shadow-btn transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
          >
            {T.nav.tryDemo}
          </Link>
        </div>

        <button className="md:hidden text-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-purple-100 px-4 py-4 space-y-1">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`block text-sm font-medium py-2.5 transition-colors border-l-2 pl-3 ${
                  isActive ? "border-coral-500 text-purple-900 bg-purple-50/50" : "border-transparent text-muted hover:text-purple-900"
                }`}
                onClick={() => setOpen(false)}
                style={isActive ? { borderImage: "linear-gradient(180deg, #F0625A 0%, #2D1B69 100%) 1" } : {}}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="flex gap-2 pt-2">
            {(["en", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all ${
                  lang === l
                    ? "border-purple-300 bg-purple-50 text-purple-900"
                    : "border-purple-100 text-muted hover:border-purple-300"
                }`}
              >
                {l === "en" ? T.nav.langEn : T.nav.langAr}
              </button>
            ))}
          </div>
          <div className="pt-1 flex flex-col gap-2">
            <Link href="/login" className="text-center text-sm text-muted font-medium py-2.5 border border-purple-200 rounded-xl">
              {T.nav.login}
            </Link>
            <Link
              href="/demo"
              className="text-center text-sm font-semibold text-white py-2.5 rounded-xl"
              style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
            >
              {T.nav.tryDemo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}