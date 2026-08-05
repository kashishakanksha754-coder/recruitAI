"use client";
import FadeUp from "@/components/FadeUp";

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Terms of Service</h1>
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
              <strong>Draft — pending legal review.</strong> These terms have not yet been reviewed by a qualified lawyer and should not be relied upon as legal advice.
            </p>
          </div>

          <FadeUp>
            <p className="text-muted leading-relaxed mb-10">
              By using Hyrix, you agree to these terms.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">The service</h2>
            <p className="text-muted leading-relaxed">
              Hyrix provides AI-assisted resume screening, voice/video interviewing, assessments, and offer-management tools for recruiters. All scoring and shortlisting is advisory — a human recruiter makes the final hiring decision at every stage.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Your responsibilities</h2>
            <p className="text-muted leading-relaxed">
              You must have lawful authority to collect and process candidate data you upload. You must not use Hyrix to make final hiring decisions without human review, consistent with applicable high-risk AI hiring regulations (e.g. the EU AI Act&apos;s rules for hiring AI). You&apos;re responsible for account security and accurate billing information.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Plans & billing</h2>
            <p className="text-muted leading-relaxed">
              Plans (Free Trial, Pilot, Growth, Scale) are billed monthly or annually as selected. You may cancel anytime; no long-term contract is required outside custom enterprise agreements.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Service limits</h2>
            <p className="text-muted leading-relaxed">
              Usage (voice minutes, resume screens, active roles) is capped per plan as described on our Pricing page. Overages may require a plan upgrade or top-up.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Liability</h2>
            <p className="text-muted leading-relaxed">
              Hyrix is provided &ldquo;as is.&rdquo; We are not liable for hiring decisions made using our platform, as all final decisions remain with the customer&apos;s human recruiters.
            </p>

            <h2 className="text-xl font-bold text-purple-900 mt-10 mb-3">Changes</h2>
            <p className="text-muted leading-relaxed">
              We may update these terms; continued use after changes constitutes acceptance.
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
