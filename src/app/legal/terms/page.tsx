import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Recruit AI platform for recruiters, staffing agencies, and enterprise teams.",
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Terms of Service</h1>
          <p className="text-muted text-sm">Last updated: June 2025</p>
        </div>
        <div className="max-w-none text-muted leading-relaxed space-y-10">
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">1. Description of service</h2>
            <p>Recruit AI provides an AI-powered recruiting platform (“Service”) that enables individual recruiters, staffing agencies, and enterprise hiring teams (“Users”) to automate resume screening, conduct structured AI voice and video interviews via an AI interviewer named Aria, generate scored evaluations, and manage candidate pipelines. Access is available via subscription plans described at recruitai.app/pricing.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">2. Account responsibilities</h2>
            <p>You are responsible for maintaining the security of your account credentials. You must not share login access across unregistered users. You must ensure that all information provided during registration is accurate and kept up to date. You must be at least 18 years of age and authorised to enter into binding agreements on behalf of any organisation you represent.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">3. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Post fictitious job roles for the purpose of harvesting candidate data</li>
              <li>Use candidate data collected through the Service for any purpose other than legitimate recruitment</li>
              <li>Attempt to reverse-engineer, decompile, or extract the AI models underlying the Service</li>
              <li>Use the Service to discriminate against candidates on grounds prohibited by applicable employment law</li>
              <li>Circumvent any usage limits or billing mechanisms</li>
              <li>Transmit malware or engage in any activity that disrupts the Service</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">4. Subscription and billing</h2>
            <p>The Service is available on three plans: Starter, Growth, and Enterprise (custom). Plan details, included volumes, and pricing are published at recruitai.app/pricing and may change with 30 days’ written notice to active subscribers.</p>
            <p className="mt-3">Additional usage beyond plan limits is available via credit top-ups purchasable in the platform. Top-up credits are non-refundable and expire 12 months from purchase.</p>
            <p className="mt-3">Annual subscriptions are billed upfront. Monthly subscriptions are billed on the same day each calendar month. All prices are exclusive of applicable taxes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">5. Free trial</h2>
            <p>New accounts are eligible for a 14-day free trial on the Growth plan. No credit card is required to start a trial. At the end of the trial period, continued access requires selecting a paid plan. Trial usage limits are the same as the Growth plan limits. We reserve the right to modify or discontinue the free trial at any time.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">6. Termination</h2>
            <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. We may suspend or terminate your account immediately if we determine, in our sole discretion, that you have materially violated these Terms, including but not limited to misuse of candidate data or fraudulent activity.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">7. AI scoring — important disclaimer</h2>
            <p>Aria’s interview scoring is a decision-support tool designed to assist recruiters in identifying qualified candidates. <strong>AI scores do not constitute and must not be treated as final hiring decisions.</strong> The final decision to advance, reject, or hire any candidate remains solely with the human recruiter. Recruit AI expressly disclaims liability for any employment decision made on the basis of AI scores alone.</p>
            <p className="mt-3">Users are responsible for ensuring their use of AI-assisted screening complies with applicable employment discrimination law in their jurisdiction, including but not limited to equal opportunity requirements.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">8. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Recruit AI’s total liability for any claim arising out of or relating to these Terms or the Service shall not exceed the fees paid by you in the 3 months preceding the claim. Recruit AI shall not be liable for any indirect, incidental, special, or consequential damages, including loss of revenue, loss of data, or reputational harm.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">9. Governing law</h2>
            {/* TODO: Replace this placeholder with a specific governing jurisdiction reviewed by legal counsel before launch */}
            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Recruit AI is incorporated. This section will be updated before commercial launch following legal review.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">10. Changes to these Terms</h2>
            <p>We may update these Terms from time to time. We will notify active subscribers by email at least 14 days before material changes take effect. Continued use of the Service after that date constitutes acceptance of the updated Terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">11. Contact</h2>
            <p>Questions about these Terms: <a href="mailto:hello@recruitai.app" className="text-purple-700 underline">hello@recruitai.app</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
