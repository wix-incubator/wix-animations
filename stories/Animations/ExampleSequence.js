import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Dropdown from '../../src/Dropdown';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';
import {Row, Col} from '../../src/Grid';


class ExampleSequence extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sequenceType: 'default'
    };

    this.options = [
      {id: 'default', value: 'Default (exit empty)'},
      {id: 'flip', value: 'Flip'},
      {id: 'reverse', value: 'Reverse'},
      {id: 'reverse-flip', value: 'Reverse Flip'}
    ];
  }

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType}>
        <Row>
          <Col span="6">
        <Dropdown
          placeholder="Order of appearance / disappearance"
          selectedId={this.state.translateSizeIn}
          onSelect={option => this.setState({sequenceType: option.id})}
          options={this.options}
        />

          </Col>
          <Col span="6">
            <Animator show={show} opacity translate="top" sequence={this.state.sequenceType} className={css.flexParent}>
              <div className={css.basicDiv}>We</div>
              <div className={css.basicDiv}>will</div>
              <div className={css.basicDiv}>animate</div>
              <div className={css.basicDiv}>in</div>
              <div className={css.basicDiv}>sequence</div>
            </Animator>

          </Col>
        </Row>
      </div>
    )
  }
}


export default () =>
  <AnimationTemplate>
    <ExampleSequence/>
  </AnimationTemplate>

