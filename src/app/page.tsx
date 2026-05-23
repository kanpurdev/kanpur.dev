"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Events from "@/components/Events";
import Photos from "@/components/Photos";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-accent-orange/30 selection:text-white antialiased">
      {/* Cinematic Digital Preloader - Initiates the immersive UX */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Global Cinematic Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Glass Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between px-6 py-3.5 rounded-full bg-background/30 border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <a
            href="#"
            className="font-clash text-xl font-black tracking-widest text-white hover:opacity-85 transition-opacity"
          >
            KANPUR<span className="text-accent-orange">.DEV</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Events", "Gallery", "Contributors", "FAQ"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item === "Gallery" ? "photos" : item === "Contributors" ? "team" : item.toLowerCase()}`}
                className="text-sm font-semibold text-white/50 hover:text-white transition-colors relative group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <a
            href="#events"
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono font-bold tracking-widest text-white bg-white/5 hover:bg-accent-orange hover:border-accent-orange border border-white/5 rounded-full transition-all duration-300 hover:scale-105 hover-trigger"
          >
            LAUNCH DEV
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Sequence Stack */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Events />
        <Photos />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
