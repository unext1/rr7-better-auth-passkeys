import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: false,
  typescript: {
    tsconfigPath: 'tsconfig.json'
  },
  rules: {
    'no-new': 'off',
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'ts/no-unsafe-assignment': 'off',
    'ts/no-unsafe-call': 'off',
    'ts/strict-boolean-expressions': 'off',
    'ts/no-unsafe-member-access': 'off',
    'ts/no-unsafe-argument': 'off',
    'ts/no-unsafe-return': 'off',
    'perfectionist/sort-imports': 'off',
    'node/prefer-global/buffer': 'off',
    'ts/switch-exhaustiveness-check': 'off',
    'ts/restrict-template-expressions': 'off',
    'ts/no-explicit-any': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'ts/no-use-before-define': 'off'
  }
});
