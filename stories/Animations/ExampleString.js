import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleString = ({show}) => {
  return (
    <div className={css.basicWrapper}>
      <Animator show={show} opacity scale>
        I am a simple string
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleString/>
  </AnimationTemplate>

