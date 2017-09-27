import React from 'react';
import Animator from '../../../src/components/Animator';
import ShowHideControls from '../ShowHideControls';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const OpacityScale = ({show}) => {
  return (
    <Animator show={show} scale opacity>
      <StyledDiv>I will scale and fade</StyledDiv>
    </Animator>
  );
};

OpacityScale.propTypes = {
  show: PropTypes.bool
};


export default () =>
  <ShowHideControls height="80px">
    <OpacityScale/>
  </ShowHideControls>;

