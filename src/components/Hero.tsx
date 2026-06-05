"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
return ( <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden"> <div className="glow-orb glow-blue w-[400px] h-[400px] top-10 left-0 animate-glow" />

  <div className="glow-orb glow-purple w-[400px] h-[400px] bottom-0 right-0 animate-glow" />

  <div className="container-custom relative z-10 pt-40">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
          <Sparkles size={16} />
          <span className="text-sm">
            Technology • Education • Innovation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Build.
          <br />
          Learn.
          <br />
          <span className="gradient-text">
            Launch.
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl">
          CodeMyFYP is a unified ecosystem delivering software development,
          AI-powered solutions, academic innovation, internships, and
          career-focused programs for students, startups, and businesses.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn flex items-center gap-2"
          >
            Explore Ecosystem
            <ArrowRight size={18} />
          </motion.button>

          <button className="secondary-btn">
            Book Consultation
          </button>
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{
          opacity: 0,
          scale: 0.8,
          x: 100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <div className="glass rounded-[32px] p-8 shadow-glow animate-float">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg">
              CodeMyFYP Ecosystem
            </h3>

            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5 card-hover">
              <h4 className="font-semibold mb-2">
                IT Services
              </h4>

              <p className="text-sm text-gray-400">
                Web, Mobile, AI & Cloud
              </p>
            </div>

            <div className="glass rounded-2xl p-5 card-hover">
              <h4 className="font-semibold mb-2">
                Academy
              </h4>

              <p className="text-sm text-gray-400">
                Projects & Internships
              </p>
            </div>

            <div className="glass rounded-2xl p-5 card-hover">
              <h4 className="font-semibold mb-2">
                InternTrack
              </h4>

              <p className="text-sm text-gray-400">
                Internship Platform
              </p>
            </div>

            <div className="glass rounded-2xl p-5 card-hover">
              <h4 className="font-semibold mb-2">
                CRM
              </h4>

              <p className="text-sm text-gray-400">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>


);
}
