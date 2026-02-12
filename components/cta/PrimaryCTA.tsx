"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PrimaryCTAProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
}

export default function PrimaryCTA({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: PrimaryCTAProps) {
  const baseClasses = "inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-soft font-medium text-small transition-colors duration-200 min-h-[44px]";
  
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "bg-bg-muted text-text-primary hover:bg-border border border-border",
    ghost: "text-accent hover:text-accent-hover",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ opacity: 0.9 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
