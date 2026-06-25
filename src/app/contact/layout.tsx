import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact — Get in Touch or Book a Demo",
  description: "Chat with our team, book a 30-minute demo, or enquire about enterprise pricing. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Get in Touch or Book a Demo",
    description: "Chat with our team, book a 30-minute demo, or enquire about enterprise pricing. We respond within 24 hours.",
    url: "https://recruitai.app/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
