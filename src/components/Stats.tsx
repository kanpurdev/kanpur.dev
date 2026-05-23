"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    engineers: 0,
    startups: 0,
    hackathons: 0,
    commits: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const targets = {
      engineers: 0,
      startups: 0,
      hackathons: 0,
      commits: 0,
    };

    // Staggered countdown using GSAP interpolation
    gsap.to(targets, {
      engineers: 1200,
      startups: 15,
      hackathons: 8,
      commits: 24,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        setCounts({
          engineers: Math.floor(targets.engineers),
          startups: Math.floor(targets.startups),
          hackathons: Math.floor(targets.hackathons),
          commits: Math.floor(targets.commits),
        });
      },
    });
  }, []);

  const stats = [
    {
      label: "Active Engineers",
      val: counts.engineers,
      suffix: "+",
      color: "text-accent-orange",
      glow: "rgba(255, 107, 43, 0.08)",
    },
    {
      label: "Partner Startups",
      val: counts.startups,
      suffix: "+",
      color: "text-accent-pink",
      glow: "rgba(255, 61, 113, 0.08)",
    },
    {
      label: "Tech Ecosystems",
      val: counts.hackathons,
      suffix: "+",
      color: "text-accent-violet",
      glow: "rgba(139, 92, 246, 0.08)",
    },
    {
      label: "Total Commits",
      val: counts.commits,
      suffix: "M+",
      color: "text-accent-cyan",
      glow: "rgba(6, 182, 212, 0.08)",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-background border-t border-white/5 overflow-hidden z-10"
    >
      <div className="absolute inset-0 bg-grid-pattern [background-size:56px_56px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl glass-panel border border-white/5 overflow-hidden text-center hover:border-white/10 transition-all duration-300"
            >
              {/* Radial Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[80px] w-2/3 h-2/3 rounded-full mx-auto -translate-y-10 pointer-events-none"
                style={{ backgroundColor: stat.glow }}
              />

              <div className="relative z-10">
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-white/30 uppercase block mb-3">
                  {stat.label}
                </span>
                <span
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clash font-extrabold tracking-tight ${stat.color} block`}
                >
                  {stat.val.toLocaleString()}
                  {stat.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
