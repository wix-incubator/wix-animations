import React from 'react';
import ExampleDebug from './ExampleDebug';
import ExampleDebugRaw from '!raw-loader!./ExampleDebug';
import CodeExample from 'wix-storybook-utils/CodeExample';
import DebugMarkdown from './Debug.md';
import Markdown from 'wix-storybook-utils/Markdown';

export const Debug = () => (
  <div>
    <Markdown source={DebugMarkdown} />
    <CodeExample title="Debug" code={ExampleDebugRaw}>
      <ExampleDebug />
    </CodeExample>
  </div>
);
