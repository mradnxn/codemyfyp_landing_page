import { ArrowRight, Rocket, BriefcaseBusiness, Check } from "lucide-react";

export default function Products() {
  return (
    <section
      id="products"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="glass px-4 py-2 rounded-full text-sm">
            Products
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Built To Scale
            <br />
            <span className="gradient-text">
              Beyond Services
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            CodeMyFYP is evolving into a complete
            ecosystem with innovative products
            designed for education, careers,
            startups and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* InternTrack */}
          <div className="group relative rounded-[20px] sm:rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 sm:p-6 md:p-8 overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(20,200,232,0.15)] transition-all duration-500">
            {/* Tech grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-45" />
            
            {/* Blur sphere background */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <Rocket
                  size={26}
                  className="text-cyan-400"
                />
              </div>

              <span className="text-cyan-400 text-xs uppercase tracking-wider font-semibold">
                Featured Product
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mt-1.5">
                InternTrack
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed text-xs sm:text-sm">
                A next-generation internship
                management platform connecting
                students, mentors, institutions,
                and organizations through a
                centralized ecosystem.
              </p>

              <ul className="mt-4 space-y-2.5 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Internship Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Student Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Mentor Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Progress Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Placement Readiness</span>
                </li>
              </ul>

              <button className="primary-btn mt-5 flex items-center gap-2 group/btn hover:scale-105 active:scale-95 transition-all text-xs py-2.5 px-5">
                Explore InternTrack
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CRM */}
          <div className="group relative rounded-[20px] sm:rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 sm:p-6 md:p-8 overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500">
            {/* Tech grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-45" />

            {/* Blur sphere background */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <BriefcaseBusiness
                  size={26}
                  className="text-purple-400"
                />
              </div>

              <span className="text-purple-400 text-xs uppercase tracking-wider font-semibold">
                Coming Soon
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mt-1.5">
                CodeMyFYP CRM
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed text-xs sm:text-sm">
                A powerful customer relationship
                management platform designed for
                startups, agencies and growing
                businesses to manage leads,
                customers and operations.
              </p>

              <ul className="mt-4 space-y-2.5 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Lead Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Sales Pipeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Automation Workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Analytics Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 flex-shrink-0">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>Team Collaboration</span>
                </li>
              </ul>

              <button className="mt-5 py-2.5 px-5 rounded-full border border-purple-500/30 bg-purple-500/5 hover:bg-purple-600 hover:text-white hover:border-purple-600 text-purple-300 font-semibold shadow-md shadow-purple-500/5 transition-all duration-300 hover:scale-105 active:scale-95 text-xs">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
