import React from 'react';
import {node, number, object, bool} from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import {transitionClassNames} from '../constants/constants';
import {Time} from '../class/time-class';
import Child from './AnimatorChild';
import shouldFlipAnimation from '../helpers/should-flip-animation';

const DEFAULT_TRANSITION_STATE = {
  enter: false,
  entering: false,
  exit: false,
  exiting: false,
};

const getTransitionState = phase => {
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

  return {...DEFAULT_TRANSITION_STATE, ...update};
};

const getSequenceIndex = (sequence, childrenAmount, index, transition) => {
  if (sequence) {
    if (shouldFlipAnimation(sequence, transition)) {
      return childrenAmount - index;
    }
    return index + 1;
  }
  return 0;
};

class CSSTransitionWrapper extends React.Component {
  state = {
    sequenceIndex: 0,
    transition: DEFAULT_TRANSITION_STATE,
  };

  static getDerivedStateFromProps(props, state) {
    const {animatorProps, index} = props;
    const {debug, children, sequence} = animatorProps;
    const {transition} = state;
    if (debug) {
      const phase = debug;
      const derivedState = {transition: getTransitionState(phase)};
      const shouldUpdateSequenceIndex = phase === 'enter' || phase === 'exit';
      if (shouldUpdateSequenceIndex) {
        derivedState.sequenceIndex = getSequenceIndex(
          sequence,
          children.length,
          index,
          transition
        );
      }
      return derivedState;
    }
    return null;
  }

  updateTransitionState(phase) {
    this.setState({
      transition: getTransitionState(phase),
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
      in: inProp,
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
      ...showByProp,
    };
  }

  setSequenceIndex() {
    const {animatorProps, index} = this.props;
    const {children, sequence} = animatorProps;
    const {transition, sequenceIndex: currentSequenceIndex} = this.state;
    const nextSequenceIndex = getSequenceIndex(
      sequence,
      children.length,
      index,
      transition
    );
    if (nextSequenceIndex !== currentSequenceIndex) {
      this.setState({
        sequenceIndex: nextSequenceIndex,
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
  skipMountTransition: bool,
};

export default CSSTransitionWrapper;
