import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';
import styles from './ExampleHeight.scss';

const HeightExample = ({ show }) => {
  return (
    <div className={styles.heightExample}>
      <div>
        <Animator show={show} height>
          <StyledDiv>
            I have height={'{'}true{'}'} so animator guess the right height for
            me. use me <b>only</b> if you {`don't`} know the height
          </StyledDiv>
        </Animator>
        <div>
          This text is here to show that the rest of the page responds nicely to
          the height change
        </div>
      </div>
      <div>
        <Animator show={show} height={180}>
          <StyledDiv style={{ height: '180px' }}>
            I have a fixed height of {`'180px'`} in my CSS so I put on Animator
            the prop <code>height={`{180}`}</code> so animator animates to that
            specific height. This method is much more stable than the other!!
          </StyledDiv>
        </Animator>
        <div>
          This text is here to show that the rest of the page responds nicely to
          the height change
        </div>
      </div>
    </div>
  );
};

HeightExample.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <HeightExample />
  </AnimationTemplate>
);
