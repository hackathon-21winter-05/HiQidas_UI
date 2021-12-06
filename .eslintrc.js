module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    './eslint-vue-ts-recommended.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    eqeqeq: 'error',
    'vue/eqeqeq': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' },
        style: { lang: 'scss' },
      },
    ],
    'vue/component-api-style': ['error', ['composition']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    ],
  },
}
