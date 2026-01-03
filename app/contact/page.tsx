// // "use client";

// // import { useState } from "react";
// // import { Mail, Phone, MapPin, Send } from "lucide-react";
// // import PrimaryCTA from "@/components/cta/PrimaryCTA";

// // // Note: Metadata would go here but this is a client component
// // // In production, you&apos;d use a server component wrapper or next/head

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     company: "",
// //     message: "",
// //   });
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     setSubmitted(true);
// //     setTimeout(() => {
// //       setSubmitted(false);
// //       setFormData({ name: "", email: "", company: "", message: "" });
// //     }, 3000);
// //   };

// //   return (
// //     <>
// //       {/* Hero - Responsive */}
// //       <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
// //         <div className="container-custom">
// //           <div className="max-w-3xl">
// //             <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Get in Touch</h1>
// //             <p className="text-body text-text-secondary">
// //               Let&apos;s discuss how we can help scale your technology infrastructure
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Form - Responsive */}
// //       <section className="py-12 sm:py-16 border-t border-border">
// //         <div className="container-custom">
// //           <div className="max-w-2xl mx-auto">
// //             <div className="bg-bg-base border border-border rounded-soft p-6 sm:p-10 lg:p-12">
// //               {!submitted ? (
// //                 <>
// //                   <h2 className="text-xl sm:text-h2 font-semibold text-text-primary mb-3 sm:mb-4">Start a Conversation</h2>
// //                   <p className="text-body text-text-secondary mb-6 sm:mb-10">
// //                     Tell us about your project, and we&apos;ll get back to you within 24 hours.
// //                   </p>

// //                   <form action="https://formsubmit.co/642147d10dc50f9555a577858279f91f"
// //                   method="POST"className="space-y-5 sm:space-y-6">
// //                     <div>
// //                       <label htmlFor="name" className="block text-small font-medium text-text-primary mb-2">
// //                         Name *
// //                       </label>
// //                       <input
// //                         type="text"
// //                         id="name"
// //                         required
// //                         value={formData.name}
// //                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                         className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
// //                         Email *
// //                       </label>
// //                       <input
// //                         type="email"
// //                         id="email"
// //                         required
// //                         value={formData.email}
// //                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                         className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label htmlFor="company" className="block text-small font-medium text-text-primary mb-2">
// //                         Company
// //                       </label>
// //                       <input
// //                         type="text"
// //                         id="company"
// //                         value={formData.company}
// //                         onChange={(e) => setFormData({ ...formData, company: e.target.value })}
// //                         className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
// //                       />
// //                     </div>

// //                     <div>
// //                       <label htmlFor="message" className="block text-small font-medium text-text-primary mb-2">
// //                         Message *
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         required
// //                         rows={6}
// //                         value={formData.message}
// //                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                         className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body resize-none min-h-[120px]"
// //                         placeholder="Tell us about your project, challenges, or questions..."
// //                       />
// //                     </div>

// //                     <button
// //                       type="submit"
// //                       className="w-full bg-accent text-white py-3 rounded-soft font-medium hover:bg-accent-hover transition-colors text-small flex items-center justify-center gap-2 min-h-[44px]"
// //                     >
// //                       <Send size={18} />
// //                       Send Message
// //                     </button>

// //                     <input type="hidden" name="_subject" value="New Contact Form Submission - DataRadix" />
// // <input type="hidden" name="_captcha" value="false" />
// // <input type="hidden" name="_template" value="table" />
// // <input type="hidden" name="_next" value="https://dataradix.in/contact?success=true" />
// //                   </form>

