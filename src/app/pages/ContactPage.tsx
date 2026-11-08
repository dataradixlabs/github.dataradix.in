import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';
import { SEOManager } from '@/app/components/ui/SEOManager';
import { CONTACT_METHODS, OFFICE_LOCATIONS, FAQ_DATA } from '@/app/data';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-background pt-24">
      <SEOManager
        title="Contact Us - Technical Support & Consulting"
        description="Get in touch with DataRadix's expert team for technical support, project consulting, or business inquiries. We're here to help you scale."
        keywords="Contact DataRadix, Technical Support, IT Consulting, Project Inquiry, Business Solutions"
      />
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none">
              Let's Build<br />
              <span className="gradient-text">Something Great Together</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Have a project in mind? We'd love to hear about it. Get in touch and
              let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {CONTACT_METHODS.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 bg-secondary hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 border border-border bg-background flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:border-foreground transition-colors">
                      <method.icon className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-1">{method.title}</h3>
                    <p className="text-sm font-medium mb-1">{method.content}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </a>
                ) : (
                  <div className="p-8 bg-secondary">
                    <div className="w-10 h-10 border border-border bg-background flex items-center justify-center mb-4">
                      <method.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-sm mb-1">{method.title}</h3>
                    <p className="text-sm font-medium mb-1">{method.content}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Contact Form</p>
                <h2 className="font-display font-bold text-3xl mb-4">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-2 tracking-wide uppercase text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-2 tracking-wide uppercase text-muted-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium mb-2 tracking-wide uppercase text-muted-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium mb-2 tracking-wide uppercase text-muted-foreground">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="data">Data Engineering & AI</option>
                      <option value="design">UI/UX Design</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-2 tracking-wide uppercase text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors flex items-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="overflow-hidden border border-border">
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-100" />
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-3 text-muted-foreground/30" />
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Interactive Map</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                <button className="p-6 bg-background hover:bg-secondary border-0 transition-colors text-left group">
                  <MessageSquare className="w-6 h-6 text-muted-foreground mb-3 group-hover:text-foreground transition-colors" />
                  <h3 className="font-display font-semibold text-sm mb-1">Live Chat</h3>
                  <p className="text-xs text-muted-foreground">Chat with our team</p>
                </button>

                <button className="p-6 bg-background hover:bg-secondary border-0 transition-colors text-left group">
                  <Calendar className="w-6 h-6 text-muted-foreground mb-3 group-hover:text-foreground transition-colors" />
                  <h3 className="font-display font-semibold text-sm mb-1">Book a Call</h3>
                  <p className="text-xs text-muted-foreground">Schedule a meeting</p>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Locations</p>
            <h2 className="font-display font-bold text-4xl mb-4">Our Offices</h2>
            <p className="text-muted-foreground">
              We have offices around the world to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {OFFICE_LOCATIONS.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-8 bg-background hover:bg-muted transition-colors"
              >
                <div className="text-3xl mb-4">{office.flag}</div>
                <h3 className="font-display font-bold text-xl mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-foreground" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-foreground" />
                    <a href={`tel:${office.phone}`} className="hover:text-foreground transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-foreground" />
                    <a href={`mailto:${office.email}`} className="hover:text-foreground transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-display font-bold text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-0">
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 border-b border-border bg-background last:border-b-0"
              >
                <h3 className="font-display font-semibold text-sm mb-3">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
