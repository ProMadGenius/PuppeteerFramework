module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:mocha/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    plugins: [
      'mocha',
    ],
  },
};
