"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const renderFooterLink = (label: string, href: string) => (
    <li>
      <Link
        href={href}
        className="group relative flex items-center text-gray-400 hover:text-white transition-all duration-300 select-none cursor-pointer pl-0 hover:pl-2.5"
      >
        <span className="absolute left-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 font-bold">
          &gt;
        </span>
        <span className="group-hover:font-bold transition-all duration-300 whitespace-nowrap">
          {label}
        </span>
      </Link>
    </li>
  );

  return (<footer className="relative overflow-hidden pt-24 pb-10 border-t border-white/10">


    {/* Background */}

    <div className="absolute inset-0 bg-[#050816]" />

    <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

    <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-violet-500/5 blur-[180px] rounded-full" />

    {/* Watermark */}

    <h2
      className="
      absolute
      bottom-[-120px]
      left-1/2
      -translate-x-1/2
      text-[100px]
      sm:text-[140px]
      md:text-[220px]
      font-bold
      text-white/[0.03]
      select-none
      whitespace-nowrap
      pointer-events-none
    "
    >
      CodeMyFYP
    </h2>

    <div className="container-custom relative z-10">

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

        {/* Brand */}

        <div className="sm:col-span-2 lg:col-span-2">

          <Link href="/" className="inline-block hover:opacity-90 transition mb-2">
            <Image
              src="/logo.webp"
              alt="CodeMyFYP"
              width={140}
              height={36}
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          <p className="text-gray-400 mt-5 max-w-sm">
            Software Development, Academic Innovation,
            Internships, AI Solutions and Business Growth
            — all in one ecosystem.
          </p>

          <p className="text-gray-500 mt-6">
            Made with ❤️ in India
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="glass p-3 rounded-xl hover:scale-110 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/codemyfyp"
              className="glass p-3 rounded-xl hover:scale-110 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.youtube.com/@codemyfyp"
              className="glass p-3 rounded-xl hover:scale-110 transition"
            >
              <Youtube size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/codemyfyp"
              className="glass p-3 rounded-xl hover:scale-110 transition"
              target="_blank"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://chat.whatsapp.com/CAeLaCwCcAm3IBN1IaprWT"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl hover:scale-110 hover:text-green-400 hover:border-green-400/30 transition-all"
            >
              <MessageCircle size={20} />
            </a>

          </div>

        </div>

        {/* Ecosystem */}

        <div>

          <h4 className="font-semibold text-lg mb-6">
            Ecosystem
          </h4>

          <ul className="space-y-4">
            {renderFooterLink("CodeMyFYP IT", "https://it.codemyfyp.com")}
            {renderFooterLink("Academy", "https://academic.codemyfyp.com")}
            {renderFooterLink("InternTrack", "#ecosystem")}
            {renderFooterLink("CRM", "#ecosystem")}
          </ul>

        </div>

        {/* Services */}

        <div>

          <h4 className="font-semibold text-lg mb-6">
            Services
          </h4>

          <ul className="space-y-4">
            {renderFooterLink("Software Development", "#services")}
            {renderFooterLink("AI Solutions", "#services")}
            {renderFooterLink("Internship Programs", "#services")}
            {renderFooterLink("Academic Projects", "#services")}
          </ul>

        </div>

        {/* Company */}

        <div>

          <h4 className="font-semibold text-lg mb-6">
            Company
          </h4>

          <ul className="space-y-4">
            {renderFooterLink("About Us", "/about")}
            {renderFooterLink("Terms and Condition", "/terms-and-condition")}
            {renderFooterLink("Contact", "/contact")}
          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="font-semibold text-lg mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-gray-400">

            <li>
              info@codemyfyp.com
            </li>

            <li>
              +91 9483808379
            </li>

            <li>
              Bangalore, India
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom Bar */}

      <div
        className="
        border-t
        border-white/10
        mt-16
        pt-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
      "
      >

        <p className="text-gray-500">
          © {new Date().getFullYear()} CodeMyFYP. All rights reserved.
        </p>

        <div className="flex gap-8 text-gray-500">

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-and-condition">
            Terms of Service
          </Link>

          <Link href="/refund-policy">
            Refund Policy
          </Link>

          <Link href="/cookie-policy">
            Cookie Policy
          </Link>

        </div>

      </div>

    </div>

  </footer>


  );
}
