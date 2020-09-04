require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@keegan-lillo/typescript-react'],
  parserOptions: { project: './tsconfig.eslint.json' },
}
