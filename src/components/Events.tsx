"use client";

import { MouseEvent, useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  color: string;
  accent: string;
  cardNumber: string;
}

function EventCard({ title, date, location, category, description, accent, cardNumber }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative mouse vector from center of card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Rotation angles limited to absolute 10 degrees for elegant subtle tilt
    const rotateX = -(y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;

    setCoords({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.015, 1.015, 1.015)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="group relative rounded-2xl glass-panel p-8 border border-white/5 flex flex-col justify-between h-[450px] glow-card-container cursor-pointer overflow-hidden"
    >
      {/* Neon Border Outline */}
      <div className="glow-card-border animate-pulse-slow" />

      {/* Internal mouse-reactive spotlight */}
      <div
        className="absolute w-[260px] h-[260px] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `calc(50% + ${coords.x * 8}px)`,
          top: `calc(50% + ${coords.y * 8}px)`,
          backgroundColor: accent,
        }}
      />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex justify-between items-center mb-6">
          <span
            className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/5"
            style={{ color: accent, borderColor: `${accent}25`, backgroundColor: `${accent}05` }}
          >
            {category}
          </span>
          <span className="text-white/25 text-xs font-mono">{cardNumber}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-clash font-extrabold tracking-tight text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-sm md:text-base leading-relaxed tracking-wide mb-6">
          {description}
        </p>
      </div>

      {/* Details Container */}
      <div className="relative z-10 border-t border-white/5 pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-white/55 text-sm">
          <Calendar className="w-4.5 h-4.5 text-accent-orange" />
          <span className="font-mono tracking-wide">{date}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/35 text-sm">
            <MapPin className="w-4.5 h-4.5 text-accent-pink" />
            <span className="font-mono tracking-wide">{location}</span>
          </div>

          {/* Action icon button */}
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent-orange group-hover:border-accent-orange text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1.5">
            <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const events = [
    {
      title: "DevCon Kanpur 2026",
      date: "October 18, 2026",
      location: "IIT Kanpur Campus",
      category: "Flagship Summit",
      description: "Our flagship annual developer conference. 600+ builders, international keynotes, specialized systems tracks, and elite startup founders.",
      accent: "rgb(255, 107, 43)",
      color: "from-accent-orange to-accent-pink",
      cardNumber: "01/03",
    },
    {
      title: "Kanpur Builders Sprint",
      date: "July 24-26, 2026",
      location: "Harcourt Butler (HBTI)",
      category: "48H Hackathon",
      description: "A fast-paced, high-stakes system sprint focused on production-grade AI agents, distributed pipelines, and immersive spatial webs.",
      accent: "rgb(139, 92, 246)",
      color: "from-accent-violet to-accent-pink",
      cardNumber: "02/03",
    },
    {
      title: "System Design Masterclass",
      date: "September 05, 2026",
      location: "Tech Hub Kanpur",
      category: "Technical Lab",
      description: "An intensive technical lab focusing on concurrent microservice meshes, global databases, low-latency caches, and cloud scaling.",
      accent: "rgb(6, 182, 212)",
      color: "from-accent-cyan to-accent-violet",
      cardNumber: "03/03",
    },
  ];

  return (
    <section
      id="events"
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-orange/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
            COMMUNITY ASSEMBLIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6">
            Where Kanpur’s Code Gathers
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-sans">
            From technical deep dives to massive multi-day hack sprints, elevate your standards and build what matters.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
