"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      {/* ─── Hero Section with WebP Image ─── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.webp"
            alt="Contact Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-[#050816]/70 backdrop-blur-[2px]"></div>
        </div>

        {/* Floating Gradients */}
        <div className="absolute left-[-150px] top-[50px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full z-0" />
        <div className="absolute right-[-150px] bottom-[50px] w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full z-0" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium border border-cyan-500/30 text-cyan-400">
              Reach Out
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 leading-[1.1]">
              Get in <span className="gradient-text">Touch</span>
            </h1>

            <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md">
              We&apos;d love to hear from you. Let&apos;s build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Contact Content ─── */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute left-[-200px] top-[100px] w-[500px] h-[500px] bg-violet-500/5 blur-[180px] rounded-full" />
        <div className="absolute right-[-200px] bottom-[100px] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Fill out the form, or reach out to us directly via one of the channels below. We aim to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl glass hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <strong className="block text-white text-base font-semibold mb-1">Phone</strong>
                    <a href="tel:+919483808379" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
                      +91 9483808379
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl glass hover:border-violet-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <strong className="block text-white text-base font-semibold mb-1">Email</strong>
                    <a href="mailto:Support@codemyfyp.com" className="text-gray-400 hover:text-violet-400 transition-colors text-sm sm:text-base">
                      Support@codemyfyp.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-xl glass hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <strong className="block text-white text-base font-semibold mb-1">WhatsApp</strong>
                    <a href="https://wa.me/919483808379" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors text-sm sm:text-base">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-[#0a0f25] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="sample.doe@example.com"
                      required
                      className="w-full bg-[#0a0f25] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="w-full bg-[#0a0f25] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hi there, I'd like to talk about..."
                      required
                      className="w-full bg-[#0a0f25] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 mt-4"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                  
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
