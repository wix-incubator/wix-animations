const _ = require('lodash/fp');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env, defaultConfig) => {
  const newConfig = wixStorybookConfig(defaultConfig);

  return _.merge(newConfig, {
    context: path.resolve(__dirname, '../src')
    // resolve: {
    //   alias: {
    //     'wix-style-react': path.resolve(__dirname, '../src')
    //   }
    // }
  });
};
