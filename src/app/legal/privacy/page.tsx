"use client";
import FadeUp from "@/components/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { T } = useLanguage();
  const L = T.legal;

  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">{L.privacyTitle}</h1>
            <p className="text-muted text-sm">{L.privacyUpdated}</p>
          </FadeUp>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-purple max-w-none">
          <FadeUp>
            <h2>{L.privacyS1Title}</h2>
            <p>{L.privacyS1Body}</p>

            <h2>{L.privacyS2Title}</h2>
            <p>{L.privacyS2Body}</p>

            <h2>{L.privacyS3Title}</h2>
            <p>{L.privacyS3Body}</p>

            <h2>{L.privacyS4Title}</h2>
            <p>{L.privacyS4Body}</p>

            <h2>{L.privacyS5Title}</h2>
            <p>{L.privacyS5Body}</p>

            <h2>{L.privacyS6Title}</h2>
            <p>{L.privacyS6Body}</p>

            <h2>{L.privacyS7Title}</h2>
            <p>{L.privacyS7Body}</p>

            <h2>{L.privacyS8Title}</h2>
            <p>{L.privacyS8Body}</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
