import type { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "Hyrix — AI Hiring Platform for Recruiters",
  description: "Hyrix screens resumes, calls candidates, and runs voice/video interviews. You approve every stage. From 140 applicants to a verified shortlist — fast.",
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}