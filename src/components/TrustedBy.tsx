"use client";

import { motion } from "framer-motion";

const stats = [
{
number: "1000+",
label: "Students Supported",
},
{
number: "500+",
label: "Projects Delivered",
},
{
number: "50+",
label: "Business Clients",
},
{
number: "25+",
label: "Partner Institutions",
},
];

export default function TrustedBy() {
return ( <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />

  <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-violet-500/10 blur-[150px] rounded-full" />

  <div className="container-custom relative z-10">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mb-10 sm:mb-12"
    >
      <span className="text-gray-400 uppercase tracking-[4px] text-xs">
        Trusted Across India
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
        Powering Students,
        <br />

        <span className="gradient-text">
          Startups & Businesses
        </span>
      </h2>
    </motion.div>

    {/* Stats Grid */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">

      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            glass
            rounded-xl sm:rounded-2xl
            p-3.5 sm:p-5
            text-center
          "
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text whitespace-nowrap">
            {item.number}
          </h3>

          <p className="text-gray-400 mt-1.5 text-[10px] sm:text-xs md:text-sm">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>

    {/* Logo Marquee */}

    <div className="mt-12 overflow-hidden">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-4 sm:gap-6 whitespace-nowrap"
      >
        {[
          "Startups",
          "Universities",
          "Businesses",
          "Institutions",
          "InternTrack",
          "CodeMyFYP IT",
          "Academy",
          "CRM",
          "Startups",
          "Universities",
          "Businesses",
          "Institutions",
        ].map((item, index) => (
          <div
            key={index}
            className="
              glass
              px-4
              py-2
              rounded-full
              text-[10px]
              sm:text-xs
              text-gray-300
            "
          >
            {item}
          </div>
        ))}
      </motion.div>

    </div>

  </div>

</section>


);
}
