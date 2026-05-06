import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join QuestK2 Technologies — a Microsoft Solutions Partner building the future of Azure, AI, and digital transformation. View open positions.",
};

const openings = [
  {
    title: "Senior Cloud Engineer",
    type: "Full-time",
    location: "Hyderabad, India",
    href: "/senior-cloud-engineer",
    highlights: [
      "10+ years of experience",
      "Microsoft Azure infrastructure",
      "Kubernetes & Terraform",
      "CI/CD pipeline expertise",
    ],
  },
];

const benefits = [
  { icon: "🌐", title: "Global Teams", description: "Work with colleagues across USA and India on high-impact Microsoft projects." },
  { icon: "📈", title: "Career Growth", description: "Clear growth paths with support for Microsoft certifications and training." },
  { icon: "🤝", title: "Collaborative Culture", description: "RACE principles — Respect, Accountability, Communication, Empathy." },
  { icon: "🚀", title: "Cutting-Edge Tech", description: "Work with Azure, AI/ML, Microsoft Fabric, Copilot, and more." },
  { icon: "💼", title: "Competitive Pay", description: "Market-aligned compensation with performance-based incentives." },
  { icon: "🎓", title: "Learning & Development", description: "Sponsored certifications, training budgets, and conference access." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Join Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Careers at QuestK2</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Build your career at a Microsoft Solutions Partner where your work drives real digital transformation.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Open Roles</p>
            <h2 className="text-3xl font-bold text-slate-900">Current Openings</h2>
          </div>

          {openings.length > 0 ? (
            <div className="space-y-4">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.highlights.map((h) => (
                          <span key={h} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={job.href}
                      className="shrink-0 inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                    >
                      View Role
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500">No open positions at the moment.</p>
              <p className="text-slate-400 text-sm mt-1">Check back soon or send us your CV.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Why QuestK2</p>
            <h2 className="text-3xl font-bold text-slate-900">Life at QuestK2</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                <span className="text-3xl block mb-3">{b.icon}</span>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-blue-100 mb-8">
            Send us your CV and tell us how you&apos;d like to contribute. We&apos;re always looking for great talent.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
