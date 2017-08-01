import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';

const DelayAndNestingExample = ({show}) => (
    <Animator show={show} height={80} delay={{exit: 300}}>
      <div style={{height: '80px', width: '700px', background: 'aquamarine', fontSize: '18px'}}>
        I am the container
        <Animator show={show} scale opacity delay={{enter: 300}}>
          <div className={css.basicDiv} style={{marginTop: '20px'}}>
            I am an inner child
          </div>
        </Animator>
      </div>
    </Animator>
);

export default () =>
  <AnimationTemplate>
    <DelayAndNestingExample/>
  </AnimationTemplate>
