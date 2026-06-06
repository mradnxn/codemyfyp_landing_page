"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  Globe,
  RefreshCcw,
  Clock,
  HelpCircle,
  FileEdit,
  Mail,
} from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: FileText,
    title: "Introduction",
    content: `At CodeMyFyp IT & Software Solutions, we value our clients and students. We strive to deliver high-quality code, training, and services. This Refund & Cancellation Policy outlines the conditions under which refunds are provided for our various offerings.`,
    highlight: `By making a payment for any service, you acknowledge that you have read and agreed to this policy.`,
  },
  {
    icon: FileEdit,
    title: "1. Final Year Projects (FYP) & Academic Services",
    content: `Because academic projects involve custom coding and dedicated developer time, our refund rules are strictly milestone-based:

• Before Work Begins: If you cancel your project request within 24 hours of payment and before our developers start the architecture or coding process, you are eligible for a 100% refund (minus any gateway transaction fees).
• During Development: If you cancel after development has started but before final delivery, refunds are calculated based on the percentage of work completed. If more than 50% of the project is finished, no refund will be issued.
• After Delivery: Once the final source code, documentation, or deployed link is handed over, no refunds will be processed. However, we provide comprehensive bug-fixing support as per the original project agreement.`,
  },
  {
    icon: Globe,
    title: "2. Custom Website & IT Service Development",
    content: `For commercial web development, UI/UX design, and IT infrastructure services:

• Advance/Booking Fees: Initial deposits used to block developer time and set up server environments are generally non-refundable after 3 business days.
• Milestone Cancellations: If a project is cancelled mid-way, the client will only be billed for the milestones completed up to the date of cancellation. Any surplus advance payment will be refunded.
• Change of Scope: Major changes in requirements after the project has started may incur additional charges and do not qualify the original payment for a refund.`,
  },
  {
    icon: RefreshCcw,
    title: "3. Internships & Training Programs",
    content: `We invest heavily in platform management and mentor allocation for our internship programs:

• Registration Fee: Internship registration fees are non-refundable once you have been granted access to our LMS platform, assignments, or task portals.
• Non-Completion: Failure to complete assigned tasks or dropping out of the internship does not entitle you to a refund.
• Certificate Revocation: If an intern is found submitting plagiarized work or violating our terms, they will be terminated from the program without a refund or certificate.`,
  },
  {
    icon: HelpCircle,
    title: "4. Expert Consultation & Job Preparation",
    content: `• Consultation call bookings can be cancelled or rescheduled up to 12 hours before the scheduled time for a full refund.
• No-shows (missing the scheduled call without prior notice) are not eligible for a refund.`,
  },
  {
    icon: Clock,
    title: "5. Processing Timeline",
    content: `Approved refunds will be processed back to the original method of payment (e.g., UPI, Credit Card, Bank Transfer) within 5 to 7 business days. Please note that your bank or payment gateway may take an additional few days to reflect the amount in your account.`,
  },
  {
    icon: CreditCard,
    title: "6. How to Request a Refund",
    content: `If your situation meets the criteria above, please initiate a refund request by contacting our support team. Be sure to include your order/project ID, payment receipt, and the reason for cancellation.

• Email: support@codemyfyp.com
• Contact Page: Visit our Contact Us section.`,
  },
  {
    icon: FileText,
    title: "7. Policy Modifications",
    content: `CodeMyFyp IT & Software Solutions reserves the right to modify this policy at any time without prior notice. Updates will be posted directly to this page.`,
  },
];

export default function RefundPage() {
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
              Refund & Cancellation <span className="gradient-text">Policy</span>
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Clear, transparent, and fair policies for all our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Refund Content ─── */}
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
