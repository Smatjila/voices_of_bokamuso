const { heroui } = require('@heroui/theme');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary Palette
        primary: colors.indigo[900],       // #2E3A59
        secondary: colors.emerald[600],    // #059669
        tertiary: colors.amber[300],       // #F2CC8F
        
        // Neutrals (renamed for clarity)
        light: colors.stone[50],           // Off-white (#F4F1DE)
        dark: colors.gray[800],            // Charcoal (#3D405B)
        black: colors.gray[900],           // Soft black (#1A1A1A)
        
        // Optional: Semantic names
        accent: colors.emerald[500],       // For interactive states
        danger: colors.rose[500],          // For errors/alerts
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};