"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Users, Cpu, Activity, Play } from "lucide-react";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [terminalText, setTerminalText] = useState("");
  const [terminalStep, setTerminalStep] = useState(0);

  // Terminal simulated typing engine
  useEffect(() => {
    const steps = [
      "npx kanpur-dev init",
      "✔ Initializing distributed builder nodes... [OK]",
      "✔ Synchronizing compiler pipelines... [OK]",
      "✔ Injecting cinematic motion system... [OK]",
      "⚡ Telemetry operational. 1,200+ local nodes active.",
    ];

    if (terminalStep < steps.length) {
      const currentFullText = steps[terminalStep];
      let charIndex = 0;
      let timer: NodeJS.Timeout;

      const typeChar = () => {
        if (charIndex <= currentFullText.length) {
          setTerminalText((prev) => {
            const lines = prev.split("\n");
            lines[lines.length - 1] = (terminalStep === 0 ? "$ " : "") + currentFullText.slice(0, charIndex);
            return lines.join("\n");
          });
          charIndex++;
          timer = setTimeout(typeChar, terminalStep === 0 ? 55 : 18);
        } else {
          // Advance step line
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n");
            setTerminalStep((prev) => prev + 1);
          }, 800);
        }
      };

      typeChar();
      return () => clearTimeout(timer);
    }
  }, [terminalStep]);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".bento-card");

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
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
      id="about"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-background overflow-hidden px-4 md:px-8 z-10 border-t border-white/5"
    >
      <div className="absolute top-[25%] right-[-10%] w-[350px] h-[350px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] left-[-10%] w-[380px] h-[380px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Mission Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent mb-4 block">
              OUR MISSION & IDENTITY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-clash font-extrabold tracking-tight text-white mb-6 leading-none">
              Shaping Kanpur’s Tech Renaissance
            </h2>
          </div>
          <div className="lg:col-span-7 pt-2 lg:pt-6 font-sans">
            <p className="text-white/60 text-base md:text-lg tracking-wide leading-relaxed mb-6">
              kanpur.dev is not a simple community meetup — it is the digital core of North India’s engineering revolution. We unite ambitious systems coders, creative frontend specialists, and startup architects into a high-density tech cluster.
            </p>
            <p className="text-white/40 text-sm md:text-base tracking-wide leading-relaxed">
              We bridge the gap between traditional enterprise work and premium startup craftsmanship. By constructing high-performance open-source tools, hosting interactive assemblies, and running specialized hackathons, we are establishing a new benchmark.
            </p>
          </div>
        </div>

        {/* Premium Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Live Interactive Terminal Mockup (Span 2 Cols) */}
          <div className="bento-card md:col-span-2 relative rounded-2xl glass-panel p-6 border border-white/5 overflow-hidden flex flex-col justify-between h-[360px] md:h-[400px] glow-card-container">
            <div className="glow-card-border" />
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
              </div>
              <span className="font-mono text-[9px] text-white/35 tracking-widest uppercase">
                core-telemetry.sh
              </span>
            </div>

            {/* Terminal Typing Body */}
            <div className="flex-1 font-mono text-xs text-white/70 py-6 overflow-y-auto relative z-10 leading-relaxed">
              <pre className="whitespace-pre-wrap select-none">{terminalText}</pre>
              {terminalStep < 5 && (
                <span className="inline-block w-1.5 h-4 bg-accent-orange animate-pulse ml-0.5" />
              )}
            </div>

            {/* Terminal Footer controls */}
            <div className="border-t border-white/5 pt-4 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-2 text-white/35 font-mono text-[10px]">
                <Activity className="w-3.5 h-3.5 text-accent-orange animate-pulse" />
                <span>SYS STATUS: ACTIVE_NODE</span>
              </div>
              
            </div>
          </div>

          {/* Card 2: CPU Live Dashboard (Span 1 Col) */}
          <div className="bento-card relative rounded-2xl glass-panel p-6 border border-white/5 overflow-hidden flex flex-col justify-between h-[360px] md:h-[400px] glow-card-container">
            <div className="glow-card-border" />
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent-violet/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5 text-accent-violet" />
              </div>
              <span className="font-mono text-[9px] text-white/35 tracking-widest uppercase block mb-1">
                Ecosystem Metrics
              </span>
              <h3 className="text-2xl font-clash font-bold text-white mb-3">
                High Density Labs
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-sans">
                Focused technical labs exploring LLM fine-tuning, distributed architectures, custom systems compilers, WebGL models, and rust kernels.
              </p>
            </div>

            {/* Simulated Allocation graph */}
            <div className="relative z-10 border-t border-white/5 pt-4">
              <div className="flex justify-between items-center text-xs font-mono text-white/35 mb-2">
                <span>Active Systems Sync</span>
                <span className="text-accent-violet font-bold">92%</span>
              </div>
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-accent-violet rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              </div>
            </div>
          </div>

          {/* Card 3: Elite Community Network (Span 1 Col) */}
          <div className="bento-card relative rounded-2xl glass-panel p-6 border border-white/5 overflow-hidden flex flex-col justify-between h-[260px] glow-card-container">
            <div className="glow-card-border" />
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent-pink/5 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-accent-pink" />
                </div>
                <h3 className="text-lg font-clash font-bold text-white mb-2">
                  Elite Builder Network
                </h3>
                <p className="text-white/45 text-xs leading-relaxed font-sans">
                  Engage directly with elite engineering leads, technical startup architects, and senior open-source creators locally.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Open Source Utilities (Span 1 Col) */}
          <div className="bento-card relative rounded-2xl glass-panel p-6 border border-white/5 overflow-hidden flex flex-col justify-between h-[260px] glow-card-container">
            <div className="glow-card-border" />
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent-cyan/5 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Terminal className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-clash font-bold text-white mb-2">
                  Core Open Source
                </h3>
                <p className="text-white/45 text-xs leading-relaxed font-sans">
                  Co-build robust digital scripts, compilers libraries, and micro-tools designed to accelerate the ecosystem’s builder velocities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: High Stakes Hackathons (Span 1 Col) */}
          <div className="bento-card relative rounded-2xl glass-panel p-6 border border-white/5 overflow-hidden flex flex-col justify-between h-[260px] glow-card-container">
            <div className="glow-card-border" />
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-accent-orange/5 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Activity className="w-5 h-5 text-accent-orange" />
                </div>
                <h3 className="text-lg font-clash font-bold text-white mb-2">
                  Epic Systems Hackathons
                </h3>
                <p className="text-white/45 text-xs leading-relaxed font-sans">
                  High-stakes hardware & systems programming assemblies with direct startup venture grants and senior dev advisory loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
