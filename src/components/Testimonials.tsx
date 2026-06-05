"use client";

import { Star } from "lucide-react";

const testimonials = [
{
name: "Rahul K",
role: "MCA Student",
feedback:
"CodeMyFYP helped me complete my academic project and gain practical experience through internships. The support was excellent.",
},
{
name: "Priya S",
role: "Startup Founder",
feedback:
"Their IT team delivered our website and CRM solution on time. Professional communication and quality development.",
},
{
name: "Arjun M",
role: "Software Engineer",
feedback:
"The internship and career guidance programs helped me build confidence and secure opportunities in the tech industry.",
},
];

export default function Testimonials() {
return ( <section
   id="testimonials"
   className="section-padding relative"
 > <div className="container-custom">

    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">

      <span className="glass px-3 py-1.5 rounded-full text-xs font-medium">
        Testimonials
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">
        Trusted By
        <br />

        <span className="gradient-text">
          Students & Businesses
        </span>
      </h2>

      <p className="text-gray-400 mt-4 text-sm sm:text-base">
        Real experiences from people who
        have worked, learned and grown
        with CodeMyFYP.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">

      {testimonials.map((item, index) => (
        <div
          key={index}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 card-hover"
        >

          <div className="flex gap-1 mb-3">

            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill="currentColor"
                className="text-yellow-400 sm:w-3.5 sm:h-3.5"
              />
            ))}

          </div>

          <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4">
            "{item.feedback}"
          </p>

          <div>
            <h4 className="font-semibold text-xs sm:text-sm">
              {item.name}
            </h4>

            <p className="text-gray-400 text-[9px] sm:text-[10px]">
              {item.role}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>


);
}
