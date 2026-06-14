"use client";

import { useState } from "react";
import { Github, Twitter, MessageSquare, ArrowRight } from "lucide-react";

export default function Footer() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (e: any) => {
  e.preventDefault();

  setSuccess(`Subscribed: ${email}`);
  setError("");
  setEmail("");
};
  return (
    <footer className="relative bg-background overflow-hidden border-t border-white/5 z-10">
      {/* Background visual grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      {/* Atmospheric center-top glowing light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand/Signature column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="font-clash text-2xl font-black tracking-widest text-white hover:text-accent-orange transition-colors">
              KANPUR<span className="text-accent-orange">.DEV</span>
            </a>
            <p className="text-white/45 text-sm md:text-[15px] leading-relaxed tracking-wide max-w-sm">
              Forging Kanpur’s premium developer ecosystem. Uniting systems engineers, frontend artists, and startup founders under a single banner of high-performance coding.
            </p>
            {/* Social channels */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-orange/40 hover:bg-accent-orange/10 hover:text-accent-orange flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-pink/40 hover:bg-accent-pink/10 hover:text-accent-pink flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-violet/40 hover:bg-accent-violet/10 hover:text-accent-violet flex items-center justify-center transition-all duration-300"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-white/30 tracking-widest uppercase">
              INDEX
            </span>
            <ul className="flex flex-col gap-3">
              {["About", "Events", "Contributors", "FAQ"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link === "Contributors" ? "team" : link.toLowerCase()}`}
                    className="text-white/50 hover:text-accent-orange transition-colors text-sm font-sans tracking-wide block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup module */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-white/30 tracking-widest uppercase">
              DEVELOPS MONTHLY
            </span>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs font-sans">
              Subscribe to receive instant pings for hackathons, technical meetups, and ecosystem indicators.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="developer@domain.com"
  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-orange/40 text-sm transition-colors"
/>
              <button
                type="submit"
                className="w-10 h-10 rounded-lg bg-accent-orange hover:bg-accent-pink text-white flex items-center justify-center transition-colors duration-300"
              >
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </form>
            {success && (
  <p className="text-green-400 text-sm mt-2">
    {success}
  </p>
)}

{error && (
  <p className="text-red-400 text-sm mt-2">
    {error}
  </p>
)}
          </div>
        </div>

        {/* Legal footer bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/30">
          <span>&copy; 2026 kanpur.dev. All telemetry active.</span>
          <div className="flex flex-col sm:flex-row items-center gap-3">
  <div className="flex items-center gap-2 text-white/30">
    <span>Built with</span>

    <a
      href="https://chiragvishnoi-01.github.io/chirag.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <span className="text-red-500 hover:scale-110 inline-block transition-transform duration-300">
        ❤️
      </span>
    </a>
  </div>

  <span className="hidden sm:inline text-white/10">|</span>

  <a
    href="https://kanpurai.space"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/30 hover:text-accent-pink transition-colors duration-300"
  >
    &{" "}
    <span className="text-white hover:text-accent-pink transition-colors duration-300 font-bold">
      kanpur
    </span>
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
