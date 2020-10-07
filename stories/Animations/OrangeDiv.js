import React from 'react';
import StyledDiv from './StyledDiv';
import PropTypes from 'prop-types';

const OrangeDiv = (props) => (
  <StyledDiv {...props} style={{ background: '#f27052', ...props.style }} />
);

OrangeDiv.propTypes = {
  style: PropTypes.object,
};

export default OrangeDiv;
