import React from 'react';
import Button from 'wix-style-react/dist/src/Button'
import {node} from 'prop-types';
import {Container, Row, Col} from 'wix-style-react/dist/src/Grid';
import css from './Example.scss';

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
    const {children, height} = this.props;
    const styles = height ? {height} : {};
    const {show} = this.state;
    return (
      <div className={css.showHideWrapper} style={styles}>
        <Container>
          <Row>
            <Col span="2">
              <Button theme={show ? 'transparentblue' : 'fullblue'} onClick={() => this.onChange()}>{show ? 'Hide' : 'Show'} Animation</Button>
            </Col>
            <Col span="10">
              {React.createElement(children.type, {...children.props, show: this.state.show}, children)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ShowHideControls.propTypes = {
  children: node
};

export default ShowHideControls;
