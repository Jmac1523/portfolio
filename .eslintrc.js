module.exports = {
  plugins: ['jest'],
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
};
