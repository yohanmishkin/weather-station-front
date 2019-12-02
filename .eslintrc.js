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
    'plugin:react/recommended',
  ],
  plugins: ['jest', 'prettier', 'react', 'react-hooks'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/display-name': ['off'],
    'react-hooks/rules-of-hooks': ['error'],
     "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React"
      }
    ]
  },
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
  settings: {
    react: {
      version: 'detect'
    }
  }
};
