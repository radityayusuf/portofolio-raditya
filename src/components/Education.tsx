"use client";
import { motion } from "framer-motion";
import { education } from "@/data/experience";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Akademik</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Pendidikan</h3>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row gap-6 hover:border-teal-500/30 hover:bg-white/10 transition-all shadow-lg"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-teal-500 border border-white/10 shadow-inner">
                  <GraduationCap size={28} />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h4 className="text-2xl font-extrabold text-white tracking-tight">{edu.institution}</h4>
                    <span className="text-teal-500 font-bold block">{edu.degree}</span>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-gray-400 text-sm block font-medium">{edu.period}</span>
                    <span className="text-gray-500 text-sm block">{edu.location}</span>
                  </div>
                </div>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4">
                    <span className="text-sm font-bold text-gray-300 mb-2 block uppercase tracking-wider">Pencapaian:</span>
                    <ul className="list-disc list-outside ml-5 text-gray-400 text-sm space-y-1">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="pl-1 leading-relaxed">{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
