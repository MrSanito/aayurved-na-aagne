"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4">
        <Link href="/" className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-herbal truncate">
          AAYURVED NA AANGNE
        </Link>
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
            href="https://api.whatsapp.com/message/JBAPTQYQ6RH6K1?autoload=1&app_absent=0"
            target="_blank"
            className="btn bg-herbal text-white border-none hover:bg-green-800 rounded-full px-4 sm:px-6 flex items-center gap-2 h-10 min-h-[40px]"
          >
            <MessageCircle size={18} />
            <span className="font-poppins text-sm hidden sm:inline">WhatsApp</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
