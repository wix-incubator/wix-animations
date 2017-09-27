import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';
import ExampleSequence from './ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!./ExampleSequence';

import ExampleChildren from './ExampleChildren';
import ExampleChildrenRaw from '!raw-loader!./ExampleChildren';

import ExampleMixedChildren from './ExampleMixedChildren';
import ExampleMixedChildrenRaw from '!raw-loader!./ExampleMixedChildren';

import ExampleArray from './ExampleArray';
import ExampleArrayRaw from '!raw-loader!./ExampleArray';
import H2 from '../H2';
const Sequence = () => {
  return (
    <div>
      <H2>Multiple Children</H2>
      <CodeExample
        title="Multiple Children"
        code={ExampleChildrenRaw}
        >
        <ExampleChildren/>
      </CodeExample>
      <CodeExample
        title="Using the Sequence Prop"
        code={ExampleSequenceRaw}
        >
        <ExampleSequence/>
      </CodeExample>
      <CodeExample
        title="Mount/Unmount of children simultaneously"
        code={ExampleMixedChildrenRaw}
        >
        <ExampleMixedChildren/>
      </CodeExample>
      <CodeExample
        title="Array of children with .map() - don't forget the key prop!!! Otherwise it won't work..."
        code={ExampleArrayRaw}
        >
        <ExampleArray/>
      </CodeExample>
    </div>);
};

export default Sequence;

