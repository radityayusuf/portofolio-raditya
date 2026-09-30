"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left Column: Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">
              Mahasiswa Informatika | Pengembang Perangkat Lunak
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Raditya Yusuf R.</span>
            </h1>
          </motion.div>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
            "Dedicated to continuous growth, embracing every challenge as a stepping stone, and striving to leave a positive impact."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
            <a href="#contact" className="px-8 py-4 bg-teal-500 text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 group">
              Mari Berdiskusi
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start text-gray-500">
            <a href="https://github.com/radityaysf" target="_blank" rel="noreferrer" className="hover:text-teal-500 transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/raditya-yusuf-ramadhan" target="_blank" rel="noreferrer" className="hover:text-teal-500 transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:radityaysf06@gmail.com" className="hover:text-teal-500 transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-md relative z-10"
        >
          <div className="relative aspect-[4/5] rounded-3xl p-1 bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 shadow-2xl shadow-teal-500/20">
            <div className="w-full h-full rounded-[22px] bg-[#0a0a0f] overflow-hidden relative group">
              <Image 
                src="/images/profile.jpeg" 
                alt="Raditya Yusuf Ramadhan"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Status Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#111116] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              <span className="text-sm font-medium text-white">Siap Menerima Proyek</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
