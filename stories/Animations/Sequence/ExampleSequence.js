import React from 'react';
import Dropdown from 'wix-style-react/dist/src/Dropdown';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import {TextHelper} from './SequenceHelper';

class ExampleSequence extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sequenceType: 'default'
    };

    this.sequenceTypes = [
      {id: 'default', value: 'default'},
      {id: 'flip', value: 'flip'},
      {id: 'reverse', value: 'reverse'},
      {id: 'reverse-flip', value: 'reverse-flip'},
    ]

  }

  render() {
    const {show} = this.props;
    const {sequenceType: type} = this.state;
    return (
      <div className={css.sequenceType} style={{display: 'flex', height: '200px'}}>
        <div style={{marginRight: '30px'}}>
          <div style={{marginBottom: '6px'}}>Choose Sequence Type</div>
          <Dropdown
            width="120px"
            selectedId={type}
            onSelect={option => this.setState({sequenceType: option.id})}
            options={this.sequenceTypes}
          />
        </div>
        <Animator show={show} opacity translate={{enter: {direction: 'top', size: '50px'}, exit: {direction: 'top', size: '50px'}}} sequence={this.state.sequenceType} className={css.sequenceExampleWrapper}>
          <StyledDiv>We</StyledDiv>
          <StyledDiv>will</StyledDiv>
          <StyledDiv>animate</StyledDiv>
          <StyledDiv>in</StyledDiv>
          <StyledDiv>sequence</StyledDiv>
        </Animator>
        <TextHelper type={type} />
      </div>
    )
  }
}


export default () =>
  <AnimationTemplate>
    <ExampleSequence/>
  </AnimationTemplate>

