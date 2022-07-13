module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    'max-len': ['error', { code: 160 }],
  },
};
