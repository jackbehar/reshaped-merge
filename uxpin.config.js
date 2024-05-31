module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Example Design System'
};
