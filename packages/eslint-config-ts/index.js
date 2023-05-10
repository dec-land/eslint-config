const { existsSync } = require('node:fs');
const { join } = require('node:path');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json';

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'unused-imports'],
  overrides: !existsSync(join(process.cwd(), tsconfig))
    ? []
    : [
        {
          parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: [tsconfig],
          },
          parser: '@typescript-eslint/parser',
          excludedFiles: ['**/*.md/*.*'],
          files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
          rules: {
            // Already in plugins + require parser
            '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
            '@typescript-eslint/no-implied-eval': 'error',
            '@typescript-eslint/no-throw-literal': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            // end
          },
        },
        {
          files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
          plugins: ['jest'],
          extends: ['plugin:jest/recommended'],
          rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off'
          }
        },
      ],
  rules: {
    // Disable typescript specific ones that need parser and tsconfig file, enable them in overrides
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // End here

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-continue': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/no-named-default': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/export': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
};
