const _ = require('lodash/fp');
const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env) => {
  const newConfig = wixStorybookConfig(genDefaultConfig(config, env));

  return _.merge(newConfig, {
    context: path.resolve(__dirname, '../src'),
    // resolve: {
    //   alias: {
    //     'wix-style-react': path.resolve(__dirname, '../src')
    //   }
    // }
  });
};
