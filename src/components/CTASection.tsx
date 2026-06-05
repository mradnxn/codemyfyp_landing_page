"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#fafafa]">
      
      {/* Top half: Graphic container with Radial Glow */}
      <div className="relative pt-20 pb-2 md:pt-28 md:pb-6 flex justify-center items-center overflow-hidden">
        {/* Soft violet/fuchsia radial glow backdrop exactly as in the reference image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-violet-300/25 via-fuchsia-300/20 to-cyan-300/15 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />
        
        {/* Futuristic Hand Image */}
        <div className="relative z-10">
          <Image
            src="/cta_hand.webp"
            alt="CodeMyFYP Future Gateway"
            width={700}
            height={700}
            priority
            className="
              w-[240px]
              sm:w-[320px]
              md:w-[420px]
              lg:w-[480px]
              h-auto
              object-contain
              relative
              z-10
            "
          />
        </div>
      </div>

      {/* Convex Curved Divider with Gradient Stroke */}
      <div className="relative w-full overflow-hidden leading-none z-20 -mt-10 md:-mt-20">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[120px]"
        >
          {/* Fills the bottom part below the curve with white */}
          <path d="M0 100 C 360 30, 1080 30, 1440 100 L 1440 120 L 0 120 Z" fill="#ffffff" />
          
          {/* Sleek, glowing gradient stroke along the convex curve */}
          <path d="M0 100 C 360 30, 1080 30, 1440 100" stroke="url(#curve-gradient)" strokeWidth="2" fill="none" opacity="0.5" />
          
          <defs>
            <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14c8e8" stopOpacity="0" />
              <stop offset="25%" stopColor="#14c8e8" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
              <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#14c8e8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom half: Text & Action Content */}
      <div className="relative bg-white z-10 text-center pb-24 md:pb-36 -mt-px">
        <div className="container-custom">
          <h2
            className="
              text-slate-900
              font-extrabold
              tracking-tight
              leading-[1.1]
              mx-auto
              max-w-4xl
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Step Into The Future
            <br />
            Of Technology & Innovation
          </h2>

          <p
            className="
              text-slate-500
              max-w-2xl
              mx-auto
              mt-6
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Join thousands of students, startups, and businesses using CodeMyFYP 
            to build state-of-the-art software, launch successful careers, and scale exponential growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href="#contact"
              className="
                h-14
                px-8
                rounded-full
                bg-[#7c3aed]
                hover:bg-[#6d28d9]
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                shadow-lg
                shadow-purple-500/20
                hover:shadow-purple-500/35
                hover:-translate-y-0.5
                transition-all
                duration-300
                w-full
                sm:w-auto
              "
            >
              <Sparkles size={18} className="animate-pulse" />
              Get Started
            </a>

            <a
              href="https://it.codemyfyp.com"
              className="
                h-14
                px-8
                rounded-full
                border
                border-slate-200
                bg-white
                hover:bg-slate-50
                text-slate-700
                hover:text-slate-900
                font-semibold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                w-full
                sm:w-auto
              "
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}