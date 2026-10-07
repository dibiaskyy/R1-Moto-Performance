/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        r1: {
          dark: '#0b0f19',
          card: '#161922',
          cardHover: '#1f2430',
          border: '#2a3142',
          red: '#e11d48',
          redHover: '#be123c',
          accent: '#f43f5e',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
