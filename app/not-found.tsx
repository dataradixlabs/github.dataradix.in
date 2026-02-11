import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center max-w-lg py-20">
        <div className="text-label font-mono text-neutral-400 tracking-widest mb-4">404</div>
        <h1 className="text-h1 font-bold text-neutral-950 mb-4">Page not found</h1>
        <p className="text-body text-neutral-500 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors min-h-[44px]"
          >
            <ArrowLeft size={14} className="opacity-60" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-neutral-200 text-neutral-700 rounded-md text-body-sm font-medium hover:bg-neutral-50 transition-colors min-h-[44px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

