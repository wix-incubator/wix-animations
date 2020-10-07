import { ChildTime } from '../class/time-class';
import StyleBuilder from '../builders/style-builder';

class AnimationChildStyles {
  styles;
  translate;
  delay;
  duration;
  transition;
  dimensions;
  props;
  animatorProps;

  constructor(props, dimensions) {
    this.props = props;
    this.animatorProps = this.props.animatorProps;

    const { animatorProps, sequenceIndex } = props;

    this.dimensions = {
      height: dimensions.height,
      width: dimensions.width,
    };

    const time = new ChildTime(
      animatorProps,
      this.props.transition,
      sequenceIndex,
    );
    this.delay = time.getDelay();
    this.duration = time.getDuration();

    this.styles = [
      this.getFirstLayer(),
      this.getSecondLayer(),
      this.getThirdLayer(),
    ];
  }

  getFirstLayer() {
    const startStyles = () =>
      new StyleBuilder()
        .withTransitionDelay(this.delay)
        .withAnimationDelay(this.duration)
        .build();

    return {
      base: {
        ...this.props.animatorProps.childStyle,
        ...this.props.animatorChildStyle,
      },
      enter: startStyles,
      entering: () => ({}),
      exit: startStyles,
      exiting: {},
    };
  }

  getSecondLayer() {
    const { height, width } = this.dimensions;

    const { scale, height: isHeight, width: isWidth } = this.animatorProps;

    const startStyles = () =>
      new StyleBuilder().withTransitionDelay(this.delay).build();

    const dimensionsStyles = (_height, _width) =>
      new StyleBuilder()
        .withWidth(isWidth, _width)
        .withHeight(isHeight, _height);

    const hideDimensions = () => dimensionsStyles(0, 0).build();

    const showDimensions = () => dimensionsStyles(height, width).build();

    const hideScale = () => new StyleBuilder().withScale(scale).build();

    const showScale = () => new StyleBuilder().withScale(scale && 1).build();

    return {
      base: {},
      enter: () => ({ ...startStyles(), ...hideScale(), ...hideDimensions() }),
      entering: () => ({ ...showScale(), ...showDimensions() }),
      exit: () => ({ ...startStyles(), ...showScale(), ...showDimensions() }),
      exiting: () => ({ ...hideScale(), ...hideDimensions() }),
    };
  }

  getThirdLayer() {
    const { translate } = this.animatorProps;

    const startStyles = () =>
      new StyleBuilder().withTransitionDelay(this.delay).build();

    const translateOut = () =>
      new StyleBuilder().withTranslate(translate, 'out').build();

    const translateIn = () =>
      new StyleBuilder().withTranslate(translate, 'in').build();

    return {
      base: {},
      enter: () => ({ ...startStyles(), ...translateIn() }),
      entering: {},
      exit: () => startStyles(),
      exiting: () => translateOut(),
    };
  }

  getStyle(name, callback) {
    return (
      this.props.transition[name] &&
      typeof callback === 'function' &&
      callback()
    );
  }

  mergeStyles({ base, enter, entering, exit, exiting }) {
    return {
      ...base,
      ...this.getStyle('enter', enter),
      ...this.getStyle('entering', entering),
      ...this.getStyle('exit', exit),
      ...this.getStyle('exiting', exiting),
    };
  }

  get() {
    return this.styles.map((style) => this.mergeStyles(style));
  }
}

export default AnimationChildStyles;
