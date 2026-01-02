"use client";

import { useEffect, useState } from "react";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import PrimaryCTA from "@/components/cta/PrimaryCTA";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [showModal, setShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 40 && scrollPercentage < 50 && !hasShownModal) {
        setShowModal(true);
        setHasShownModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownModal]);

  const renderText = (text: string) => {
    // Handle bold text **text**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx} className="font-semibold text-text-primary">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderContent = () => {
    const paragraphs = content.split("\n\n");
    return paragraphs.map((paragraph, i) => {
      const trimmed = paragraph.trim();
      
      // Headers
      if (trimmed.startsWith("# ")) {
        return <h2 key={i} className="text-h2 font-semibold text-text-primary mt-10 sm:mt-16 mb-6 sm:mb-8 first:mt-0">{trimmed.slice(2)}</h2>;
      }
      if (trimmed.startsWith("## ")) {
        return <h3 key={i} className="text-h3 font-semibold text-text-primary mt-8 sm:mt-12 mb-4 sm:mb-6">{trimmed.slice(3)}</h3>;
      }
      if (trimmed.startsWith("### ")) {
        return <h4 key={i} className="text-body font-semibold text-text-primary mt-6 sm:mt-8 mb-3 sm:mb-4">{trimmed.slice(4)}</h4>;
      }
      
      // Bold paragraphs (standalone)
      if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.includes("\n")) {
        return <p key={i} className="text-body font-semibold text-text-primary my-4 sm:my-6">{trimmed.slice(2, -2)}</p>;
      }
      
      // Numbered lists (ordered lists)
      const numberedListMatch = trimmed.match(/^\d+\.\s/);
      if (numberedListMatch || (trimmed.includes("\n") && /^\d+\.\s/m.test(trimmed))) {
        const items = trimmed.split("\n").filter(item => {
          const trimmedItem = item.trim();
          return /^\d+\.\s/.test(trimmedItem);
        });
        
        if (items.length > 0) {
          return (
            <ol key={i} className="list-decimal list-inside space-y-2 sm:space-y-3 my-6 sm:my-8 text-text-secondary ml-3 sm:ml-4">
              {items.map((item, j) => {
                const text = item.replace(/^\d+\.\s/, "").trim();
                return (
                  <li key={j} className="leading-relaxed text-body">
                    {renderText(text)}
                  </li>
                );
              })}
            </ol>
          );
        }
      }
      
      // Unordered lists
      if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter(item => item.trim().startsWith("- "));
        if (items.length > 0) {
          return (
            <ul key={i} className="list-disc list-inside space-y-2 sm:space-y-3 my-6 sm:my-8 text-text-secondary ml-3 sm:ml-4">
              {items.map((item, j) => {
                const text = item.trim().slice(2).trim();
                return (
                  <li key={j} className="leading-relaxed text-body">
                    {renderText(text)}
                  </li>
                );
              })}
            </ul>
          );
        }
      }
      
      // Code blocks
      if (trimmed.startsWith("```")) {
        return (
          <pre key={i} className="bg-text-primary text-bg-base p-4 sm:p-6 rounded-soft overflow-x-auto my-6 sm:my-8 border border-border">
            <code className="text-small">{trimmed.split("\n").slice(1, -1).join("\n")}</code>
          </pre>
        );
      }
      
      // Regular paragraphs with inline bold support
      if (trimmed) {
        return (
          <p key={i} className="text-body text-text-secondary leading-relaxed my-4 sm:my-6">
            {renderText(trimmed)}
          </p>
        );
      }
      
      return null;
    });
  };

  return (
    <>
      <div className="prose-custom prose-lg">
        {renderContent()}
      </div>
      <LeadMagnetModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Engineering Readiness Checklist"
        description="Evaluate your tech stack's readiness to scale. Get our free checklist covering architecture, data infrastructure, and DevOps practices."
        ctaText="Download the Checklist"
      />
    </>
  );
}

export function BlogContentCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryCTA onClick={() => setShowModal(true)}>
        Download the Checklist
      </PrimaryCTA>
      <LeadMagnetModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Engineering Readiness Checklist"
        description="Evaluate your tech stack's readiness to scale. Get our free checklist covering architecture, data infrastructure, and DevOps practices."
        ctaText="Download the Checklist"
      />
    </>
  );
}

