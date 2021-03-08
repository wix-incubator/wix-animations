import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import OrangeDiv from '../OrangeDiv';
import PropTypes from 'prop-types';

class ExampleChildren extends React.Component {

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType} style={{display: 'flex', height: '70px'}}>
        <Animator show={show} opacity scale className={css.sequenceExampleWrapper}>
          <StyledDiv>One</StyledDiv>
          <OrangeDiv>Two</OrangeDiv>
          <StyledDiv>Three</StyledDiv>
        </Animator>
      </div>
    );
  }
}

ExampleChildren.propTypes = {
  show: PropTypes.bool
};

export default () =>
  (<AnimationTemplate>
    <ExampleChildren/>
  </AnimationTemplate>);

