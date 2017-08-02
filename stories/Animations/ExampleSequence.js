import React from 'react';
// import Dropdown from '../../src/Dropdown';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


class ExampleSequence extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sequenceType: 'default'
    };

  }

  render() {
    const {show} = this.props;
    return (
      <div className={css.sequenceType}>

        <select
          value={this.state.translateSizeIn}
          onChange={e => this.setState({sequenceType: e.target.value})}
        >
          <option value="default">default</option>
          <option value="flip">flip</option>
          <option value="reverse">reverse</option>
          <option value="reverse-flip">reverse-flip</option>
        </select>
        <Animator show={show} opacity translate="top" sequence={this.state.sequenceType} className={css.flexParent}>
          <div className={css.basicDiv}>We</div>
          <div className={css.basicDiv}>will</div>
          <div className={css.basicDiv}>animate</div>
          <div className={css.basicDiv}>in</div>
          <div className={css.basicDiv}>sequence</div>
        </Animator>
      </div>
    )
  }
}


export default () =>
  <AnimationTemplate>
    <ExampleSequence/>
  </AnimationTemplate>

