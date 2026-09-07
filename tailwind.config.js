/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171A20',
        body: '#4B5058',
        muted: '#8B8F96',
        canvas: '#FAF8F4',
        ink: '#171A20',
        accent: '#FF6B2C',
        burnt: '#B83A12',
        peach: '#FFF0E6',
        border: '#E8E6E1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
