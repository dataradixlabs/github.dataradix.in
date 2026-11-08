import { motion } from 'framer-motion';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function TermsPage() {
  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Terms of Service - Legal Agreement" 
        description="Review the terms and conditions governing the use of DataRadix's website and services."
        keywords="Terms of Service, Legal Agreement, User Terms, Website Conditions, Service Contract"
      />
      <section className="relative py-24 border-b border-border bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">Last Updated: April 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-invert">
          <p>
            By accessing or using DataRadix's website and services, you agree to be bound by these Terms of Service.
          </p>
          
          <h2>1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of DataRadix or its licensors and is protected by intellectual property laws.
          </p>

          <h2>3. Limitation of Liability</h2>
          <p>
            DataRadix shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.
          </p>

          <h2>4. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California.
          </p>
        </div>
      </section>
    </div>
  );
}
