import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';

const ExampleDelayEnter = ({show}) => {
  return (
    <div>
      <Animator show={show} delay={{enter: 1000}} height>
        <StyledDiv>I will enter in a delay of 1000ms</StyledDiv>
      </Animator>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleDelayEnter/>
  </AnimationTemplate>

