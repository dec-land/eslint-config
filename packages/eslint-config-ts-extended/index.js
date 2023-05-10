const { existsSync } = require('node:fs');
const { join } = require('node:path');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json';

module.exports = {
  overrides: !existsSync(join(process.cwd(), tsconfig))
    ? []
    : [
      {
        files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
        extends: ['@dec-land/eslint-config-ts'],
        rules: {
          '@typescript-eslint/no-floating-promises': 'error',
          '@typescript-eslint/no-misused-promises': 'error',
          '@typescript-eslint/await-thenable': 'error',
          '@typescript-eslint/no-unnecessary-type-assertion': 'error',
          '@typescript-eslint/no-unsafe-argument': 'error',
          '@typescript-eslint/no-unsafe-assignment': 'error',
          '@typescript-eslint/no-unsafe-call': 'error',
          '@typescript-eslint/no-unsafe-member-access': 'error',
          '@typescript-eslint/no-unsafe-return': 'error',
          '@typescript-eslint/require-await': 'error',
          '@typescript-eslint/restrict-plus-operands': 'error',
          '@typescript-eslint/restrict-template-expressions': 'error',
          '@typescript-eslint/unbound-method': 'error',
        },
      },
      {
        files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
        rules: {
          '@typescript-eslint/no-unsafe-assignment': 'off',
          '@typescript-eslint/unbound-method': 'off',
          'jest/unbound-method': 'error',
        }
      },
    ]
};
