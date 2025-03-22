/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      // SSPBlack: ['SourceSansPro-Black'],
      // SSPBlackIt: ['SourceSansPro-BlackIt'],
      // SSPBold: ['SourceSansPro-Bold'],
      // SSPBoldIt: ['SourceSansPro-BoldIt'],
      // SSPExLight: ['SourceSansPro-ExtraLight'],
      // SSPExLightIt: ['SourceSansPro-ExtraLightIt'],
      // SSPIt: ['SourceSansPro-It'],
      // SSPLight: ['SourceSansPro-Light'],
      // SSPLightIt: ['SourceSansPro-LightIt'],
      // SSPRegular: ['SourceSansPro-Regular'],
      // SSPSemiBold: ['SourceSansPro-Semibold'],
      // SSPSemiBoldIt: ['SourceSansPro-SemiboldIt'],
      // bold: ['SourceSansPro-Semibold'],
    },
    extend: {
      colors: {
        primary: '#FF585D',
        black: '#191919',
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.semibold': {
          fontWeight: 600,
          fontFamily: 'SourceSansPro-Semibold',
        },
      });
    }),
  ],
};
