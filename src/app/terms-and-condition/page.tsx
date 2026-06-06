"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  Scale,
  AlertTriangle,
  Ban,
  CreditCard,
  RefreshCcw,
  Globe,
  Mail,
} from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By accessing or using the services provided by CodeMyFyp IT & Software Solutions, you agree to comply with these Terms & Conditions.`,
    highlight: `Continued use of our website or services means you accept these terms fully.`,
  },
  {
    icon: Globe,
    title: "Services Offered",
    content: `• Final Year Projects (FYP)
• Custom Website Development
• Complete IT Services
• Job Updates & Preparation
• Research Work & Publication
• Expert Consultation`,
  },
  {
    icon: UserCheck,
    title: "User Responsibilities",
    content: `• Provide accurate and updated information
• Use services only for lawful purposes
• Respect intellectual property rights
• Avoid misuse of certifications, projects, or training materials
• Maintain confidentiality of account credentials`,
  },
  {
    icon: RefreshCcw,
    title: "Project & Internship Policy",
    content: `Final year projects, internships, and training programs are provided based on agreed timelines and requirements.

• Project delivery timelines depend on scope and complexity
• Internship certificates are issued after successful completion
• Users must complete assigned tasks and evaluations
• Any misuse of issued certificates may result in cancellation`,
  },
  {
    icon: CreditCard,
    title: "Payments & Refunds",
    content: `• Payments must be completed as per agreed terms
• Advance payments may be required for project work
• Refunds are subject to approval and service status
• Custom development services may have limited refund eligibility`,
  },
  {
    icon: ShieldCheck,
    title: "Intellectual Property",
    content: `All website content, branding, code, materials, graphics, and resources belong to CodeMyFyp IT & Software Solutions unless otherwise stated.`,
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: `We are not responsible for indirect, incidental, or consequential damages arising from the use of our services.`,
  },
  {
    icon: Globe,
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites or services. We are not responsible for their content, policies, or practices.`,
  },
  {
    icon: Ban,
    title: "Termination",
    content: `We reserve the right to suspend or terminate services if users violate these Terms & Conditions or misuse our platform.`,
  },
  {
    icon: FileText,
    title: "Privacy",
    content: `Your use of our services is also governed by our Privacy Policy.`,
  },
  {
    icon: RefreshCcw,
    title: "Changes to Terms",
    content: `We may update these Terms & Conditions at any time. Updated versions will be posted on this page.`,
  },
  {
    icon: Scale,
    title: "Governing Law",
    content: `These terms shall be governed by and interpreted in accordance with the laws of India.`,
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: `For any queries regarding these Terms & Conditions, please contact us through our official contact page.`,
  },
];

export default function TermsPage() {
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
              Terms and
              <span className="gradient-text"> Condition</span>
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Please read these terms carefully before using any services
              provided by CodeMyFYP IT & Software Solutions.
            </p>

            <p className="text-gray-500 mt-4 text-xs">
              Last updated: June 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Terms Content ─── */}
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
