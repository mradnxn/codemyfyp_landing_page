"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does CodeMyFYP provide?",
    answer:
      "CodeMyFYP offers Software Development, AI Solutions, Academic Projects, Internship Programs, Digital Marketing and Business Automation Services.",
  },
  {
    question: "How can I access IT Services?",
    answer:
      "You can access our technology division through CodeMyFYP IT for Websites, Mobile Apps, CRM Systems, AI Tools and Cloud Infrastructure.",
  },
  {
    question: "Do you provide academic projects?",
    answer:
      "Yes. We support MCA, BCA, BTech and Diploma projects with implementation, documentation and mentoring.",
  },
  {
    question: "What is InternTrack?",
    answer:
      "InternTrack is our internship management platform designed for students, mentors and organizations.",
  },
  {
    question: "When will CodeMyFYP CRM launch?",
    answer:
      "CodeMyFYP CRM is currently under development and will launch with lead management, automation and analytics features.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. Through our Academy and Internship Programs we help students with career guidance, resume building and placement preparation.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="
        relative
        py-12 sm:py-16 md:py-20
        overflow-hidden
        bg-[#f7f7f8]
        text-slate-900
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-pink-200/30 blur-[160px] rounded-full" />

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-200/30 blur-[160px] rounded-full" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Side */}

          <div>

            <div
              className="
                inline-flex
                px-5
                py-2.5
                rounded-full
                border
                border-slate-200
                bg-white
                text-xs sm:text-sm
                font-medium
              "
            >
              FAQ
            </div>

            <h2
              className="
                mt-6 sm:mt-8
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-[0.95]
                tracking-tight
              "
            >
              Common
              <br />
              questions
              <br />
              about
              <br />
              CodeMyFYP
            </h2>

          </div>

          {/* Right Side */}

          <div className="space-y-3 sm:space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-lg sm:rounded-xl
                  overflow-hidden
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="
                    w-full
                    px-3.5 sm:px-5
                    py-3 sm:py-4
                    flex
                    items-center
                    justify-between
                    text-left
                    gap-4
                  "
                >
                  <span className="font-semibold text-xs sm:text-sm md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      transition-all duration-300 flex-shrink-0
                      w-4 h-4 sm:w-5 sm:h-5
                      ${
                        open === index
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <AnimatePresence>

                  {open === index && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          px-3.5 sm:px-5
                          pb-3 sm:pb-4
                          text-slate-600
                          text-[11px] sm:text-xs md:text-sm
                          leading-relaxed
                        "
                      >
                        {faq.answer}
                      </div>
                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}