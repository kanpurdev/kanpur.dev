"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Intro animation timelines
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Set initial opacity of elements to clear out flash-of-unstyled-content (FOUC)
    gsap.set([subtitleRef.current, ctaRef.current], { opacity: 0 });

    // Staggered word splitting reveal for huge cinematic title
    const title = titleRef.current;
    if (title) {
      const words = title.innerText.split(" ");
      title.innerHTML = words
        .map((word) => {
          let className = "transform translate-y-[100%] transition-all duration-300 cursor-default";
          const lowerWord = word.toLowerCase();
          if (lowerWord.includes("future") || lowerWord.includes("here")) {
            className += " cyber-gradient-text font-black";
          } else {
            className += " hover:text-accent-orange";
          }
          return `<span class="inline-block overflow-hidden pb-3 mr-4"><span class="${className}">${word}</span></span>`;
        })
        .join(" ");

      const innerSpans = title.querySelectorAll("span > span");
      tl.fromTo(
        innerSpans,
        { yPercent: 100 },
        { yPercent: 0, duration: 1.3, stagger: 0.08 },
        "-=0.6"
      );
    }

    tl.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    tl.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 pt-20"
    >
      {/* Three.js Interactive Particle Sphere Background */}
      <ThreeScene />

      {/* Grid Pattern and radial transparency overlay */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

      {/* Glowing Ambient Mesh Lights */}
      <div className="absolute top-[18%] left-[8%] w-[380px] h-[380px] bg-accent-orange/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[22%] right-[8%] w-[420px] h-[420px] bg-accent-violet/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center">
        {/* Heavy Awwwards Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-clash font-extrabold tracking-tight text-white mb-8 leading-[0.95] max-w-5xl"
        >
          Kanpur’s Developer Future Starts Here
        </h1>

        {/* Subtitle with Glowing Cyber Gradient Accent */}
        <p
          ref={subtitleRef}
          className="max-w-2xl text-base md:text-xl text-white/55 font-sans tracking-wide leading-relaxed mb-12 px-2"
        >
          An elite, forward-thinking collective of engineers, designers, and creators. We are forging{" "}
          <span className="cyber-gradient-text font-bold">Kanpur’s signature tech footprint</span>.
        </p>

        {/* Responsive CTA Buttons with Neon Shadowing */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto justify-center px-4"
        >
          <a
            href="#events"
            className="w-full sm:w-auto relative group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-pink rounded-xl text-white font-bold shadow-[0_0_25px_rgba(255,107,43,0.25)] hover:shadow-[0_0_40px_rgba(255,107,43,0.45)] transition-all duration-300 hover:scale-105 hover-trigger"
          >
            Explore Events
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl text-white font-bold backdrop-blur-md transition-all duration-300 hover:scale-105 hover-trigger"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Interactive Scroll Animation Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
          Explore Ecosystem
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center items-start">
          <div className="w-1.5 h-1.5 bg-accent-orange rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
