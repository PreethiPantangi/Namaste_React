/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    transform: {
      '95': 'scale(0.95)',
      '85': 'scale(0.85)',
      '50-3': 'translate(-50%, -3%)'
    },
    fontFamily: {
      'family1': '"Basis Grotesque Pro", sans-serif'
    }
  },
  plugins: [],
}

