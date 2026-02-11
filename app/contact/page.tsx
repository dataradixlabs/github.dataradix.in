"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);

      await fetch("https://formsubmit.co/642147d10dc50f9555a577858279f91f", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitting(false);
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">Get in touch</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Let&apos;s talk about your engineering challenges
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              Tell us about your project. We respond within 24 hours — no sales pitch, just a real technical conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8">
                {!submitted ? (
                  <>
                    <h2 className="text-h2 font-bold text-neutral-950 mb-2">
                      Start a conversation
                    </h2>
                    <p className="text-body text-neutral-500 mb-8 leading-relaxed">
                      Describe your project, your stack, and what you&apos;re trying to accomplish.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-body-sm font-medium text-neutral-700 mb-1.5">
                            Name <span className="text-neutral-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            disabled={isSubmitting}
                            className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-md bg-white text-neutral-950 text-body-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent transition min-h-[42px] disabled:opacity-50"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-body-sm font-medium text-neutral-700 mb-1.5">
                            Work email <span className="text-neutral-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={isSubmitting}
                            className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-md bg-white text-neutral-950 text-body-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent transition min-h-[42px] disabled:opacity-50"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-body-sm font-medium text-neutral-700 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-md bg-white text-neutral-950 text-body-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent transition min-h-[42px] disabled:opacity-50"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-body-sm font-medium text-neutral-700 mb-1.5">
                          Tell us about your project <span className="text-neutral-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-md bg-white text-neutral-950 text-body-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:border-transparent transition resize-none disabled:opacity-50"
                          placeholder="What are you building? What's the challenge? What does success look like?"
                        />
                      </div>

                      <input type="hidden" name="_subject" value="New Contact - DataRadix" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-body-sm text-neutral-400">We respond within 24 hours.</p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-h3 font-bold text-neutral-950 mb-2">Message sent!</h3>
                    <p className="text-body text-neutral-500">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
                <h3 className="text-h4 font-semibold text-neutral-950">What to expect</h3>
                <div className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "A technical conversation, not a sales call",
                    "Clear next steps and scope assessment",
                    "No obligation or commitment",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                      <span className="text-body-sm text-neutral-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-4">
                <h3 className="text-h4 font-semibold text-neutral-950">Contact directly</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:info@dataradix.in"
                    className="flex items-center gap-2.5 text-body-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    <Mail size={15} className="text-neutral-400 flex-shrink-0" />
                    info@dataradix.in
                  </a>
                  <div className="flex items-center gap-2.5 text-body-sm text-neutral-600">
                    <MapPin size={15} className="text-neutral-400 flex-shrink-0" />
                    Remote-first · India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
