import Link from "next/link";
import PrimaryCTA from "@/components/cta/PrimaryCTA";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryCTA href="/">Go Home</PrimaryCTA>
          <PrimaryCTA href="/contact" variant="outline">Contact Us</PrimaryCTA>
        </div>
      </div>
    </div>
  );
}

