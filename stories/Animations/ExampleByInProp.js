import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleInByProp = ({show}) => {
  return (
    <div className={css.basicWrapper}>
      <Animator opacity translate sequence show={show} className={css.flexParent}>
        <div className={css.basicDiv}>I exist!</div>
        <div className={css.basicDiv}>I exist!</div>
        <div className={css.basicDiv}>I exist!</div>
        <div className={css.basicDiv}>I exist!</div>
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleInByProp/>
  </AnimationTemplate>

