import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing — Starter, Growth & Enterprise Plans",
  description: "Simple per-role pricing for AI resume screening and voice interviews. Start free, no credit card required.",
  openGraph: {
    title: "Pricing — Starter, Growth & Enterprise Plans",
    description: "Simple per-role pricing for AI resume screening and voice interviews. Start free, no credit card required.",
    url: "https://recruitai.app/pricing",
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
