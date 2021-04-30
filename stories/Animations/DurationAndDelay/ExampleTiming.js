import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';
import {Row, Col} from 'wix-style-react/dist/src/Grid';

const ExampleTiming = ({show}) => {
  return (
    <Row>
      <Col span={6}>
        <Animator show={show} opacity scale timing="slow02">
          <StyledDiv>slow02: 600 ms</StyledDiv>
        </Animator>
        <Animator show={show} opacity scale timing="slow01">
          <StyledDiv>slow01: 450 ms</StyledDiv>
        </Animator>
        <Animator show={show} opacity scale timing="medium02">
          <StyledDiv>medium02: 300 ms</StyledDiv>
        </Animator>
        <Animator show={show} opacity scale timing="medium01">
          <StyledDiv>medium01: 200 ms</StyledDiv>
        </Animator>
        <Animator show={show} opacity scale timing="fast02">
          <StyledDiv>fast02: 150 ms</StyledDiv>
        </Animator>
        <Animator show={show} opacity scale timing="fast01">
          <StyledDiv>fast01: 100 ms</StyledDiv>
        </Animator>
      </Col>
      <Col span={6}>
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
      </Col>
    </Row>
  );
};

ExampleTiming.propTypes = {
  show: PropTypes.bool
};

export default () =>
  (<AnimationTemplate>
    <ExampleTiming/>
  </AnimationTemplate>);

