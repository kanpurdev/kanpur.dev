"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const targetText = "KANPUR.DEV";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*+_";
    let iteration = 0;
    let interval: NodeJS.Timeout;

    // SCRAMBLE / DECRYPT TEXT EFFECT
    const startDecryption = () => {
      interval = setInterval(() => {
        if (!textRef.current) return;

        textRef.current.innerText = targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            // Rapid shuffling symbols
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }

        // Progression speed
        iteration += 1 / 3;
      }, 55);
    };

    // Dynamic digital percentage clock matching decryption speed
    const duration = 2100;
    const intervalTime = duration / 100;
    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    startDecryption();

    // GSAP OUTRO SEQUENCE (Triggers when percent hits 100)
    const tl = gsap.timeline({
      delay: 2.3,
      onComplete: () => {
        onComplete();
        // Restore standard body scroll
        document.body.style.overflow = "auto";
      },
    });

    // Force absolute lock scroll on entry
    document.body.style.overflow = "hidden";

    // Text flash neon pop
    tl.to(textRef.current, {
      scale: 1.04,
      color: "rgb(255, 107, 43)",
      textShadow: "0 0 25px rgba(255, 107, 43, 0.65)",
      duration: 0.3,
    });

    // Staggered components slide out
    tl.to([percentRef.current?.parentNode, barRef.current?.parentNode], {
      opacity: 0,
      y: -15,
      duration: 0.35,
    }, "-=0.1");

    // Immersive Curtain slide up reveal
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.3,
      ease: "power4.inOut",
    });

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-background z-[99999] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Visual lighting grids */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Loader elements block */}
      <div className="relative flex flex-col items-center max-w-md w-full px-6">
        {/* Scramble decrypted brand */}
        <h1
          ref={textRef}
          className="text-4xl sm:text-6xl font-clash font-extrabold tracking-[0.16em] text-white text-center select-none mb-10 text-glow-gradient"
        >
          KANPUR.DEV
        </h1>

        {/* Core glow progress track */}
        <div className="w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-accent-orange to-accent-pink"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Diagnostics label */}
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-white/30 tracking-widest uppercase">
          <span>INITIALIZING DIGITAL NODES:</span>
          <span ref={percentRef} className="text-white/60 font-bold w-10 text-right">
            {percent.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
