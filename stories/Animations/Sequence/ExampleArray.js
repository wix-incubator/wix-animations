import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';

const item1 = { key: 123, text: 'I am the purple div!', color: '#b13dac' };
const item2 = { key: 456, text: 'I am the orange div!', color: '#f27052' };

class ExampleMixedChildren extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [item1],
    };
  }

  componentWillReceiveProps({ show }) {
    this.setState({ items: show ? [item1] : [item2] });
  }

  render() {
    const { items } = this.state;
    return (
      <div className={css.sequenceType}>
        <Animator height>
          {items.map((item) => (
            <StyledDiv key={item.key} style={{ background: item.color }}>
              {item.text}
            </StyledDiv>
          ))}
        </Animator>
      </div>
    );
  }
}

export default () => (
  <AnimationTemplate>
    <ExampleMixedChildren />
  </AnimationTemplate>
);
