import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/profile';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
  const bodyEncoded = encodeURIComponent(
    `Hello Yaswanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
  );
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${subjectEncoded}&body=${bodyEncoded}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Open user's default email client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 300);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyFormattedMessage = () => {
    const text = `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CONTACT"
          title="Let's build something useful."
          subtitle="I'm interested in opportunities where I can contribute to building useful web applications and continue growing as a developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111114] border border-[#27272A] space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#FAFAFA] font-display">
                  Direct Contact Information
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Feel free to reach out directly via email, phone, or professional networks.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#27272A] text-[#22D3EE] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#71717A] block">Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm text-[#FAFAFA] hover:text-[#22D3EE] transition-colors break-all font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded text-[#71717A] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#4ADE80]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
                  <div className="p-2 rounded-lg bg-[#27272A] text-[#22D3EE] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#71717A] block">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm text-[#FAFAFA] hover:text-[#22D3EE] transition-colors font-medium font-mono"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#18181B] border border-[#27272A]">
                  <div className="p-2 rounded-lg bg-[#27272A] text-[#22D3EE] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#71717A] block">Location</span>
                    <span className="text-xs sm:text-sm text-[#FAFAFA] font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#27272A] space-y-3">
                <span className="text-xs font-mono uppercase text-[#71717A] tracking-wider block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#818CF8] text-xs text-[#FAFAFA] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#818CF8]" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#71717A]" />
                  </a>

                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#22D3EE] text-xs text-[#FAFAFA] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#22D3EE]" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#71717A]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-xl">
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#FAFAFA] font-display">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                Fill out the form below. Your message will be formatted and opened directly in your email app.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-5 rounded-xl bg-[#18181B] border border-[#22D3EE]/30 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-[#22D3EE]">
                  <Check className="w-5 h-5 text-[#22D3EE]" />
                  <span>Draft Opened in Your Email App!</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed">
                  Your mail app has opened with your inquiry prepared for <code className="text-[#22D3EE] bg-black/40 px-1.5 py-0.5 rounded font-mono">{personalInfo.email}</code>.
                  <br />
                  <span className="text-[#FAFAFA] font-medium">Important:</span> Please click <span className="text-[#22D3EE] font-semibold">"Send"</span> inside your mail app to finish sending.
                </p>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href={webGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Send via Web Gmail instead</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#27272A] hover:bg-[#3F3F46] text-[#FAFAFA] text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copiedMessage ? <Check className="w-3.5 h-3.5 text-[#4ADE80]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMessage ? 'Copied Message!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Your Name <span className="text-[#22D3EE]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181B] border ${
                      errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#27272A]'
                    } text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Your Email <span className="text-[#22D3EE]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181B] border ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#27272A]'
                    } text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                  Subject <span className="text-[#22D3EE]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  disabled={isSubmitting}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181B] border ${
                    errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-[#27272A]'
                  } text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                  Message <span className="text-[#22D3EE]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your role, team, or project requirements..."
                  disabled={isSubmitting}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181B] border ${
                    errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#27272A]'
                  } text-[#FAFAFA] placeholder-[#71717A] text-sm focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Opening Mail App...' : 'Send via Mail App'}
                </Button>

                <span className="text-xs font-mono text-[#71717A] text-center sm:text-right">
                  Opens your default email client
                </span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
