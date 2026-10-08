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
          dark: '#070709',
          surface: '#0d0d11',
          card: '#121217',
          cardHover: '#181820',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(225, 29, 72, 0.4)',
          red: '#e11d48',
          redHover: '#f43f5e',
          redGlow: '#ff1e42',
          crimson: '#be123c',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
