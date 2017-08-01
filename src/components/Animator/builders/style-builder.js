const css = {
  convertTime: time => time ? `${time / 1000}s` : '',
  convertSize: size => size ? `${size}px` : '0'
};

const translateTemplates = {
  top: size => `translate(0, ${size})`,
  bottom: size => `translate(0, -${size})`,
  left: size => `translate(${size}, 0)`,
  right: size => `translate(-${size}, 0)`
};

const switchDirection = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right'
};

const getTranslate = (translate, inOrOut) => {
  const mode = inOrOut === 'in' ? 'enter' : 'exit';
  let direction = translate[mode].direction;
  if (mode === 'exit') {
    direction = switchDirection[direction];
  }
  return translateTemplates[direction](translate[mode].size);
};

class StyleBuilder {

  styles;

  constructor() {
    this.styles = {};
  }

  with(styles) {
    this.styles = Object.assign({}, this.styles, styles);
    return this;
  }

  withTransitionDelay(duration) {
    return this.with(duration && {
      transitionDelay: css.convertTime(duration)
    });
  }

  withAnimationDelay(duration) {
    return this.with(duration && {
      animationDuration: css.convertTime(duration)
    });
  }

  withTranslate(translate, inOrOut) {
    return this.with(translate && {
      transform: getTranslate(translate, inOrOut)
    });
  }

  withScale(scale) {
    return this.with(scale && {
      transform: `scale(${scale})`
    });
  }

  withHeight(height, size) {
    return this.with(height && {
      maxHeight: css.convertSize(size)
    });
  }

  withWidth(width, size) {
    return this.with(width && {
      maxWidth: css.convertSize(size)
    });
  }

  build() {
    return this.styles;
  }
}

export default StyleBuilder;
