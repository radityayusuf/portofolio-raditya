"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  images?: string[];
}

export default function ExperienceCard({ title, role, period, location, description, images = [] }: ExperienceCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  const displayImages = images.length > 0 ? images : [null, null];
  const constraintsRef = useRef(null);

  const openLightbox = (index: number) => {
    if (!displayImages[index]) return;
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-teal-500/30 hover:bg-white/10 transition-all flex flex-col h-full shadow-lg shadow-black/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
          <div>
            <h4 className="text-xl font-extrabold text-white tracking-tight">{title}</h4>
            <span className="text-teal-500 font-bold">{role}</span>
          </div>
          <div className="text-left md:text-right">
            <span className="text-gray-400 text-sm block font-medium">{period}</span>
            <span className="text-gray-500 text-sm block">{location}</span>
          </div>
        </div>

        <ul className="list-disc list-outside ml-5 text-gray-400 text-sm space-y-2 mb-6 flex-grow">
          {description.map((desc, idx) => (
            <li key={idx} className="leading-relaxed pl-1">{desc}</li>
          ))}
        </ul>

        {/* Swipeable Gallery Section */}
        <div className="relative overflow-hidden rounded-xl bg-[#0a0a0f] border border-white/10 mt-auto group" ref={constraintsRef}>
          <motion.div 
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              const swipe = offset.x;
              if (swipe < -50 && galleryIndex < displayImages.length - 1) {
                setGalleryIndex(galleryIndex + 1);
              } else if (swipe > 50 && galleryIndex > 0) {
                setGalleryIndex(galleryIndex - 1);
              }
            }}
            animate={{ x: `-${galleryIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {displayImages.map((img, idx) => (
              <div 
                key={idx}
                className={`min-w-full relative aspect-[4/3] md:aspect-video overflow-hidden ${img ? 'cursor-grab active:cursor-grabbing' : ''}`}
                onPointerUp={() => img && openLightbox(idx)} // use onPointerUp for tap detection after drag
              >
                {img ? (
                  <>
                    <Image 
                      src={img} 
                      alt={`${title} - Photo ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#111116] to-[#0a0a0f] text-gray-600">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium">Photo will be added soon</span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
              {displayImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${idx === galleryIndex ? 'bg-teal-500 w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>
          )}

          {/* Desktop Hover Nav */}
          {displayImages.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setGalleryIndex(Math.max(0, galleryIndex - 1)) }}
                className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 ${galleryIndex === 0 ? 'hidden' : ''}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setGalleryIndex(Math.min(displayImages.length - 1, galleryIndex + 1)) }}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 ${galleryIndex === displayImages.length - 1 ? 'hidden' : ''}`}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && images.length > 0 && (
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
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={images[currentIndex]} 
                alt="Fullscreen Preview"
                fill
                className="object-contain"
              />

              {images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#111116]/80 text-white rounded-full hover:bg-teal-500 hover:text-black transition-colors backdrop-blur-md border border-white/10"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#111116]/80 text-white rounded-full hover:bg-teal-500 hover:text-black transition-colors backdrop-blur-md border border-white/10"
                    onClick={nextImage}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
