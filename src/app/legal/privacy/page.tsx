import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Recruit AI collects, uses, and protects your data — covering recruiters, candidates, and GDPR/DPDP compliance.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Privacy Policy</h1>
          <p className="text-muted text-sm">Last updated: June 2025</p>
        </div>
        <div className="max-w-none text-muted leading-relaxed space-y-10">
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">1. Who we are</h2>
            <p>Recruit AI (“we”, “us”, “our”) operates the AI-powered recruiting platform available at recruitai.app. We provide resume screening, AI voice and video interviewing, and candidate scoring tools to individual recruiters, staffing agencies, and enterprise hiring teams (“Recruiters”). Candidates who participate in Aria-conducted interviews are data subjects under this policy.</p>
            <p className="mt-3">For privacy enquiries, contact us at: <a href="mailto:hello@recruitai.app" className="text-purple-700 underline">hello@recruitai.app</a></p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">2. Data we collect</h2>
            <h3 className="text-base font-semibold text-purple-800 mb-2">Recruiter account data</h3>
            <p>When you create an account we collect your name, work email address, company name, and billing information (processed by our payment provider — we do not store full card numbers).</p>
            <h3 className="text-base font-semibold text-purple-800 mt-4 mb-2">Candidate data</h3>
            <p>Candidates who apply to roles posted by Recruiters on our platform may submit CVs/resumes and contact details. When Aria conducts a voice or video interview, we record and transcribe the conversation. These recordings and transcripts are retained only for the purpose of generating a scored evaluation for the hiring Recruiter.</p>
            <h3 className="text-base font-semibold text-purple-800 mt-4 mb-2">Usage data</h3>
            <p>We collect anonymised analytics on how the platform is used (pages visited, features clicked, session duration) to improve the product. This data is not linked to individual identities.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">3. Why we collect it</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide the hiring pipeline service described in our Terms of Service</li>
              <li>To authenticate your account and keep it secure</li>
              <li>To generate AI-scored interview evaluations for Recruiters</li>
              <li>To send transactional emails (interview invitations, score reports, billing receipts)</li>
              <li>To comply with legal obligations including data protection law</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">4. How we store it</h2>
            <p>All data is stored on cloud infrastructure with encryption at rest (AES-256) and in transit (TLS 1.2+). Access to production data is restricted to authorised personnel on a need-to-know basis. We conduct periodic access reviews.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">5. Data retention</h2>
            <p>Recruiter account data is retained for the duration of the subscription and for 90 days after account closure, after which it is deleted. Candidate interview recordings and transcripts are retained for a maximum of 12 months from the date of the interview, or until the Recruiter requests deletion, whichever is earlier. Anonymised analytics data may be retained indefinitely.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">6. Candidate rights</h2>
            <p>Candidates whose data is processed through the Recruit AI platform have the following rights:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Access:</strong> Request a copy of your interview transcript and score</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request erasure of your data from our systems</li>
              <li><strong>Objection:</strong> Object to automated decision-making (note: AI scores are a decision-support tool — final hiring decisions are always made by a human Recruiter)</li>
            </ul>
            <p className="mt-3">To exercise these rights, email <a href="mailto:hello@recruitai.app" className="text-purple-700 underline">hello@recruitai.app</a> with “Data Rights Request” in the subject line. We will respond within 30 days.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">7. GDPR and India DPDP Act 2023</h2>
            <p>For users in the European Economic Area, we process personal data under the lawful bases of contract performance (for Recruiter accounts) and legitimate interest (for analytics). Where required, we act as a data processor on behalf of Recruiters (the data controllers) for candidate data.</p>
            <p className="mt-3">For users in India, we align our practices with the Digital Personal Data Protection Act 2023 (DPDP Act). We obtain consent before processing candidate interview recordings and provide a mechanism to withdraw consent at any time by contacting us at the email above.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">8. Cookies</h2>
            <p>We use session cookies for authentication and optional analytics cookies to understand platform usage. For details, see our <Link href="/legal/cookies" className="text-purple-700 underline">Cookie Policy</Link>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">9. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be communicated by email to account holders at least 14 days before taking effect. Continued use of the platform after that date constitutes acceptance.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">10. Contact</h2>
            <p>Privacy questions, data subject requests, and complaints: <a href="mailto:hello@recruitai.app" className="text-purple-700 underline">hello@recruitai.app</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
