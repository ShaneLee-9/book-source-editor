module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    srouceType: 'module',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': [2, 'windows'],
    'max-len': 0,
    camelcase: ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'import/order': 2,
    'import/newline-after-import': 2,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
    }],
    'import/no-unresolved': 0,
  },
};
