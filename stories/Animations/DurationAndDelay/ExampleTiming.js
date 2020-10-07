import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const OpacityExample = ({ show }) => {
  return (
    <div className={css.basicWrapper}>
      <Animator show={show} opacity scale>
        <StyledDiv>default: 300ms</StyledDiv>
      </Animator>
      <Animator show={show} opacity scale timing="large">
        <StyledDiv>large: 300 ms</StyledDiv>
      </Animator>
      <Animator show={show} opacity scale timing="medium">
        <StyledDiv>medium: 200 ms</StyledDiv>
      </Animator>
      <Animator show={show} opacity scale timing="small">
        <StyledDiv>small: 150 ms</StyledDiv>
      </Animator>
      <Animator show={show} opacity scale timing="micro">
        <StyledDiv>micro: 120 ms</StyledDiv>
      </Animator>
    </div>
  );
};

OpacityExample.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <OpacityExample />
  </AnimationTemplate>
);
