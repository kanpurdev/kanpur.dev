"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    if (!dot || !ring) return;

    // Set initial positions
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      // Instant responsive follow for dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Eased, spring-like lag follow for ring
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Ring expansion and glow activation when hovering interactive nodes
    const onMouseEnterLink = () => {
      gsap.to(dot, { scale: 1.8, backgroundColor: "rgb(255, 61, 113)", duration: 0.2 });
      gsap.to(ring, { scale: 1.6, borderColor: "rgb(255, 61, 113)", borderWidth: "2px", duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(dot, { scale: 1, backgroundColor: "rgb(255, 107, 43)", duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: "rgba(255, 107, 43, 0.35)", borderWidth: "1px", duration: 0.2 });
    };

    const setupInteractiveHover = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .hover-trigger"
      );

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    // Initial setup with a slight delay
    const timeout = setTimeout(setupInteractiveHover, 1000);

    // Re-bind when DOM mutations happen
    const observer = new MutationObserver(() => {
      setupInteractiveHover();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Tiny inner physical dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-orange rounded-full pointer-events-none z-[99999] hidden md:block"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Outer elegant ring / spotlight */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-9 h-9 border border-[rgba(255,107,43,0.35)] rounded-full pointer-events-none z-[99998] hidden md:block"
        style={{ mixBlendMode: "screen" }}
      />
    </>
  );
}
