"use client";

export default function Marquee() {
  const technologies = [
    "Next.js 15",
    "React 19",
    "Three.js",
    "GSAP",
    "Framer Motion",
    "TypeScript",
    "Tailwind CSS",
    "WebGL/Shaders",
    "Shadcn UI",
    "Node.js",
    "GraphQL",
    "Turbopack",
    "Lenis Scroll",
    "Core Web Vitals",
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-background border-y border-white/5 z-10">
      {/* Glowing atmospheric lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[60px] bg-accent-orange-glow rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[60px] bg-accent-violet-glow rounded-full blur-[80px] pointer-events-none" />

      {/* Left and Right glow gradient borders for smooth visual fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Running Marquee track */}
      <div className="flex whitespace-nowrap gap-12 animate-marquee-loop">
        {[...Array(3)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-12 items-center shrink-0">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-7 py-3.5 rounded-full glass-panel text-white/65 hover:text-accent-orange hover:border-accent-orange/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-accent-orange to-accent-pink group-hover:animate-ping" />
                <span className="font-clash text-lg font-semibold tracking-wider uppercase">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
