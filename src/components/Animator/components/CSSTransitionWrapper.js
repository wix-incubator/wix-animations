import React from 'react';
import {node, number, object, bool} from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import {transitionClassNames} from '../constants/constants';
import {Time} from '../class/time-class';
import Child from './AnimatorChild';
import shouldFlipAnimation from '../helpers/should-flip-animation';

class CSSTransitionWrapper extends React.Component {

  transitionDefault;

  constructor(props) {
    super(props);

    this.transitionDefault = {
      enter: false,
      entering: false,
      exit: false,
      exiting: false
    };

    this.state = {
      sequenceIndex: 0,
      transition: this.transitionDefault,
    };
  }

  componentWillReceiveProps(props) {
    const {debug} = props.animatorProps;
    if (debug) {
      this.setDebug(debug);
    }
  }

  setDebug(debug) {
    if (debug === 'enter') {
      this.onEnter();
    } else if (debug === 'entering') {
      this.onEntering();
    } else if (debug === 'entered') {
      this.onEntered();
    } else if (debug === 'exit') {
      this.onExit();
    } else if (debug === 'exiting') {
      this.onExiting();
    }
  }

  updateTransitionState(phase) {
    let update;
    switch (phase) {
      case 'enter':
        update = {enter: true};
        break;
      case 'entering':
        update = {enter: true, entering: true};
        break;
      case 'exit':
        update = {exit: true};
        break;
      case 'exiting':
        update = {exit: true, exiting: true};
        break;
      default:
        update = {};
        break;
    }

    this.setState({
      transition: Object.assign({}, this.transitionDefault, update)
    });
  }

  onEnter() {
    this.updateTransitionState('enter');
    this.setSequenceIndex();
  }

  onEntering() {
    this.updateTransitionState('entering');
  }

  onEntered() {
    this.updateTransitionState('entered');
  }

  onExit() {
    this.updateTransitionState('exit');
    this.setSequenceIndex();
  }

  onExiting() {
    this.updateTransitionState('exiting');
  }

  getTransitionProps() {
    const {
      animatorProps,
      skipMountTransition,
      // Injected by `TransitionGroup`, false if element is being removed from DOM
      // eslint-disable-next-line react/prop-types
      in: inProp
    } = this.props;
    const {transition} = this.state;
    const duration = new Time(animatorProps, transition).getTotalDuration();

    const showByProp = {
      // False if `show` is manually set to false, otherwise determined by TransitionGroup transition state
      in: animatorProps.show === false ? false : inProp,
    };

    return {
      enter: !!duration,
      exit: !!duration,
      appear: !skipMountTransition && !!duration,
      timeout: duration,
      classNames: transitionClassNames,
      mountOnEnter: true,
      unmountOnExit: true,
      ...showByProp
    };
  }

  setSequenceIndex() {
    const {children, sequence} = this.props.animatorProps;
    if (sequence) {
      const index = this.props.index + 1;
      const reverseIndex = children.length - this.props.index;
      this.setState({
        sequenceIndex: shouldFlipAnimation(sequence, this.state.transition) ? reverseIndex : index
      });
    }
  }

  render() {
    const {children, animatorProps} = this.props;
    const {sequenceIndex} = this.state;
    return (
      <CSSTransition
        {...this.props}
        {...this.getTransitionProps()}
        onEnter={() => this.onEnter()}
        onEntering={() => this.onEntering()}
        onEntered={() => this.onEntered()}
        onExit={() => this.onExit()}
        onExiting={() => this.onExiting()}
        >
        <Child
          transition={this.state.transition}
          sequenceIndex={sequenceIndex}
          animatorProps={animatorProps}
          >
          {children}
        </Child>
      </CSSTransition>
    );
  }
}

CSSTransitionWrapper.propTypes = {
  index: number,
  children: node,
  animatorProps: object,
  skipMountTransition: bool
};

export default CSSTransitionWrapper;
