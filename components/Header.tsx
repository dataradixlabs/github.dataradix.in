"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-sm border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg sm:text-xl font-semibold text-text-primary hover:text-accent transition-colors">
            DataRadix
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-small font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-accent text-white rounded-soft hover:bg-accent-hover transition-colors text-small font-medium whitespace-nowrap min-h-[44px] flex items-center"
            >
              Talk to an Engineer
            </Link>
          </div>

          {/* Mobile menu button - 44px touch target */}
          <button
            className="lg:hidden p-3 text-text-secondary min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden py-4 space-y-2 border-t border-border relative z-50 bg-bg-base"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-bg-muted transition-colors text-small min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mx-4 mt-4 text-center px-4 py-3 bg-accent text-white rounded-soft hover:bg-accent-hover transition-colors text-small font-medium min-h-[44px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talk to an Engineer
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
