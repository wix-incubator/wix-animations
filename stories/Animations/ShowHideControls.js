import React from 'react';
import Button from 'wix-storybook-utils/dist/es/src/ui/button';
import PropTypes from 'prop-types';
import css from './Example.scss';

class ShowHideControls extends React.Component {
  toggle() {
    this.setState({ show: !this.state.show });
  }

  onChange() {
    clearInterval(this.state.intervalId);
    this.toggle();
  }

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    if (!this.props.interval) {
      return;
    }
    const intervalId = setInterval(() => {
      this.toggle();
    }, 5000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { children, height } = this.props;
    const { show } = this.state;
    return (
      <div
        className={css.showHideWrapper}
        style={{
          height,
        }}
      >
        <Button onClick={() => this.onChange()}>
          {show ? 'Hide' : 'Show'} Animation
        </Button>
        {React.createElement(
          children.type,
          { ...children.props, show: this.state.show },
          children
        )}
      </div>
    );
  }
}

ShowHideControls.propTypes = {
  children: PropTypes.element.isRequired,
  interval: PropTypes.number,
  height: PropTypes.number,
};

export default ShowHideControls;
