"use client";

import {
  ShieldCheck,
  Brain,
  Rocket,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Industry Ready Solutions",
    description:
      "We build scalable software, AI solutions and digital products designed for real-world impact.",
  },
  {
    icon: Brain,
    title: "Innovation Driven",
    description:
      "Leveraging AI, automation and modern technologies to accelerate growth and productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "From academic guidance to enterprise development, our team delivers quality at every stage.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Continuous support, consultation and maintenance to ensure long-term success.",
  },
];

export default function WhyChooseUs() {
  return (<section className="section-padding relative"> <div className="container-custom">

    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

      <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
        Why CodeMyFYP
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">
        More Than A Service
        <br />
        <span className="gradient-text">
          We Build Success
        </span>
      </h2>

      <p className="text-gray-400 mt-4 text-sm sm:text-base">
        Our ecosystem combines technology,
        education and innovation to help
        students, startups and businesses
        achieve measurable results.
      </p>

    </div>

    {/* Stats */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">

      <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
          1000+
        </h3>

        <p className="text-gray-400 mt-1 text-[10px] sm:text-xs">
          Students
        </p>
      </div>

      <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
          500+
        </h3>

        <p className="text-gray-400 mt-1 text-[10px] sm:text-xs">
          Projects
        </p>
      </div>

      <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
          50+
        </h3>

        <p className="text-gray-400 mt-1 text-[10px] sm:text-xs">
          Clients
        </p>
      </div>

      <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
          24/7
        </h3>

        <p className="text-gray-400 mt-1 text-[10px] sm:text-xs">
          Support
        </p>
      </div>

    </div>

    {/* Features */}

    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">

      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 card-hover"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 sm:mb-4">
              <Icon
                size={16}
                className="text-cyan-400 sm:w-4 sm:h-4"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}

    </div>

  </div>
  </section>


  );
}
