import React from 'react';
import ExampleDebug from './ExampleDebug';
import ExampleDebugRaw from '!raw-loader!./ExampleDebug';
import CodeExample from '../../utils/Components/CodeExample';
import Debug from './Debug.md';
import Markdown from '../../utils/Components/Markdown';

const HowToDebug = () => (
  <div>
    <Markdown source={Debug} />
    <CodeExample title="Debug" code={ExampleDebugRaw}>
      <ExampleDebug />
    </CodeExample>
  </div>
);

export default HowToDebug;
