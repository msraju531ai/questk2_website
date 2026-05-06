import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with QuestK2 Technologies. We're ready to help you modernize your platform, activate AI, and execute at scale.",
};

const offices = [
  {
    country: "United States",
    flag: "🇺🇸",
    address: "520 S. El Camino Real, STE A\nSan Mateo, CA 94402",
    phone: "(650) 209-7150",
    phoneHref: "tel:+16502097150",
  },
  {
    country: "India",
    flag: "🇮🇳",
    address: "Orbit, Plot No 30/C, Sy No 83/1\nRaidurgam, Knowledge City Rd\nHyderabad, Telangana 500081",
    phone: "+91 75699 78270",
    phoneHref: "tel:+917569978270",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Ready to start a conversation? We&apos;re excited to connect with you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">We&apos;ll get back to you within one business day.</p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Offices */}
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{office.flag}</span>
                    <h3 className="font-bold text-slate-900">{office.country}</h3>
                  </div>
                  <p className="text-slate-600 text-sm whitespace-pre-line mb-2">{office.address}</p>
                  <a
                    href={office.phoneHref}
                    className="text-blue-700 font-medium text-sm hover:text-blue-800 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              ))}

              {/* Email */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </h3>
                <div className="space-y-1">
                  <a href="mailto:info@questk2.com" className="block text-sm text-blue-700 hover:text-blue-800 transition-colors">
                    info@questk2.com
                  </a>
                  <a href="mailto:support@questk2.com" className="block text-sm text-blue-700 hover:text-blue-800 transition-colors">
                    support@questk2.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/questk2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
