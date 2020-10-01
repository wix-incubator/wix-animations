import React from 'react';
import Animator from '../../src/components/Animator';
import css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';
import PropTypes from 'prop-types';

const Item = () => <div className={css.basicDiv}>I am an Item</div>;

class ExampleMockServer extends React.Component {
  to;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoader: !props.show,
    };

    this.to = { in: 'top', out: 'bottom' };
  }

  componentWillReceiveProps({ show }) {
    if (show) {
      this.setState({
        items: new Array(5).fill(1).map((_, index) => <Item key={index} />),
      });
    } else {
      this.setState({
        items: [],
      });
    }

    this.setState({ isLoader: !show });
  }

  render() {
    return (
      <div style={{ height: '70px', display: 'flex' }}>
        <Animator
          opacity
          sequence
          translate={{ to: { in: 'top', out: 'bottom' } }}
          className={`${css.flexParent}`}
        >
          {this.state.isLoader && (
            <div
              key={99999}
              animatorChildStyle={{ position: 'absolute' }}
              style={{ fontSize: '25px', textAlign: 'center' }}
            >
              Loading....
            </div>
          )}
          {this.state.items}
        </Animator>
      </div>
    );
  }
}

ExampleMockServer.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <ExampleMockServer />
  </AnimationTemplate>
);
