module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
