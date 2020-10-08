import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import ExampleSequence from './ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!./ExampleSequence';

import ExampleChildren from './ExampleChildren';
import ExampleChildrenRaw from '!raw-loader!./ExampleChildren';

import ExampleMixedChildren from './ExampleMixedChildren';
import ExampleMixedChildrenRaw from '!raw-loader!./ExampleMixedChildren';

import ExampleArray from './ExampleArray';
import ExampleArrayRaw from '!raw-loader!./ExampleArray';

import ExampleSameTransition from './ExampleSameTransition';
import ExampleSameTransitionRaw from '!raw-loader!./ExampleSameTransition';
import H2 from '../H2';

export const Sequence = () => {
  return (
    <div>
      <H2>Multiple Children</H2>
      <CodeExample title="Multiple Children" code={ExampleChildrenRaw}>
        <ExampleChildren />
      </CodeExample>
      <CodeExample title="Using the Sequence Prop" code={ExampleSequenceRaw}>
        <ExampleSequence />
      </CodeExample>
      <CodeExample
        title="Mount/Unmount of children simultaneously"
        code={ExampleMixedChildrenRaw}
      >
        <ExampleMixedChildren />
      </CodeExample>
      <CodeExample
        title="Array of children with .map() - don't forget the key prop!!! Otherwise it won't work..."
        code={ExampleArrayRaw}
      >
        <ExampleArray />
      </CodeExample>
      <CodeExample
        title="Making 'translate' animation equal both on enter and on exit (smooth sync between 2 elements)"
        code={ExampleSameTransitionRaw}
      >
        <ExampleSameTransition />
      </CodeExample>
    </div>
  );
};

Sequence.storyName = 'Multiple children';
