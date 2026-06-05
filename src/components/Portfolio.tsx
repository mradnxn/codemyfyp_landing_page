"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
{
category: "IT Services",
title: "Business Websites & Web Applications",
description:
"Modern responsive websites, SaaS platforms and enterprise applications built for scalability.",
},
{
category: "Academic Projects",
title: "Student Innovation Projects",
description:
"MCA, BCA and engineering projects with real-world implementations and documentation.",
},
{
category: "InternTrack",
title: "Internship Management Platform",
description:
"A complete ecosystem for internship tracking, mentorship and career readiness.",
},
{
category: "AI Solutions",
title: "Automation & AI Systems",
description:
"AI agents, chatbots, automation workflows and intelligent business solutions.",
},
];

export default function Portfolio() {
return ( <section
   id="portfolio"
   className="section-padding relative"
 > <div className="container-custom">

    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

      <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
        Portfolio
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">
        Transforming Ideas
        <br />

        <span className="gradient-text">
          Into Reality
        </span>
      </h2>

      <p className="text-gray-400 mt-4 text-sm sm:text-base">
        Explore a selection of projects,
        solutions and products developed
        through the CodeMyFYP ecosystem.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">

      {projects.map((project, index) => (
        <div
          key={index}
          className="glass rounded-xl sm:rounded-2xl overflow-hidden card-hover group"
        >

          <div className="h-[110px] sm:h-[140px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 flex items-center justify-center">

            <h3 className="text-base sm:text-lg font-bold text-center px-4 leading-tight">
              {project.title}
            </h3>

          </div>

          <div className="p-3.5 sm:p-4">

            <span className="text-cyan-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
              {project.category}
            </span>

            <p className="text-gray-400 text-[11px] sm:text-xs mt-2 leading-relaxed">
              {project.description}
            </p>

            <button className="mt-3 flex items-center gap-1 text-cyan-400 font-medium text-[11px] sm:text-xs">
              View Details

              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>


);
}
