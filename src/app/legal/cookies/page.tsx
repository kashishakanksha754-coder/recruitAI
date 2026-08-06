"use client";
import FadeUp from "@/components/FadeUp";

export default function CookiesPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Cookie Policy</h1>
            <p className="text-muted text-sm">Last updated: August 5, 2026</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <p className="text-muted leading-relaxed mb-10">
              Hyrix uses cookies to operate and improve our website and platform.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Essential cookies</h2>
            <p className="text-muted leading-relaxed">
              Required for login, session management, and core site functionality. These cannot be disabled.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Analytics cookies</h2>
            <p className="text-muted leading-relaxed">
              Help us understand how visitors use our site, so we can improve the experience. You can opt out via your cookie preferences.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Preference cookies</h2>
            <p className="text-muted leading-relaxed">
              Remember settings like language (EN/AR) across visits.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Third-party cookies</h2>
            <p className="text-muted leading-relaxed">
              Used for embedded tools (e.g. scheduling widgets) where applicable.
            </p>

            <p className="text-muted leading-relaxed mt-10">
              You can manage cookie preferences at any time via your browser settings or our cookie consent banner.
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
