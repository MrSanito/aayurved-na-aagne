"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-poppins text-2xl font-bold text-herbal">
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
            className="btn bg-herbal text-white border-none hover:bg-green-800 rounded-full px-6 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            <span className="font-poppins">WhatsApp</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
