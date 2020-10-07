import React from 'react';
import classNames from 'classnames';
import styles from './Input.scss';

const Input = ({
  className,
  width = '100%',
  style = {},
  dataHook,
  ...inputProps
}) => (
  <input
    data-hook={dataHook}
    className={classNames(className, styles.root)}
    style={{ ...style, width }}
    {...inputProps}
  />
);

export default Input;
