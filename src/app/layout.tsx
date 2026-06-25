import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Hiring Platform for Recruiters | Recruit AI",
    template: "%s | Recruit AI",
  },
  description: "Aria screens resumes, calls candidates, and runs voice interviews so your team reviews only the top 1%. Process 1,000 applicants to 10 verified matches in 48 hours.",
  metadataBase: new URL("https://recruitai.app"),
  openGraph: {
    siteName: "Recruit AI",
    type: "website",
    // TODO: Replace with a real OG image (1200x630px brand graphic) before launch
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
