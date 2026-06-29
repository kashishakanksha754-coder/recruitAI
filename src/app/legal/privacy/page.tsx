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
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes name, email address, company name, and job-related data you upload.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>

            <h2>3. Data Storage and Security</h2>
            <p>We store your data on secure servers and implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>4. GDPR Compliance</h2>
            <p>For users in the European Economic Area, we process your personal data in accordance with the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your personal data at any time.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us at hello@recruitai.app.</p>

            <h2>6. Candidate Data</h2>
            <p>Candidate data processed through our platform is handled strictly for recruitment purposes. Candidates are informed they are interacting with an AI system. Data is not shared with third parties except as required to provide the service.</p>

            <h2>7. Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service. See our Cookie Policy for details.</p>

            <h2>8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at hello@recruitai.app.</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
