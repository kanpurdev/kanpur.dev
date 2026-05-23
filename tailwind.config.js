/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(3, 3, 5)",
        foreground: "rgb(243, 244, 246)",
        accent: {
          orange: {
            DEFAULT: "rgb(255, 107, 43)",
            glow: "rgba(255, 107, 43, 0.15)",
          },
          pink: {
            DEFAULT: "rgb(255, 61, 113)",
            glow: "rgba(255, 61, 113, 0.15)",
          },
          violet: {
            DEFAULT: "rgb(139, 92, 246)",
            glow: "rgba(139, 92, 246, 0.15)",
          },
          cyan: {
            DEFAULT: "rgb(6, 182, 212)",
            glow: "rgba(6, 182, 212, 0.15)",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
        clash: ["var(--font-clash-display)", "Outfit", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        }
      }
    },
  },
  plugins: [],
};
