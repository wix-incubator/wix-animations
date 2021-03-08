import React from 'react';
import Animator from '../../../src/components/Animator';
import ShowHideControls from '../ShowHideControls';
import StyledDiv from '../StyledDiv';
import {DirectionDropDown, SizeInput} from './ExampleTranslateHelpers';
import PropTypes from 'prop-types';

const getValue = value => '"' + value + '"';

class ExampleTranslate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enterDirection: 'top',
      enterSize: '100%',
      exitDirection: 'left',
      exitSize: '150px'
    };
  }

  render() {

    const {show} = this.props;
    const {enterDirection, exitDirection, enterSize, exitSize} = this.state;
    return (
      <div>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <DirectionDropDown title="Enter Direction" selectedId={enterDirection} onSelect={enterDirection => this.setState({enterDirection})}/>
          <SizeInput title="Enter Size" value={enterSize} onChange={enterSize => this.setState({enterSize})}/>
          <DirectionDropDown title="Exit Direction" selectedId={exitDirection} onSelect={exitDirection => this.setState({exitDirection})}/>
          <SizeInput title="Exit Size" value={exitSize} onChange={exitSize => this.setState({exitSize})}/>
        </div>
        <Animator
          show={show}
          opacity
          translate={{
            enter: {
              direction: enterDirection,
              size: enterSize
            },
            exit: {
              direction: exitDirection,
              size: exitSize
            }
          }}
          >
          <StyledDiv>
            <pre style={{margin: 0}}>translate={`{`}{`{`}enter:{`{`}direction: {getValue(enterDirection)}, size: {getValue(enterSize)}{`}`}, exit: {`{`}direction: {getValue(exitDirection)}, size: {getValue(exitSize)}{`}`}{`}`}{`}`}</pre>
          </StyledDiv>
        </Animator>
      </div>
    );
  }
}

ExampleTranslate.propTypes = {
  show: PropTypes.bool
};

export default () =>
  (<ShowHideControls height="190px">
    <ExampleTranslate/>
  </ShowHideControls>);
