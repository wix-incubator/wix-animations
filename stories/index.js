import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
// import Markdown from './utils/Components/Markdown';
import CodeExample from './utils/Components/CodeExample';
// import Readme from '../../src/Animator/README.md';

import ExampleOpacity from '../stories/Animations/ExampleOpacity';
import ExampleOpacityRaw from '!raw-loader!../stories/Animations/ExampleOpacity';

import ExampleTiming from '../stories/Animations/ExampleTiming';
import ExampleTimingRaw from '!raw-loader!../stories/Animations/ExampleTiming';

import ExampleOpacityAndScale from '../stories/Animations/ExampleOpacityAndScale';
import ExampleOpacityAndScaleRaw from '!raw-loader!../stories/Animations/ExampleOpacityAndScale';

import ExampleTranslate from '../stories/Animations/ExampleTranslate';
import ExampleTranslateRaw from '!raw-loader!../stories/Animations/ExampleTranslate';

import ExampleTranslateSize from '../stories/Animations/ExampleTranslateSize';
import ExampleTranslateSizeRaw from '!raw-loader!../stories/Animations/ExampleTranslateSize';

import ExampleTranslateDirection from '../stories/Animations/ExampleTranslateDirection';
import ExampleTranslateDirectionRaw from '!raw-loader!../stories/Animations/ExampleTranslateDirection';

import ExampleHeight from '../stories/Animations/ExampleHeight';
import ExampleHeightRaw from '!raw-loader!../stories/Animations/ExampleHeight';

import ExampleWidth from '../stories/Animations/ExampleWidth';
import ExampleWidthRaw from '!raw-loader!../stories/Animations/ExampleWidth';

import ExampleClasses from '../stories/Animations/ExampleClasses';
import ExampleClassesRaw from '!raw-loader!../stories/Animations/ExampleClasses';

import ExampleSequence from '../stories/Animations/ExampleSequence';
import ExampleSequenceRaw from '!raw-loader!../stories/Animations/ExampleSequence';


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Animator', module)
  .add('Opacity', () => (
    <CodeExample title="Opacity"
                 code={ExampleOpacityRaw}>
      <ExampleOpacity/>
    </CodeExample>
  ))
  .add('Scale', () => (
    <CodeExample title="Scale"
                 code={ExampleOpacityAndScaleRaw}>
      <ExampleOpacityAndScale/>
    </CodeExample>
  ))
  .add('Translate (moving around)', () => (
    <div>
      <CodeExample title="Translate Examples"
                   code={ExampleTranslateRaw}>
        <ExampleTranslate/>
      </CodeExample>
      <CodeExample title="Translate Sizes"
                   code={ExampleTranslateSizeRaw}>
        <ExampleTranslateSize/>
      </CodeExample>
      <CodeExample title="Translate Directions"
                   code={ExampleTranslateDirectionRaw}>
        <ExampleTranslateDirection/>
      </CodeExample>
    </div>
  ))
  .add('Height', () => (
    <CodeExample title="Scale"
                 code={ExampleHeightRaw}>
      <ExampleHeight/>
    </CodeExample>
  ))
  .add('Width', () => (
    <CodeExample title="Scale"
                 code={ExampleWidthRaw}>
      <ExampleWidth/>
    </CodeExample>
  ))
  .add('Timing', () => (
    <CodeExample title="Timing"
                 code={ExampleTimingRaw}>
      <ExampleTiming/>
    </CodeExample>
  ))
  .add('Classes & Styles', () => (
    <CodeExample title="Scale"
                 code={ExampleClassesRaw}>
      <ExampleClasses/>
    </CodeExample>
  ))
  .add('Sequence', () => (
    <CodeExample title="Scale"
                 code={ExampleSequenceRaw}>
      <ExampleSequence/>
    </CodeExample>
  ));