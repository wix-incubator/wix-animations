import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleOpacity from './ExampleOpacity';
import ExampleOpacityRaw from '!raw-loader!./ExampleOpacity';

import ExampleOpacityAndScale from './ExampleScale';
import ExampleOpacityAndScaleRaw from '!raw-loader!./ExampleScale';

import ExampleTranslate from './ExampleTranslate';
import ExampleTranslateRaw from '!raw-loader!./ExampleTranslate';

import ExampleHeight from './ExampleHeight';
import ExampleHeightRaw from '!raw-loader!./ExampleHeight';

import ExampleWidth from './ExampleWidth';
import ExampleWidthRaw from '!raw-loader!./ExampleWidth';

import Markdown from 'wix-storybook-utils/Markdown';
import Readme from './Translate.md';
import H2 from '../H2';

export const CssStyles = () => {
  return (
    <div>
      <H2>What Can Be Animated</H2>
      <CodeExample title="Opacity" code={ExampleOpacityRaw}>
        <ExampleOpacity />
      </CodeExample>
      <CodeExample title="Scale" code={ExampleOpacityAndScaleRaw}>
        <ExampleOpacityAndScale />
      </CodeExample>
      <CodeExample title="Height" code={ExampleHeightRaw}>
        <ExampleHeight />
      </CodeExample>
      <CodeExample title="Width" code={ExampleWidthRaw}>
        <ExampleWidth />
      </CodeExample>
      <CodeExample title="Translate" code={ExampleTranslateRaw}>
        <ExampleTranslate />
      </CodeExample>
      <Markdown source={Readme} />
    </div>
  );
};

CssStyles.storyName = 'What can be animated';
