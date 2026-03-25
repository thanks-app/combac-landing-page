import defaultTheme from "tailwindcss/defaultTheme";
import config from "./src/utils/config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sketch: ["CabinSketch", ...defaultTheme.fontFamily.mono],
        sans: ["Rowdies", ...defaultTheme.fontFamily.sans],
        greatVibes: ["Great Vibes", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "dark",
      {
        combac: {
          primary: "#7C3AED",
          "primary-content": "#FFFFFF",
          secondary: "#A78BFA",
          "secondary-content": "#FFFFFF",
          accent: "#10B981",
          "accent-content": "#FFFFFF",
          neutral: "#334155",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
          "base-300": "#334155",
          "base-content": "#F1F5F9",
          info: "#C4B5FD",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
      config.theme,
    ],
  },
};
