
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          start: "#050810", // Deepest dark navy
          end: "#0B1121",   // Rich dark blue
          dark: "#020408",  // Almost black
        },
        // Colores Primarios ModulorIA (60%)
        primary: {
          dark: "#1B3C53",      // Azul Profundo
          medium: "#234C6A",    // Azul Medio - Primary Actions
          steel: "#456882",     // Azul Acero - Technical accents
          light: "#E0F2FE",     // Ice / Silver - Highlights
        },
        // Colores Secundarios (30%)
        secondary: {
          beige: "#D2C1B6",     // Beige Arena - Warmth balancer
        },
        // Colores de Acento (10% MAX!)
        accent: {
          copper: "#C67A52",    // Naranja Cobre - Primary CTA
          glow: "#FFB088",      // Copper Glow for effects
        },
        // Neutros
        neutral: {
          white: "#FFFFFF",
          gray: {
            50: "#F9F9F9",
            100: "#F3F4F6",
            200: "#E5E7EB",
            800: "#1F2937",
            900: "#111827",
          },
          black: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 2px 10px rgba(0, 0, 0, 0.2)",
        DEFAULT: "0 4px 16px rgba(0, 0, 0, 0.3)",
        md: "0 8px 30px rgba(0, 0, 0, 0.4)",
        lg: "0 20px 50px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(69, 104, 130, 0.3)",
        "copper-glow": "0 0 25px rgba(198, 122, 82, 0.4)",
      },
      animation: {
        "breathing": "breathing 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0B1121 0%, #1B3C53 100%)",
        "gradient-cta": "linear-gradient(135deg, #C67A52 0%, #b36943 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
