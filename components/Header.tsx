"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200"
          : "bg-white border-b border-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-vivid focus-visible:ring-offset-2 rounded"
            aria-label="DataRadix — Home"
          >
            {/* Icon-only mark for mobile (xs) */}
            <Image
              src="/images/Logo.png"
              alt="DataRadix"
              width={36}
              height={36}
              priority
              className="sm:hidden h-8 w-auto object-contain"
            />
            {/* Full logo for sm+ */}
            <Image
              src="/images/Logo with text DataRadix.png"
              alt="DataRadix"
              width={160}
              height={40}
              priority
              className="hidden sm:block h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-body-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? "text-neutral-950 bg-neutral-100"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors duration-150 whitespace-nowrap"
            >
              Talk to an Engineer
              <ArrowRight size={13} className="opacity-70" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              key="panel"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-full z-50 bg-white border-b border-neutral-200 shadow-lg lg:hidden"
            >
              <div className="container-custom py-3 space-y-0.5">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors min-h-[48px] ${
                        isActive
                          ? "text-neutral-950 bg-neutral-100"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-2 pb-1">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-neutral-950 text-white rounded-md text-base font-semibold hover:bg-neutral-800 transition-colors min-h-[48px]"
                  >
                    Talk to an Engineer
                    <ArrowRight size={15} className="opacity-70" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
