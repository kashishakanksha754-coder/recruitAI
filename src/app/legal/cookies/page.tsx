import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies Recruit AI uses, why, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <main className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-3">Cookie Policy</h1>
          <p className="text-muted text-sm">Last updated: June 2025</p>
        </div>
        <div className="max-w-none text-muted leading-relaxed space-y-10">
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">What are cookies?</h2>
            <p>Cookies are small text files stored in your browser when you visit a website. They allow the site to recognise your device on subsequent visits and remember your preferences or session state.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">Cookies we use</h2>
            <h3 className="text-base font-semibold text-purple-800 mb-2">Essential cookies (always active)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-purple-100">
                    <th className="text-left py-2 pr-4 text-purple-900 font-semibold">Name</th>
                    <th className="text-left py-2 pr-4 text-purple-900 font-semibold">Purpose</th>
                    <th className="text-left py-2 text-purple-900 font-semibold">Expires</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">session_id</td>
                    <td className="py-2 pr-4">Keeps you logged in during your session</td>
                    <td className="py-2">Session end</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">csrf_token</td>
                    <td className="py-2 pr-4">Protects against cross-site request forgery attacks</td>
                    <td className="py-2">Session end</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">cookie-consent</td>
                    <td className="py-2 pr-4">Stores your cookie consent choice (localStorage)</td>
                    <td className="py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-base font-semibold text-purple-800 mt-6 mb-2">Analytics cookies (optional)</h3>
            <p>We use anonymised, first-party analytics to understand how the platform is used and where we can improve it. These cookies do not track you across other websites and are not shared with third parties for advertising. You can opt out by selecting “Reject” in the consent banner.</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-purple-100">
                    <th className="text-left py-2 pr-4 text-purple-900 font-semibold">Name</th>
                    <th className="text-left py-2 pr-4 text-purple-900 font-semibold">Purpose</th>
                    <th className="text-left py-2 text-purple-900 font-semibold">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">_ra_anon</td>
                    <td className="py-2 pr-4">Anonymous session identifier for usage analytics</td>
                    <td className="py-2">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-base font-semibold text-purple-800 mt-6 mb-2">Advertising cookies</h3>
            <p>We do not use advertising cookies. Recruit AI does not run retargeting campaigns and does not share data with ad networks.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">Managing your preferences</h2>
            <p>When you first visit Recruit AI, a consent banner appears at the bottom of the page. You can accept or reject optional analytics cookies at that point. You can change your preference at any time by clearing the <code className="text-xs bg-purple-50 px-1.5 py-0.5 rounded">cookie-consent</code> key from your browser’s localStorage and reloading the page, which will re-show the consent banner.</p>
            <p className="mt-3">You can also manage cookies directly in your browser settings. Note that disabling essential cookies may prevent you from logging in to the platform.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-900 mb-3">Contact</h2>
            <p>Cookie-related questions: <a href="mailto:hello@recruitai.app" className="text-purple-700 underline">hello@recruitai.app</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
