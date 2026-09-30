"use client";
import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; animationDuration: string; animationDelay: string }[]>([]);

  useEffect(() => {
    // Generate stars only on the client to avoid hydration mismatch
    const generateStars = () => {
      const newStars = [];
      // Create 150 stars for a dense, glittery effect
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2.5 + 0.5}px`, // between 0.5px and 3px
          animationDuration: `${Math.random() * 3 + 1.5}s`, // between 1.5s and 4.5s
          animationDelay: `${Math.random() * 3}s` // random start time
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0a0f]">
      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
}
