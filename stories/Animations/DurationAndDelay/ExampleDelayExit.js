import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const ExampleDelayExit = ({show}) => {
  return (
    <div>
      <Animator show={show} delay={{exit: 1000}} height>
        <StyledDiv>I will exit in a delay of 1000ms</StyledDiv>
      </Animator>
    </div>
  );
};

ExampleDelayExit.propTypes = {
  show: PropTypes.bool
};

export default () =>
  <AnimationTemplate>
    <ExampleDelayExit/>
  </AnimationTemplate>;

