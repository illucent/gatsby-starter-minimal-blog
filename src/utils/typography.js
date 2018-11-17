import Typography from 'typography';


const config = require('../../config/SiteConfig');


const typography = new Typography({
  title: 'minimal',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.41,
  scaleRatio: 3.157,
  headerFontFamily: [config.headerFontFamily, 'monospace'],
  bodyFontFamily: [config.bodyFontFamily, 'monospace'],
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}


export default typography;
