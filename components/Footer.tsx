import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from "lucide-react";

const footerNav = {
  Company: [
    { href: "/about", label: "About" },
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
    { href: "/contact", label: "Get a Free Review" },
  ],
};

const socials = [
  {
    href: "https://linkedin.com/company/DataRadix",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com/DataRadix",
    label: "Twitter / X",
    icon: Twitter,
  },
  {
    href: "https://github.com/DataRadix",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:info@dataradix.in",
    label: "Email us",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main footer body */}
      <div className="container-custom pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-5">
            <Link href="/" aria-label="DataRadix — Home">
              <Image
                src="/images/Logo.png"
                alt="DataRadix"
                width={36}
                height={36}
                className="h-8 w-auto object-contain invert opacity-90"
              />
            </Link>

            <p className="text-body text-neutral-400 max-w-xs leading-relaxed">
              Engineering scalable, data-driven, cloud-native solutions for teams that move fast and build to last.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-md transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={13} className="opacity-60" />
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-1 pt-1">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  rel="noopener noreferrer"
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-label uppercase tracking-widest text-neutral-500">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-sm text-neutral-500">
            &copy; {year} DataRadix. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-body-sm text-neutral-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-body-sm text-neutral-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
