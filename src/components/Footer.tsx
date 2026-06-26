import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-purple-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold gradient-text">Recruit AI</span>
            <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">
              AI screening and interviewing for recruiters. You stay in control. Aria handles the volume.
            </p>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">Product</p>
            <div className="space-y-2.5">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing",      label: "Pricing" },
                { href: "/demo",         label: "Live Demo" },
                { href: "/#pipeline",    label: "Pipeline Stages" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">Company</p>
            <div className="space-y-2.5">
              {[
                { href: "/about",   label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/login",   label: "Log in" },
                { href: "/demo",    label: "Try the demo" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-purple-900 text-sm font-semibold mb-4">Legal</p>
            <div className="space-y-2.5">
              {[
                { href: "/legal/privacy", label: "Privacy Policy" },
                { href: "/legal/terms",   label: "Terms of Service" },
                { href: "/legal/cookies", label: "Cookie Policy" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-muted hover:text-purple-900 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted/60 text-xs">© 2025 Recruit AI. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="text-muted/60 hover:text-muted text-xs transition-colors">Privacy</Link>
            <Link href="/legal/terms"   className="text-muted/60 hover:text-muted text-xs transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="text-muted/60 hover:text-muted text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
