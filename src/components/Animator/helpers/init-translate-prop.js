const fillSegment = (segment = {}) => {

  if (typeof segment === 'string') {
    segment = {direction: segment, size: '100%'};
  }

  return {
    direction: segment.direction ? segment.direction : 'top',
    size: segment.size ? segment.size : '100%'
  };
};

const initTranslateProp = translate => {

  if (typeof translate === 'boolean') {
    translate = {enter: 'top', exit: 'top'};
  } else if (typeof translate === 'string') {
    translate = {enter: translate, exit: translate};
  } else if (typeof translate !== 'object') {
    translate = {};
  }

  return {
    enter: fillSegment(translate.enter),
    exit: fillSegment(translate.exit),
    useSameTransition: !!translate.useSameTransition
  };

};

export default initTranslateProp;
