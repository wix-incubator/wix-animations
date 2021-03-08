import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import OrangeDiv from '../OrangeDiv';
import PropTypes from 'prop-types';

class ExampleMixedChildren extends React.Component {

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType}>
        <Animator height>
          {show && <StyledDiv>I am a DIV</StyledDiv>}
          {!show && <OrangeDiv>I am another DIV!</OrangeDiv>}
        </Animator>
      </div>
    );
  }
}

ExampleMixedChildren.propTypes = {
  show: PropTypes.bool
};


export default () =>
  (<AnimationTemplate>
    <ExampleMixedChildren/>
  </AnimationTemplate>);

