import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Start your free 14-day trial of Recruit AI.",
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
