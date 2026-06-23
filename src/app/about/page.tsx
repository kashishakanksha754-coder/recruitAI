import FadeUp from "@/components/FadeUp";
import GradientButton from "@/components/GradientButton";

export default function AboutPage() {
  return (
    <main className="bg-navy-950 min-h-screen pt-24">
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              We built this because{" "}
              <span className="gradient-text">recruiters deserve better tools.</span>
            </h1>
            <p className="text-slate-500 mt-2 text-sm tracking-wide">
              Less admin.&nbsp;&nbsp;Faster pipelines.&nbsp;&nbsp;Better hires.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 space-y-5 text-slate-300 leading-relaxed">
              <p>
                Recruiting is skilled work. It requires judgment, relationship-building, and the ability to spot talent that doesn&apos;t fit a standard template.
              </p>
              <p>
                But most of a recruiter&apos;s week isn&apos;t spent on any of that. It&apos;s spent reading resumes that all look the same, sending scheduling emails that never land, and running first-round calls that cover the same five questions every time.
              </p>
              <p>
                We built Recruit AI to take that repetitive work off your plate — so you spend your time on the part only you can do.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="mt-10 rounded-xl border p-6"
              style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.04)" }}
            >
              <p className="text-white font-semibold mb-3">Our position on AI and hiring</p>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  AI is fast and consistent. It doesn&apos;t get tired at resume 400. It doesn&apos;t bring unconscious preference into question scoring.
                </p>
                <p>
                  But AI doesn&apos;t know your culture. It doesn&apos;t understand the nuance of what &quot;senior&quot; means at your company, or why the candidate with the non-linear career path is actually the right call.
                </p>
                <p>
                  So we built a clear division: AI handles the volume. You make the final call. Every time, on every hire.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-12">
              <p className="text-slate-500 text-xs font-medium tracking-widest uppercase mb-4">Built for</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { title: "Independent recruiters", desc: "Running a desk solo and competing against larger teams." },
                  { title: "Staffing agencies", desc: "Managing high-volume pipelines across multiple client accounts." },
                  { title: "In-house teams", desc: "Needing consistent, auditable screening across every department." },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-white/8 bg-white/3 p-4">
                    <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-14 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-3">
              <GradientButton href="/signup">Start free trial</GradientButton>
              <GradientButton href="/contact" outline>Get in touch</GradientButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
