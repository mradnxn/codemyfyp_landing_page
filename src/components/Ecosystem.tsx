"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Ecosystem() {
  return (<section
    id="ecosystem"
    className="relative py-32 overflow-hidden"
  >
    {/* Background */}

    <div className="absolute inset-0 bg-[#050816]" />

    <div className="absolute left-[-200px] top-[300px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

    <div className="absolute right-[-200px] top-[200px] w-[700px] h-[700px] bg-violet-500/10 blur-[180px] rounded-full" />

    <div className="container-custom relative z-10">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="glass px-4 py-2 rounded-full text-sm">
          CodeMyFYP Ecosystem
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6">
          Everything You Need.
          <br />
          <span className="gradient-text">
            One Ecosystem.
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Technology, Education, Internships and Business
          Solutions working together in a single platform.
        </p>
      </motion.div>

      {/* Grid */}

      <div className="grid lg:grid-cols-12 gap-6">

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
          lg:col-span-12
          relative
          overflow-hidden
          rounded-2xl sm:rounded-3xl md:rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          min-h-[300px] sm:min-h-[350px] md:min-h-[400px]
          p-5 sm:p-6 md:p-8
        "
        >
          <div className="absolute -left-80 top-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full" />

          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-violet-500/20 blur-[120px] rounded-full" />

          <div className="relative z-20 max-w-lg">

            <span className="text-cyan-400 text-xs sm:text-sm uppercase tracking-[4px]">
              CodeMyFYP Ecosystem
            </span>

            <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-3 sm:mt-4 leading-[0.95]">
              Grow
              <br />
              Faster
              <br />
              <span className="gradient-text">
                With Technology
              </span>
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-4 sm:mt-6">
              Software Development, AI Automation,
              Internships, CRM and Academic Solutions
              in one connected ecosystem.
            </p>

          </div>

          {/* Visual Element Container (Graph + Metrics) */}
          <div className="absolute inset-0 w-[85%] left-[15%] h-full lg:left-[35%] lg:w-[65%] pointer-events-none">

            {/* Graph */}
            <div className="absolute inset-0 w-full h-full">
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="growth">
                    <stop offset="0%" stopColor="#14C8E8" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>

                {/* Desktop Curve */}
                <motion.path
                  d="M0 450 C150 430 250 380 350 340 C500 280 650 200 1000 40"
                  fill="none"
                  stroke="url(#growth)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5 }}
                  className="hidden lg:block"
                />

                {/* Mobile/Tablet Curve (Ends lower for a flatter slope) */}
                <motion.path
                  d="M0 450 C250 430, 700 320, 1000 200"
                  fill="none"
                  stroke="url(#growth)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5 }}
                  className="lg:hidden"
                />
              </svg>
            </div>

            {/* Metrics: Students Trained */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
              hidden sm:block
              absolute
              sm:top-10
              sm:right-32
              lg:right-20
              lg:top-10
              lg:left-auto
              glass
              rounded-2xl sm:rounded-3xl
              p-4 sm:p-5
              w-[130px] sm:w-[150px] lg:w-[200px]
              pointer-events-auto
            "
            >
              <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm">
                Students Trained
              </p>

              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mt-1 lg:mt-2">
                1000+
              </h4>
            </motion.div>

            {/* Metrics: Projects Delivered */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="
              hidden sm:block
              absolute
              sm:bottom-10
              sm:right-8
              lg:bottom-20
              lg:right-40
              glass
              rounded-2xl sm:rounded-3xl
              p-4 sm:p-5
              w-[130px] sm:w-[150px] lg:w-[200px]
              pointer-events-auto
            "
            >
              <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm">
                Projects Delivered
              </p>

              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mt-1 lg:mt-2">
                500+
              </h4>
            </motion.div>

          </div>

        </motion.div>

        {/* IT */}

        <motion.a
          href="https://it.codemyfyp.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -8 }}
          className="
          lg:col-span-6
          rounded-2xl sm:rounded-3xl
          border
          border-white/20
          hover:border-cyan-500/40
          transition-all
          duration-300
          min-h-[160px] sm:min-h-[200px] md:min-h-[240px]
          p-4 sm:p-5 md:p-6
          relative
          overflow-hidden
          group
          block
        "
        >
          <Image
            src="/it_services_mockup.webp"
            alt="IT Services"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/80 to-[#050816]/20 sm:bg-gradient-to-r sm:from-[#050816]/95 sm:via-[#050816]/75 sm:to-transparent z-[1]" />

          <div className="relative z-10 w-full sm:max-w-[65%]">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              CodeMy<span className="gradient-text">FYP</span> IT
            </h3>

            <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mt-2 leading-relaxed">
              Websites, Mobile Apps, AI Solutions,
              CRM Systems and Digital Marketing.
            </p>
          </div>
        </motion.a>

        {/* Academy */}

        <motion.a
          href="https://academic.codemyfyp.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -8 }}
          className="
          lg:col-span-6
          rounded-2xl sm:rounded-3xl
          border
          border-white/20
          hover:border-violet-500/40
          transition-all
          duration-300
          min-h-[160px] sm:min-h-[200px] md:min-h-[240px]
          p-4 sm:p-5 md:p-6
          relative
          overflow-hidden
          group
          block
        "
        >
          <Image
            src="/man-hero-bg-blur.webp"
            alt="Academy"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/80 to-[#050816]/20 sm:bg-gradient-to-r sm:from-[#050816]/95 sm:via-[#050816]/75 sm:to-transparent z-[1]" />

          <div className="relative z-10 w-full sm:max-w-[65%]">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              CodeMy<span className="gradient-text">FYP</span> Academy
            </h3>

            <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mt-2 leading-relaxed">
              Projects, Internships,
              Certifications and Placement Training.
            </p>
          </div>
        </motion.a>

        {/* InternTrack */}

        <motion.div
          whileHover={{ y: -8 }}
          className="
          lg:col-span-4
          rounded-2xl sm:rounded-3xl
          border
          border-white/20
          hover:border-cyan-500/40
          transition-all
          duration-300
          min-h-[160px] sm:min-h-[200px] md:min-h-[240px]
          p-4 sm:p-5 md:p-6
          relative
          overflow-hidden
          group
        "
        >
          <Image
            src="/interntrack_mockup.webp"
            alt="InternTrack"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/80 to-[#050816]/20 sm:bg-gradient-to-r sm:from-[#050816]/95 sm:via-[#050816]/75 sm:to-transparent z-[1]" />

          <div className="relative z-10 w-full sm:max-w-[85%]">
            <span className="glass px-2 py-0.5 rounded-full text-[9px] text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block">
              Featured
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              Intern<span className="gradient-text">Track</span>
            </h3>

            <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mt-2 leading-relaxed">
              Internship Management Platform
            </p>
          </div>
        </motion.div>

        {/* CRM */}

        <motion.div
          whileHover={{ y: -8 }}
          className="
          lg:col-span-8
          rounded-2xl sm:rounded-3xl
          border
          border-white/20
          hover:border-purple-500/40
          transition-all
          duration-300
          min-h-[160px] sm:min-h-[200px] md:min-h-[240px]
          p-4 sm:p-5 md:p-6
          relative
          overflow-hidden
          group
        "
        >
          <Image
            src="/crm_mockup.webp"
            alt="CodeMyFYP CRM"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/80 to-[#050816]/20 sm:bg-gradient-to-r sm:from-[#050816]/95 sm:via-[#050816]/75 sm:to-transparent z-[1]" />

          <div className="relative z-10 w-full sm:max-w-[70%]">
            <span className="glass px-2 py-0.5 rounded-full text-[9px] text-purple-400 font-semibold tracking-wider uppercase mb-2 inline-block">
              Coming Soon
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              CodeMy<span className="gradient-text">FYP</span> CRM
            </h3>

            <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mt-2 leading-relaxed">
              Lead Tracking, Sales Automation and
              Customer Relationship Management.
            </p>
          </div>
        </motion.div>

      </div>

    </div>
  </section>


  );
}
