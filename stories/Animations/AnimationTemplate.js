import React from 'react';
import ShowHideControls from './ShowHideControls';
import PropTypes from 'prop-types';

const AnimationTemplate = ({ children, interval = false }) => {
  return <ShowHideControls interval={interval}>{children}</ShowHideControls>;
};

AnimationTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  interval: PropTypes.bool,
};

export default AnimationTemplate;
