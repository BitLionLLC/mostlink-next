const next = require('eslint-config-next');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...next,
  {
    rules: {
      eqeqeq: 'off',
      curly: 'error',
      quotes: ['error', 'single'],
      indent: ['error', 2],
      semi: ['error', 'always'],
    },
  },
];
