import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';
import styles from './CustomHeightExample.scss';

const calculateHeight = (element) => {
  return element.offsetHeight;
};

class CustomHeightExample extends React.Component {
  render() {
    const { show } = this.props;
    return (
      <div className={styles.customHeightExample}>
        <Animator show={show} height={calculateHeight}>
          <StyledDiv> I have a height Function!</StyledDiv>
        </Animator>
        <div>
          This text is here to show that the rest of the page responds nicely to
          the height change
        </div>
      </div>
    );
    return <div />;
  }
}

CustomHeightExample.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <CustomHeightExample />
  </AnimationTemplate>
);
