import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';
import {Container, Row, Col} from '../../src/Grid';

const WidthExample = ({show}) => {
  return (
    <Container>
      <Row>
        <div style={{width: 'auto', height: '70px', border: '1px solid black', display: 'flex'}}>
          <Animator width show={show}>
            <div style={{whiteSpace: 'nowrap', fontSize: '30px', padding: '10px', border: '1px solid orange'}}>
              <div>
                width={'{'}true{'}'}
              </div>
            </div>
          </Animator>
          <div>I am some casual text here</div>
        </div>
      </Row>
      <Row>
        <div style={{width: 'auto', height: '70px', border: '1px solid black', display: 'flex'}}>
          <Animator width={700} show={show}>
            <div style={{whiteSpace: 'nowrap', width: '700px', fontSize: '30px', padding: '10px', border: '1px solid orange'}}>
              <div>
                width={`{700}`} (use this if you know the width)
              </div>
            </div>
          </Animator>
          <div style={{fontSize: '16px', padding: '10px'}}>Remember that Animator only sets the width of the animation. You need to take care of the width of your component</div>
        </div>
      </Row>
    </Container>
  )
};

export default () =>
  <AnimationTemplate>
    <WidthExample/>
  </AnimationTemplate>

