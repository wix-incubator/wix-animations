import React from 'react';
import Animator from '../../../src/components/Animator';
import ShowHideControls from '../ShowHideControls';
import StyledDiv from '../StyledDiv';


const ExampleInByProp = ({show}) => {
  return (
    <Animator height show={show}>
      <StyledDiv> Hi There! Click on the 'Hide Animation' button to see me disappear. Also click the 'show code' link above to see how simple it is to animate with 'Animator'!</StyledDiv>
    </Animator>
  )
};

export default () =>
  <ShowHideControls>
    <ExampleInByProp/>
  </ShowHideControls>

