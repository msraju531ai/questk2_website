"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const services = [
  { name: "Cloud & AI Security", href: "/cloud-ai-securty" },
  { name: "Custom Application Development", href: "/modernize" },
  { name: "Data Engineering & Analytics", href: "/analytics" },
  { name: "Modern Workplace Enablement", href: "/workplace" },
  { name: "Microsoft CSP & Licensing Services", href: "/licensing" },
];

const resources = [
  { name: "Blogs", href: "/blogs" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "White Papers", href: "/white-papers" },
  { name: "Case Studies", href: "/case-study" },
  { name: "Workload Migration", href: "/migration" },
];

interface DropdownMenuProps {
  label: string;
  items: { name: string; href: string }[];
}

function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors"
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-slate-100 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileResources, setMobileResources] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-brand-navy tracking-tight">
              Quest<span className="text-blue-700">K2</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
              Home
            </Link>
            <DropdownMenu label="Our Services" items={services} />
            <Link href="/about" className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
              Why QuestK2
            </Link>
            <DropdownMenu label="Resources" items={resources} />
            <Link href="/partners" className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
              Partners
            </Link>
            <Link href="/careers" className="text-slate-700 hover:text-blue-700 font-medium text-sm transition-colors">
              Careers
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium text-sm transition-colors"
            >
              Home
            </Link>

            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="flex items-center justify-between px-3 py-2.5 text-slate-700 hover:bg-blue-50 rounded-lg font-medium text-sm transition-colors"
            >
              Our Services
              <svg className={`w-4 h-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServices && (
              <div className="ml-4 border-l-2 border-blue-100 pl-3 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium text-sm transition-colors"
            >
              Why QuestK2
            </Link>

            <button
              onClick={() => setMobileResources(!mobileResources)}
              className="flex items-center justify-between px-3 py-2.5 text-slate-700 hover:bg-blue-50 rounded-lg font-medium text-sm transition-colors"
            >
              Resources
              <svg className={`w-4 h-4 transition-transform ${mobileResources ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileResources && (
              <div className="ml-4 border-l-2 border-blue-100 pl-3 flex flex-col gap-1">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/partners"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium text-sm transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium text-sm transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
