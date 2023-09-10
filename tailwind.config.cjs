/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "system-ui", "sans-serif"],
      },
      textColor: {
        skin: {
          base: "var(--clr-txt-base)",
          "base-hvr": "var(--clr-txt-base-hvr)",
          "base-dark": "var(--clr-txt-base-dark)",
          "base-dark-hvr": "(--clr-txt-base-dark-hvr)",
          "hdng-base": "var(--clr-hdng-base)",
          "hdng-base-dark": "var(--clr-hdng-base-dark)",
          accent: "var(--clr-accent)",
          "accent-hvr": "var(--clr-accent-hvr)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--clr-bg)",
          "fill-shade": "var(--clr-bg-shade)",
          "fill-dark": "var(--clr-bg-dark)",
          "fill-shade-dark": "var(--clr-bg-shade-dark)",
          accent: "var(--clr-accent)",
          "accent-hvr": "var(--clr-accent-hvr)",
        },
      },
      gradientColorStops: {
        skin: {
          fill: "var(--clr-bg)",
          "fill-shade": "var(--clr-bg-shade)",
          "fill-dark": "var(--clr-bg-dark)",
          "fill-very-dark": "var(--clr-bg-very-dark)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
