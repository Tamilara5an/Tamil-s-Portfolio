/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'arrow-flow': 'arrow-flow 1.5s linear infinite',
      },
      keyframes: {
        'arrow-flow': {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(-50%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}