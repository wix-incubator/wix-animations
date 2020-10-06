const path = require("path");

module.exports = {
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
          localsConvention: "camelCase",
        },
      },
    },
  ],
  stories: ["../stories/**/*.stories.@(js|mdx)"],
};
