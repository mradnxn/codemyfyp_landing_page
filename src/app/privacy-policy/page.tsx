"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  Scale,
  Database,
  Globe,
  Mail,
  Lock,
  Cookie,
  Users,
  Bell,
  Settings,
} from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: FileText,
    title: "Introduction",
    content: `At CodeMyFyp IT & Software Solutions, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services, website, internship programs, and consultation platforms.`,
    highlight: `We are committed to transparency, lawful processing, and protecting your data under GDPR and the Indian Digital Personal Data Protection (DPDP) Act.`,
  },
  {
    icon: Globe,
    title: "Our Services",
    content: `• Final Year Projects (FYP)
• Custom Website Development
• Complete IT Services
• Job Updates & Preparation
• Research Work & Publication
• Expert Consultation`,
  },
  {
    icon: Database,
    title: "Information We Collect",
    content: `We may collect personal and technical information to provide better services and support.

• Full name, email address, and phone number
• College/university details for internship and project services
• Project requirements and consultation details
• Resume or academic details for career guidance
• Payment and billing information (if applicable)
• Browser, device, and website usage analytics
• Communication records through forms, email, or WhatsApp`,
  },
  {
    icon: Bell,
    title: "How We Use Your Information",
    content: `• To deliver our IT and educational services
• To manage internships and project submissions
• To provide technical support and consultation
• To improve website performance and user experience
• To send job updates, notifications, and important announcements
• To maintain security and prevent fraud or misuse`,
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    content: `Our website may use cookies and analytics tools to improve user experience, remember preferences, and analyze website traffic.

• Session and authentication cookies
• Preference and theme settings
• Analytics and performance tracking
• Security and fraud prevention mechanisms`,
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse.

• Secure hosting and encrypted connections
• Restricted access to sensitive information
• Regular security monitoring and updates
• Controlled internal access to user data`,
  },
  {
    icon: ShieldCheck,
    title: "GDPR Compliance (EU Users)",
    content: `• Right to access your personal data
• Right to request corrections or updates
• Right to request deletion of your data
• Right to withdraw consent at any time
• Right to data portability
• Right to object to certain processing activities`,
  },
  {
    icon: Scale,
    title: "Indian DPDP Act Compliance",
    content: `• Consent-based collection and processing
• Purpose limitation for educational and IT services
• Data minimization and secure storage practices
• Protection against unauthorized disclosure`,
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: `We may use trusted third-party tools and platforms for hosting, analytics, communication, and payment processing. These providers are required to maintain confidentiality and security.`,
  },
  {
    icon: Database,
    title: "Data Retention",
    content: `We retain personal information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and maintain records.`,
  },
  {
    icon: Users,
    title: "Children’s Privacy",
    content: `Our services are primarily intended for students and professionals. We do not knowingly collect sensitive personal information from children without appropriate consent.`,
  },
  {
    icon: Settings,
    title: "Your Rights & Choices",
    content: `• Request access to your stored information
• Request correction or deletion of data
• Opt out of marketing communications
• Disable cookies through browser settings`,
  },
  {
    icon: FileText,
    title: "Policy Updates",
    content: `We may update this Privacy Policy periodically to reflect changes in legal requirements, technologies, or services. Updated versions will be published on this page.`,
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: `If you have any questions regarding this Privacy Policy or your data, please contact CodeMyFyp IT & Software Solutions through our official contact page.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* ─── Hero Section ─── */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#050816]" />
        <div className="absolute left-[-150px] top-[50px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />
        <div className="absolute right-[-150px] bottom-[50px] w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
              Legal
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-[1.1]">
              Privacy
              <span className="gradient-text"> Policy</span>
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              GDPR + Indian DPDP Compliant | Updated 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Privacy Content ─── */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute left-[-200px] top-[300px] w-[500px] h-[500px] bg-violet-500/5 blur-[180px] rounded-full" />
        <div className="absolute right-[-200px] bottom-[200px] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-cyan-500/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={16}
                        className="text-cyan-400 sm:w-[18px] sm:h-[18px]"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-bold mb-3">
                        {section.title}
                      </h2>

                      <div className="text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>

                      {/* @ts-ignore - highlight property might not exist on all sections */}
                      {section.highlight && (
                        <div className="mt-5 p-4 sm:p-5 rounded-lg sm:rounded-xl bg-cyan-500/10 border-l-[3px] border-cyan-500">
                          <p className="text-cyan-400 font-medium text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                            {/* @ts-ignore */}
                            {section.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
