import React from 'react';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../README.md';

export const Introduction = () => <Markdown source={Readme} />;

export default {
  title: 'Introduction',
};
