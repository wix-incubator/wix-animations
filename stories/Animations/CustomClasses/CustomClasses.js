import React from 'react';
import CodeExample from '../../utils/Components/CodeExample';

import ExampleClasses from './ExampleClasses';
import ExampleClassesRaw from '!raw-loader!./ExampleClasses';
import {Container, Row, Col} from 'wix-style-react/dist/src/Grid';

import Markdown from '../../utils/Components/Markdown';
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
import * as css from '../Example.scss';

const CustomClasses = () => {
  return (
    <div className={css.markup}>
      <Container>
        <Markdown source={Part0}/>
        <CodeExample
          title="An example for different flex-grow of Animator Children"
          code={ExampleClassesRaw}
          >
          <ExampleClasses/>
        </CodeExample>
        <Markdown source={Part1}/>
        <Row>
          <Col span="6"><Markdown source={React1}/></Col>
          <Col span="6"><Markdown source={Html1}/></Col>
        </Row>
        <Markdown source={Part2}/>
        <Row>
          <Col span="6"><Markdown source={React3}/></Col>
          <Col span="6"><Markdown source={Html3}/></Col>
        </Row>
        <Markdown source={Part3}/>
        <Row>
          <Col span="6"><Markdown source={React2}/></Col>
          <Col span="6"><Markdown source={Html2}/></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomClasses;

