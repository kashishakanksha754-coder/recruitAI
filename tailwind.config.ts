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
        background: "#FAFAFA",
        foreground: "#2D1B69",
        purple: {
          950: "#1A0F3E",
          900: "#2D1B69",
          800: "#3B2380",
          700: "#5240A8",
          600: "#6B5FBF",
          500: "#8B7FCC",
          300: "#B8B0E0",
          200: "#D0CBF0",
          100: "#E8E4F8",
          50:  "#F5F3FC",
        },
        coral: {
          700: "#C94840",
          600: "#E05850",
          500: "#F0625A",
          400: "#F47D76",
          300: "#F9A09B",
          100: "#FCE8E7",
          50:  "#FFF5F5",
        },
        surface: "#F5F4F8",
        muted:   "#6B6B7D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:    "0 2px 20px rgba(45,27,105,0.08)",
        "card-lg":"0 4px 40px rgba(45,27,105,0.12)",
        icon:    "0 2px 12px rgba(45,27,105,0.10)",
        btn:     "0 4px 16px rgba(240,98,90,0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
