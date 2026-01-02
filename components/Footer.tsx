import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { href: "/about", label: "About Us" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
    Services: [
      { href: "/services#custom-software", label: "Custom Software" },
      { href: "/services#data-engineering", label: "Data Engineering" },
      { href: "/services#cloud-devops", label: "Cloud & DevOps" },
      { href: "/services#ai-automation", label: "AI & Automation" },
    ],
    Resources: [
      { href: "/blog", label: "Blog" },
      { href: "/industries", label: "Industries" },
      { href: "/contact", label: "Get Started" },
    ],
  };

  return (
    <footer className="bg-bg-muted border-t border-border">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">DataRadix</h3>
            <p className="text-body text-text-secondary mb-6 max-w-md">
              Engineering scalable, data-driven, cloud-native solutions for modern enterprises.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/DataRadix" className="text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/DataRadix" className="text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://github.com/DataRadix" className="text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:info@dataradix.in" className="text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-small font-semibold text-text-primary mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-small text-text-secondary hover:text-text-primary transition-colors block py-1 min-h-[32px] flex items-center">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-small text-text-secondary">
          <p>&copy; {currentYear} DataRadix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
