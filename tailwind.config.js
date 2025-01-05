/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          logo: ['Space Grotesk', 'JetBrains Mono', 'sans-serif'],
          heading: ['Cal Sans', 'Inter', 'sans-serif'],
          sans: ['Inter', 'sans-serfi'],
        },
      },
  },
  plugins: [],
}

