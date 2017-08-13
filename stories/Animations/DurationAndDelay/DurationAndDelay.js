import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import ExampleTiming from './ExampleTiming';
import ExampleTimingRaw from '!raw-loader!./ExampleTiming';

import ExampleDelay from './ExampleDelay';
import ExampleDelayRaw from '!raw-loader!./ExampleDelay';

import ExampleDelayEnter from './ExampleDelayEnter';
import ExampleDelayEnterRaw from '!raw-loader!./ExampleDelayEnter';

import ExampleDelayExit from './ExampleDelayExit';
import ExampleDelayExitRaw from '!raw-loader!./ExampleDelayExit';
import H2 from '../H2';

const DurationAndDelay = () => {
  return (
    <div>
      <H2>Duration and Delay</H2>
      <CodeExample title="Timing"
                   code={ExampleTimingRaw}>
        <ExampleTiming/>
      </CodeExample>
      <CodeExample title="Enter Delay"
                   code={ExampleDelayEnterRaw}>
        <ExampleDelayEnter/>
      </CodeExample>
      <CodeExample title="Exit Delay"
                   code={ExampleDelayExitRaw}>
        <ExampleDelayExit/>
      </CodeExample>
      <CodeExample title="Enter and Exit Delay"
                   code={ExampleDelayRaw}>
        <ExampleDelay/>
      </CodeExample>
    </div>);
};

export default DurationAndDelay;

