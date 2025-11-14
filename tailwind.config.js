/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4db',
          300: '#dbd5c7',
          400: '#c8bfa9',
          500: '#b5a98b',
          600: '#9a8e6e',
          700: '#7a7055',
          800: '#5a5340',
          900: '#3a362b',
        },
        earth: {
          50: '#f7f6f4',
          100: '#eeedea',
          200: '#d5d2ca',
          300: '#bcb7ab',
          400: '#8a826c',
          500: '#6d6550',
          600: '#575140',
          700: '#424035',
          800: '#2d2b24',
          900: '#1a1814',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e8ede8',
          200: '#d1dbd1',
          300: '#b9c9b9',
          400: '#8aa58a',
          500: '#6b876b',
          600: '#556d55',
          700: '#425542',
          800: '#2f3d2f',
          900: '#1c261c',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

