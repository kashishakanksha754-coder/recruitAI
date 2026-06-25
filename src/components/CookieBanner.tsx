"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-consent");
    if (!choice) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white border border-purple-100 rounded-2xl shadow-card-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted flex-1 leading-relaxed">
          We use essential session cookies for login and anonymous analytics to improve the product. No advertising cookies.{" "}
          <Link href="/legal/cookies" className="text-purple-700 underline underline-offset-2 hover:text-purple-900">
            Cookie Policy
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-xl border border-purple-200 text-purple-900 text-sm font-semibold hover:bg-purple-50 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
