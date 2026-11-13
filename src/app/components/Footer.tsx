import { Link } from 'react-router';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Blog', path: '/blog' },
    ],
    services: [
      { label: 'Web Development', path: '/services/web-development-services' },
      { label: 'Mobile Apps', path: '/services/mobile-app-development' },
      { label: 'Cloud & DevOps', path: '/services/cloud-infrastructure-devops' },
      { label: 'Data & AI', path: '/services/data-engineering-ai-solutions' },
    ],
    support: [
      { label: 'Contact', path: '/contact' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
    ],
  };

  return (
    <footer className="relative bg-secondary border-t border-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group mb-6">
              <Logo size={32} />
              <span className="font-display font-bold text-base tracking-tight">DataRadix</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforming businesses through innovative technology solutions.
              We build digital experiences that drive growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-foreground" />
                <a href="mailto:info@dataradix.in" className="hover:text-foreground transition-colors">
                  info@dataradix.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-foreground" />
                <a href="tel:+91*******" className="hover:text-foreground transition-colors">
                  +91 *******
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-foreground" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-2">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
              />
              <button className="px-6 py-2 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors border border-foreground">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {currentYear} DataRadix. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-border bg-background hover:bg-foreground hover:border-foreground hover:text-background flex items-center justify-center transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-background" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-border bg-background hover:bg-foreground hover:border-foreground flex items-center justify-center transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-background" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-border bg-background hover:bg-foreground hover:border-foreground flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-background" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
