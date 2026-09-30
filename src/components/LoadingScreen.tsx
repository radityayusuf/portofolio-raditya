"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Slower, more elegant progression
      currentProgress += Math.floor(Math.random() * 4) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Hold at 100% briefly before fading out
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "unset";
        }, 1000);
      }
      setProgress(currentProgress);
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="premium-loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030305] overflow-hidden"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-full max-w-lg px-8 flex flex-col items-center">
            
            {/* Elegant Cinematic Name Reveal */}
            <div className="overflow-hidden mb-16 text-center">
              <motion.h1 
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 uppercase leading-tight"
              >
                Raditya<br/>Yusuf R.
              </motion.h1>
            </div>

            {/* Premium Minimalist Progress Bar */}
            <div className="w-full md:w-4/5 flex flex-col gap-4">
              <div className="flex justify-between items-center px-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase font-light"
                >
                  Memuat Portofolio
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-[10px] md:text-xs tracking-widest text-teal-400 font-medium"
                >
                  {progress.toString().padStart(3, '0')}%
                </motion.span>
              </div>
              
              {/* Ultra-thin Glowing Line */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                className="w-full h-[1px] bg-white/10 relative overflow-hidden rounded-full"
              >
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-white shadow-[0_0_15px_rgba(20,184,166,1)]"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
