/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
      colors: {
        brand: {
          DEFAULT: "#64a9ec", // primary
          50: "#f3f9ff",
          100: "#e6f3ff",
          200: "#cfe9ff",
          300: "#a7d8ff",
          400: "#79c5ff",
          500: "#64a9ec", // main
          600: "#517ac6", // darker accent
          700: "#2b4592", // deep navy
          800: "#21336f",
          900: "#17234d",
        },
        accent: "#517ac6",
        secondary: "#acb5d4",
        paper: "#fefeff",
        neutral: {
          50: "#fbfbfd",
          100: "#f6f7fb",
          200: "#eceff6",
          300: "#dfe6f3",
          400: "#c7d2ea",
          500: "#6b7280",
        },
        navy: "var(--color-navy)",
        "text-default": "var(--text-default)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: ["Poppins", "Inter"],
      },
      borderRadius: {
        "lg-2": "12px",
      },
      boxShadow: {
        "soft-lg": "0 8px 24px rgba(43, 69, 146, 0.08)",
        "soft-md": "0 6px 18px rgba(43, 69, 146, 0.06)",
      },
    },
  },
  plugins: [],
};
