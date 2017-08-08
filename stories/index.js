import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
// import Markdown from './utils/Components/Markdown';
import CodeExample from './utils/Components/CodeExample';
// import Readme from '../../src/Animator/README.md';

import ExampleTiming from '../stories/Animations/ExampleTiming';
import ExampleTimingRaw from '!raw-loader!../stories/Animations/ExampleTiming';

import ExampleClasses from '../stories/Animations/ExampleClasses';
import ExampleClassesRaw from '!raw-loader!../stories/Animations/ExampleClasses';

import ExampleSequence from '../stories/Animations/ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!../stories/Animations/ExampleSequence';

import ExampleNesting from '../stories/Animations/ExampleNesting';
import ExampleNestingRaw from '!raw-loader!../stories/Animations/ExampleNesting';

import ExampleDebug from '../stories/Animations/ExampleDebug';
import ExampleDebugRaw from '!raw-loader!../stories/Animations/ExampleDebug';

import HowToUse from './Animations/HowToUse/HowToUse';
import CssStyles from './Animations/CssStyles/CssStyles';


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Animator', module)
  .add('Getting Started', () => (
    <HowToUse/>
  ))
  .add('What can be animated', () => (
  <div>
    <CssStyles />
  </div>
  ))
  .add('Multiple children', () => (
    <CodeExample title="Sequence"
                 code={ExampleSequenceRaw}>
      <ExampleSequence/>
    </CodeExample>
  ))
  .add('Duration & Delay', () => (
    <CodeExample title="Timing"
                 code={ExampleTimingRaw}>
      <ExampleTiming/>
    </CodeExample>
  ))
  .add('Nesting', () => (
    <CodeExample title="Nesting"
                 code={ExampleNestingRaw}>
      <ExampleNesting/>
    </CodeExample>
  ))
  .add('Custom Classes & Styles', () => (
    <CodeExample title="Scale"
                 code={ExampleClassesRaw}>
      <ExampleClasses/>
    </CodeExample>
  ))
  .add('Debug', () => (
    <CodeExample title="Debug"
                 code={ExampleDebugRaw}>
      <ExampleDebug/>
    </CodeExample>
  ))
  .add('Full API', () => (
    <div>api goes here</div>
  ))