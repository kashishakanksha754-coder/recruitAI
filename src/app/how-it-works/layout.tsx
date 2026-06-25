import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How It Works — 6-Step AI Hiring Pipeline",
  description: "See how Aria screens, interviews, scores, and shortlists candidates from 1,000 applicants to 10 verified matches in 48 hours.",
  openGraph: {
    title: "How It Works — 6-Step AI Hiring Pipeline",
    description: "See how Aria screens, interviews, scores, and shortlists candidates from 1,000 applicants to 10 verified matches in 48 hours.",
    url: "https://recruitai.app/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
