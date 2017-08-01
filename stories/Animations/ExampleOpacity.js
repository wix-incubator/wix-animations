import React from 'react';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const OpacityExample = ({show}) => {
  return (
    <div className={css.basicWrapper}>
      <Animator show={show} timing="micro" opacity>
        <div className={css.basicDiv}>I am animating Opacity </div>
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <OpacityExample/>
  </AnimationTemplate>

