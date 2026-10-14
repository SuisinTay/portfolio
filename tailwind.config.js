/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0f0e0d",
        surface: { 1: "#161413", 2: "#1d1a18" },
        line: "#2b2825",
        ink: "#f1ece4",
        muted: "#9a938a",
        accent: "#ff7a45",
      },
      fontFamily: {
        sans: ['"Geist Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"Geist Mono Variable"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(3.5rem, 12vw, 10rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em" },
        ],
        headline: [
          "clamp(2.5rem, 6vw, 4.75rem)",
          { lineHeight: "0.98", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: { container: "1200px" },
      zIndex: { nav: "50" },
    },
  },
  plugins: [],
};
