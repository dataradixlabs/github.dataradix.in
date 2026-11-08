import { motion } from 'framer-motion';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function CookiePage() {
  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Cookie Policy - Privacy & Tracking" 
        description="Learn about how DataRadix uses cookies and similar technologies to enhance your browsing experience and provide analytics."
        keywords="Cookie Policy, Tracking Technologies, Website Analytics, Browser Cookies, User Preferences"
      />
      <section className="relative py-24 border-b border-border bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground">Last Updated: April 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-invert">
          <p>
            This Cookie Policy explains how DataRadix uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          
          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide reporting information.
          </p>

          <h2>2. Why do we use Cookies?</h2>
          <p>
            We use cookies for several reasons:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Preference cookies:</strong> Allow the site to remember your choices.</li>
          </ul>

          <h2>3. How can I control Cookies?</h2>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality may be restricted.
          </p>

          <h2>4. Updates to this Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
          </p>
        </div>
      </section>
    </div>
  );
}
