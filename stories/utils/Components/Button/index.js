import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './Button.scss';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  static displayName = 'Button';

  static propTypes = {
    /** Additional classes */
    className: PropTypes.string,
    /** Skins of Button content */
    skin: PropTypes.oneOf([
      'standard',
      'inverted',
      'destructive',
      'premium',
      'dark',
      'light',
      'transparent',
      'premium-light',
    ]),
    /** Priority of Button content */
    priority: PropTypes.oneOf(['primary', 'secondary']),
    /** Size of Button content */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    /** Click event handler  */
    onClick: PropTypes.func,
    /** Sets button width to 100% */
    fullWidth: PropTypes.bool,
    /** Applies disabled styles */
    disabled: PropTypes.bool,
    /** String based node */
    children: PropTypes.node,
    /** String based data hook */
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
  };

  render() {
    const {
      skin,
      priority,
      size,
      className,
      fullWidth,
      children,
      dataHook,
      disabled,
      onClick,
    } = this.props;

    return (
      <button
        className={classNames(
          className,
          styles.root,
          styles[`skin-${skin}`],
          styles[`priority-${priority}`],
          styles[`size-${size}`],
          {
            [styles.fluid]: fullWidth,
          }
        )}
        disabled={disabled}
        data-hook={dataHook}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
