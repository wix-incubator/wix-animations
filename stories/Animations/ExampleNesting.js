import React from 'react';
import Animator from '../../src/components/Animator';
import AnimationTemplate from './AnimationTemplate';
import StyledDiv from './StyledDiv';
import H2 from './H2';
import PropTypes from 'prop-types';

const DelayAndNestingExample = ({show}) => (
  <div>
    <H2>Nesting Animations</H2>
    <Animator show={show} height delay={{exit: 300}}>
      <StyledDiv style={{background: '#65c888'}}>
        I am the container
        <Animator show={show} scale opacity delay={{enter: 300}}>
          <StyledDiv>I am an inner child - Delay will only work inside a nested child if the parent has the {`'show'`} prop</StyledDiv>
        </Animator>
      </StyledDiv>
    </Animator>
  </div>
);

DelayAndNestingExample.propTypes = {
  show: PropTypes.bool
};

export default () =>
  <AnimationTemplate>
    <DelayAndNestingExample/>
  </AnimationTemplate>;
