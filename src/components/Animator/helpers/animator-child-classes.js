import ClassBuilder from '../builders/class-builder';

class AnimatorChildClasses {

  props;
  classes;

  constructor(props) {
    this.props = props;

    this.classes = [
      this.getFirstLayer(),
      this.getSecondLayer(),
      this.getThirdLayer(),
    ];
  }

  getFirstLayer() {

    const {debug, sequence, delay, childClassName} = this.props.animatorProps;
    const {animatorChildClassName} = this.props;

    return new ClassBuilder()
      .withChildLayer(1)
      .withDebug(debug)
      .withClassName(childClassName)
      .withClassName(animatorChildClassName)
      .withSequence(sequence || delay)
      .build();
  }

  getSecondLayer() {

    const {translate, opacity, scale, timing, height, width} = this.props.animatorProps;

    return new ClassBuilder()
      .withChildLayer(2)
      .withOpacity(opacity)
      .withScale(scale)
      .withTranslateWrapper(translate)
      .withHeight(height)
      .withWidth(width)
      .withTiming(timing)
      .build();
  }

  getThirdLayer() {

    const {translate} = this.props.animatorProps;

    return new ClassBuilder()
      .withChildLayer(3)
      .withTranslate(translate)
      .withTranslateUseSameTransition(translate)
      .build();
  }

  get() {
    return this.classes;
  }
}

export default AnimatorChildClasses;
