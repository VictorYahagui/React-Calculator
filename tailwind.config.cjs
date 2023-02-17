/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif']
      },
      colors: {
        violet: {
          500: '#807ECE'
        },
        extend: {
          backgroundImage: {
            'button': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
