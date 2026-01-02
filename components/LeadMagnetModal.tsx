"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  ctaText?: string;
}

export default function LeadMagnetModal({
  isOpen,
  onClose,
  title,
  description,
  ctaText = "Download",
}: LeadMagnetModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-text-primary/40 z-50 backdrop-blur-sm"
          />

          {/* Modal - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-bg-base rounded-soft border border-border shadow-lg max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6 sm:mb-8 pr-8">
                    <h2 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2 sm:mb-3">{title}</h2>
                    <p className="text-body text-text-secondary">{description}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
                        placeholder="you@company.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-3 rounded-soft font-medium hover:bg-accent-hover transition-colors text-small min-h-[44px]"
                    >
                      {ctaText}
                    </button>
                  </form>

                  <p className="text-small text-text-secondary mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-12 h-12 bg-bg-muted rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Check your email</h3>
                  <p className="text-body text-text-secondary">We&apos;ve sent you the checklist.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
