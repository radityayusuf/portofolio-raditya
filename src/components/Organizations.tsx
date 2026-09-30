"use client";
import { motion } from "framer-motion";
import { organizations } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Organizations() {
  return (
    <section id="organizations" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Kepemimpinan</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Pengalaman Organisasi</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {organizations.map((org, idx) => (
            <motion.div 
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ExperienceCard 
                title={org.title}
                role={org.role}
                period={org.period}
                location={org.location}
                description={org.description}
                images={org.images}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
