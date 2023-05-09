const { default: linaria } = require('@linaria/vite');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [linaria()],
    });
  },
};
