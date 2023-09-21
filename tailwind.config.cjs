const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "4/3": "4 / 3",
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
          "accent-shade": "var(--clr-accent-shade)",
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
          "accent-shade": "var(--clr-accent-shade)",
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
      borderColor: {
        skin: {
          base: "var(--clr-brdr-base)",
          "base-shade": "var(--clr-brdr-base-shade)",
          "base-dark": "var(--clr-brdr-base-dark)",
          "base-shade-dark": "var(--clr-brdr-base-shade-dark)",
          accent: "var(--clr-accent)",
          "accent-shade": "var(--clr-accent-shade)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
