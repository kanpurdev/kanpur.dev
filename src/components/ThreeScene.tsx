"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    // Move camera back to capture a much wider scope
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles Grid Count
    const particlesCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Initial Coordinates: Spread across the entire screen volume
    for (let i = 0; i < particlesCount; i++) {
      // Spherical distribution covering a massive space
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Radius spans all the way up to 13 units to fill the entire viewport
      const r = Math.random() * 13;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Curated glowing cyber colors (Orange, Pink, Violet, Cyan)
      const colorRatio = Math.random();
      let rColor = 1.0;
      let gColor = 1.0;
      let bColor = 1.0;

      if (colorRatio < 0.25) {
        // Cyber Orange: #ff6b2b
        rColor = 1.0; gColor = 0.42; bColor = 0.17;
      } else if (colorRatio < 0.5) {
        // Cyber Pink/Red: #ff3d71
        rColor = 1.0; gColor = 0.24; bColor = 0.44;
      } else if (colorRatio < 0.75) {
        // Cyber Violet: #8b5cf6
        rColor = 0.54; gColor = 0.36; bColor = 0.96;
      } else {
        // Neon Cyan: #06b6d4
        rColor = 0.02; gColor = 0.71; bColor = 0.83;
      }

      colors[i * 3] = rColor;
      colors[i * 3 + 1] = gColor;
      colors[i * 3 + 2] = bColor;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    // Create a smooth round glowing dot via Canvas
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.85)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      // Slightly larger size for beautiful glowing ambient backdrops
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: texture,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Mouse follow offsets
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX - window.innerWidth / 2) * 0.0008;
      targetY = (event.clientY - window.innerHeight / 2) * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth lag follow for mouse interactions
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // CONTINUOUS ORBITAL ROTATION: Smooth cosmic spin across multiple axes
      particlesMesh.rotation.y = elapsedTime * 0.045 + mouseX;
      particlesMesh.rotation.x = elapsedTime * 0.022 + mouseY;
      particlesMesh.rotation.z = elapsedTime * 0.015;

      // ORGANIC DRIFT EFFECT: Continuously move and pulse individual particles
      const positionsArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const index = i * 3;
        
        // Use trigonometry to calculate continuous wave coordinates
        const angleX = elapsedTime * 0.25 + i * 0.03;
        const angleY = elapsedTime * 0.18 + i * 0.025;

        // Apply smooth floating oscillations
        positionsArray[index] += Math.sin(angleX) * 0.0022;
        positionsArray[index + 1] += Math.cos(angleY) * 0.0022;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Clean up WebGL resources
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
