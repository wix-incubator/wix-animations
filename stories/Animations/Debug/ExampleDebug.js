import React from 'react';
import Animator from '../../../src/components/Animator';
import {Container, Row, Col} from 'wix-style-react/dist/src/Grid';
import * as css from '../Example.scss';
import Dropdown from 'wix-style-react/dist/src/Dropdown';
import StyledDiv from '../StyledDiv';

class ExampleDebug extends React.Component {

  options;

  constructor(props) {
    super(props);

    this.state = {
      debug: false
    };

    this.options = [
      {id: 'enter', value: 'enter'},
      {id: 'entering', value: 'entering'},
      {id: 'entered', value: 'entered'},
      {id: 'exit', value: 'exit'},
      {id: 'exiting', value: 'exiting'}
    ];
  }

  render() {

    return (
      <Container>
        <Row>
          <Col span="2">
            <Dropdown
              placeholder="Choose Debug Phase"
              selectedId={this.state.translateSizeIn}
              onSelect={option => this.setState({debug: option.id})}
              options={this.options}
            />
          </Col>
          <Col span="10">
            <div className={css.basicWrapper} style={{position: 'relative', top: '-16px'}}>
              <Animator translate={{exit: 'bottom', enter: 'top'}} scale opacity debug={this.state.debug}>
                <StyledDiv>{this.state.debug ? ` emulates the ${this.state.debug} phase` : '<--- Waiting for you to choose a debug phase'}</StyledDiv>
              </Animator>
              <Animator opacity timing="micro" show={this.state.debug === 'exiting'} delay={{enter: 200}}>
                <div style={{position: 'absolute'}}>
                  <div style={{fontSize: '16px', width: '300px', position: 'absolute', top: '32px'}}>{`<----`} Because it is debug mode the Element is only hiding but did not unmount. you can still see it in the devtools</div>
                  <div style={{height: '63px', width: '247px', position: 'absolute', top: '32px', opacity: '0.5', border: '3px dashed rgb(177, 61, 172)', left: '-262px', pointerEvents: 'none'}}></div>
                </div>
              </Animator>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default () =>
  <ExampleDebug/>

