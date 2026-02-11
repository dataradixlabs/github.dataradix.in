"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface PrimaryCTAProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-vivid focus-visible:ring-offset-2";

const sizes = {
  sm: "px-3.5 py-2 text-body-sm min-h-[36px]",
  md: "px-4 py-2.5 text-body-sm min-h-[40px]",
  lg: "px-5 py-3 text-body min-h-[44px]",
};

const variants = {
  primary:
    "bg-neutral-950 text-white hover:bg-neutral-800 active:bg-neutral-900",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-200 border border-neutral-200",
  ghost:
    "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100",
  outline:
    "border border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-50",
};

export default function PrimaryCTA({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: PrimaryCTAProps) {
  const classes = clsx(base, sizes[size], variants[variant], className);

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={14}
          className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-150"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, showArrow && "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(classes, showArrow && "group")}
    >
      {content}
    </button>
  );
}
