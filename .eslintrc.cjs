module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/multi-word-component-names': ['off'],
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'vue/html-self-closing': ['off'],
  },
  global: {
    tools: true,
  },
};
