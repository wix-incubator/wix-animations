import React from 'react';
import Markdown from 'wix-storybook-utils/Markdown';
import FullAPIMarkdown from './FullAPI.md';

export const FullAPI = () => <Markdown source={FullAPIMarkdown} />;

FullAPI.storyName = 'Full API';
