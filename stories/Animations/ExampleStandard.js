import React from 'react';
import {Container, Row, Col} from '../../src/Grid';
import ToggleSwitch from '../../src/ToggleSwitch';
import Dropdown from '../../src/Dropdown';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import PropTypes from 'prop-types';

const createSizeArray = size => {
  return new Array(size + 1).fill(0).map((element, id) => ({id: id * 10, value: id * 10}));
};

const MockDiv = ({children}) => {
  return (<div className={css.shukiInner} style={{overflow: 'hidden'}}>{children}</div>);
};

MockDiv.propTypes = {
  children: PropTypes.element.isRequired
};

class AnimatedExample extends React.Component {

  options;

  constructor(props) {
    super(props);
    this.state = {
      opacity: false,
      scale: true,
      height: false,
      width: false,
      translate: true,
      sequence: true,
      debug: 'none',
      sequenceOption: 'default',
      translateSizeIn: 100,
      translateSizeOut: 100,
      direction: 'top',
      timing: 'large',
      show: true
    };

    this.options = [
      {id: 'micro', value: 'Micro - 120ms'},
      {id: 'small', value: 'Small - 150ms'},
      {id: 'medium', value: 'Medium - 200ms'},
      {id: 'large', value: 'Large - 300ms'},
      {id: 'debug', value: 'Debug - 10000ms'},
      {id: 'none', value: 'None'}
    ];

    this.sizeOptions = createSizeArray(10);
    this.directionOptions = [
      {id: 'top', value: 'Top'},
      {id: 'bottom', value: 'Bottom'},
      {id: 'left', value: 'Left'},
      {id: 'right', value: 'Right'}
    ];

    this.sequenceOptions = [
      {id: 'default', value: 'Default (exit empty)'},
      {id: 'flip', value: 'Flip'},
      {id: 'reverse', value: 'Reverse'},
      {id: 'reverse-flip', value: 'Reverse Flip'}
    ];

    this.debugOptions = [
      {id: 'none', value: 'None'},
      {id: 'enter', value: 'Enter Stage'},
      {id: 'entering', value: 'Entering Stage'},
      {id: 'exit', value: 'exit Stage'},
      {id: 'exiting', value: 'exiting Stage'},
    ];

  }

  myToggle(option) {
    return (
      <div>
        <ToggleSwitch checked={this.state[option]} onChange={() => this.setState({[option]: !this.state[option]})}/>
        {option}
      </div>
    );
  }

  getSequenceValue() {
    if (!this.state.sequence) {
      return false;
    }
    return this.state.sequenceOption !== 'default' ? this.state.sequenceOption : true;
  }

  buildTranslateString() {
    const {translateSizeIn, translateSizeOut} = this.state;
    const size = translateSizeIn === translateSizeOut ? `{size: ${translateSizeIn}}` : `{size: {in: ${translateSizeIn}, out: ${translateSizeOut}`;

    return ` translate={${size}, to: "${this.state.direction}"}}`;
  }

  buildTranslateObject() {

    const {translateSizeIn, translateSizeOut, direction} = this.state;

    return {
      to: direction,
      size: translateSizeIn === translateSizeOut ? translateSizeIn : {in: translateSizeIn, out: translateSizeOut}
    };
  }

