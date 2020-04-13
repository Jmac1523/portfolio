const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        hooks: path.join(__dirname, 'src/hooks'),
        assets: path.join(__dirname, 'src/assets'),
        sections: path.join(__dirname, 'src/sections'),
        components: path.join(__dirname, 'src/components'),
      },
    },
  ],
};