// //                   <p className="text-small text-text-secondary mt-4 sm:mt-6 text-center">
// //                     We respond within 24 hours
// //                   </p>
// //                 </>
// //               ) : (
// //                 <div className="text-center py-8 sm:py-12">
// //                   <div className="w-12 sm:w-16 h-12 sm:h-16 bg-bg-muted rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
// //                     <svg className="w-6 sm:w-8 h-6 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                     </svg>
// //                   </div>
// //                   <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Message Sent!</h3>
// //                   <p className="text-body text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Alternative Contact - Responsive */}
// //       <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
// //         <div className="container-custom">
// //           <div className="max-w-2xl mx-auto text-center">
// //             <h2 className="text-lg sm:text-h2 font-semibold text-text-primary mb-4 sm:mb-6">Prefer Email?</h2>
// //             <p className="text-body text-text-secondary mb-8 sm:mb-12">
// //               Send us an email directly at{" "}
// //               <a href="mailto:info@dataradix.in" className="text-accent hover:text-accent-hover transition-colors break-all">
// //                 info@dataradix.in
// //               </a>
// //             </p>

// //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
// //               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
// //                 <Mail className="text-accent mx-auto mb-3" size={24} />
// //                 <h3 className="font-semibold text-text-primary mb-2 text-body">Email</h3>
// //                 <a href="mailto:info@dataradix.in" className="text-small text-accent hover:text-accent-hover transition-colors break-all">
// //                   info@dataradix.in
// //                 </a>
// //               </div>

// //               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
// //                 <Phone className="text-accent mx-auto mb-3" size={24} />
// //                 <h3 className="font-semibold text-text-primary mb-2 text-body">Phone</h3>
// //                 <a href="tel:+91XXXXXXXXXX" className="text-small text-accent hover:text-accent-hover transition-colors">
// //                   +91 XXX XXX XXXX
// //                 </a>
// //               </div>

// //               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
// //                 <MapPin className="text-accent mx-auto mb-3" size={24} />
// //                 <h3 className="font-semibold text-text-primary mb-2 text-body">Location</h3>
// //                 <p className="text-small text-text-secondary">Remote-first</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   return (
//     <>
//       {/* Hero - Responsive */}
//       <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
//         <div className="container-custom">
//           <div className="max-w-3xl">
//             <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Get in Touch</h1>
//             <p className="text-body text-text-secondary">
//               Let&apos;s discuss how we can help scale your technology infrastructure
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form - Responsive */}
//       <section className="py-12 sm:py-16 border-t border-border">
//         <div className="container-custom">
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-bg-base border border-border rounded-soft p-6 sm:p-10 lg:p-12">
//               <h2 className="text-xl sm:text-h2 font-semibold text-text-primary mb-3 sm:mb-4">Start a Conversation</h2>
//               <p className="text-body text-text-secondary mb-6 sm:mb-10">
//                 Tell us about your project, and we&apos;ll get back to you within 24 hours.
//               </p>

//               {/* FIXED: Removed onSubmit={handleSubmit} to allow native form submission */}
//               <form 
//                 action="https://formsubmit.co/642147d10dc50f9555a577858279f91f"
//                 method="POST"
//                 className="space-y-5 sm:space-y-6"
//               >
//                 <div>
//                   <label htmlFor="name" className="block text-small font-medium text-text-primary mb-2">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-small font-medium text-text-primary mb-2">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                     className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px]"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-small font-medium text-text-primary mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={6}
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body resize-none min-h-[120px]"
//                     placeholder="Tell us about your project, challenges, or questions..."
//                   />
//                 </div>

//                 {/* Hidden FormSubmit configuration fields */}
//                 <input type="hidden" name="_subject" value="New Contact Form Submission - DataRadix" />
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_template" value="table" />
//                 <input type="hidden" name="_next" value="https://dataradix.in/contact?success=true" />

//                 <button
//                   type="submit"
//                   className="w-full bg-accent text-white py-3 rounded-soft font-medium hover:bg-accent-hover transition-colors text-small flex items-center justify-center gap-2 min-h-[44px]"
//                 >
//                   <Send size={18} />
//                   Send Message
//                 </button>
//               </form>

