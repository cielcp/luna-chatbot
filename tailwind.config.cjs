module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "off-white": "#F3F3F3",
        blue: {
          100: "#D0E1EB",
          200: "#83949D",
        },
        gray: {
          100: "#6F6F6F",
          200: "#C7C7C7",
          500: "#454545",
          800: "#555555",
          900: "#28282A",
        },
        purple: {
          100: "#C4BBFB",
          200: "#535475",
        },
      },
      animation: {
        "fade-out": "fadeOut 1s forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
