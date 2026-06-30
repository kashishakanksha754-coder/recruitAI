"use client";
import FadeUp from "@/components/FadeUp";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { T } = useLanguage();
  const L = T.legal;

  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">{L.termsTitle}</h1>
            <p className="text-muted text-sm">{L.termsUpdated}</p>
          </FadeUp>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-purple max-w-none">
          <FadeUp>
            <h2>{L.termsS1Title}</h2>
            <p>{L.termsS1Body}</p>

            <h2>{L.termsS2Title}</h2>
            <p>{L.termsS2Body}</p>

            <h2>{L.termsS3Title}</h2>
            <p>{L.termsS3Body}</p>

            <h2>{L.termsS4Title}</h2>
            <p>{L.termsS4Body}</p>

            <h2>{L.termsS5Title}</h2>
            <p>{L.termsS5Body}</p>

            <h2>{L.termsS6Title}</h2>
            <p>{L.termsS6Body}</p>

            <h2>{L.termsS7Title}</h2>
            <p>{L.termsS7Body}</p>

            <h2>{L.termsS8Title}</h2>
            <p>{L.termsS8Body}</p>

            <h2>{L.termsS9Title}</h2>
            <p>{L.termsS9Body}</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
