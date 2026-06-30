"use client";
import FadeUp from "@/components/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function CookiesPage() {
  const { T } = useLanguage();
  const L = T.legal;

  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">{L.cookiesTitle}</h1>
            <p className="text-muted text-sm">{L.cookiesUpdated}</p>
          </FadeUp>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-purple max-w-none">
          <FadeUp>
            <h2>{L.cookiesS1Title}</h2>
            <p>{L.cookiesS1Body}</p>

            <h2>{L.cookiesS2Title}</h2>
            <p><strong>{L.cookiesS2EssentialLabel}</strong> {L.cookiesS2Essential}</p>
            <p><strong>{L.cookiesS2AnalyticsLabel}</strong> {L.cookiesS2Analytics}</p>
            <p><strong>{L.cookiesS2PrefLabel}</strong> {L.cookiesS2Pref}</p>

            <h2>{L.cookiesS3Title}</h2>
            <p>{L.cookiesS3Body}</p>

            <h2>{L.cookiesS4Title}</h2>
            <p>{L.cookiesS4Body}</p>

            <h2>{L.cookiesS5Title}</h2>
            <p>{L.cookiesS5Body}</p>

            <h2>{L.cookiesS6Title}</h2>
            <p>{L.cookiesS6Body}</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
