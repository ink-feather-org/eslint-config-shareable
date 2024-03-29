#  @ink-feather-org/eslint-config-shareable
## What is this?

Eslint shareable config used in most ink-feather-org projects.
This only contains rule overrides and is meant to be applied after an airbnb-like config.

## Vue Setup

`pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-functional eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-vue typescript vue-eslint-parser webpack @ink-feather-org/eslint-config-shareable`

### .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@feather-ink/eslint-config-shareable'
  ],
  plugins: [
    'import',
    'node'
  ]
}
```

## Only typescript Setup

`pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-functional eslint-plugin-import eslint-plugin-node eslint-plugin-promise typescript vue-eslint-parser eslint-config-airbnb-typescript @ink-feather-org/eslint-config-shareable`

### .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    '@feather-ink/eslint-config-shareable'
  ],
  plugins: [
    'import',
    'node'
  ]
}
```
