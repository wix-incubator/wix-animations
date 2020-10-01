import React from 'react';
import ExampleDebug from './ExampleDebug';
import ExampleDebugRaw from '!raw-loader!./ExampleDebug';
import CodeExample from '../../utils/Components/CodeExample';
import DebugMarkdown from './Debug.md';
import Markdown from '../../utils/Components/Markdown';

export const Debug = () => (
  <div>
    <Markdown source={DebugMarkdown} />
    <CodeExample title="Debug" code={ExampleDebugRaw}>
      <ExampleDebug />
    </CodeExample>
  </div>
);
