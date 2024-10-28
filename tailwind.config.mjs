/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "rgba(0, 9, 26, 1)",
        pink: "rgba(235, 55, 88, 1)",
        white: "rgba(255, 255, 255, 1)",
        dark_pink: "rgba(223, 22, 59, 1)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        display: ["Atkinson Hyperlegible", "sans-serif"],
      },
      fontSize: {
        h3: "4.25rem",
        h3_m: "3.5rem",
        h3_s: "1.8rem",

        h4: "1.7rem",
        h4_m: "1.4rem",
        h4_s: "1.2rem",

        p: "1.3rem",
        p_m: "1rem",
        p_s: "0.9rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
