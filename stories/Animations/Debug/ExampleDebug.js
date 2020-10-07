import React from 'react';
import Animator from '../../../src/components/Animator';
import StyledDiv from '../StyledDiv';

const ExampleDebug = () => (
  <Animator translate={{ exit: 'bottom', enter: 'top' }} scale opacity debug>
    <StyledDiv>
      I have the {`'debug'`} prop. Waiting for you to choose a debug mode from
      the Orange box on the top right corner of the page
    </StyledDiv>
  </Animator>
);

export default () => <ExampleDebug />;
