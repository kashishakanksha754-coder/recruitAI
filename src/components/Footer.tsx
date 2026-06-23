import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold gradient-text">Recruit AI</span>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              AI screening and interviewing for recruiters. You stay in control. AI handles the volume.
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-3">Product</p>
            <div className="space-y-2">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/#pipeline", label: "Pipeline Stages" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-3">Company</p>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/login", label: "Log in" },
                { href: "/signup", label: "Start free trial" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© 2025 Recruit AI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs">Privacy</Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 text-xs">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
