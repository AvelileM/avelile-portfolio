import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0D12",
          surface: "#12151C",
          raised: "#181C25",
        },
        border: {
          DEFAULT: "#232733",
          subtle: "#1A1E28",
        },
        ink: {
          DEFAULT: "#E7E9EE",
          muted: "#8B93A7",
          faint: "#5B6478",
        },
        accent: {
          DEFAULT: "#5EEAD4",
          dim: "#2DD4BF",
          amber: "#F5A623",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