//               <p className="text-small text-text-secondary mt-4 sm:mt-6 text-center">
//                 We respond within 24 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Alternative Contact - Responsive */}
//       <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
//         <div className="container-custom">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-lg sm:text-h2 font-semibold text-text-primary mb-4 sm:mb-6">Prefer Email?</h2>
//             <p className="text-body text-text-secondary mb-8 sm:mb-12">
//               Send us an email directly at{" "}
//               <a href="mailto:info@dataradix.in" className="text-accent hover:text-accent-hover transition-colors break-all">
//                 info@dataradix.in
//               </a>
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
//               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
//                 <Mail className="text-accent mx-auto mb-3" size={24} />
//                 <h3 className="font-semibold text-text-primary mb-2 text-body">Email</h3>
//                 <a href="mailto:info@dataradix.in" className="text-small text-accent hover:text-accent-hover transition-colors break-all">
//                   info@dataradix.in
//                 </a>
//               </div>

//               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
//                 <Phone className="text-accent mx-auto mb-3" size={24} />
//                 <h3 className="font-semibold text-text-primary mb-2 text-body">Phone</h3>
//                 <a href="tel:+91XXXXXXXXXX" className="text-small text-accent hover:text-accent-hover transition-colors">
//                   +91 XXX XXX XXXX
//                 </a>
//               </div>

//               <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
//                 <MapPin className="text-accent mx-auto mb-3" size={24} />
//                 <h3 className="font-semibold text-text-primary mb-2 text-body">Location</h3>
//                 <p className="text-small text-text-secondary">Remote-first</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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

      // Submit to FormSubmit using fetch
      await fetch("https://formsubmit.co/642147d10dc50f9555a577858279f91f", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Show success message
      setSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitting(false);
      }, 4000);

    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Get in Touch</h1>
            <p className="text-body text-text-secondary">
              Let&apos;s discuss how we can help scale your technology infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-bg-base border border-border rounded-soft p-6 sm:p-10 lg:p-12">
              {!submitted ? (
                <>
                  <h2 className="text-xl sm:text-h2 font-semibold text-text-primary mb-3 sm:mb-4">Start a Conversation</h2>
                  <p className="text-body text-text-secondary mb-6 sm:mb-10">
                    Tell us about your project, and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-small font-medium text-text-primary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-small font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-small font-medium text-text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-small font-medium text-text-primary mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-border rounded-soft focus:ring-2 focus:ring-accent focus:border-transparent bg-bg-base text-text-primary text-body resize-none min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell us about your project, challenges, or questions..."
                      />
                    </div>

                    {/* Hidden FormSubmit configuration fields */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - DataRadix" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-3 rounded-soft font-medium hover:bg-accent-hover transition-colors text-small flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-small text-text-secondary mt-4 sm:mt-6 text-center">
                    We respond within 24 hours
                  </p>
                </>
              ) : (
                <div className="text-center py-8 sm:py-12 animate-fade-in">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-body text-text-secondary mb-4">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <p className="text-small text-text-secondary">
                    Form will reset in a moment...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-lg sm:text-h2 font-semibold text-text-primary mb-4 sm:mb-6">Prefer Email?</h2>
            <p className="text-body text-text-secondary mb-8 sm:mb-12">
              Send us an email directly at{" "}
              <a href="mailto:info@dataradix.in" className="text-accent hover:text-accent-hover transition-colors break-all">
                info@dataradix.in
              </a>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
                <Mail className="text-accent mx-auto mb-3" size={24} />
                <h3 className="font-semibold text-text-primary mb-2 text-body">Email</h3>
                <a href="mailto:info@dataradix.in" className="text-small text-accent hover:text-accent-hover transition-colors break-all">
                  info@dataradix.in
                </a>
              </div>

              <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
                <Phone className="text-accent mx-auto mb-3" size={24} />
                <h3 className="font-semibold text-text-primary mb-2 text-body">Phone</h3>
                <a href="tel:+91XXXXXXXXXX" className="text-small text-accent hover:text-accent-hover transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </div>

              <div className="bg-bg-base p-5 sm:p-6 rounded-soft border border-border">
                <MapPin className="text-accent mx-auto mb-3" size={24} />
                <h3 className="font-semibold text-text-primary mb-2 text-body">Location</h3>
                <p className="text-small text-text-secondary">Remote-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
