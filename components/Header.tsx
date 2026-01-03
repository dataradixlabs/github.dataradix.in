// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // export default function Header() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const navItems = [
// //     { href: "/", label: "Home" },
// //     { href: "/about", label: "About" },
// //     { href: "/services", label: "Services" },
// //     { href: "/industries", label: "Industries" },
// //     { href: "/case-studies", label: "Case Studies" },
// //     { href: "/blog", label: "Blog" },
// //     { href: "/careers", label: "Careers" },
// //     { href: "/contact", label: "Contact" },
// //   ];

// //   return (
// //     <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-sm border-b border-border">
// //       <nav className="container-custom">
// //         <div className="flex items-center justify-between h-16">
// // <Link href="/" className="text-lg sm:text-xl font-semibold text-text-primary hover:text-accent transition-colors">
// //   DataRadix
// // </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className="text-small font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
// //               >
// //                 {item.label}
// //               </Link>
// //             ))}
// //             <Link
// //               href="/contact"
// //               className="px-4 py-2 bg-accent text-white rounded-soft hover:bg-accent-hover transition-colors text-small font-medium whitespace-nowrap min-h-[44px] flex items-center"
// //             >
// //               Talk to an Engineer
// //             </Link>
// //           </div>

// //           {/* Mobile menu button - 44px touch target */}
// //           <button
// //             className="lg:hidden p-3 text-text-secondary min-h-[44px] min-w-[44px] flex items-center justify-center"
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             aria-label="Toggle menu"
// //             aria-expanded={mobileMenuOpen}
// //           >
// //             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <AnimatePresence>
// //           {mobileMenuOpen && (
// //             <>
// //               {/* Backdrop */}
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm lg:hidden z-40"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               />

// //               {/* Menu */}
// //               <motion.div
// //                 initial={{ opacity: 0, height: 0 }}
// //                 animate={{ opacity: 1, height: "auto" }}
// //                 exit={{ opacity: 0, height: 0 }}
// //                 transition={{ duration: 0.2 }}
// //                 className="lg:hidden py-4 space-y-2 border-t border-border relative z-50 bg-bg-base"
// //               >
// //                 {navItems.map((item) => (
// //                   <Link
// //                     key={item.href}
// //                     href={item.href}
// //                     className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-bg-muted transition-colors text-small min-h-[44px] flex items-center"
// //                     onClick={() => setMobileMenuOpen(false)}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 ))}
// //                 <Link
// //                   href="/contact"
// //                   className="block mx-4 mt-4 text-center px-4 py-3 bg-accent text-white rounded-soft hover:bg-accent-hover transition-colors text-small font-medium min-h-[44px] flex items-center justify-center"
// //                   onClick={() => setMobileMenuOpen(false)}
// //                 >
// //                   Talk to an Engineer
// //                 </Link>
// //               </motion.div>
// //             </>
// //           )}
// //         </AnimatePresence>
// //       </nav>
// //     </header>
// //   );
// // }




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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-accent transition-colors flex-shrink-0"
          >
            DataRadix
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-accent text-white rounded-soft hover:bg-accent-hover rounded-lg transition-colors text-sm font-semibold whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Talk to an Engineer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40 top-16"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full lg:hidden bg-white border-b border-gray-200 shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                <div className="py-2 px-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 pb-3">
                    <Link
                      href="/contact"
                      className="block text-center px-5 py-3 bg-accent text-white rounded-soft hover:bg-accent-hover rounded-lg transition-colors text-base font-semibold min-h-[44px] flex items-center justify-center shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Talk to an Engineer
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
