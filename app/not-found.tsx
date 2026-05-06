import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-blue-100 mb-4">404</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
