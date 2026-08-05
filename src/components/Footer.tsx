"use client";
import Link from "next/link";
import { Globe, Mail, ExternalLink, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import HyrixLogo from "./HyrixLogo";


export default function Footer() {
  const { T, lang, setLang } = useLanguage();
  const F = T.footer as unknown as Record<string, string>;

  return (
    <footer className="bg-white border-t border-purple-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <HyrixLogo size={58} />
              {/* <span className="text-xl font-bold gradient-text">{T.nav.brandName}</span> */}
            </div>
            <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">{F.tagline}</p>
            <div className="mt-5 space-y-2.5">
              <a href={`mailto:${F.contactEmail}`} className="flex items-center gap-2 text-sm text-muted hover:text-purple-900 transition-colors">
                <Mail size={13} className="shrink-0 text-muted/50" />
                {F.contactEmail}
              </a>
              <a href={`https://${F.contactWeb}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-purple-900 transition-colors">
                <ExternalLink size={13} className="shrink-0 text-muted/50" />
                {F.contactWeb}
              </a>
              <p className="flex items-start gap-2 text-xs text-muted/70 leading-relaxed">
                <MapPin size={13} className="shrink-0 mt-0.5 text-muted/50" />
                {F.contactUAE}
              </p>
              <p className="flex items-start gap-2 text-xs text-muted/70 leading-relaxed">
                <MapPin size={13} className="shrink-0 mt-0.5 text-muted/50" />
                {F.contactIndia}
              </p>
            </div>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">{F.product}</p>
            <div className="space-y-2.5">
              {[
                { href: "/how-it-works", label: F.howItWorks },
                { href: "/pricing",      label: F.pricing },
                { href: "/demo",         label: F.liveDemo },
                { href: "/#pipeline",    label: F.pipelineStages },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">{F.company}</p>
            <div className="space-y-2.5">
              {[
                { href: "/about",   label: F.about },
                { href: "/contact", label: F.contact },
                { href: "/login",   label: F.login },
                { href: "/demo",    label: F.tryDemo },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">{F.legal}</p>
            <div className="space-y-2.5">
              {[
                { href: "/legal/privacy", label: F.privacy },
                { href: "/legal/terms",   label: F.terms },
                { href: "/legal/cookies", label: F.cookies },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted/60 text-xs">{F.copyright}</p>
          <div className="flex items-center gap-5">
            <Link href="/legal/privacy" className="text-muted/60 hover:text-muted text-xs transition-colors">{F.privacyShort}</Link>
            <Link href="/legal/terms"   className="text-muted/60 hover:text-muted text-xs transition-colors">{F.termsShort}</Link>
            <Link href="/legal/cookies" className="text-muted/60 hover:text-muted text-xs transition-colors">{F.cookiesShort}</Link>
            {/* Language toggle in footer */}
            <div className="flex items-center gap-1.5 ms-2">
              <Globe size={13} className="text-muted/60" />
              {(["en", "ar"] as const).map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="text-muted/30 mx-1">|</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                      lang === l ? "text-purple-900" : "text-muted/60 hover:text-muted"
                    }`}
                  >
                    {l === "en" ? T.nav.langEn : T.nav.langAr}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
