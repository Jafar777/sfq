"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { title: "من نحن", href: "#about" },
  { title: "الخدمات", href: "#services" },
  { title: "المشاريع", href: "#projects" },
  { title: "الشركاء", href: "#partners" },
  { title: "اتصل بنا", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img
            src="/Logo.png"
            alt="شعار سفك"
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`font-medium transition ${
                scrolled ? "text-slate-700 hover:text-green-600" : "text-white hover:text-green-300"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:block btn-primary"
        >
          استشارة مجانية
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-slate-700" : "text-white"}`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl shadow-lg mt-4 p-6 rounded-2xl mx-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block py-3 text-slate-700 hover:text-green-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            href="#contact"
            className="block btn-primary w-full text-center mt-4"
            onClick={() => setOpen(false)}
          >
            استشارة مجانية
          </a>
        </div>
      )}
    </motion.header>
  );
}