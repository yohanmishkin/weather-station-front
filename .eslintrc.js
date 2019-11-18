// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest', 'prettier', 'react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/display-name': ['off']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
