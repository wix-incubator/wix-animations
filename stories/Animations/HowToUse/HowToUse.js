import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import ExampleByInProp from './ExampleByInProp';
import ExampleByInPropRaw from '!raw-loader!./ExampleByInProp';

import ExampleByMounting from './ExampleByMounting';
import ExampleByMountingRaw from '!raw-loader!./ExampleByMounting';

import Markdown from '../../utils/Components/Markdown';

import Readme from './HowToUse.md';

const HowToUse = () => {
  return (
    <div>
      <CodeExample title="Use can use the 'show' prop to show/hide animations"
                   code={ExampleByInPropRaw}>
        <ExampleByInProp/>
      </CodeExample>
      <CodeExample title="You can just mount/unmount content inside Animator without using 'show' prop"
                   code={ExampleByMountingRaw}>
        <ExampleByMounting/>
      </CodeExample>
      <Markdown source={Readme}/>
    </div>);
};

export default HowToUse;

