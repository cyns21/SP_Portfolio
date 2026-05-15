import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        velvet: "rgb(var(--velvet) / <alpha-value>)",
        blush: "rgb(var(--blush) / <alpha-value>)",
        powder: "rgb(var(--powder) / <alpha-value>)",
        rose: "rgb(var(--rose) / <alpha-value>)",
        chrome: "rgb(var(--chrome) / <alpha-value>)",
        cherry: "rgb(var(--cherry) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        brutal: "8px 8px 0 rgb(var(--ink) / 1)",
        glow: "0 20px 80px rgb(var(--rose) / 0.3)",
        chrome: "inset 0 1px 0 rgb(255 255 255 / 0.7), 0 18px 50px rgb(19 17 18 / 0.18)"
      },
      backgroundImage: {
        "soft-noise":
          "radial-gradient(circle at 1px 1px, rgb(19 17 18 / 0.08) 1px, transparent 0)",
        "barbed-line":
          "repeating-linear-gradient(135deg, transparent 0 18px, rgb(19 17 18 / 0.13) 18px 20px, transparent 20px 34px)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
