import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "QuestK2 Technologies | Microsoft Solutions Partner",
  description:
    "Solutions built for Azure. Teams built for scale. QuestK2 helps organizations modernize platforms, activate AI, and execute at speed.",
};

const services = [
  {
    title: "Cloud & AI Security",
    description:
      "Zero Trust frameworks, identity management, cloud monitoring, and AI-specific threat protection to secure your entire environment.",
    href: "/cloud-ai-securty",
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Custom Application Development",
    description:
      "AI-powered modernization of legacy apps — from re-architecting to microservices, Power Platform integrations, and cloud-native builds.",
    href: "/modernize",
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Modern data platforms with Microsoft Fabric, end-to-end pipelines, governance, and BI solutions that turn data into decisions.",
    href: "/analytics",
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Modern Workplace Enablement",
    description:
      "Microsoft 365, Teams, and Copilot deployments that transform how your teams collaborate, communicate, and get work done.",
    href: "/workplace",
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Microsoft CSP & Licensing Services",
    description:
      "Optimize your Microsoft investment with expert licensing guidance, CSP management, and ongoing support that keeps costs in check.",
    href: "/licensing",
    icon: (
      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Global Delivery",
    description: "Dual-shore delivery teams across USA and India ensuring 24/7 coverage and cost efficiency.",
    icon: "🌐",
  },
  {
    title: "Tailored Solutions",
    description: "No cookie-cutter approaches — every engagement starts with understanding your unique business context.",
    icon: "🎯",
  },
  {
    title: "Proven Expertise",
    description: "Certified Microsoft experts with years of hands-on experience across Azure, M365, and Fabric.",
    icon: "🏆",
  },
  {
    title: "Reliability",
    description: "Consistent delivery against commitments with transparent communication at every milestone.",
    icon: "🔒",
  },
  {
    title: "Accountable Results",
    description: "We measure success by your outcomes, not just project completion — real ROI you can quantify.",
    icon: "📊",
  },
];

export default async function HomePage() {
  const recentPosts = await getPosts({ per_page: 3, categories: 9 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1d4ed8 0%, transparent 50%)",
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Microsoft Solutions Partner</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Solutions Built for{" "}
              <span className="text-blue-400">Azure.</span>
              <br />
              Teams Built for{" "}
              <span className="text-blue-400">Scale.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              As a trusted Microsoft partner, QuestK2 helps organizations modernize platforms, activate AI, and execute at speed with global delivery expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                Request AI Readiness Workshop
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-blue-400 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                Why QuestK2 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end Microsoft technology services that help you modernize, secure, and scale your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* PromptVault Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/40 rounded-full px-4 py-1.5 mb-4">
                <span className="text-blue-300 text-sm font-medium">New Product</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get the GenAI Boost<br />
                <span className="text-blue-400">Without the Risk</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                PromptVault is our GenAI security platform that enables organizations to adopt AI confidently — with real-time sensitive data protection from prompt to response.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Control", "Visibility", "Evidence", "Enablement"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/promptvault"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-blue-900/30 border border-blue-700/30 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { label: "Sensitive Data Tokenized", value: "100%", icon: "🔐" },
                  { label: "Policy Violations Blocked", value: "Real-time", icon: "🛡️" },
                  { label: "Compliance Evidence", value: "Automated", icon: "📋" },
                  { label: "AI Adoption Rate", value: "+3x", icon: "🚀" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <p className="text-white font-bold text-lg">{stat.value}</p>
                      <p className="text-slate-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Our Edge</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="text-center p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{d.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Insights</p>
                <h2 className="text-3xl font-bold text-slate-900">Latest from Our Blog</h2>
              </div>
              <Link
                href="/blogs"
                className="hidden sm:inline-flex items-center gap-1.5 text-blue-700 font-medium text-sm hover:text-blue-800 transition-colors"
              >
                View all posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-blue-700 font-medium text-sm hover:text-blue-800"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let&apos;s talk about how QuestK2 can accelerate your Azure journey and AI adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Let&apos;s Get To Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-blue-400 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Learn About QuestK2
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
