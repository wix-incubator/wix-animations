import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const WidthExample = ({ show }) => {
  return (
    <div>
      <div style={{ height: '70px', display: 'flex', marginBottom: '20px' }}>
        <Animator width show={show}>
          <StyledDiv style={{ whiteSpace: 'nowrap', padding: '20px 30px' }}>
            width={'{'}true{'}'}
          </StyledDiv>
        </Animator>
        <div
          style={{ marginLeft: '10px', fontSize: '16px', lineHeight: '24px' }}
        >
          Setting height or width prop to {'{'}true{'}'} is risky because the
          browser has different ways to calculate scrollHeight and scrollWidth
          (depending on padding, margin, inline style, display mode and more)
          and it may be flaky and hard to predict the size before it was
          displayed on the page. You may need to play with it until your browser
          will guess the right size.
        </div>
      </div>
      <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
        <Animator width={700} show={show}>
          <StyledDiv style={{ width: '700px' }}>
            width={`{700}`} (use this if you know the width)
          </StyledDiv>
        </Animator>
        <div
          style={{ marginLeft: '10px', fontSize: '16px', lineHeight: '24px' }}
        >
          I am a side text
        </div>
      </div>
    </div>
  );
};

WidthExample.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <WidthExample />
  </AnimationTemplate>
);
