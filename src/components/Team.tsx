"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Chirag Vishnoi",
    role: "Founder & System Lead",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    github: "#",
    twitter: "#",
    linkedin: "#",
    accent: "rgb(255, 107, 43)",
  },
  {
    name: "Aanya Verma",
    role: "Open Source Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    github: "#",
    twitter: "#",
    linkedin: "#",
    accent: "rgb(255, 61, 113)",
  },
  {
    name: "Rohan Kapoor",
    role: "Creative WebGL Tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    github: "#",
    twitter: "#",
    linkedin: "#",
    accent: "rgb(139, 92, 246)",
  },
  {
    name: "Priya Das",
    role: "Developer Relations",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    github: "#",
    twitter: "#",
    linkedin: "#",
    accent: "rgb(6, 182, 212)",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[380px] h-[380px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Title Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
            CONTRIBUTORS & LEADERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6">
            Meet the Core Architects
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-sans">
            The builders dedicated to growing Kanpur’s tech infrastructure and designing elite resources for developers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl glass-panel border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 glow-card-container cursor-pointer"
            >
              {/* Glowing Outline */}
              <div className="glow-card-border" />

              {/* Backglow layer */}
              <div
                className="absolute top-0 right-0 w-[140px] h-[140px] rounded-full blur-[65px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: member.accent }}
              />

              {/* Zooming Grayscale Avatar Frame */}
              <div className="relative h-72 w-full overflow-hidden border-b border-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Shading gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-95" />

                {/* Magnetic Social Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <a
                    href={member.github}
                    className="w-10 h-10 rounded-full bg-background/80 border border-white/10 hover:border-accent-orange/40 hover:bg-accent-orange/15 hover:text-accent-orange flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-background/80 border border-white/10 hover:border-accent-pink/40 hover:bg-accent-pink/15 hover:text-accent-pink flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-background/80 border border-white/10 hover:border-accent-violet/40 hover:bg-accent-violet/15 hover:text-accent-violet flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title Meta */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-clash font-bold tracking-tight text-white mb-1 group-hover:text-accent-orange transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono tracking-wider text-white/40 uppercase">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
