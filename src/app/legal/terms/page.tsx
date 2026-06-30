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
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Recruit AI, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the service.</p>

            <h2>2. Description of Service</h2>
            <p>Recruit AI provides an AI-powered recruiting platform that automates resume screening, candidate phone and video interviews, and shortlist generation. The service is intended for use by recruiters and hiring teams.</p>

            <h2>3. Recruiter Responsibilities</h2>
            <p>You are responsible for ensuring your use of Recruit AI complies with applicable employment laws and regulations in your jurisdiction. Final hiring decisions remain with human recruiters. You must not use the platform to discriminate against candidates on the basis of protected characteristics.</p>

            <h2>4. Candidate Interactions</h2>
            <p>Aria, our AI interviewer, always discloses to candidates that they are interacting with an AI system. You must not configure the platform in a way that conceals this disclosure.</p>

            <h2>5. Subscription and Billing</h2>
            <p>Subscription fees are billed in advance on a monthly or annual basis. Unused credits within a billing period do not roll over unless you are on an active subscription. Top-up credits never expire while your subscription remains active.</p>

            <h2>6. Intellectual Property</h2>
            <p>The service, including all software, algorithms, and content, is owned by Recruit AI and protected by intellectual property laws. You retain ownership of data you upload to the platform.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Recruit AI is not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability is limited to the amount you paid us in the 12 months preceding the claim.</p>

            <h2>8. Termination</h2>
            <p>You may cancel your subscription at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>

            <h2>9. Contact</h2>
            <p>For questions about these Terms, contact us at hello@recruitai.app.</p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
