"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroV2() {
  return (<section className="relative min-h-screen overflow-hidden">


    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
      style={{
        backgroundImage: "url('/hero-bg.webp')",
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/0" />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/70 to-[#050816]/90" />

    {/* Blur Glow */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[150px] rounded-full" />

    {/* Content */}
    <div className="container-custom relative z-20 pt-40">

      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-violet-500/[0.07] to-cyan-500/[0.07] border border-cyan-500/25 backdrop-blur-xl shadow-[0_0_20px_rgba(20,200,232,0.05)] hover:shadow-[0_0_35px_rgba(20,200,232,0.18)] hover:border-cyan-400/40 transition-all duration-500 group mb-8 cursor-pointer select-none"
        >
          {/* Pulsing Active indicator */}
          {/* <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(20,200,232,0.8)]"></span>
          </span> */}

          {/* Futuristic Sparkles Icon */}
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />

          <span className="text-xs sm:text-sm font-medium tracking-wide text-cyan-100/90 group-hover:text-white transition-colors duration-300">
            India's Technology & Education Ecosystem
          </span>

          {/* Slim divider */}
          {/* <span className="h-3.5 w-px bg-white/20" />
        
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
          Ecosystem
        </span> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          max-w-4xl
          mx-auto
          text-4xl
          sm:text-5xl
          md:text-7xl
          lg:text-[72px]
          font-bold
          leading-[0.95]
          tracking-tight
        "
        >
          Build Technology.
          <br />
          Launch Careers.
          <br />
          <span className="gradient-text">
            Scale Business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
          text-base
          md:text-lg
          text-gray-300
          max-w-2xl
          mx-auto
          mt-8
        "
        >
          Software Development, Academic Innovation,
          Internships, AI Solutions and Business Growth —
          all in one ecosystem.
        </motion.p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <button className="primary-btn flex items-center gap-2">
            Explore Ecosystem
            <ArrowRight size={18} />
          </button>

          <button className="secondary-btn">
            Book Consultation
          </button>

        </div>

      </div>

      {/* Floating Cards */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="
        hidden xl:block
        absolute
        
        left-6 top-[48%]
        glass
        rounded-3xl
        p-5
        w-[170px]
      "
      >
        <p className="text-gray-400 text-sm">
          Students Trained
        </p>

        <h3 className="text-4xl font-bold gradient-text mt-2">
          1000+
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="
        hidden xl:block
        absolute
        right-6 top-[32%]
        glass
        rounded-3xl
        p-5
        w-[220px]
      "
      >
        <p className="text-gray-400 text-sm">
          Projects Delivered
        </p>

        <h3 className="text-4xl font-bold gradient-text mt-2">
          500+
        </h3>
      </motion.div>



    </div>
  </section>


  );
}
