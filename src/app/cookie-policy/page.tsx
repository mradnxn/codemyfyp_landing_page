"use client";

import { motion } from "framer-motion";
import {
  Cookie,
  Info,
  Settings,
  ShieldCheck,
  Globe,
  Mail,
  RefreshCcw,
  Activity,
} from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: Cookie,
    title: "Introduction",
    content: `At CodeMyFyp IT & Software Solutions, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any CodeMyFyp product or service that links to this policy or incorporates it by reference.`,
    highlight: `By continuing to visit or use our website, you are agreeing to the use of cookies and similar technologies for the purposes we describe in this policy.`,
  },
  {
    icon: Info,
    title: "1. What Are Cookies?",
    content: `Cookies are small text files that are placed on your device (computer, smartphone, or other electronic device) when you visit our website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.

Cookies allow us to recognize your device and remember your preferences, providing you with a more personalized and seamless experience when you navigate our platforms.`,
  },
  {
    icon: Settings,
    title: "2. How We Use Cookies",
    content: `We use cookies for a variety of reasons, including:

• Essential Functions: To enable basic website operations like secure login and page navigation.
• Personalization: To remember your settings and preferences (e.g., dark mode, language choices).
• Analytics: To understand how visitors interact with our website, helping us improve our services and content.
• Security: To detect malicious activities and protect our platform and users from security threats.`,
  },
  {
    icon: ShieldCheck,
    title: "3. Types of Cookies We Use",
    content: `• Strictly Necessary Cookies: Essential for the website to function properly. They cannot be switched off in our systems.
• Performance & Analytics Cookies: Allow us to count visits and traffic sources so we can measure and improve the performance of our site.
• Functionality Cookies: Enable the website to provide enhanced functionality and personalization based on your interactions.
• Targeting/Advertising Cookies: May be set through our site by our advertising partners to build a profile of your interests.`,
  },
  {
    icon: Globe,
    title: "4. Third-Party Cookies",
    content: `In some special cases, we also use cookies provided by trusted third parties. For example:

• Google Analytics: Helps us understand how you use the site and ways we can improve your experience.
• Payment Gateways: Secure session cookies to handle transactions safely during project or internship enrollments.
• Social Media: Buttons or plugins on this site that allow you to connect with your social network in various ways may set cookies through our site.`,
  },
  {
    icon: Activity,
    title: "5. Managing Your Cookie Preferences",
    content: `You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in our Cookie Consent Banner or by modifying your web browser controls.

Please note that if you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website may be restricted.`,
  },
  {
    icon: RefreshCcw,
    title: "6. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies.`,
  },
  {
    icon: Mail,
    title: "7. Contact Us",
    content: `If you have any questions about our use of cookies or other technologies, please contact us.

• Email: support@codemyfyp.com
• Phone: +91 9742658379`,
  },
];

export default function CookiePolicyPage() {
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
              Cookie <span className="gradient-text">Policy</span>
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Understanding how we use cookies to improve your experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Cookie Content ─── */}
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

                      {/* @ts-ignore */}
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
