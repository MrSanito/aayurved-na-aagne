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
    { name: "Home", href: "#home" },
    { name: "Ayurvedic Weight Loss", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Success Stories", href: "#transformations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4 relative z-50">
        <Link href="/" className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-herbal truncate">
          AAYURVED NA AANGNE
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium hover:text-herbal transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-herbal transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
            target="_blank"
            className="btn bg-herbal text-white border-none hover:bg-green-800 rounded-full px-4 sm:px-6 flex items-center gap-2 h-10 min-h-[40px]"
          >
            <FaWhatsapp size={18} />
            <span className="font-poppins text-sm hidden sm:inline">WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-gray-800 hover:text-herbal transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="https://wa.me/919687105624?text=%E0%AA%B9%E0%AB%81%E0%AA%82%20%E0%AA%B5%E0%AB%87%E0%AA%88%E0%AA%9F%20%E0%AA%B2%E0%AB%8B%E0%AA%B8%20%E0%AA%95%E0%AA%B0%E0%AA%B5%E0%AA%BE%20%E0%AA%87%E0%AA%9A%E0%AB%8D%E0%AA%9B%E0%AB%81%E0%AA%82"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="btn bg-herbal text-white border-none hover:bg-green-800 rounded-full px-10 flex items-center gap-3 h-14"
        >
          <FaWhatsapp size={24} />
          <span className="font-bold">WhatsApp Order</span>
        </Link>
      </div>
    </nav>
  );
}
