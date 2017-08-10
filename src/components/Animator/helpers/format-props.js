import React from 'react';
import initTranslateProp from './init-translate-prop';

import {
  timings,
  sequences,
  debugModes,
  propsDefault,
} from '../constants/constants';

const getDataOrDefault = (arr, value, name) => {
  return arr.indexOf(value) > -1 ? value : propsDefault[name];
};

const getScale = (scale, timing) => ['small', 'medium'].indexOf(timing) > -1 ? 0.75 : 0.9;

const getDelay = value => {

  const delay = typeof value === 'object' ? value : {enter: value, exit: value};

  return {
    enter: delay.enter ? delay.enter : 0,
    exit: delay.exit ? delay.exit : 0
  };
};

const propsMap = {
  timing: (value, name) => getDataOrDefault(timings, value, name),
  sequence: (value, name) => value && getDataOrDefault(sequences, value, name),
  children: children => React.Children.toArray(children),
  opacity: opacity => !!opacity,
  scale: (scale, _, {timing}) => !!scale && getScale(scale, timing),
  height: height => !!height && height,
  width: width => !!width && width,
  translate: translate => translate && initTranslateProp(translate),
  debug: (value, name) => getDataOrDefault(debugModes, value, name),
  delay: value => !!value && getDelay(value),
  childStyle: value => !!value && value,
  childClassName: value => !!value && value,
  show: value => value
};

const getPropData = (name, value, props) => {
  const getPropMethod = propsMap[name];
  return getPropMethod && getPropMethod(value, name, props);
};

const getData = props => Object.keys(propsMap).reduce((data, propName) => {
  return ({[propName]: getPropData(propName, props[propName], props), ...data});
}, {});

const formatProps = props => getData(props);

export default formatProps;
