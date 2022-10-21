module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors:{
        outlineBg:'rgba(41,98,255,0.1)'
      },
      boxShadow:{
        none:'0px 0px 0px',
        default:'0px 2px 3px rgba(51,51,51,0.2)',
        primary:'0px 2px 3px  rgba(41,98,255,0.2)',
        secondary:'0px 2px 3px rgba(69,90,100,0.2)',
        danger:'0px 2px 3px rgba(211,47,47,0.2)',
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }