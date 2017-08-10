import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';

class ExampleMixedChildren extends React.Component {

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType}>
        <Animator height>
          {show && <StyledDiv>I am a DIV</StyledDiv>}
          {!show && <StyledDiv style={{background: '#f27052'}}>I am another DIV!</StyledDiv>}
        </Animator>
      </div>
    )
  }
}


export default () =>
  <AnimationTemplate>
    <ExampleMixedChildren/>
  </AnimationTemplate>

