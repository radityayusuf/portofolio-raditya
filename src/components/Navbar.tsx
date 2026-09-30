"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Heart, Mail, Layers } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home", icon: Home },
    { name: "Tentang", href: "#about", icon: User },
    { name: "Pengalaman", href: "#experience", icon: Briefcase },
    { name: "Proyek", href: "#projects", icon: Layers },
    { name: "Hobi", href: "#hobbies", icon: Heart },
    { name: "Kontak", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 font-serif text-2xl font-black text-white tracking-tighter">
              Raditya<span className="text-teal-500">.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-teal-500 transition-colors text-xs lg:text-sm uppercase tracking-widest font-bold">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-teal-500 transition-colors p-2 bg-white/5 rounded-full border border-white/10">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Drawer) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Drawer */}
          <div className="relative w-full max-w-[320px] bg-[#0a0f1a] h-full shadow-2xl border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <span className="text-white font-black tracking-widest text-xl">MENU</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold uppercase tracking-wider transition-all bg-[#111827] text-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white border border-white/5 shadow-md group"
                >
                  <link.icon size={22} className="text-gray-400 group-hover:text-white transition-colors" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
