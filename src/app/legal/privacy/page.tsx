"use client";
import FadeUp from "@/components/FadeUp";

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Privacy Policy</h1>
            <p className="text-muted text-sm">Last updated: August 5, 2026</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Draft notice */}
          <div className="mb-10 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4">
            <span className="mt-0.5 text-amber-500 text-lg leading-none">⚠</span>
            <p className="text-sm font-medium text-amber-800">
              <strong>Draft — pending legal review.</strong> This policy has not yet been reviewed by a qualified lawyer and should not be relied upon as legal advice.
            </p>
          </div>

          <FadeUp>
            <p className="text-muted leading-relaxed mb-10">
              Hyrix ("we," "us," "our") provides an AI-powered recruitment platform. This policy explains how we collect, use, and protect data.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">What we collect</h2>
            <p className="text-muted leading-relaxed">
              Candidate resumes and application data; interview transcripts and voice/video recordings; scoring and assessment results; recruiter account and usage data.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">How we use it</h2>
            <p className="text-muted leading-relaxed">
              To parse and score resumes against role requirements; to conduct AI screening calls and interviews; to generate transcripts and audit trails for recruiter review; to improve platform accuracy over time.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Human oversight</h2>
            <p className="text-muted leading-relaxed">
              A recruiter approves every stage of the hiring process. Hyrix does not make autonomous hiring decisions.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Data residency & compliance</h2>
            <p className="text-muted leading-relaxed">
              We support configurable data residency and are built to align with GDPR (EU/UK) and India's Digital Personal Data Protection (DPDP) Act. Candidate consent is captured before AI screening or interviews begin.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Retention</h2>
            <p className="text-muted leading-relaxed">
              Data is retained only as long as needed for the hiring process and applicable legal record-keeping, then deleted or anonymized.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Your rights</h2>
            <p className="text-muted leading-relaxed">
              Depending on your jurisdiction, you may have the right to access, correct, or delete your data, or object to automated processing. Contact{" "}
              <a href="mailto:info@hyrixai.com" className="text-purple-700 underline underline-offset-2 hover:text-purple-900">
                info@hyrixai.com
              </a>{" "}
              to exercise these rights.
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
