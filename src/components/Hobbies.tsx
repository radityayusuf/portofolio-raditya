"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hobbies } from "@/data/skills";
import Image from "next/image";
import { Image as ImageIcon, X } from "lucide-react";

export default function Hobbies() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const openLightbox = (img: string, title: string) => {
    setCurrentImage(img);
    setCurrentTitle(title);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="hobbies" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-teal-500 font-bold tracking-widest uppercase mb-2">Kehidupan Pribadi</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-black text-white">Hobi & Ketertarikan</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {hobbies.map((hobby, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative aspect-[3/4] bg-[#111116] border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all cursor-pointer shadow-lg"
                onClick={() => openLightbox(hobby.image, hobby.name)}
              >
                {/* Image or Placeholder */}
                {hobby.image ? (
                  <>
                    <Image 
                      src={hobby.image}
                      alt={hobby.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#111116] to-[#0a0a0f]">
                    <ImageIcon size={32} className="text-gray-600 mb-2 opacity-50" />
                    <span className="text-xs font-medium text-gray-600">Photo soon</span>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 backdrop-blur-md flex items-center justify-center mb-3 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-black transition-all">
                    <hobby.icon size={22} />
                  </div>
                  <h4 className="text-white font-bold text-sm drop-shadow-md">{hobby.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={currentImage} 
                alt={currentTitle}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#111116]/80 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-white font-bold">{currentTitle}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
