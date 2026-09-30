"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "GPA", value: "3.81" },
    { label: "Organizations", value: "3+" },
    { label: "Awards & Scholarships", value: "2" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-12">
            {/* Small Photo on Left */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
              <Image 
                src="/images/about.jpeg" 
                alt="Raditya Yusuf Ramadhan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#10b981]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Text on Right */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2 text-sm">Tentang Saya</h2>
              <h3 className="font-serif text-3xl md:text-5xl font-black text-white mb-6">Belajar dari pengalaman nyata.</h3>
              <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Halo, saya Raditya Yusuf Ramadhan! Saat ini saya menempuh pendidikan S1 Informatika di Universitas Jenderal Soedirman, Purwokerto, dengan IPK 3.83/4.00 dan target lulus Januari 2027.
                </p>
                <p>
                  Saya memiliki ketertarikan besar pada pengembangan web dan mobile, mulai dari HTML, CSS, JavaScript, PHP, Laravel, Next.js, hingga Flutter. Selain aktif di bidang teknis, saya juga terlibat dalam berbagai kegiatan sosial dan organisasi — mulai dari menjadi bagian dari Komisi Pemilihan Umum (KPPS) pada Pemilu 2024, hingga terlibat dalam program KKN sebagai bagian dari Divisi Lingkungan yang berfokus pada edukasi masyarakat.
                </p>
                <p>
                  Saya percaya bahwa pengalaman nyata di lapangan — baik teknis maupun sosial — adalah bagian penting dari proses belajar. Melalui portofolio ini, saya ingin membagikan perjalanan dan kontribusi yang telah saya jalani.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Big Stats at Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                className="flex flex-col items-center justify-center text-center p-4"
              >
                <span className="font-serif text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">{stat.value}</span>
                <span className="text-teal-500 text-sm md:text-base font-bold uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
