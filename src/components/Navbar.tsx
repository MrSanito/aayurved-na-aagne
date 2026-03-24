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
    { name: "Benefits", href: "/#benefits" },
    { name: "Success Stories", href: "/#transformations" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4 relative z-50">
        <Link href="/" className="font-outfit text-xl sm:text-2xl font-black text-herbal tracking-tighter truncate">
          AAYURVED<span className="text-stone-900 font-light ml-1">NA AANGNE</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-700 font-outfit font-semibold text-sm hover:text-herbal transition-colors relative group uppercase tracking-widest"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-herbal transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
            target="_blank"
            className="bg-herbal text-white hover:bg-herbal-dark rounded-full px-6 py-2.5 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <FaWhatsapp size={18} />
            <span className="font-outfit font-bold text-sm">WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-stone-900 p-2 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-light text-stone-900 hover:text-herbal transition-colors font-outfit uppercase tracking-widest"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="bg-herbal text-white rounded-full px-10 py-5 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl"
        >
          <FaWhatsapp size={24} />
          <span className="font-bold font-outfit">Consult Now</span>
        </Link>
      </div>
    </nav>
  );
}
