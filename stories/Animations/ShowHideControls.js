import React from 'react';
import {node} from 'prop-types';

class ShowHideControls extends React.Component {

  toggle() {
    this.setState({show: !this.state.show})
  }

  onChange() {
    clearInterval(this.state.intervalId);
    this.toggle();
  }

  constructor(props) {
    super(props);
    this.state = {
      show: true
    };

  }

  componentDidMount() {

    if (!this.props.interval) {
      return;
    }
    const intervalId = setInterval(() => {
      this.toggle();
    }, 5000);

    this.setState({intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <button onClick={() => this.onChange()}>{this.state.show ? 'Hide' : 'Show'}</button>
        {React.createElement(children.type, {...children.props, show: this.state.show}, children)}
      </div>);
  }
}

ShowHideControls.propTypes = {
  children: node
};

export default ShowHideControls;
