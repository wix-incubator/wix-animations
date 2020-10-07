import React from 'react';
import css from './Example.scss';
import PropTypes from 'prop-types';

const StyledDiv = ({children, style}) => {
  return (<div className={css.styledDiv} style={style}>{children ? children : 'I will be animated!'}</div>);
};

StyledDiv.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
};

export default StyledDiv;
