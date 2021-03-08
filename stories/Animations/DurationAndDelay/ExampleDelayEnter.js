import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const ExampleDelayEnter = ({show}) => {
  return (
    <div>
      <Animator show={show} delay={{enter: 1000}} height>
        <StyledDiv>I will enter in a delay of 1000ms</StyledDiv>
      </Animator>
    </div>
  );
};

ExampleDelayEnter.propTypes = {
  show: PropTypes.bool
};

export default () =>
  (<AnimationTemplate>
    <ExampleDelayEnter/>
  </AnimationTemplate>);

