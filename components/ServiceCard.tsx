import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-slate-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-blue-700 font-medium text-sm hover:gap-2.5 transition-all"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
