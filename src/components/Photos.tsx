"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Calendar, MapPin } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const photos = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Midnight Hackathon Build",
    location: "IIT Kanpur Campus",
    date: "OCT 2026",
    gridClass: "md:col-span-2 md:row-span-2 h-[280px] md:h-full",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    title: "Systems Architecture Lab",
    location: "Tech Hub Kanpur",
    date: "SEP 2026",
    gridClass: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    title: "WebGL Creative Sprint",
    location: "Online Core",
    date: "AUG 2026",
    gridClass: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    title: "Developer Assembly Keynote",
    location: "Harcourt Butler (HBTI)",
    date: "JUL 2026",
    gridClass: "md:col-span-2 md:row-span-1 h-[280px]",
  },
  {
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
    title: "Founder Meet & Coffee",
    location: "Civil Lines",
    date: "JUN 2026",
    gridClass: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    title: "Open Source Infrastructure",
    location: "IIT Kanpur Campus",
    date: "MAY 2026",
    gridClass: "md:col-span-1 md:row-span-1 h-[280px]",
  },
];

export default function Photos() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".photo-card");

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="photos"
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      {/* Cyberpunk background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Title block header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
            ECOSYSTEM GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6">
            Life Inside kanpur.dev
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-sans">
            Capturing the raw energy, late-night code sprints, whiteboards, and digital collaborations within our core team.
          </p>
        </div>

        {/* Bento Grid gallery */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[280px]"
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`photo-card group relative rounded-2xl border border-white/5 overflow-hidden glow-card-container cursor-pointer ${photo.gridClass}`}
            >
              {/* Neon border shine */}
              <div className="glow-card-border" />

              {/* Curated avatar image zoom and scale */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />

              {/* Overlay shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              {/* Hover technical diagnostic labels */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 translate-y-3.5 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-white/35 group-hover:text-white/60 transition-colors text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-pink animate-pulse" />
                      <span>{photo.location}</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-clash font-extrabold tracking-tight text-white group-hover:text-accent-orange transition-colors">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Shutter aperture camera icon accent */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-background/60 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-accent-orange group-hover:border-accent-orange/30 group-hover:bg-accent-orange/10 transition-all duration-300">
                <Camera className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
