import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
// import Markdown from './utils/Components/Markdown';
import CodeExample from './utils/Components/CodeExample';
// import Readme from '../../src/Animator/README.md';

import ExampleOpacity from '../stories/Animations/ExampleOpacity';
import ExampleOpacityRaw from '!raw-loader!../stories/Animations/ExampleOpacity';

import Animator from '../src/components/Animator';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Common', module)
  .add('Animations', () => (
    <div>

      <h1>Usage examples</h1>

      <CodeExample title="Opacity Animation using show prop (it is recommended to use this prop when you can)" code={ExampleOpacityRaw}>
        <ExampleOpacity/>
      </CodeExample>

    </div>
  ));

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
