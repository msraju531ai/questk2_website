import type { Metadata } from "next";
import Link from "next/link";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Why QuestK2",
  description:
    "Learn why organizations trust QuestK2 Technologies as their Microsoft Solutions Partner — proven expertise, global delivery, and client-centric results.",
};

const raceValues = [
  {
    letter: "R",
    name: "Respect",
    description: "We value our teammates and listen attentively to our clients — every voice matters.",
  },
  {
    letter: "A",
    name: "Accountability",
    description: "Reliable follow-through without excuses. We own our commitments end to end.",
  },
  {
    letter: "C",
    name: "Communication",
    description: "Clear, detailed, globally-ready messaging that keeps every stakeholder informed.",
  },
  {
    letter: "E",
    name: "Empathy",
    description: "We take time to understand your challenges from your perspective before we act.",
  },
];

const differentiators = [
  {
    icon: "🎯",
    title: "Problem-Solving Focus",
    description: "Grounded in software development principles, we solve problems rather than just deliver requirements.",
  },
  {
    icon: "⚡",
    title: "Cutting-Edge Technology",
    description: "Continuous adoption of emerging Microsoft technologies so you always have access to what's newest.",
  },
  {
    icon: "✅",
    title: "Rigorous Quality Assurance",
    description: "Structured QA and development practices ensure every deliverable meets enterprise standards.",
  },
  {
    icon: "🏅",
    title: "Certified Microsoft Experts",
    description: "Our team holds active Microsoft certifications across Azure, M365, Fabric, and AI workloads.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Methodology",
    description: "Collaborative approach where your team's success is inseparable from ours.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why QuestK2</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We are the preferred partner for businesses seeking digital workplace transformation — delivering innovative Microsoft solutions that enhance productivity, collaboration, and business growth.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                Building Technology That Works for You
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                QuestK2 Technologies is a Microsoft Gold Partner specializing in customized technology solutions and staff augmentation services for digital transformation. Our mission is to be the preferred choice for businesses seeking digital workplace transformation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We deliver innovative software solutions that enhance productivity, collaboration, and business growth — backed by certified experts, global delivery capabilities, and a deep commitment to your success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Start a Conversation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Experience", value: "10+" },
                { label: "Microsoft Certifications", value: "50+" },
                { label: "Projects Delivered", value: "200+" },
                { label: "Client Satisfaction", value: "5.0★" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200"
                >
                  <p className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</p>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Our Edge</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                <span className="text-3xl block mb-3">{d.icon}</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{d.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RACE Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Our Culture</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">The RACE Principles</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Everything we do is guided by four core principles that define how we work with each other and with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {raceValues.map((v) => (
              <div key={v.letter} className="text-center p-8 rounded-2xl bg-slate-900 text-white">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black">{v.letter}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-8">
            Let&apos;s discuss how QuestK2 can accelerate your digital transformation journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
