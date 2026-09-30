"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Unsoed Press",
    url: "https://unsoedpress.com/",
    image: "/images/unsoedpress.png",
    description: "Website resmi untuk layanan usaha percetakan dan penerbitan Universitas Jenderal Soedirman.",
    tags: ["Company Profile", "Printing & Publishing"],
  },
  {
    id: 2,
    title: "PKKM Unsoed",
    url: "https://pkkm.unsoed.ac.id/",
    image: "/images/pkkm.png",
    description: "Platform Program Pengembangan Karakter dan Kepribadian Mahasiswa Universitas Jenderal Soedirman.",
    tags: ["Character Building", "University Program"],
  },
  {
    id: 3,
    title: "Bimbingan AI",
    url: "https://bimbingan.amania.id/",
    image: "/images/bimbingan-ai.png",
    description: "Platform web untuk bimbingan akademik online (seperti skripsi) antara mahasiswa dengan dosen pembimbing.",
    tags: ["Academic Platform", "Online Mentoring"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Portofolio</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Jejak Karya Digital</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block h-full bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500 relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0a0a0f] border-b border-white/5">
                  {/* Fallback pattern / Loading state simulation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Globe size={48} className="text-gray-500" />
                  </div>
                  
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                    onError={(e) => {
                      // Hide image if it fails to load, showing the fallback Globe icon
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {/* Floating Link Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <ExternalLink size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <h4 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
