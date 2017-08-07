import css from '../Animator.scss';

const top = 'top';
const bottom = 'bottom';
const left = 'left';
const right = 'right';

const micro = 'micro';
const small = 'small';
const medium = 'medium';
const large = 'large';

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const timings = [micro, small, medium, large];
const directions = [top, bottom, left, right];
const sequences = ['default', 'flip', 'reverse', 'reverse-flip'];
const debugModes = ['enter', 'entering', 'entered', 'exit', 'exiting'];

const timingMap = {
  micro: 120,
  small: 150,
  medium: 200,
  large: 300
};

const translateMap = {
  to: {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
  },
  size: percentages
};

const propsDefault = {
  duration: timingMap[large],
  timing: large,
  sequence: 'default',
  sequenceDelay: 80,
  translate: {
    to: translateMap.to.top,
    size: percentages[5]
  }
};

const animationProps = ['opacity', 'scale', 'height', 'translate', 'width'];
const validChildProps = ['debug', 'sequence', 'timing', ...animationProps];
const transitionClassNames = {
  enter: css.enter,
  appear: css.enter,
  enterActive: css.enterActive,
  appearActive: css.enterActive,
  exit: css.exit,
  exitActive: css.exitActive
};

export {
  translateMap,
  propsDefault,
  animationProps,
  validChildProps,
  timings,
  sequences,
  directions,
  percentages,
  transitionClassNames,
  timingMap,
  debugModes
};
