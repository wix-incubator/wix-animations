import React from 'react';
import Animator from '../../../src/components/Animator';
import ShowHideControls from '../ShowHideControls';
import StyledDiv from '../StyledDiv';

const OpacityExample = ({show}) => {
  return (
    <Animator show={show} opacity>
      <StyledDiv>I will fade</StyledDiv>
    </Animator>
  )
};

export default () =>
  <ShowHideControls height="80px">
    <OpacityExample/>
  </ShowHideControls>

