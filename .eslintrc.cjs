module.exports = {
  root: true,
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
    require.resolve('eslint-config-airbnb-typescript'),
  ],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/comma-dangle': 'off',
  },
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
