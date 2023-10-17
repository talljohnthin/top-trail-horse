/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-red": "var(--brand-red)",
        "brand-yellow": "var(--brand-yellow)",
        "brand-green": "var(--brand-green)",
        "brand-black": "var(--brand-black)",
        "brand-gray": "var(--brand-gray)",
        "brand-darkgray": "var(--brand-darkgray)",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.875rem" }], // H6
        xl: ["1.25rem", { lineHeight: "2.25rem" }], // H5
        "2xl": ["1.75rem", { lineHeight: "2rem" }], // H4
        "3xl": ["2rem", { lineHeight: "1.125" }], // H3
        "4xl": ["3rem", { lineHeight: "1.125" }], // H2
        "5xl": ["4rem", { lineHeight: "1.125" }], // H1
        "6xl": ["5.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
