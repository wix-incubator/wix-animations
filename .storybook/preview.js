const addParameters = require('@storybook/react').addParameters;

addParameters({
  options: {
    storySort: {
      order: ['Introduction', 'Animator'],
    },
  },
});
