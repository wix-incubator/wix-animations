import {propsDefault, timingMap, animationProps} from '../constants/constants';

const getDurationFromTiming = timing => {
  return timingMap[timing];
};

class Time {

  isAnimation;
  hasSequence;
  props;
  isEnter;
  isExit;
  delay;

  constructor(props, {enter, exit}) {
    this.isAnimation = !!animationProps.find(p => !!props[p]);
    this.hasSequence = !!props.sequence;
    this.delay = props.delay;
    this.props = props;
    this.isEnter = enter;
    this.isExit = exit;
  }

  getTotalDelay() {
    let delay = 0;
    if (this.isEnter && this.delay.enter) {
      delay = this.delay.enter;
    } else if ((this.isExit && this.delay.exit)) {
      delay = this.delay.exit;
    }
    return delay;
  }

  getSingleDuration() {
    if (!this.isAnimation) {
      return 0;
    }
    const {translate, timing} = this.props;
    return translate ? propsDefault.duration : getDurationFromTiming(timing);
  }

  getDelayInPosition(index) {
    const {children} = this.props;
    let duration = this.getTotalDelay();
    if (this.hasSequence && this.isAnimation && (children.length > 1)) {
      duration = ((index - 1) * propsDefault.sequenceDelay) + duration;
    }
    return duration;
  }

  getTotalDuration() {
    const {children} = this.props;
    return this.getSingleDuration() + this.getDelayInPosition(children.length);
  }

}

class ChildTime extends Time {

  index;

  constructor(props, transition, index) {
    super(props, transition);
    this.index = index;
  }

  getDelay() {
    const {children} = this.props;
    let delay = this.getTotalDelay();
    if (this.hasSequence && this.isAnimation && (children.length > 1)) {
      delay = ((this.index - 1) * propsDefault.sequenceDelay) + delay;
    }

    return delay;
  }
  getDuration() {
    return this.getSingleDuration() + this.getDelayInPosition(this.index);
  }

}

export {Time, ChildTime};
