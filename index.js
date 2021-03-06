/* Copyright 2021 The @ink-feather-org/eslint-config-shareable Contributors.
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

/* eslint-disable @typescript-eslint/no-var-requires, no-undef, import/no-extraneous-dependencies */
module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:node/recommended-module',
    'plugin:promise/recommended',
  ],
  rules: {
    // Remember to change in .editorconfig also, although I am not sure if that file is even needed?
    'max-len': [
      'error',
      {
        code: 1024,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'curly': 'off',
    'no-inner-declarations': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'never', ],
    'no-param-reassign': 'off',
    'comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }, ],
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }, ],
    'quote-props': 'off',
    'arrow-parens': 'off',
    'nonblock-statement-body-position': ['error', 'below', ],
    // https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
    'no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', }, ],
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', }, ],
    'no-plusplus': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-underscore-dangle': 'off',
    'no-await-in-loop': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-loop-func': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-continue': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/semi': 'off',
    'node/no-missing-import': 'off',
    'promise/param-names': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'promise/always-return': 'off',
    'import/no-unresolved': ['error', { ignore: ['pkg', ], }, ],
    '@typescript-eslint/no-throw-literal': 'off',
    'no-bitwise': 'off',
  },
}
