import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Live Product Demo",
  description: "Explore the Recruit AI dashboard with sample data. See the candidate pipeline, AI interview transcripts, and scoring in action.",
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
