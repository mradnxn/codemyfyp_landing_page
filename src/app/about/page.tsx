"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Lightbulb,
  ShieldCheck,
  Star,
  Users,
  Heart,
  Flame,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly exploring new ideas and technologies to deliver cutting-edge solutions.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency and accountability in every project and every interaction.",
    color: "violet",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "Delivering excellence in every line of code, every design, and every deliverable.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working as a unified team with clients to achieve shared goals and success.",
    color: "violet",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Prioritizing client success and satisfaction above everything else.",
    color: "cyan",
  },
  {
    icon: Flame,
    title: "Passion",
    description:
      "Driven by an unwavering passion to build impactful technology solutions.",
    color: "violet",
  },
];

const stats = [
  { number: "1000+", label: "Students Empowered" },
  { number: "500+", label: "Projects Delivered" },
  { number: "50+", label: "Business Clients" },
  { number: "25+", label: "Partner Institutions" },
];

export default function AboutPage() {
  return (
    <main>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/about_hero_bg.webp"
          alt="About CodeMyFYP"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/80 via-[#050816]/60 to-[#050816]" />

        {/* Glow Orbs */}
        <div className="absolute left-[-100px] top-[100px] w-[400px] h-[400px] bg-cyan-500/15 blur-[150px] rounded-full" />
        <div className="absolute right-[-100px] bottom-[50px] w-[400px] h-[400px] bg-violet-500/15 blur-[150px] rounded-full" />

        <div className="container-custom relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
              About CodeMyFYP
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 leading-[1.1]">
              Building The Future
              <br />
              <span className="gradient-text">
                Of Technology & Education
              </span>
            </h1>

            <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-xl leading-relaxed">
              We are a passionate team of innovators, creators, and
              problem-solvers dedicated to bridging the gap between
              great ideas and flawless execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Story Section ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-[-200px] top-[100px] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/about_team.webp"
                alt="CodeMyFYP Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
                Our Story
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
                From Idea To
                <span className="gradient-text"> Ecosystem</span>
              </h2>

              <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
                Founded on the principle of bridging the gap between great ideas and flawless execution, our journey began with a simple goal: to provide exceptional software solutions that drive growth.
              </p>

              <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                Today, we partner with startups and established enterprises alike, delivering custom software, mobile apps, and web platforms that not only meet but exceed expectations.
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href="#values"
                  className="primary-btn text-xs py-2.5 px-5 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  Our Values
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute left-[-200px] bottom-[50px] w-[500px] h-[500px] bg-violet-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
              What Drives Us
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
              Our Purpose &
              <span className="gradient-text"> Direction</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  <Target size={22} className="text-cyan-400" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Our Mission
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  To empower businesses and individuals by crafting
                  high-quality, innovative, and scalable technology
                  solutions. We are committed to translating complex
                  challenges into user-centric digital products that
                  deliver tangible value and drive success.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-violet-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  <Eye size={22} className="text-violet-400" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Our Vision
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  To be a globally recognized leader in digital innovation,
                  known for our unwavering commitment to quality, creativity,
                  and client-centricity. We aspire to build a future where
                  technology seamlessly integrates with everyday life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section id="values" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-[-150px] top-[200px] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
              What We Stand For
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
              Our Core
              <span className="gradient-text"> Values</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              These principles guide every decision we make and every
              solution we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const isCyan = value.color === "cyan";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`glass rounded-xl p-5 card-hover group hover:border-${isCyan ? "cyan" : "violet"}-500/30 transition-all duration-500`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${isCyan
                        ? "bg-cyan-500/10 border-cyan-500/20"
                        : "bg-violet-500/10 border-violet-500/20"
                      } border flex items-center justify-center mb-4 group-hover:scale-105 transition-all`}
                  >
                    <Icon
                      size={18}
                      className={
                        isCyan ? "text-cyan-400" : "text-violet-400"
                      }
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Impact Stats ─── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute left-[-150px] top-[100px] w-[500px] h-[500px] bg-violet-500/5 blur-[180px] rounded-full" />
        <div className="absolute right-[-150px] bottom-[100px] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
              Our Impact
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
              Numbers That
              <span className="gradient-text"> Speak</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              A glimpse of our growing ecosystem and the impact we have
              created across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-4 sm:p-5 text-center"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                  {item.number}
                </h3>

                <p className="text-gray-400 mt-1.5 text-[10px] sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
