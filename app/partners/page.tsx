import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "QuestK2 Technologies partners with Microsoft, Windsurf, and IAMCP to deliver world-class technology solutions.",
};

const partners = [
  {
    name: "Microsoft",
    logo: "Microsoft",
    badge: "Gold Partner",
    description:
      "QuestK2 Technologies is a Microsoft Gold Partner with certifications in Application Development and Application Integration. We continuously enhance our expertise across the Microsoft Cloud technology stack — Azure, Microsoft 365, Microsoft Fabric, and Copilot.",
    highlights: [
      "Azure Solutions Expert",
      "Microsoft 365 Specialist",
      "Microsoft Fabric Partner",
      "Copilot Implementation",
    ],
  },
  {
    name: "Windsurf",
    logo: "Windsurf",
    badge: "Technology Partner",
    description:
      "Windsurf is a modern AI development framework emphasizing speed and engineering clarity. QuestK2 collaborates with Windsurf to help clients adopt AI-assisted development safely while maintaining code quality and team velocity.",
    highlights: [
      "AI-Assisted Development",
      "Code Quality Assurance",
      "Team Velocity",
      "Safe AI Adoption",
    ],
  },
  {
    name: "IAMCP",
    logo: "IAMCP",
    badge: "Association Member",
    description:
      "The International Association of Microsoft Channel Partners is a global professional association spanning 100 chapters across 40 countries. Notably, the head of QuestK2's Uruguay division serves as VP of the LATAM region.",
    highlights: [
      "Global Network — 40 Countries",
      "100+ Chapters Worldwide",
      "LATAM Regional Leadership",
      "Microsoft Ecosystem Access",
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Ecosystem</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Partners</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            We partner with the best to deliver the best. Our strategic alliances amplify the value we bring to every engagement.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Logo / Visual */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-12 flex items-center justify-center min-h-[200px]">
                    <div className="text-center">
                      <div className="text-4xl font-black text-slate-800 mb-2">{partner.logo}</div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {partner.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{partner.name}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{partner.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {partner.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Let&apos;s Get To Work</h2>
          <p className="text-slate-600 mb-8">
            Leverage our partner ecosystem to accelerate your technology transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
