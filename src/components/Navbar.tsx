"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Weight Loss", href: "/#about" },
    { name: "Hair Care", href: "/haircare" },
    { name: "Women Health", href: "/women" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Stories", href: "/#transformations" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-50">
        {/* Left — Brand */}
        <Link
          href="/"
          className="font-outfit text-xl sm:text-2xl font-black text-herbal tracking-tighter shrink-0"
        >
          AAYURVED
          <span className="text-stone-900 font-light ml-1">NA AANGNE</span>
        </Link>

        {/* Right — Desktop nav links + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-600 font-outfit font-semibold text-[13px] hover:text-herbal transition-colors relative group uppercase tracking-wider whitespace-nowrap"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-herbal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
            target="_blank"
            className="ml-2 bg-herbal text-white hover:bg-herbal-dark rounded-full px-5 py-2 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <FaWhatsapp size={16} />
            <span className="font-outfit font-bold text-sm">WhatsApp</span>
          </Link>
        </div>

        {/* Mobile — Hamburger */}
        <button
          className="lg:hidden text-stone-900 p-2 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        } lg:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-light text-stone-900 hover:text-herbal transition-colors font-outfit uppercase tracking-widest"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="bg-herbal text-white rounded-full px-10 py-4 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl"
        >
          <FaWhatsapp size={22} />
          <span className="font-bold font-outfit text-lg">Consult Now</span>
        </Link>
      </div>
    </nav>
  );
}
