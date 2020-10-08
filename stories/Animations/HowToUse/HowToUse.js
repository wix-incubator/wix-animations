import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import ExampleByInProp from './ExampleByInProp';
import ExampleByInPropRaw from '!raw-loader!./ExampleByInProp';

import ExampleByMounting from './ExampleByMounting';
import ExampleByMountingRaw from '!raw-loader!./ExampleByMounting';

import Markdown from 'wix-storybook-utils/Markdown';

import Readme from './HowToUse.md';
import H2 from '../H2';

export const HowToUse = () => {
  return (
    <div>
      <H2>Getting Started</H2>
      <CodeExample
        title="Use the 'show' prop to show/hide animations"
        code={ExampleByInPropRaw}
      >
        <ExampleByInProp />
      </CodeExample>
      <CodeExample
        title="You can just mount/unmount content inside Animator without using 'show' prop"
        code={ExampleByMountingRaw}
      >
        <ExampleByMounting />
      </CodeExample>
      <Markdown source={Readme} />
    </div>
  );
};

HowToUse.storyName = 'Basic Animation';
