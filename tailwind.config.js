/** Mirrors design tokens; Tailwind v4 primary config lives in `src/app/globals.css` (`@theme`). */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A192F",
          800: "#112240",
        },
        gold: "#93846F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        widest: "0.2em",
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
};
