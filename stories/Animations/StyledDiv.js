import React from 'react';
import css from './Example.scss';

const StyledDiv = ({children}) => {
  return (<div className={css.styledDiv}>{children ? children : 'I will be animated!'}</div>)
};

export default StyledDiv;
