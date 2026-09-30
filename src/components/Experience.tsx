"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Karir</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Pengalaman Kerja</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              
              <div className={`md:flex items-stretch justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-teal-500 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                
                <div className="md:w-5/12 pb-8 md:pb-0">
                  <ExperienceCard 
                    title={exp.title}
                    role={exp.role}
                    period={exp.period}
                    location={exp.location}
                    description={exp.description}
                    images={exp.images}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
