import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleClasses from './ExampleClasses';
import ExampleClassesRaw from '!raw-loader!./ExampleClasses';

import Markdown from 'wix-storybook-utils/Markdown';
import Part0 from './Part0.md';
import Part1 from './Part1.md';
import Part2 from './Part2.md';
import Part3 from './Part3.md';
import React1 from './ExampleReact1.md';
import Html1 from './ExampleHtml1.md';
import React2 from './ExampleReact2.md';
import Html2 from './ExampleHtml2.md';
import React3 from './ExampleReact3.md';
import Html3 from './ExampleHtml3.md';
import css from '../Example.scss';

export const CustomClasses = () => {
  return (
    <div className={css.markup}>
      <Markdown source={Part0} />
      <CodeExample
        title="An example for different flex-grow of Animator Children"
        code={ExampleClassesRaw}
      >
        <ExampleClasses />
      </CodeExample>
      <Markdown source={Part1} />
      <div className={css.row}>
        <Markdown source={React1} />
        <Markdown source={Html1} />
      </div>
      <Markdown source={Part2} />
      <div className={css.row}>
        <Markdown source={React3} />
        <Markdown source={Html3} />
      </div>
      <Markdown source={Part3} />
      <div className={css.row}>
        <Markdown source={React2} />
        <Markdown source={Html2} />
      </div>
    </div>
  );
};

CustomClasses.storyName = 'Custom Classes & Styles';
