module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors:{
        outlineBg:'rgba(41,98,255,0.1)'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }