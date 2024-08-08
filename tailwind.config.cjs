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
        "light-blue": "#D0E1EB",
        "light-gray": "#6F6F6F",
        "medium-gray": "#454545",
        "dark-gray": "#555555",
        "luna-purple": "#C4BBFB",
      },
    },
  },
  plugins: [],
};
