import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';


import ExampleOpacity from './ExampleOpacity';
import ExampleOpacityRaw from '!raw-loader!./ExampleOpacity';

import ExampleOpacityAndScale from './ExampleScale';
import ExampleOpacityAndScaleRaw from '!raw-loader!./ExampleScale';

import ExampleTranslate from './ExampleTranslate';
import ExampleTranslateRaw from '!raw-loader!./ExampleTranslate';

import ExampleTranslateSize from './ExampleTranslateSize';
import ExampleTranslateSizeRaw from '!raw-loader!./ExampleTranslateSize';

import ExampleTranslateDirection from './ExampleTranslateDirection';
import ExampleTranslateDirectionRaw from '!raw-loader!./ExampleTranslateDirection';

import ExampleHeight from './ExampleHeight';
import ExampleHeightRaw from '!raw-loader!./ExampleHeight';

import ExampleWidth from './ExampleWidth';
import ExampleWidthRaw from '!raw-loader!./ExampleWidth';

import Markdown from '../../utils/Components/Markdown';


const CssStyles = () => {
  return (
    <div>
      <CodeExample title="Opacity"
                   code={ExampleOpacityRaw}>
        <ExampleOpacity/>
      </CodeExample>
      <CodeExample title="Scale"
                   code={ExampleOpacityAndScaleRaw}>
        <ExampleOpacityAndScale/>
      </CodeExample>
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
      <CodeExample title="Height"
                   code={ExampleHeightRaw}>
        <ExampleHeight/>
      </CodeExample>
      <CodeExample title="Width"
                   code={ExampleWidthRaw}>
        <ExampleWidth/>
      </CodeExample>
    </div>);
};

export default CssStyles;

