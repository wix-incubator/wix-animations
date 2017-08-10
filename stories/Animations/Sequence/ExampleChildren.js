import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';

class ExampleChildren extends React.Component {

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType} style={{display: 'flex', height: '70px'}}>
        <Animator show={show} opacity scale className={css.sequenceExampleWrapper}>
          <StyledDiv>One</StyledDiv>
          <StyledDiv>Two</StyledDiv>
          <StyledDiv>Three</StyledDiv>
        </Animator>
      </div>
    )
  }
}


export default () =>
  <AnimationTemplate>
    <ExampleChildren/>
  </AnimationTemplate>

