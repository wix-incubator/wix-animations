import css from '../Animator.scss';

const flattenArray = arr => [].concat.apply([], arr);

const convertToArray = value => Array.isArray(value) ? value : [value];

const debugMap = {
  enter: 'enter',
  entering: ['enter', 'enter-active'],
  exit: 'exit',
  exiting: ['exit', 'exit-active']
};

const getTranslateClasses = translate => {
  return translate.useSameTransition ? ['translate', 'translate-use-same-transition'] : 'translate';
};

const classMap = {
  child1: () => 'child-layer-1',
  child2: () => 'child-layer-2',
  child3: () => 'child-layer-3',
  opacity: opacity => opacity && 'opacity',
  scale: scale => scale && 'scale',
  height: height => height && 'height',
  width: width => width && 'width',
  timing: timing => timing && `timing-${timing}`,
  sequence: sequence => sequence && 'child-sequence',
  translate: translate => translate && getTranslateClasses(translate),
  translateWrapper: translate => translate && 'translate-wrapper',
  className: className => className && className,
  debug: mode => mode && debugMap[mode]
};

class ClassBuilder {

  names;
  classNames;
  data;
  constructor(data) {
    this.names = [];
    this.classNames = [];
    this.data = data || {};
  }

  withName(nameOrNames) {
    nameOrNames && convertToArray(nameOrNames)
      .forEach(name => this.names.push(name));
    return this;
  }
  getValue(name, value) {
    return this.withName(classMap[name](value));
  }

  withClassName(className) {
    if (className) {
      this.classNames.push(className);
    }
    return this;
  }

  withChildLayer(number) {
    return this.getValue(`child${number}`, number);
  }

  withDebug(debug) {
    return this.getValue('debug', debug);
  }

  withOpacity(opacity) {
    return this.getValue('opacity', opacity);
  }

  withScale(scale) {
    return this.getValue('scale', scale);
  }

  withHeight(height) {
    return this.getValue('height', height);
  }

  withWidth(width) {
    return this.getValue('width', width);
  }

  withTiming(timing) {
    return this.getValue('timing', timing);
  }

  withSequence(sequence) {
    return this.getValue('sequence', sequence);
  }

  withTranslate(translate) {
    return this.getValue('translate', translate);
  }

  withTranslateWrapper(translate) {
    return this.getValue('translateWrapper', translate);
  }

  build() {
    return flattenArray(this.names)
      .map(name => css[name])
      .concat(this.classNames)
      .join(' ');
  }

}

export default ClassBuilder;
