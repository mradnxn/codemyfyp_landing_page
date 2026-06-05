"use client";

import {
Globe,
GraduationCap,
Brain,
Briefcase,
Megaphone,
Code2,
} from "lucide-react";

const services = [
{
icon: Globe,
title: "IT Services",
description:
"Web applications, mobile apps, SaaS platforms, CRM systems, cloud deployment and enterprise solutions.",
},
{
icon: GraduationCap,
title: "Academic Services",
description:
"MCA, BCA, BTech projects, research support, project documentation and academic mentoring.",
},
{
icon: Brain,
title: "AI Solutions",
description:
"AI agents, chatbots, automation workflows, recommendation systems and custom AI integrations.",
},
{
icon: Briefcase,
title: "Internships",
description:
"Industry-focused internship programs with real-world projects and mentor guidance.",
},
{
icon: Megaphone,
title: "Digital Marketing",
description:
"SEO, social media marketing, performance campaigns, branding and content marketing.",
},
{
icon: Code2,
title: "Career Development",
description:
"Resume building, mock interviews, placement training and career acceleration programs.",
},
];

export default function Services() {
return ( <section
   id="services"
   className="section-padding relative"
 > <div className="container-custom">

    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

      <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
        Services
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">
        Solutions Built For
        <br />

        <span className="gradient-text">
          Growth & Innovation
        </span>
      </h2>

      <p className="text-gray-400 mt-4 text-sm sm:text-base">
        From software development and AI
        solutions to academic excellence and
        career support, CodeMyFYP helps
        individuals and businesses succeed.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">

      {services.map((service, index) => {
        const Icon = service.icon;

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
              {service.title}
            </h3>

            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
              {service.description}
            </p>

            <button className="mt-3 text-cyan-400 text-[11px] sm:text-xs font-medium">
              Learn More →
            </button>
          </div>
        );
      })}

    </div>

  </div>
</section>


);
}
