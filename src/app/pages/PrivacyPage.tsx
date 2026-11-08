import { motion } from 'framer-motion';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function PrivacyPage() {
  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Privacy Policy - Data Protection & Compliance" 
        description="Read DataRadix's privacy policy to understand how we collect, use, and protect your personal data in compliance with global standards."
        keywords="Privacy Policy, Data Protection, GDPR, User Privacy, Information Security"
      />
      <section className="relative py-24 border-b border-border bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">Last Updated: April 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-invert">
          <p>
            At DataRadix, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us through our chat bot.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send technical notices and administrative messages</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet is 100% secure.
          </p>

          <h2>4. Your Choices</h2>
          <p>
            You may opt out of receiving promotional communications from us by following the instructions in those communications. You can also contact us to request access to or deletion of your personal information.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@DataRadix.com">privacy@DataRadix.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
