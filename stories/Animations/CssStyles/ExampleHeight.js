import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';
import {Row, Col} from 'wix-style-react/dist/src/Grid';
import StyledDiv from '../StyledDiv';

const HeightExample = ({show}) => {
  return (
    <Row>
      <Col span={6}>
        <Animator show={show} height>
          <StyledDiv>
            I have height={'{'}true{'}'} so animator guess the right height for me. use me <b>only</b> if you don't know the height
          </StyledDiv>
        </Animator>
        <div>This text is here to show that the rest of the page responds nicely to the height change</div>
      </Col>
      <Col span={6}>
        <Animator show={show} height={180}>
          <StyledDiv style={{height: '180px'}}>
            I have a fixed height of '180px' in my CSS so I put on Animator the prop height={`{180}`} so animator animates to that specific height. This method is much more stable than the other!!
          </StyledDiv>
        </Animator>
        <div>This text is here to show that the rest of the page responds nicely to the height change</div>
      </Col>
    </Row>
  )
};

export default () =>
  <AnimationTemplate>
    <HeightExample/>
  </AnimationTemplate>