  render() {
    return (
      <div style={{height: '250px'}}>
        <Container>
          <Row> <Col span="">Animation component </Col></Row>
          <Row>
            <Col span="4">
              <Row>
                <ToggleSwitch checked={this.state.show} onChange={() => this.setState({show: !this.state.show})}/> Show
                Element
              </Row>
              <Row>
                {this.myToggle('opacity')}
              </Row>
              <Row>
                {this.myToggle('scale')}
              </Row>
              <Row>
                {this.myToggle('height')}
              </Row>
              <Row>
                {this.myToggle('width')}
              </Row>
              <Row>
                {this.myToggle('translate')}
              </Row>
              {this.state.translate && <Row>
                <Col span="12">
                  Translate Options
                </Col>
                <Col span="6">
                  Size In
                  <Dropdown
                    selectedId={this.state.translateSizeIn}
                    onSelect={option => this.setState({translateSizeIn: option.id})}
                    options={this.sizeOptions}
                    />
                  Size Out
                  <Dropdown
                    selectedId={this.state.translateSizeOut}
                    onSelect={option => this.setState({translateSizeOut: option.id})}
                    options={this.sizeOptions}
                    />
                </Col>
                <Col span="6">
                  Direction To Show
                  <Dropdown
                    selectedId={this.state.direction}
                    onSelect={option => this.setState({direction: option.id})}
                    options={this.directionOptions}
                    />
                </Col>
              </Row>}
              <Row>
                {this.myToggle('sequence')}
                Sequence Options
                {this.state.sequence && <Dropdown
                  selectedId={this.state.sequenceOption}
                  onSelect={option => this.setState({sequenceOption: option.id})}
                  options={this.sequenceOptions}
                  />}
              </Row>
              <Row>
                Timing
                <Dropdown
                  selectedId="large"
                  onSelect={option => this.setState({timing: option.id})}
                  options={this.options}
                  />
              </Row>
              <Row>
                Debug
                <Dropdown
                  selectedId="none"
                  onSelect={option => this.setState({debug: option.id})}
                  options={this.debugOptions}
                  />
              </Row>
            </Col>
            <Col span="8">
              <pre>&lt;Animator
                {this.state.timing !== 'large' ? ` timing="${this.state.timing}"` : ''}
                {this.state.opacity ? ' opacity' : ''}
                {this.state.scale ? ' scale' : ''}
                {this.state.height ? ' height' : ''}
                {this.state.width ? ' width' : ''}
                {this.state.translate ? this.buildTranslateString() : ''}
                {this.state.sequence ? ' sequence' : ''}{this.state.sequence && this.state.sequenceOption !== 'default' ? `="${this.state.sequenceOption}"` : ''}
                {this.state.debug !== 'none' ? ` debug="${this.state.debug}"` : ''}
                &gt;&lt;/Animator&gt;</pre>
              <br/>
              <Animator
                opacity={this.state.opacity}
                className={css.shukiWrapper}
                scale={this.state.scale}
                height={this.state.height}
                width={this.state.width}
                debug={this.state.debug === 'none' ? false : this.state.debug}
                translate={this.state.translate ? this.buildTranslateObject() : false}
                sequence={this.getSequenceValue()}
                timing={this.state.timing === 'large' ? false : this.state.timing}
                >
                {this.state.show && <MockDiv animatorChildStyle={{flexGrow: 2}} animatorChildClassName={css.shukiChild}><div>Some Content in Here</div><div>Some Content in Here</div><div>Some Content in Here</div></MockDiv>}
                {this.state.show && <MockDiv animatorChildStyle={{flexGrow: 2}} animatorChildClassName={css.shukiChild}><div>Some Content in Here</div><div>Some Content in Here</div><div>Some Content in Here</div></MockDiv>}
                {this.state.show && <MockDiv animatorChildStyle={{flexGrow: 2}} animatorChildClassName={css.shukiChild}><div>Some Content in Here</div><div>Some Content in Here</div><div>Some Content in Here</div></MockDiv>}
                {this.state.show && <MockDiv animatorChildStyle={{flexGrow: 2}} animatorChildClassName={css.shukiChild}><div>Some Content in Here</div><div>Some Content in Here</div><div>Some Content in Here</div></MockDiv>}
                {this.state.show && <MockDiv animatorChildStyle={{flexGrow: 2}} animatorChildClassName={css.shukiChild}><div>Some Content in Here</div><div>Some Content in Here</div><div>Some Content in Here</div></MockDiv>}
              </Animator>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              Rules:
              1. Translate - The height and width belongs to the parent and not the child so it translates according to them
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default () =>
  <AnimatedExample/>;
