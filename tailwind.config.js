module.exports = {
content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],

  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#F5F8FA',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}