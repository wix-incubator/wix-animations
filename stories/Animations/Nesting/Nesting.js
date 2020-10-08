import React from 'react';
import ExampleNesting from './ExampleNesting';
import ExampleNestingRaw from '!raw-loader!./ExampleNesting';
import CodeExample from 'wix-storybook-utils/CodeExample';

export const Nesting = () => (
  <CodeExample title="Nesting" code={ExampleNestingRaw}>
    <ExampleNesting />
  </CodeExample>
);
