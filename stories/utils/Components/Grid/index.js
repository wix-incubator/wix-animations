import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Grid.scss';

const containerProps = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  /** Applies min-height in order to fit to `<Page.Content/>`  */
  stretchVertically: PropTypes.bool,
};

const RawContainer = ({ children, fluid, className, stretchVertically }) => (
  <div
    className={classNames(styles.rawContainer, className, {
      [styles.fluidContainer]: fluid,
      [styles.pageStretchContentVertically]: stretchVertically,
    })}
    children={children}
  />
);

RawContainer.propTypes = containerProps;

const Container = ({ children, fluid, className, stretchVertically }) => (
  <div
    className={classNames(styles.wixContainer, className, {
      [styles.fluidContainer]: fluid,
      [styles.pageStretchContentVertically]: stretchVertically,
    })}
    children={children}
  />
);

Container.propTypes = containerProps;

class Columns extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    rtl: PropTypes.bool,
    stretchViewsVertically: PropTypes.bool,
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    stretchViewsVertically: false,
  };

  render() {
    const {
      className,
      rtl,
      stretchViewsVertically,
      dataHook,
      children,
    } = this.props;

    const rowClasses = classNames(styles.row, className, {
      [styles.rtl]: rtl,
      [styles.stretch_vertically_row]: stretchViewsVertically,
    });

    return (
      <div className={rowClasses} data-hook={dataHook} children={children} />
    );
  }
}

class AutoAdjustedColumns extends Component {
  DEFAULT_MAX_SPAN = 12;

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const children = this.props.children;
    const cols = Array.isArray(children) ? children : [children];
    const spanSize = Math.floor(this.DEFAULT_MAX_SPAN / cols.length);

    return (
      <div className={classNames(styles.row, styles.flexContainer)}>
        {cols.map((col, index) => (
          <Col span={spanSize} key={index} children={col} />
        ))}
      </div>
    );
  }
}

class Col extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rtl: PropTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    span: 12,
  };

  isVisibleHidden(str) {
    return str === 'hidden' || str === 'visible';
  }

  isLegalCol(numStr) {
    if (numStr && !this.isVisibleHidden(numStr)) {
      const num = Number(numStr);
      console.log('num: ', num);
      return Number.isInteger(num) && num > 0 && num <= 12;
    }
    return false;
  }

  render() {
    const {
      children,
      className,
      span,
      rtl,
      xs,
      sm,
      md,
      lg,
      xl,
      dataHook,
    } = this.props;

    const colClesses = {
      [styles[`colXs${span}`]]: this.isLegalCol(span),
      [styles[`colXs${xs}`]]: this.isLegalCol(xs),
      [styles[`colSm${sm}`]]: this.isLegalCol(sm),
      [styles[`colMd${md}`]]: this.isLegalCol(md),
      [styles[`colLg${lg}`]]: this.isLegalCol(lg),
      [styles[`colXl${xl}`]]: this.isLegalCol(xl),
    };
    const columnClasses = classNames(className, styles.col, {
      [styles.rtl]: rtl,
      [styles[`${xs}Xs`]]: this.isVisibleHidden(xs),
      [styles[`${sm}Sm`]]: this.isVisibleHidden(sm),
      [styles[`${md}Md`]]: this.isVisibleHidden(md),
      [styles[`${lg}Lg`]]: this.isVisibleHidden(lg),
      ...colClesses,
      [styles.legalCol]: Object.values(colClesses).includes(true),
    });

    console.log(span);

    return (
      <div className={columnClasses} data-hook={dataHook} children={children} />
    );
  }
}

export {
  Container,
  RawContainer,
  Columns,
  Columns as Row,
  AutoAdjustedColumns,
  AutoAdjustedColumns as AutoAdjustedRow,
  Col,
};
