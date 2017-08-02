import React from 'react';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const OpacityExample = ({show}) => {
  return (
    <div className={css.basicWrapper}>
      <Animator opacity scale className={`${css.flexParent} ${css.height-50}`}>
        {show && <div className={css.basicDiv}>I am animating opacity AND SCALE </div>}
        {!show && <div className={css.basicDiv} animatorChildStyle={{position: 'absolute'}} style={{color: 'red'}}>I am another DIV!</div>}
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <OpacityExample/>
  </AnimationTemplate>

