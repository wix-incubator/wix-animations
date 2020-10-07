import React from 'react';

import {storiesOf} from '@storybook/react';

import Markdown from './utils/Components/Markdown';
import CodeExample from './utils/Components/CodeExample';

import ExampleNesting from '../stories/Animations/ExampleNesting';
import ExampleNestingRaw from '!raw-loader!../stories/Animations/ExampleNesting';

import HowToUse from './Animations/HowToUse/HowToUse';
import CssStyles from './Animations/CssStyles/CssStyles';
import Sequence from './Animations/Sequence/Sequence';
import DurationAndDelay from './Animations/DurationAndDelay/DurationAndDelay';
import CustomClasses from './Animations/CustomClasses/CustomClasses';
import CustomHeightWidth from './Animations/CustomHeightWidth/CustomHeightWidth';
import HowToDebug from './Animations/Debug/HowToDebug';

import FullAPI from '../stories/Animations/FullAPI.md';
import Readme from '../README.md';
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Introduction', module)
  .add('Getting Started', () => (<Markdown source={Readme}/>));

storiesOf('Animator', module)
  .add('Basic Animation', () => (<HowToUse/>))
  .add('What can be animated', () => (<CssStyles/>))
  .add('Multiple children', () => (<Sequence/>))
  .add('Duration & Delay', () => (<DurationAndDelay/>))
  .add('Nesting', () => (
    <CodeExample
      title="Nesting"
      code={ExampleNestingRaw}
      >
      <ExampleNesting/>
    </CodeExample>
  ))
  .add('Custom Height/Width', () => (<CustomHeightWidth/>))
  .add('Custom Classes & Styles', () => (<CustomClasses/>))
  .add('Debug', () => (<HowToDebug/>))
  .add('Full API', () => (
    <Markdown source={FullAPI}/>
  ));
