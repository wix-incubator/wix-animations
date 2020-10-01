import React from 'react';
import Markdown from './utils/Components/Markdown';
import Readme from '../README.md';

export const Introduction = () => <Markdown source={Readme} />;

export default {
  title: 'Introduction',
};
