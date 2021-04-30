import React from 'react';
import {node, number, object, bool, func} from 'prop-types';
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
      exiting: false,
    };

    this.state = {
      sequenceIndex: 0,
      transition: this.transitionDefault,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(props) {
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
    } else if (debug === 'exited') {
      this.onExited();
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
    const {onEnter} = this.props;
    this.updateTransitionState('enter');
    this.setSequenceIndex();
    onEnter && onEnter();
  }

  onEntering() {
    const {onEntering} = this.props;
    this.updateTransitionState('entering');
    onEntering && onEntering();
  }

  onEntered() {
    const {onEntered} = this.props;
    this.updateTransitionState('entered');
    onEntered && onEntered();
  }

  onExit() {
    const {onExit} = this.props;
    this.updateTransitionState('exit');
    this.setSequenceIndex();
    onExit && onExit();
  }

  onExiting() {
    const {onExiting} = this.props;
    this.updateTransitionState('exiting');
    onExiting && onExiting();
  }

  onExited() {
    const {onExitedAnimation} = this.props;
    this.updateTransitionState('exited');
    onExitedAnimation && onExitedAnimation();
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
        onExited={() => this.onExited()}
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
  onEnter: func,
  onEntering: func,
  onEntered: func,
  onExit: func,
  onExiting: func,
  onExitedAnimation: func,
};

export default CSSTransitionWrapper;
