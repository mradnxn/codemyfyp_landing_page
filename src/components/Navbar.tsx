"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const lightSections = ["faq", "cta"];
    const observers = lightSections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsLightMode(true);
          } else {
            const anyLightIntersecting = lightSections.some((otherId) => {
              if (otherId === id) return false;
              const otherEl = document.getElementById(otherId);
              if (!otherEl) return false;
              const rect = otherEl.getBoundingClientRect();
              return rect.top <= 80 && rect.bottom >= 0;
            });
            if (!anyLightIntersecting) {
              setIsLightMode(false);
            }
          }
        },
        {
          rootMargin: "0px 0px -90% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((item) => {
        if (item) {
          item.observer.unobserve(item.el);
        }
      });
    };
  }, []);

  useEffect(() => {
    const sections = ["ecosystem", "services", "products", "portfolio", "contact"];
    
    const handleScrollFallback = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }
    };
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-80px 0px -60% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    window.addEventListener("scroll", handleScrollFallback);

    return () => {
      window.removeEventListener("scroll", handleScrollFallback);
      observers.forEach((item) => {
        if (item) {
          item.observer.unobserve(item.el);
        }
      });
    };
  }, []);

  return (
    <header className="fixed top-3 left-0 w-full z-[100]">
      <div className="px-4 sm:px-6">
        <div
          className={`
            mt-4
            mx-auto
            w-full
            max-w-3xl
            h-[60px]
            backdrop-blur-xl
            rounded-2xl
            px-5 md:px-8
            flex
            items-center
            justify-between
            shadow-xl
            transition-all duration-300
            ${isLightMode 
              ? "bg-[#050816]/90 border border-white/10" 
              : "bg-white/10 border border-white/15"
            }
          `}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <Image
              src="/logo.webp"
              alt="CodeMyFYP"
              width={160}
              height={44}
              className="h-9 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-6
              text-sm
              font-medium
            "
          >
            <a
              href="#ecosystem"
              className={`transition-colors duration-300 ${
                activeSection === "ecosystem" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              Ecosystem
            </a>

            <a
              href="#services"
              className={`transition-colors duration-300 ${
                activeSection === "services" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              Services
            </a>

            <a
              href="#products"
              className={`transition-colors duration-300 ${
                activeSection === "products" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              Products
            </a>

            <a
              href="#portfolio"
              className={`transition-colors duration-300 ${
                activeSection === "portfolio" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className={`transition-colors duration-300 ${
                activeSection === "contact" ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                hidden
                md:flex

                items-center
                justify-center

                px-4
                h-8

                rounded-full

                bg-gradient-to-r
                from-cyan-500
                to-blue-600

                text-sm
                font-semibold

                hover:scale-105
                transition
              "
            >
              Get Started
            </a>

            <div className="lg:hidden">
              <MobileMenu activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
