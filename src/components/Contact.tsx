import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Linkedin,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim())
      errors.subject = "Please enter a subject line";
    if (!formData.message.trim()) {
      errors.message = "Please enter your message content";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please enter at least 10 characters";
    }
    return errors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error dynamically on keystroke
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus("submitting");

    // Simulate high-fidelity network request delays (e.g. 1.2 seconds)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#020617] border-b border-slate-200/50 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-200/30 mb-3">
            <Mail className="h-3.5 w-3.5 text-cyan-500" />
            <span className="text-xs font-mono font-semibold text-cyan-705 dark:text-cyan-400 uppercase tracking-widest">
              Contact Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Open for internships and team collaborations. Feel free to reach out
            with any questions or project details!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Column 1: Contact Detail Board */}
          <div
            id="contact-details-board"
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                You can directly copy my professional email address to your
                clipboard, send an email, or call me. I am currently located in
                Jaipur and open to hybrid or remote arrangements.
              </p>

              <div className="space-y-4 pt-4">
                {/* Email detail */}
                <div className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2.5 rounded-xl shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-none mb-1">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-500 truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-email-to-clipboard"
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 dark:text-slate-400 text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors shadow-xs cursor-pointer relative"
                    title="Copy to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-cyan-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone detail */}
                <div className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
                  <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2.5 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
                  <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-2.5 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Current Location
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick LinkedIn Anchor Card */}
            <div className="pt-6 border-t border-slate-200/50 dark:border-white/5 select-none">
              <a
                id="contact-linkedin-panel"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-4.5 rounded-2xl flex items-center justify-between transition-all shadow-lg shadow-cyan-500/20"
              >
                <div className="flex items-center gap-3.5">
                  <div className="bg-white/20 p-2 rounded-xl text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/85 block leading-none mb-0.5">
                      Let's Connect
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      Rahul Singh on LinkedIn
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 p-1 text-white rounded-lg">
                  <Check className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Elegant Form Card */}
          <div id="contact-form-block" className="lg:col-span-7">
            <div className="bg-white/85 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-center min-h-[460px]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success feedback element card with reset button option */
                  <motion.div
                    id="contact-success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-5"
                  >
                    <div className="inline-flex bg-cyan-100 dark:bg-cyan-950/40 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 p-4 rounded-full shadow-inner animate-bounce">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        Message Sent Safely!
                      </h4>
                      <p className="text-sm text-slate-505 dark:text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                        Thank you for reaching out to me. Your request is
                        processed successfully. I will review it and follow up
                        with you as soon as possible at your email address.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        id="reset-form-success"
                        onClick={() => setStatus("idle")}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 dark:bg-slate-805 dark:border-slate-750 text-slate-805 dark:text-slate-205 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Standard form setup */
                  <motion.form
                    id="portfolio-contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/50 dark:border-white/5 pb-2 mb-2">
                      Leave me a message
                    </h3>

                    {/* Grid wrapper for Name/Email inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Rahul Singh"
                          disabled={status === "submitting"}
                          className={`w-full text-xs font-sans px-3.5 py-3 bg-white dark:bg-slate-950 border ${
                            formErrors.name
                              ? "border-red-550 focus:ring-red-500"
                              : "border-slate-250 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                          } rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                        />
                        {formErrors.name && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          disabled={status === "submitting"}
                          className={`w-full text-xs font-sans px-3.5 py-3 bg-white dark:bg-slate-950 border ${
                            formErrors.email
                              ? "border-red-550 focus:ring-red-500"
                              : "border-slate-250 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                          } rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Collaboration"
                        disabled={status === "submitting"}
                        className={`w-full text-xs font-sans px-3.5 py-3 bg-white dark:bg-slate-950 border ${
                          formErrors.subject
                            ? "border-red-550 focus:ring-red-500"
                            : "border-slate-250 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                        } rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1`}
                      />
                      {formErrors.subject && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {formErrors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">
                        Detailed Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Write your project descriptions or inquiries here..."
                        disabled={status === "submitting"}
                        className={`w-full text-xs font-sans px-3.5 py-3 bg-white dark:bg-slate-950 border ${
                          formErrors.message
                            ? "border-red-550 focus:ring-red-500"
                            : "border-slate-250 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                        } rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1 resize-[#020617]`}
                      />
                      {formErrors.message && (
                        <span className="text-[10px] text-red-505 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submission triggers */}
                    <div className="pt-2">
                      <button
                        id="submit-contact-btn"
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg focus:outline-none transition-all disabled:bg-cyan-400 dark:disabled:bg-slate-800 disabled:cursor-not-allowed border border-white/5"
                      >
                        {status === "submitting" ? (
                          <>
                            <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Dispatching Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-3.5 w-3.5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
