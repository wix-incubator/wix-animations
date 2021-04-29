import css from '../Animator.scss';

const top = 'top';
const bottom = 'bottom';
const left = 'left';
const right = 'right';

const micro = 'micro';
const small = 'small';
const medium = 'medium';
const large = 'large';
const slow01 = 'slow01';
const slow02 = 'slow02';
const medium01 = 'medium01';
const medium02 = 'medium02';
const fast01 = 'fast01';
const fast02 = 'fast02';

const percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const timings = [micro, small, medium, large, fast01, fast02, medium01, medium02, slow01, slow02];
const directions = [top, bottom, left, right];
const sequences = ['default', 'flip', 'reverse', 'reverse-flip'];

const timingMap = {
  micro: 120,
  small: 150,
  medium: 200,
  large: 300,
  fast01: 100,
  fast02: 150,
  medium01: 200,
  medium02: 300,
  slow01: 450,
  slow02: 600
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
  timingMap
};
