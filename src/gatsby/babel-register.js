require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: { esmodules: true } }],
  ],
})
