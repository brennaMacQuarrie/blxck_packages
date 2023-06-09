/** @type {import('tailwindcss').Config} */

module.exports = {
  variants: {
    textColor: ['hover', 'focus', 'group-hover'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blx-gold': '#e7c376',
        'blx-blue': '#7ebec5',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
    fontFamily: {
      Russo: ["Russo", "sans-serif"],
      SpaceAge: ["SpaceAge", "sans-serif"],
      Arial: ["Arial", "sans-serif"]
    },
    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      base: '1.2rem',
      'lg': '1.5rem',
      xl: '2rem',
      '2xl': '2.8rem',
      '3xl': '3.8rem',
      '4xl': '5.4rem',
      '5xl': '8.2rem',
      '6xl': '10rem',
    },
    
  },
  plugins: [],
}
