import React from 'react';
import css from './Example.scss';

const StyledDiv = ({children, style}) => {
  return (<div className={css.styledDiv} style={style}>{children ? children : 'I will be animated!'}</div>)
};

export default StyledDiv;
