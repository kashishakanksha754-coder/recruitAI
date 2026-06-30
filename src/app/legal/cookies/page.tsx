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
            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience.</p>

            <h2>2. Cookies We Use</h2>
            <p><strong>Essential cookies</strong> are required for the platform to function. They include session authentication tokens and your language preference (<code>recruit-lang</code>). You cannot opt out of these.</p>
            <p><strong>Analytics cookies</strong> help us understand how visitors interact with the site. We use this data in aggregate form only.</p>
            <p><strong>Preference cookies</strong> remember settings you&apos;ve chosen, such as your language selection.</p>

            <h2>3. Language Preference</h2>
            <p>We store your language preference (English or Arabic) in <code>localStorage</code> under the key <code>recruit-lang</code>. This is local to your browser and never transmitted to our servers.</p>

            <h2>4. Third-Party Cookies</h2>
            <p>We may use third-party services (such as analytics providers) that place their own cookies. These are subject to the privacy policies of those providers.</p>

            <h2>5. Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Disabling essential cookies will prevent you from using the platform. To clear your language preference, clear your browser&apos;s local storage.</p>

            <h2>6. Contact</h2>
            <p>For questions about our use of cookies, contact us at hello@recruitai.app.</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
