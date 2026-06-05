"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuLinks = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  if (!mounted) {
    return (
      <button
        className="text-white p-2.5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center"
        aria-label="Open Menu"
      >
        <Menu size={20} />
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-cyan-400 transition p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 duration-200 flex items-center justify-center relative z-50"
        aria-label={open ? "Close Menu" : "Open Menu"}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[88px] left-0 right-0 mx-auto w-[calc(100vw-32px)] max-w-3xl rounded-2xl glass p-5 z-[99] shadow-2xl flex flex-col gap-4"
            style={{ backgroundColor: "rgba(5, 8, 22, 0.96)" }}
          >
            {/* Glowing Background Orbs inside the dropdown */}
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-violet-500/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Navigation Links */}
            <nav className="relative z-10 flex flex-col gap-1">
              {menuLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 + 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl border transition-all duration-300 group
                        ${isActive 
                          ? "border-white/15 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 text-cyan-400" 
                          : "border-transparent hover:border-white/10 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-violet-500/10 text-gray-300 hover:text-cyan-400"
                        }
                      `}
                    >
                      <span className={`text-base font-semibold tracking-wide transform transition-transform duration-300
                        ${isActive ? "translate-x-1.5" : "group-hover:translate-x-1.5"}
                      `}>
                        {link.label}
                      </span>
                      <ArrowRight 
                        size={16} 
                        className={`transition-all duration-300 text-cyan-400
                          ${isActive ? "opacity-100 translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}
                        `} 
                      />
                    </a>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
