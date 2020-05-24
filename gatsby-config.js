const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        utils: path.join(__dirname, 'src/utils'),
        hooks: path.join(__dirname, 'src/hooks'),
        assets: path.join(__dirname, 'src/assets'),
        styles: path.join(__dirname, 'src/styles'),
        sections: path.join(__dirname, 'src/sections'),
        components: path.join(__dirname, 'src/components'),
      },
    },
  ],
};
