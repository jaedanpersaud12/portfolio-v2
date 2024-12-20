/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        "primary-button": "var(--primarybutton)",
        "secondary-button": "var(--secondarybutton)",
        accent: "var(--accent)",
        "dots-front": "var(--backgroundDots)",
        "dots-back": "var(--backgroundDotsBack)",
      },
      fontFamily: {
        alchadera: ["Alchadera", "sans-serif"],
      },
    },
  },
  plugins: [],
};
