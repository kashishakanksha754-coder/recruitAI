import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  outline?: boolean;
}

export default function GradientButton({ href, children, className = "", outline = false }: Props) {
  if (outline) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-300 border border-white/20 hover:border-white/40 hover:text-white transition-all ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-105 ${className}`}
      style={{ background: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)" }}
    >
      {children}
    </Link>
  );
}
