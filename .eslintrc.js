module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
