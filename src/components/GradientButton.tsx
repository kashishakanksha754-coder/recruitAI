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
        className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-purple-900 border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-btn transition-all hover:opacity-90 hover:scale-[1.03] ${className}`}
      style={{ background: "linear-gradient(135deg, #F0625A 0%, #2D1B69 100%)" }}
    >
      {children}
    </Link>
  );
}
