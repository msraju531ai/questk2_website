import type { Metadata } from "next";
import Link from "next/link";
import { getPageBySlug } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "PromptVault — GenAI Security Platform",
  description:
    "PromptVault by QuestK2 enables organizations to adopt GenAI with confidence — real-time sensitive data protection from prompt to response.",
};

const features = [
  {
    icon: "🔐",
    title: "Control",
    description: "Policy-driven enforcement that governs exactly what data can and cannot be sent to AI models.",
  },
  {
    icon: "👁️",
    title: "Visibility",
    description: "Full audit trail of every prompt and response — see what's flowing through your AI systems.",
  },
  {
    icon: "📋",
    title: "Evidence",
    description: "Automated compliance evidence for regulators and auditors — no manual documentation needed.",
  },
  {
    icon: "🚀",
    title: "Enablement",
    description: "Unblock AI adoption by removing security concerns — let your teams use GenAI safely.",
  },
];

const useCases = [
  {
    title: "Enterprise AI Adoption",
    description: "Enable organization-wide Copilot and ChatGPT usage with guardrails that protect sensitive business data.",
  },
  {
    title: "Regulated Industries",
    description: "Meet HIPAA, SOC 2, GDPR, and other compliance requirements while still leveraging AI productivity gains.",
  },
  {
    title: "Developer Workflows",
    description: "Let developers use AI coding assistants without risking proprietary code or customer data leakage.",
  },
  {
    title: "Customer Service AI",
    description: "Deploy AI agents for customer interactions with built-in PII protection and data governance.",
  },
];

export default async function PromptVaultPage() {
  const wpPage = await getPageBySlug("promptvault");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 60%)",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">GenAI Security Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get the GenAI Boost<br />
              <span className="text-blue-400">Without the Risk</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              PromptVault enables organizations to adopt AI confidently — with real-time sensitive data tokenization before the model ever sees it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-blue-400 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Core Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Four Pillars of GenAI Security
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              PromptVault addresses the full lifecycle of GenAI security — from policy enforcement to compliance evidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
                <span className="text-4xl block mb-4">{f.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Sensitive Data Protection<br />From Prompt to Response
              </h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Intercept", description: "PromptVault sits between your users and AI models, intercepting every prompt." },
                  { step: "02", title: "Tokenize", description: "Sensitive data (PII, financials, IP) is tokenized in real-time before reaching the model." },
                  { step: "03", title: "Enforce", description: "Policy rules determine what passes through, what gets blocked, and what gets redacted." },
                  { step: "04", title: "Audit", description: "Every interaction is logged with full evidence for compliance and security reviews." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">PromptVault at a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: "Refusal Rate Reduction", before: "66–99%", after: "0–28%", good: false },
                  { label: "Sensitive Data Blocked", value: "100%", good: true },
                  { label: "Compliance Evidence", value: "Automated", good: true },
                  { label: "Integration Time", value: "< 1 day", good: true },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-slate-300 text-sm">{stat.label}</span>
                    <span className={`font-bold text-sm ${"value" in stat ? "text-green-400" : "text-blue-300"}`}>
                      {"value" in stat ? stat.value : `${stat.before} → ${stat.after}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Use Cases</p>
            <h2 className="text-3xl font-bold text-slate-900">Built for Every AI Scenario</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{uc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Content if available */}
      {wpPage?.content?.rendered && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-slate prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: wpPage.content.rendered }}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your AI?</h2>
          <p className="text-blue-100 mb-8">
            Book a demo and see how PromptVault gives your team the AI boost — without the risk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
