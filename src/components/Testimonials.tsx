"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "kanpur.dev completely shifted the tech narrative in UP. The monthly hackathons match the extreme speed, density, and standards of Bangalore's top ecosystem hubs. A massive asset for hungry builders.",
    name: "Abhinav Singh",
    role: "Senior Tech Lead @ Vercel (IIT-K)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    accent: "rgb(255, 107, 43)",
  },
  {
    quote: "Finding high-fidelity frontend talent and systems engineers used to be difficult in Tier-2 ecosystems. Through kanpur.dev, we've hired three world-class engineers directly from their technical assemblies.",
    name: "Meera Nair",
    role: "CTO @ HyperScale AI",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    accent: "rgb(255, 61, 113)",
  },
  {
    quote: "The Monthly Dev Labs are incredibly dense. No fluff, no basic slide decks. We write concurrent systems, debug live WebGL shaders, and build robust open-source tools together.",
    name: "Vikram Malhotra",
    role: "Lead Engineer @ Decentral Lab",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    accent: "rgb(139, 92, 246)",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      <div className="absolute top-[25%] left-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[380px] h-[380px] bg-accent-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Title Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
            ECOSYSTEM ENDORSEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6">
            Endorsed by the Industry
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-sans">
            Hear from IIT-K graduates, industry tech leaders, and startup founders who have experienced the acceleration first-hand.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl glass-panel p-8 md:p-10 border border-white/5 flex flex-col justify-between h-[390px] hover:-translate-y-2 transition-all duration-500 glow-card-container cursor-pointer"
            >
              {/* Glowing Outline */}
              <div className="glow-card-border" />

              {/* Absolute Quote Mark Visual */}
              <Quote className="absolute top-8 right-8 w-14 h-14 text-white/[0.02] group-hover:text-white/[0.07] transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10">
                <p className="text-white/65 text-base md:text-[17px] font-medium leading-relaxed italic mb-8 group-hover:text-white transition-colors duration-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Member detail bottom panel */}
              <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-accent-orange/45 transition-colors duration-300"
                />
                <div>
                  <h4 className="text-white text-base font-clash font-bold leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-xs text-white/40 font-mono tracking-wider block mt-1">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
