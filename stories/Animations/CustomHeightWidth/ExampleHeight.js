import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import { Row, Col } from 'wix-style-react/dist/src/Grid';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const calculateHeight = (element) => {
  return element.offsetHeight;
};

class HeightExample extends React.Component {
  render() {
    const { show } = this.props;
    return (
      <Row>
        <Col span={6}>
          <Animator show={show} height={calculateHeight}>
            <StyledDiv> I have a height Function!</StyledDiv>
          </Animator>
          <div>
            This text is here to show that the rest of the page responds nicely
            to the height change
          </div>
        </Col>
      </Row>
    );
  }
}

HeightExample.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <HeightExample />
  </AnimationTemplate>
);
