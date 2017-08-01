import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const OpacityExample = ({show}) => {
  return (
    <div className={css.basicWrapper}>
      <Animator opacity scale>
        {show && <div className={css.basicDiv}>timing="large" (default) (300 ms)</div>}
      </Animator>
      <Animator opacity scale timing="medium">
        {show && <div className={css.basicDiv}>timing="medium" (200 ms)</div>}
      </Animator>
      <Animator opacity scale timing="small">
        {show && <div className={css.basicDiv}>timing="small" (150 ms)</div>}
      </Animator>
      <Animator opacity scale timing="micro">
        {show && <div className={css.basicDiv}>timing="micro" (150 ms)</div>}
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <OpacityExample/>
  </AnimationTemplate>

